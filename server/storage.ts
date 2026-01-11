import { db } from "./db";
import {
  services, experts, testimonials, awards, industries,
  type Service, type Expert, type Testimonial, type Award, type Industry
} from "@shared/schema";

export interface IStorage {
  getServices(): Promise<Service[]>;
  getExperts(): Promise<Expert[]>;
  getTestimonials(): Promise<Testimonial[]>;
  getAwards(): Promise<Award[]>;
  getIndustries(): Promise<Industry[]>;
}

export class DatabaseStorage implements IStorage {
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getExperts(): Promise<Expert[]> {
    return await db.select().from(experts);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async getAwards(): Promise<Award[]> {
    return await db.select().from(awards);
  }

  async getIndustries(): Promise<Industry[]> {
    return await db.select().from(industries);
  }
}

export const storage = new DatabaseStorage();
