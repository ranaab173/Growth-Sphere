import React, { useState } from 'react';
import Button from '../components/ui/Button';

interface LoginPageProps {
  onLogin: () => void;
}

const SocialButton: React.FC<{ icon: string; label: string; color: string; }> = ({ icon, label, color }) => (
    <button className={`flex-1 flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-100 transition-colors ${color}`}>
        <i className={`fab ${icon} text-xl`}></i>
        <span className="font-semibold">{label}</span>
    </button>
);

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if(email && password) {
      // In a real app, you'd call an API. Here we just simulate success.
      onLogin();
    } else {
      alert('Please enter email and password.');
    }
  };

  return (
    <div className="bg-gray-50 pt-24 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-16">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-extrabold text-gray-800">Welcome Back</h1>
                <p className="text-gray-600 mt-2">Log in to continue your journey.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
                 <div className="text-right">
                    <a href="#" className="text-sm text-sky-600 hover:underline">Forgot Password?</a>
                </div>
                <Button size="lg" className="w-full">Log In</Button>
            </form>

            <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500 text-sm">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <SocialButton icon="fa-google" label="Google" color="text-red-500" />
                <SocialButton icon="fa-facebook" label="Facebook" color="text-blue-600" />
            </div>

            <p className="mt-8 text-center text-gray-500 text-sm">
                Don't have an account? <a href="#/join" className="text-sky-600 hover:underline">Join Growth Sphere</a>.
            </p>
          </div>
      </div>
    </div>
  );
};

export default LoginPage;