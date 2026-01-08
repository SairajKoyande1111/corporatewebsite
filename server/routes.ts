import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { db } from "./db";
import { services, experts, testimonials, awards } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.get(api.services.list.path, async (_req, res) => {
    const data = await storage.getServices();
    res.json(data);
  });

  app.get(api.experts.list.path, async (_req, res) => {
    const data = await storage.getExperts();
    res.json(data);
  });

  app.get(api.testimonials.list.path, async (_req, res) => {
    const data = await storage.getTestimonials();
    res.json(data);
  });

  app.get(api.awards.list.path, async (_req, res) => {
    const data = await storage.getAwards();
    res.json(data);
  });

  // Seed data if empty
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    await db.insert(services).values([
      { title: "Advisory", icon: "MessageSquare", link: "#" },
      { title: "Audit", icon: "ClipboardCheck", link: "#" },
      { title: "Tax", icon: "Receipt", link: "#" },
      { title: "Operational Solutions", icon: "Settings", link: "#" },
      { title: "Software Solutions", icon: "Monitor", link: "#" },
    ]);
  }

  const existingExperts = await storage.getExperts();
  if (existingExperts.length === 0) {
    await db.insert(experts).values([
      {
        name: "Richard Bartolanzo",
        role: "Partner",
        phone: "678.302.1471",
        email: "richard.bartolanzo@btcpa.net",
        category: "Technology",
        imageUrl:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      },
      {
        name: "Brian Hamm",
        role: "Partner",
        phone: "678.218.1304",
        email: "brian.hamm@btcpa.net",
        category: "Technology",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      },
    ]);
  }

  const existingTestimonials = await storage.getTestimonials();
  if (existingTestimonials.length === 0) {
    await db.insert(testimonials).values([
      {
        quote:
          "As always, we very much appreciate your hard work and the hard work of the entire BT team.",
        author: "SVP & Chief Compliance Officer",
        company: "Global Distribution Company",
      },
      {
        quote:
          "Bennett Thrasher provided exceptional second mile audit services for Trilith Studios. Their team was thorough, knowledgeable...",
        author: "Ginny Hernandez",
        company: "Trilith Studios",
      },
      {
        quote:
          "In the past, I have used two of the top four national accounting firms for advice. I have found Jeff Call's firm Bennett Thrasher, the most responsive...",
        author: "Guy Millner",
        company: "Chairman Assurance, America, Corporation",
      },
    ]);
  }

  const existingAwards = await storage.getAwards();
  if (existingAwards.length === 0) {
    await db.insert(awards).values([
      { title: "Vault Top Ranked", year: "2026", imageUrl: "" },
      {
        title: "Inside Public Accounting Best of the Best",
        year: "2025",
        imageUrl: "",
      },
      { title: "Top 100 Firms", year: "2025", imageUrl: "" },
    ]);
  }
}
