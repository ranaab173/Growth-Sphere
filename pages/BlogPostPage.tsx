import React from 'react';
import { blogPostsData } from '../assets/data';

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const BlogPostPage: React.FC<{ slug: string }> = ({ slug }) => {
    const post = blogPostsData.find(p => slugify(p.title) === slug);

    if (!post) {
        return (
            <div className="pt-32 text-center">
                <h1 className="text-3xl font-bold">Post Not Found</h1>
            </div>
        );
    }

    return (
        <div className="bg-white pt-24">
            <div 
                className="h-64 md:h-96 bg-cover bg-center flex items-center justify-center text-white text-center"
            >
                <div className="absolute inset-0 bg-black/50 z-0"></div>
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />

            </div>
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-3xl mx-auto">
                    <p className="text-sky-600 font-semibold uppercase">{post.category}</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 my-4">{post.title}</h1>
                     <div className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed">
                        <p>{post.excerpt}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Sit amet commodo nulla facilisi nullam vehicula ipsum. Nunc sed velit dignissim sodales ut eu sem. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Massa enim nec dui nunc mattis enim ut. Nibh praesent tristique magna sit amet purus gravida quis. Nisl purus in mollis nunc sed id semper risus in. Viverra orci sagittis eu volutpat odio facilisis. Sit amet consectetur adipiscing elit ut aliquam purus.</p>
                        <p>Id aliquet lectus proin nibh nisl condimentum id. Suspendisse sed nisi lacus sed viverra tellus in. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Amet justo donec enim diam vulputate ut. Amet nisl purus in mollis nunc sed id. Sit amet dictum sit amet justo donec enim diam. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Ut porttitor leo a diam sollicitudin tempor id eu. Aliquam sem et tortor consequat id. Tincidunt augue interdum velit euismod. Tellus elementum sagittis vitae et leo duis. Bibendum est ultricies integer quis auctor elit sed vulputate.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;
