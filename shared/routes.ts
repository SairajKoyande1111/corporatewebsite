import { z } from 'zod';
import { insertServiceSchema, insertExpertSchema, insertTestimonialSchema, insertAwardSchema, insertIndustrySchema, services, experts, testimonials, awards, industries } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  services: {
    list: {
      method: 'GET' as const,
      path: '/api/services',
      responses: {
        200: z.array(z.custom<typeof services.$inferSelect>()),
      },
    },
  },
  experts: {
    list: {
      method: 'GET' as const,
      path: '/api/experts',
      responses: {
        200: z.array(z.custom<typeof experts.$inferSelect>()),
      },
    },
  },
  testimonials: {
    list: {
      method: 'GET' as const,
      path: '/api/testimonials',
      responses: {
        200: z.array(z.custom<typeof testimonials.$inferSelect>()),
      },
    },
  },
  awards: {
    list: {
      method: 'GET' as const,
      path: '/api/awards',
      responses: {
        200: z.array(z.custom<typeof awards.$inferSelect>()),
      },
    },
  },
  industries: {
    list: {
      method: 'GET' as const,
      path: '/api/industries',
      responses: {
        200: z.array(z.custom<typeof industries.$inferSelect>()),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
