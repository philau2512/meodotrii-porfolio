'use client';

import { useEffect, useState } from 'react';
import ProfileHeader from './components/ProfileHeader';
import LinkCard from './components/LinkCard';
import Footer from './components/Footer';
import profileData from './data.json';
import './global.css';

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mô phỏng tải dữ liệu từ API hoặc file json
    const timer = setTimeout(() => {
      setProfile(profileData.profile);
      
      // Add auto-incremented id and calculated delay to each link
      const processedLinks = profileData.links.map((link, index) => ({
        ...link,
        id: index + 1,
        delay: (index + 1) * 0.1
      }));
      
      setLinks(processedLinks);
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (profile) {
      // Set background image from profile data
      document.body.style.backgroundImage = `url(${profile.background})`;
      // Set a consistent background color
      document.body.style.backgroundColor = '#f3f4f6'; // Light gray
    }
    
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, [profile]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center max-w-md mx-auto">
      {profile && (
        <>
          {/* Profile header section - using consistent gray background */}
          <div className="w-full bg-gray-800/90 backdrop-blur-lg text-white rounded-xl shadow-xl mb-6 p-6 transform transition-all duration-500 hover:shadow-2xl">
            <ProfileHeader profile={profile} />
          </div>

          {/* Links section */}
          <div className="w-full space-y-4 mb-8">
            {links.map((link, index) => (
              <LinkCard key={link.id} link={link} index={index} />
            ))}
          </div>
          
          <Footer />
        </>
      )}
    </main>
  );
} 