import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

// Hook for fetching Services
export function useServices() {
  return useQuery({
    queryKey: [api.services.list.path],
    queryFn: async () => {
      const res = await fetch(api.services.list.path);
      if (!res.ok) throw new Error("Failed to fetch services");
      return api.services.list.responses[200].parse(await res.json());
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
      return api.experts.list.responses[200].parse(await res.json());
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
      return api.testimonials.list.responses[200].parse(await res.json());
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
      return api.awards.list.responses[200].parse(await res.json());
    },
  });
}
