import { create } from "zustand";
import { supabase } from "../supabase/supabaseClient";

const useBlogStore = create((set) => ({
  blogs: [],
  categories: [],
  loading: false,
  ploading: false,
  error: null,
  selectedBlog: null,

  fetchBlogById: async (id) => {
    set({ loading: true, error: null, selectedBlog: null });
    const { data, error } = await supabaseClient
      .from("blogs")
      .select("id, title, content, category, published, created_at")
      .eq("id", id)
      .single();
    if (error) {
      set({ loading: false, error: error.message });
    } else {
      set({ selectedBlog: data, loading: false });
    }
  },

  fetchBlogs: async () => {
    set({ loading: true, error: null });
    const { data, error } = await supabaseClient
      .from("blogs")
      .select("id, title, content, category, published ,created_at");
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
