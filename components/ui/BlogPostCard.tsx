import React from 'react';
import type { Blog } from '../../types';

interface BlogPostCardProps {
  post: Blog;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden group border border-gray-200 hover:shadow-2xl transition-all duration-300">
      <div className="overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6">
        <p className="text-sm text-sky-600 mb-2 font-semibold uppercase tracking-wide">{post.category}</p>
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-sky-700 transition-colors">{post.title}</h3>
        <p className="text-gray-600 text-base mb-4">{post.excerpt}</p>
        <a href="#" className="font-semibold text-sky-600 hover:text-sky-800 transition-colors">
            Read More <i className="fa-solid fa-arrow-right ml-1"></i>
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;