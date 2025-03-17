import { create } from "zustand";
import { supabase } from "../supabase/supabaseClient";

const useBlogStore = create((set) => ({
  blogs: [],
  categories: [],
  loading: false,
  ploading: false,
  error: null,
  selectedBlog: null,

  fetchBlogById: async (slug) => {
    set({ loading: true, error: null, selectedBlog: null });

    try {
      const { data, error } = await supabaseClient
        .from("blogs")
        .select("title, content, category, slug, created_at")
        .textSearch("slug", slug)
        .single();

      if (error) {
        console.error("Supabase error:", error);
        set({ loading: false, error: error.message });
      } else {
        console.log("Blog fetched successfully:", data);
        set({ selectedBlog: data, loading: false });
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      set({ loading: false, error: err.message });
    }
  },

  fetchBlogs: async () => {
    set({ loading: true, error: null });
    const { data, error } = await supabaseClient
      .from("blogs")
      .select("title, content, category, published, slug ,created_at")
      .eq("published", true);
    if (error) {
      set({ loading: false, error: error.message });
    } else {
      set({ blogs: data, loading: false });
    }
  },

  fetchCategories: async () => {
    set({ loading: true, error: null });
    const { data, error } = await supabaseClient
      .from("categories")
      .select("id, name, created_at");
    if (error) {
      set({ loading: false, error: error.message });
    } else {
      set({ categories: data, loading: false });
    }
  },
}));

export default useBlogStore;
