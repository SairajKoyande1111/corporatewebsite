import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Tag, ArrowRight, BookOpen } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  coverImage: string;
  published: boolean;
  createdAt: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: posts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts"],
    queryFn: () => fetch("/api/blog/posts").then((r) => r.json()),
  });

  const { data: categories = [] } = useQuery<string[]>({
    queryKey: ["/api/blog/categories"],
    queryFn: () => fetch("/api/blog/categories").then((r) => r.json()),
  });

  const allCategories = ["All", ...categories];

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-[#002140] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[80px] border-white/10 rounded-full translate-x-1/3" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-semibold tracking-[0.25em] uppercase text-sm mb-4"
          >
            Insights & Updates
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Our <span className="text-secondary">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-white/70 max-w-2xl mx-auto text-lg"
          >
            Expert perspectives on accounting, tax strategy, and financial
            management from the CoreAxis Global team.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      {allCategories.length > 1 && (
        <section className="bg-white border-b border-gray-100 sticky top-[80px] md:top-[105px] z-30">
          <div className="container-custom py-4 flex gap-3 overflow-x-auto scrollbar-hide">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#002140] text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow animate-pulse">
                  <div className="h-52 bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-1/3" />
                    <div className="h-6 bg-gray-200 rounded" />
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500">No posts yet</h3>
              <p className="text-gray-400 mt-2">Check back soon for expert insights.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <motion.article
                  key={post._id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group"
                >
                  {/* Cover Image */}
                  <div className="relative overflow-hidden h-52 bg-[#002140]/10">
                    {post.coverImage ? (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#002140] to-[#003366]">
                        <BookOpen className="w-12 h-12 text-white/30" />
                      </div>
                    )}
                    <span className="absolute top-4 left-4 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.createdAt)}
                      </span>
                      <span>·</span>
                      <span>{post.author}</span>
                    </div>

                    <h2 className="text-lg font-bold text-[#002140] mb-3 leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link href={`/blog/${post.slug}`}>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#002140] hover:text-secondary transition-colors cursor-pointer">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
