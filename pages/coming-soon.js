// pages/VideoBackgroundPage.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from './components/footer';
import NavBar from './components/NavBar';
const VideoBackgroundPage = () => {
  const router = useRouter();
  useEffect(() => {
    // Get the video element
    const video = document.getElementById('backgroundVideo');
    // Add an event listener for the 'ended' event
    video.addEventListener('ended', () => {
      router.push('./add-to-cart');
    });

    return () => {
      video.removeEventListener('ended', () => {});
    };
  }, []);
  return (
    <>
      <NavBar />

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Your video element as the background */}
        <video
          autoPlay
          muted
          id="backgroundVideo"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/new (2).mp4" type="video/mp4" />
        </video>
      </div>

      <Footer />
    </>
  );
};
export default VideoBackgroundPage;
