import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center mt-6 mb-4">
      <div className="inline-block px-4 py-2 rounded-full bg-gray-50/40 backdrop-blur-sm">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} meodotrii. All rights reserved.</p>
        <p className="mt-1 flex items-center justify-center text-gray-500 text-sm">
          Made with <span className="text-pink-400 mx-1">💖</span>
        </p>
      </div>
    </footer>
  );
} 