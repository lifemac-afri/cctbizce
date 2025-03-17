/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiTag, FiClock } from "react-icons/fi";
import useBlogStore from "../../store/ContentStore";

const BlogListSkeleton = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-6">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const BlogList = () => {
  const { blogs, fetchBlogs, loading } = useBlogStore();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  // Get unique categories
  const categories = ["all", ...new Set(blogs.map((blog) => blog.category))];

  // Filter blogs by category
  const filteredBlogs =
    selectedCategory === "all"
      ? blogs.filter((blog) => blog.published)
      : blogs.filter(
          (blog) => blog.published && blog.category === selectedCategory
        );

  if (loading) {
    return <BlogListSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Insights & Strategies
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore expert advice, actionable strategies, and the latest trends
            in business growth, leadership, and innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 space-x-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-primary_green text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <FiTag className="text-primary_green" />
                  <span>{blog.category}</span>
                  <span className="mx-2">•</span>
                  <FiClock className="text-primary_green" />
                  <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.content.replace(/<[^>]*>/g, "").slice(0, 150)}...
                </p>
                <button
                  onClick={() => navigate(`/blog/${blog.slug}`)}
                  className="text-primary_green hover:text-dark_green font-medium transition-colors duration-200"
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No blogs found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
