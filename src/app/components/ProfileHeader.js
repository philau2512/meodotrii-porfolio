'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProfileHeader({ profile }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`animate-fadeIn ${isLoaded ? 'opacity-100' : 'opacity-0'} mb-6 text-center`}>
      <div className="relative mb-4">
        <div className="w-28 h-28 rounded-full mx-auto overflow-hidden border-2 border-white shadow-md bg-white">
          {profile.avatar ? (
            <Image 
              src={profile.avatar}
              alt={profile.username}
              width={112} 
              height={112}
              className="object-cover"
              priority
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/next.svg"; // Fallback image
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-3xl font-bold text-gray-500">
                {profile.username?.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>
      
      <h1 className="text-2xl font-bold mb-1">{profile.display_name}</h1>
      <p className="text-gray-400 text-sm mb-2">@{profile.username}</p>
      
      <div className="flex justify-center gap-4 mb-4">
        <div className="flex items-center">
          <span className="text-lg font-semibold">{profile.stats.following}</span>
          <span className="text-gray-400 text-xs ml-1">Đang theo dõi</span>
        </div>
        <div className="flex items-center">
          <span className="text-lg font-semibold">{profile.stats.followers}</span>
          <span className="text-gray-400 text-xs ml-1">Người theo dõi</span>
        </div>
        <div className="flex items-center">
          <span className="text-lg font-semibold">{profile.stats.likes}</span>
          <span className="text-gray-400 text-xs ml-1">Lượt thích</span>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="font-medium text-amber-500 mb-1">
          {profile.bio}
        </p>
        <p className="text-sm text-gray-400">
          {profile.tagline}
        </p>
      </div>
      
      <div className="flex justify-center gap-3 mb-4">
        {profile.social.tiktok && (
          <a href={`https://tiktok.com/@${profile.social.tiktok}`} target="_blank" rel="noopener noreferrer" 
             className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/60 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        )}
        {profile.social.instagram && (
          <a href={`https://instagram.com/${profile.social.instagram}`} target="_blank" rel="noopener noreferrer" 
             className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/60 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        )}
        <a href={`mailto:${profile.email}`} 
           className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/60 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
      
      <div className="flex justify-center gap-2 mb-2">
        <button className="px-4 py-2 rounded-full font-medium transition-all bg-white/80 text-black hover:bg-gray-200/90 hover:scale-105 hover:shadow-md w-28">
          Theo dõi
        </button>
        <button className="px-4 py-2 rounded-full font-medium transition-all bg-gray-800/50 hover:bg-gray-700/80 text-white hover:scale-105 hover:shadow-md w-28">
          Nhắn tin
        </button>
      </div>
    </div>
  );
} 