'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function LinkCard({ link, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When card is visible in viewport
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100); // Staggered animation delay based on card index
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Slightly before element comes into view
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  // Determine if image should be on left or right based on index (even/odd)
  const isEven = index % 2 === 0;

  return (
    <a 
      ref={cardRef}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-all duration-700 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      } bg-gradient-to-r from-white/90 via-pink-50/80 to-white/90 backdrop-blur-md border border-white/20 rounded-3xl shadow-md hover:shadow-xl hover:scale-[1.02] hover:border-pink-200/50 hover:bg-gradient-to-r hover:from-white/95 hover:via-pink-100/90 hover:to-white/95 w-full overflow-hidden flex items-center group`}
    >
      {isEven ? (
        <>
          <div className="relative w-32 h-32 bg-gray-100 flex-shrink-0 overflow-hidden">
            <Image
              src={link.image}
              alt={link.title}
              width={128}
              height={128}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/next.svg"; // Fallback image
              }}
            />
          </div>
          <div className="p-4 flex-1">
            <h3 className="font-semibold text-lg mb-1 text-gray-800 transition-colors group-hover:text-pink-700">{link.title}</h3>
            <p className="text-gray-600 text-sm">{link.description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="p-4 flex-1 text-left">
            <h3 className="font-semibold text-lg mb-1 text-gray-800 transition-colors group-hover:text-pink-700">{link.title}</h3>
            <p className="text-gray-600 text-sm">{link.description}</p>
          </div>
          <div className="relative w-32 h-32 bg-gray-100 flex-shrink-0 overflow-hidden">
            <Image
              src={link.image}
              alt={link.title}
              width={128}
              height={128}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/next.svg"; // Fallback image
              }}
            />
          </div>
        </>
      )}
    </a>
  );
} 