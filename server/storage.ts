import { db } from "./db";
import {
  services, experts, testimonials, awards,
  type Service, type Expert, type Testimonial, type Award
} from "@shared/schema";

export interface IStorage {
  getServices(): Promise<Service[]>;
  getExperts(): Promise<Expert[]>;
  getTestimonials(): Promise<Testimonial[]>;
  getAwards(): Promise<Award[]>;
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
}

export const storage = new DatabaseStorage();
