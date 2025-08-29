import React from 'react';
import { blogPostsData } from '../assets/data';
import BlogPostCard from './ui/BlogPostCard';
import Button from './ui/Button';

const Blog: React.FC = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">From Our Journal</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Insights, stories, and guidance to help you on your personal growth journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPostsData.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" size="lg">Visit The Blog</Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;