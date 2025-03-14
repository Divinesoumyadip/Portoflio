import React from 'react';

const TrophyComponent  = ({ width = 300, height = 375, trophyText = "ICPC" }) => {
  // Maintain aspect ratio if either dimension is changed
  const aspectRatio = 400 / 500; // original SVG viewBox ratio
  const calculatedWidth = height * aspectRatio;
  const calculatedHeight = width / aspectRatio;
  
  // Use provided dimensions, but maintain aspect ratio
  const finalWidth = width || calculatedWidth;
  const finalHeight = height || calculatedHeight;

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 500"
      width={finalWidth}
      height={finalHeight}
      style={{ maxWidth: '100%' }}
    >
      {/* Definitions for gradients and effects */}
      <defs>
        {/* Gold gradient for trophy cup */}
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3B3" />
          <stop offset="25%" stopColor="#FFCC00" />
          <stop offset="50%" stopColor="#FFC000" />
          <stop offset="75%" stopColor="#D4A017" />
          <stop offset="100%" stopColor="#C07F00" />
        </linearGradient>
        
        {/* Darker gold gradient for shadows and stem */}
        <linearGradient id="darkGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A017" />
          <stop offset="50%" stopColor="#C07F00" />
          <stop offset="100%" stopColor="#96630F" />
        </linearGradient>
        
        {/* Lighter gold gradient for highlights */}
        <linearGradient id="lightGoldGradient" x1="70%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFCCC" />
          <stop offset="100%" stopColor="#FFCC00" />
        </linearGradient>
        
        {/* Red gradient for ribbon */}
        <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5555" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        
        {/* Dark brown gradient for base */}
        <linearGradient id="brownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#654321" />
          <stop offset="50%" stopColor="#543210" />
          <stop offset="100%" stopColor="#321000" />
        </linearGradient>
        
        {/* Gold plate gradient */}
        <linearGradient id="plateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A017" />
          <stop offset="50%" stopColor="#FFCC00" />
          <stop offset="100%" stopColor="#D4A017" />
        </linearGradient>
        
        {/* Shine effect */}
        <radialGradient id="shineGradient" cx="30%" cy="30%" r="70%" fx="30%" fy="30%">
          <stop offset="0%" stopColor="white" stopOpacity="0.7">
            <animate attributeName="stop-opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        
        {/* Moving shine effect */}
        <linearGradient id="movingShine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)">
            <animate attributeName="offset" from="-1" to="1" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="0.1%" stopColor="rgba(255,255,255,0.8)">
            <animate attributeName="offset" from="-0.9" to="1.1" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="0.2%" stopColor="rgba(255,255,255,0)">
            <animate attributeName="offset" from="-0.8" to="1.2" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        
        {/* Filter for glow effect */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Base (Stand) */}
      <rect x="110" y="370" width="180" height="80" rx="5" ry="5" fill="url(#brownGradient)" />
      <rect x="130" y="365" width="140" height="10" rx="2" ry="2" fill="url(#darkGoldGradient)" />
      
      {/* Gold plate on base */}
      <rect x="150" y="400" width="100" height="25" rx="2" ry="2" fill="url(#plateGradient)" />
      
      {/* ICPC Text */}
      <text x="200" y="420" textAnchor="middle" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="#543210">{trophyText}</text>
      
      {/* Trophy stem */}
      <path d="M180,310 L220,310 L215,365 L185,365 Z" fill="url(#darkGoldGradient)" />
      
      {/* Trophy cup body */}
      <ellipse cx="200" cy="180" rx="120" ry="30" fill="url(#goldGradient)" />
      <path d="M120,180 L120,280 C120,300 160,310 200,310 C240,310 280,300 280,280 L280,180 Z" fill="url(#goldGradient)" />
      
      {/* Cup inner shadow */}
      <ellipse cx="200" cy="180" rx="100" ry="20" fill="url(#darkGoldGradient)" opacity="0.3" />
      
      {/* Left handle */}
      <path d="M120,185 C70,185 70,230 120,230" fill="none" stroke="url(#goldGradient)" strokeWidth="15" strokeLinecap="round" />
      
      {/* Right handle */}
      <path d="M280,185 C330,185 330,230 280,230" fill="none" stroke="url(#goldGradient)" strokeWidth="15" strokeLinecap="round" />
      
      {/* Ribbon */}
      <path d="M100,200 L140,200 L140,220 L120,230 L100,220 Z" fill="url(#redGradient)" />
      <path d="M300,200 L260,200 L260,220 L280,230 L300,220 Z" fill="url(#redGradient)" />
      <path d="M140,200 L260,200 L260,220 L140,220 Z" fill="url(#redGradient)" />
      
      {/* Cup rim highlights */}
      <ellipse cx="200" cy="180" rx="120" ry="30" fill="none" stroke="url(#lightGoldGradient)" strokeWidth="3" />
      
      {/* Shine effects */}
      <ellipse cx="200" cy="230" rx="100" ry="60" fill="url(#shineGradient)" opacity="0.6" />
      <ellipse cx="200" cy="180" rx="120" ry="30" fill="none" stroke="url(#movingShine)" strokeWidth="8" opacity="0.5" />
      
      {/* Sparkles */}
      <circle cx="150" cy="200" r="3" fill="white">
        <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="250" cy="210" r="3" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="160" r="2" fill="white">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="220" cy="170" r="2.5" fill="white">
        <animate attributeName="opacity" values="0.7;0;0.7" dur="1.5s" repeatCount="indefinite" />
      </circle>
      
      {/* Additional shine for handles */}
      <path d="M120,185 C70,185 70,230 120,230" fill="none" stroke="url(#movingShine)" strokeWidth="5" opacity="0.5" />
      <path d="M280,185 C330,185 330,230 280,230" fill="none" stroke="url(#movingShine)" strokeWidth="5" opacity="0.5" />
    </svg>
  );
};

export default TrophyComponent ;