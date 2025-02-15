/* eslint-disable no-unused-vars */
import React from "react";
import BlogList from "../components/blog/BlogList";
import SEO from "../components/seo/SEO";

const Blog = () => {
  return (
    <div>
      <SEO
        title="CCT Business Blog | Tips, Trends, and Success Stories"
        description="Stay informed with expert advice, industry trends, and inspiring stories to keep you ahead in your journey."
        name="CCT Business Consult & Events"
        type="website"
      />

      <BlogList />
    </div>
  );
};

export default Blog;
