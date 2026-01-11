import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type Service, type Expert, type Testimonial, type Award, type Industry } from "@shared/schema";

// Hook for fetching Services
export function useServices() {
  return useQuery({
    queryKey: [api.services.list.path],
    queryFn: async () => {
      const res = await fetch(api.services.list.path);
      if (!res.ok) throw new Error("Failed to fetch services");
      const data = await res.json();
      return data;
    },
  });
}

// Hook for fetching Experts
export function useExperts() {
  return useQuery({
    queryKey: [api.experts.list.path],
    queryFn: async () => {
      const res = await fetch(api.experts.list.path);
      if (!res.ok) throw new Error("Failed to fetch experts");
      const data = await res.json();
      return data;
    },
  });
}

// Hook for fetching Testimonials
export function useTestimonials() {
  return useQuery({
    queryKey: [api.testimonials.list.path],
    queryFn: async () => {
      const res = await fetch(api.testimonials.list.path);
      if (!res.ok) throw new Error("Failed to fetch testimonials");
      const data = await res.json();
      return data;
    },
  });
}

// Hook for fetching Awards
export function useAwards() {
  return useQuery({
    queryKey: [api.awards.list.path],
    queryFn: async () => {
      const res = await fetch(api.awards.list.path);
      if (!res.ok) throw new Error("Failed to fetch awards");
      const data = await res.json();
      return data;
    },
  });
}

// Hook for fetching Industries
export function useIndustries() {
  return useQuery<Industry[]>({
    queryKey: [api.industries.list.path],
    queryFn: async () => {
      const res = await fetch(api.industries.list.path);
      if (!res.ok) throw new Error("Failed to fetch industries");
      const data = await res.json();
      return data;
    },
  });
}
