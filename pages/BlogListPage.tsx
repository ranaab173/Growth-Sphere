import React from 'react';
import { blogPostsData } from '../assets/data';
import BlogPostCard from '../components/ui/BlogPostCard';

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const BlogListPage: React.FC = () => {
  return (
    <div className="bg-white pt-24 min-h-screen">
        <section className="py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">From Our Journal</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        Insights, stories, and guidance to help you on your personal growth journey.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {blogPostsData.map((post, index) => (
                    <BlogPostCard key={index} post={post} href={`#/blog/${slugify(post.title)}`} />
                ))}
                </div>
            </div>
        </section>
    </div>
  );
};

export default BlogListPage;
