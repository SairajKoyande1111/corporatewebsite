import type { Express, Request, Response, NextFunction } from "express";
import session from "express-session";
import MemoryStore from "memorystore";
import { BlogPost, slugify } from "./mongodb";

declare module "express-session" {
  interface SessionData {
    adminAuthenticated?: boolean;
  }
}

// ─── Session Middleware ───────────────────────────────────────────────────────

const MemStore = MemoryStore(session);

export function setupBlogSession(app: Express) {
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "blog-secret-fallback",
      resave: false,
      saveUninitialized: false,
      store: new MemStore({ checkPeriod: 86400000 }),
      cookie: { maxAge: 86400000, httpOnly: true },
    })
  );
}

// ─── Auth Middleware ──────────────────────────────────────────────────────────

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (req.session?.adminAuthenticated) {
    return next();
  }
  return res.status(401).json({ message: "Unauthorized" });
}

// ─── Route Registration ───────────────────────────────────────────────────────

export function registerBlogRoutes(app: Express) {
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";

  // ── Auth ──────────────────────────────────────────────────────────────────
  app.post("/api/admin/login", (req: Request, res: Response) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
      req.session.adminAuthenticated = true;
      return res.json({ success: true });
    }
    return res.status(401).json({ message: "Invalid password" });
  });

  app.post("/api/admin/logout", (req: Request, res: Response) => {
    req.session.destroy(() => {});
    return res.json({ success: true });
  });

  app.get("/api/admin/auth-check", (req: Request, res: Response) => {
    return res.json({ authenticated: !!req.session?.adminAuthenticated });
  });

  // ── Public Blog ───────────────────────────────────────────────────────────
  app.get("/api/blog/posts", async (_req: Request, res: Response) => {
    try {
      const posts = await BlogPost.find({ published: true })
        .sort({ createdAt: -1 })
        .select("-content")
        .lean();
      return res.json(posts);
    } catch (err) {
      return res.status(500).json({ message: "Failed to fetch posts" });
    }
  });

  app.get("/api/blog/posts/:slug", async (req: Request, res: Response) => {
    try {
      const post = await BlogPost.findOne({
        slug: req.params.slug,
        published: true,
      }).lean();
      if (!post) return res.status(404).json({ message: "Post not found" });
      return res.json(post);
    } catch (err) {
      return res.status(500).json({ message: "Failed to fetch post" });
    }
  });

  app.get("/api/blog/categories", async (_req: Request, res: Response) => {
    try {
      const categories = await BlogPost.distinct("category", { published: true });
      return res.json(categories);
    } catch (err) {
      return res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  // ── Admin CRUD ────────────────────────────────────────────────────────────
  app.get("/api/admin/posts", requireAdmin, async (_req: Request, res: Response) => {
    try {
      const posts = await BlogPost.find().sort({ createdAt: -1 }).lean();
      return res.json(posts);
    } catch (err) {
      return res.status(500).json({ message: "Failed to fetch posts" });
    }
  });

  app.get("/api/admin/posts/:id", requireAdmin, async (req: Request, res: Response) => {
    try {
      const post = await BlogPost.findById(req.params.id).lean();
      if (!post) return res.status(404).json({ message: "Post not found" });
      return res.json(post);
    } catch (err) {
      return res.status(500).json({ message: "Failed to fetch post" });
    }
  });

  app.post("/api/admin/posts", requireAdmin, async (req: Request, res: Response) => {
    try {
      const { title, content, excerpt, author, category, tags, coverImage, published } = req.body;
      if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required" });
      }

      let slug = slugify(title);
      // Ensure slug uniqueness
      const existing = await BlogPost.findOne({ slug });
      if (existing) slug = `${slug}-${Date.now()}`;

      const post = await BlogPost.create({
        title,
        slug,
        content,
        excerpt: excerpt || content.replace(/<[^>]+>/g, "").slice(0, 160),
        author: author || "CoreAxis Global",
        category: category || "General",
        tags: tags || [],
        coverImage: coverImage || "",
        published: published ?? false,
      });
      return res.status(201).json(post);
    } catch (err) {
      return res.status(500).json({ message: "Failed to create post" });
    }
  });

  app.put("/api/admin/posts/:id", requireAdmin, async (req: Request, res: Response) => {
    try {
      const { title, content, excerpt, author, category, tags, coverImage, published, slug } = req.body;
      const update: Record<string, any> = {
        title,
        content,
        excerpt,
        author,
        category,
        tags,
        coverImage,
        published,
      };

      // Allow custom slug override, otherwise auto from title
      if (slug) {
        update.slug = slug;
      } else if (title) {
        const newSlug = slugify(title);
        const existing = await BlogPost.findOne({ slug: newSlug, _id: { $ne: req.params.id } });
        update.slug = existing ? `${newSlug}-${Date.now()}` : newSlug;
      }

      const post = await BlogPost.findByIdAndUpdate(req.params.id, update, { new: true });
      if (!post) return res.status(404).json({ message: "Post not found" });
      return res.json(post);
    } catch (err) {
      return res.status(500).json({ message: "Failed to update post" });
    }
  });

  app.delete("/api/admin/posts/:id", requireAdmin, async (req: Request, res: Response) => {
    try {
      const post = await BlogPost.findByIdAndDelete(req.params.id);
      if (!post) return res.status(404).json({ message: "Post not found" });
      return res.json({ success: true });
    } catch (err) {
      return res.status(500).json({ message: "Failed to delete post" });
    }
  });
}
