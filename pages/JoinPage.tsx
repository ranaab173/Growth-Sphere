import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Membership from '../components/Membership';

interface JoinPageProps {
  onJoin: () => void;
}

const JoinPage: React.FC<JoinPageProps> = ({ onJoin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      // In a real app, you'd have validation and an API call here.
      // For this simulation, we'll just log the user in.
      onJoin();
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="bg-white pt-24">
      <Membership />
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-lg text-center">
            <h2 className="text-3xl font-bold mb-8">Create Your Account</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
                <Button size="lg" className="w-full">Start Your 7-Day Free Trial</Button>
            </form>
             <p className="mt-4 text-gray-500 text-sm">
                Already have an account? <a href="#/login" className="text-sky-600 hover:underline">Log in</a>.
            </p>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;