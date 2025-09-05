import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProgramsListPage from './pages/ProgramsListPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import InstructorsListPage from './pages/InstructorsListPage';
import InstructorDetailPage from './pages/InstructorDetailPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import GenericPage from './pages/GenericPage';

// Data for Generic Pages
const genericPageData: { [key: string]: { title: string; content: string } } = {
    'channels': { title: 'Channels', content: 'Discover curated content streams designed for your continuous growth. More coming soon.' },
    'live-events': { title: 'Live Events', content: 'Join live events with world-class teachers and our global community. Check back for our 2024 schedule.' },
    'for-business': { title: 'For Business', content: 'Elevate your team with Growth Sphere for Business. Contact us to learn about our corporate packages.' },
    'ai-guided-programs': { title: 'AI Guided Programs', content: 'Experience a highly personalized growth journey with our new AI-powered curriculum that adapts to your unique goals.' },
    'live-classes': { title: 'Live Classes', content: 'Join live classes with the world\'s best teachers, every single day. Interact, ask questions, and grow in real-time.' },
    'global-community': { title: 'Global Community', content: 'Connect with a global community of like-minded individuals who will support and inspire you on your journey.' },
    'meditations': { title: 'Meditations', content: 'Access a library of powerful guided meditations for every need, from stress-relief to peak performance.' },
};

function App() {
  const [route, setRoute] = useState(window.location.hash);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    window.location.hash = '#/account';
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    window.location.hash = '#/';
  };

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '#/';
    }
    
    // Initial load route handling
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    const path = route.replace(/^#/, '') || '/';
    const pathParts = path.split('/').filter(Boolean);
    const basePath = pathParts[0] || '/';
    const slug = pathParts[1];

    if (genericPageData[basePath]) {
        const { title, content } = genericPageData[basePath];
        return <GenericPage title={title} content={content} />;
    }
    
    switch (basePath) {
      case '/':
        return <HomePage />;
      case 'programs':
        return slug ? <ProgramDetailPage slug={slug} /> : <ProgramsListPage />;
      case 'instructors':
        return slug ? <InstructorDetailPage slug={slug} /> : <InstructorsListPage />;
      case 'blog':
        return slug ? <BlogPostPage slug={slug} /> : <BlogListPage />;
      case 'join':
        if (isAuthenticated) {
          window.location.hash = '#/account';
          return null;
        }
        return <JoinPage onJoin={handleLogin} />;
      case 'login':
        if (isAuthenticated) {
          window.location.hash = '#/account';
          return null;
        }
        return <LoginPage onLogin={handleLogin} />;
      case 'account':
          if (!isAuthenticated) {
            window.location.hash = '#/login';
            return null;
          }
          return <AccountPage />;
      default:
        return <GenericPage title="404 - Not Found" content="The page you are looking for does not exist." />;
    }
  };

  return (
    <div className="text-gray-800 font-sans">
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;