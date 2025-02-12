/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import { FiTag, FiClock, FiArrowLeft } from "react-icons/fi";
import useBlogStore from "../../store/ContentStore";

const BlogDetailSkeleton = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-24 mb-8"></div>
        <div className="bg-white rounded-xl p-8 mb-8">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
        </div>
        <div className="bg-white rounded-xl p-8">
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchBlogById, selectedBlog, loading } = useBlogStore();

  useEffect(() => {
    if (id) {
      fetchBlogById(id);
    }
  }, [id, fetchBlogById]);

  if (loading) {
    return <BlogDetailSkeleton />;
  }

  if (!selectedBlog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Blog not found
          </h2>
          <button
            onClick={() => navigate("/blog")}
            className="text-primary_green hover:text-dark_green font-medium"
          >
            Return to Blog List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate("/blog")}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
        >
          <FiArrowLeft />
          <span>Back to Blog List</span>
        </button>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <FiTag className="text-primary_green" />
            <span>{selectedBlog.category}</span>
            <span className="mx-2">•</span>
            <FiClock className="text-primary_green" />
            <span>
              {new Date(selectedBlog.created_at).toLocaleDateString()}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            {selectedBlog.title}
          </h1>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 prose prose-lg max-w-none">
          <FroalaEditorView model={selectedBlog.content} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
