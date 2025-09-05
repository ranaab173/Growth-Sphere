import React, { useState } from 'react';
import Button from '../components/ui/Button';

const AccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // State for Profile form
  const [fullName, setFullName] = useState('Alex Morgan');
  const [email, setEmail] = useState('alex.morgan@example.com');

  // State for Password form
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for Notifications
  const [notifications, setNotifications] = useState({
    announcements: true,
    reminders: true,
    events: false,
  });

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Saving profile:', { fullName, email });
    alert('Profile saved successfully!');
  };

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    // Simulate API call
    console.log('Updating password');
    alert('Password updated successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotifications(prev => ({ ...prev, [name]: checked }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
            <form onSubmit={handleProfileSave} className="space-y-4">
              <input value={fullName} onChange={e => setFullName(e.target.value)} type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg"/>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg"/>
              <Button>Save Changes</Button>
            </form>
          </div>
        );
      case 'password':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Change Password</h2>
            <form onSubmit={handlePasswordUpdate} className="space-y-4">
              <input value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} type="password" placeholder="Current Password" className="w-full p-3 border border-gray-300 rounded-lg"/>
              <input value={newPassword} onChange={e => setNewPassword(e.target.value)} type="password" placeholder="New Password" className="w-full p-3 border border-gray-300 rounded-lg"/>
              <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm New Password" className="w-full p-3 border border-gray-300 rounded-lg"/>
              <Button>Update Password</Button>
            </form>
          </div>
        );
      case 'notifications':
        return (
            <div>
                <h2 className="text-2xl font-bold mb-4">Notification Settings</h2>
                <div className="space-y-4 text-gray-700">
                    <label className="flex items-center justify-between cursor-pointer">
                      <span>New program announcements</span>
                      <input name="announcements" type="checkbox" className="h-5 w-5 rounded" checked={notifications.announcements} onChange={handleNotificationChange}/>
                    </label>
                    <label className="flex items-center justify-between cursor-pointer">
                      <span>Weekly progress reminders</span>
                      <input name="reminders" type="checkbox" className="h-5 w-5 rounded" checked={notifications.reminders} onChange={handleNotificationChange}/>
                    </label>
                    <label className="flex items-center justify-between cursor-pointer">
                      <span>Community event updates</span>
                      <input name="events" type="checkbox" className="h-5 w-5 rounded" checked={notifications.events} onChange={handleNotificationChange}/>
                    </label>
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
        className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition-colors ${activeTab === tabId ? 'bg-sky-500 text-white' : 'hover:bg-gray-200'}`}
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