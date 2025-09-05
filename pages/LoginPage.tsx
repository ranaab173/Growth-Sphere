import React from 'react';
import Button from '../components/ui/Button';

const LoginPage: React.FC = () => {
  return (
    <div className="bg-gray-50 pt-24 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-16">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-extrabold text-gray-800">Welcome Back</h1>
                <p className="text-gray-600 mt-2">Log in to continue your journey.</p>
            </div>
            <form className="space-y-4">
                <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"/>
                <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"/>
                <Button size="lg" className="w-full">Log In</Button>
            </form>
            <p className="mt-6 text-center text-gray-500 text-sm">
                Don't have an account? <a href="#/join" className="text-sky-600 hover:underline">Join Growth Sphere</a>.
            </p>
          </div>
      </div>
    </div>
  );
};

export default LoginPage;
