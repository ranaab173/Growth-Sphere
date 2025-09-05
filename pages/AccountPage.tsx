import React, { useState } from 'react';
import Button from '../components/ui/Button';

const AccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
            <form className="space-y-4">
              <input defaultValue="Alex Morgan" type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg"/>
              <input defaultValue="alex.morgan@example.com" type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg"/>
              <Button>Save Changes</Button>
            </form>
          </div>
        );
      case 'password':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Change Password</h2>
            <form className="space-y-4">
              <input type="password" placeholder="Current Password" className="w-full p-3 border border-gray-300 rounded-lg"/>
              <input type="password" placeholder="New Password" className="w-full p-3 border border-gray-300 rounded-lg"/>
              <input type="password" placeholder="Confirm New Password" className="w-full p-3 border border-gray-300 rounded-lg"/>
              <Button>Update Password</Button>
            </form>
          </div>
        );
      case 'notifications':
        return (
            <div>
                <h2 className="text-2xl font-bold mb-4">Notification Settings</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between"><label>New program announcements</label><input type="checkbox" className="h-5 w-5" defaultChecked/></div>
                    <div className="flex items-center justify-between"><label>Weekly progress reminders</label><input type="checkbox" className="h-5 w-5" defaultChecked/></div>
                    <div className="flex items-center justify-between"><label>Community event updates</label><input type="checkbox" className="h-5 w-5"/></div>
                </div>
            </div>
        );
      default:
        return null;
    }
  };

  const TabButton: React.FC<{tabId: string, children: React.ReactNode}> = ({tabId, children}) => (
    <button 
        onClick={() => setActiveTab(tabId)} 
        className={`px-4 py-2 rounded-lg font-semibold ${activeTab === tabId ? 'bg-sky-500 text-white' : 'hover:bg-gray-200'}`}
    >
        {children}
    </button>
  );

  return (
    <div className="bg-gray-50 pt-24 min-h-screen">
        <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">My Account</h1>
            </div>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
                <aside className="md:w-1/4">
                    <nav className="flex flex-row md:flex-col gap-2">
                        <TabButton tabId="profile">Profile</TabButton>
                        <TabButton tabId="password">Password</TabButton>
                        <TabButton tabId="notifications">Notifications</TabButton>
                    </nav>
                </aside>
                <main className="md:w-3/4 bg-white p-8 rounded-lg shadow-md border border-gray-200">
                    {renderContent()}
                </main>
            </div>
        </div>
    </div>
  );
};

export default AccountPage;
