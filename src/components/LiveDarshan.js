import React, { useState } from 'react';

function LiveDarshan() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [visibleCount, setVisibleCount] = useState(2);

  const openVideo = (videoUrl) => {
    setActiveVideo(videoUrl);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  const handleMoreVideos = (e) => {
    e.preventDefault();
    if (visibleCount < videos.length) {
      setVisibleCount(prev => prev + 2);
    } else {
      // If all videos are visible, open YouTube channel
      window.open('https://www.youtube.com/', '_blank');
    }
  };
  const videos = [
    {
      id: 1,
      image: '/assets/a-statue-holding-a-holy-book-5613134 copy.svg',
      videoUrl: 'https://www.youtube.com/embed/ZCXCu9_K0lY',
      title: 'Laxmi Narayan Mandir, Surrey',
      isLive: true,
      timestamp: '16 Hour Ago'
    },
    {
      id: 2,
      image: '/assets/a-statue-holding-a-holy-book-5613134.svg',
      videoUrl: 'https://www.youtube.com/embed/fz99YbI_sKY',
      title: 'Laxmi Narayan Mandir, Surrey',
      isLive: false,
      timestamp: '2 Hours Ago'
    },
    {
      id: 3,
      image: '/assets/Image11.svg',
      videoUrl: 'https://www.youtube.com/embed/L5LPbQkEXrg',
      title: 'Special Bhajan Kirtan',
      isLive: false,
      timestamp: '1 Day Ago'
    },
    {
      id: 4,
      image: '/assets/Mata Image.svg',
      videoUrl: 'https://www.youtube.com/embed/fz99YbI_sKY',
      title: 'Mata Ki Chowki Highlight',
      isLive: false,
      timestamp: '3 Days Ago'
    }
  ];

  return (
    <section className="bg-[#F5E298]/[0.3] py-[3rem]">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="text-center mb-[3rem]">
          <h2 className="font-heading font-bold text-[32px] text-[#C23632] mb-[16px]">Live Darshan</h2>
          <img src="/assets/ornament.svg" alt="Heading Ornament" className="block mx-auto mb-[40px] w-[365px] max-w-full h-auto" />
          <p className="font-times text-[28px] text-[#000000] mx-auto max-w-[830px]">Live update from Temple Darshan on Facebook, Youtube and Instagram</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
          {videos.slice(0, visibleCount).map(video => (
            <div key={video.id} className="relative w-full aspect-[600/453.71] bg-[#000] overflow-hidden group cursor-pointer animate-fade-in" onClick={() => openVideo(video.videoUrl)}>
              <img src={video.image} alt={`Darshan Video ${video.id}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]" />
              <div className="card-overlay-gradient absolute inset-0 z-[1]"></div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[80px] bg-black/95 backdrop-blur-md rounded-[16px] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C23632] z-[10] shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
                <div className="w-0 h-0 border-t-[16px] border-t-transparent border-l-[26px] border-l-white border-b-[16px] border-b-transparent ml-[6px] transition-transform duration-300 group-hover:scale-110"></div>
              </div>

              <div className="absolute top-[20px] left-[20px] z-[10]">
                {video.isLive && (
                  <span className="bg-[#C23632] text-white font-bold text-[14px] px-[12px] py-[6px] rounded-[6px] shadow-md flex items-center gap-[8px] tracking-[0.5px]">
                    <span className="w-[8px] h-[8px] bg-white rounded-full animate-pulse"></span> LIVE
                  </span>
                )}
              </div>

              <div className="absolute bottom-0 left-0 w-full p-[1.5rem] z-[10]">
                <h3 className="font-body text-[24px] font-medium mb-[0.2rem] text-[#ffffff] line-clamp-2 drop-shadow-md">
                  {video.title} {video.isLive ? 'is Live.' : 'was Live.'}
                </h3>
                <span className="text-[1rem] text-white/90 font-medium drop-shadow-sm">
                  {video.isLive ? 'Streaming Now' : video.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-[2rem]">
          <a href="#" onClick={handleMoreVideos} className="flex justify-center items-center w-[230px] h-[75px] p-0 bg-[#F3A40C] border-[4px] border-[#800000] rounded-[10px] text-[#000000] font-rosario font-bold text-[22px] tracking-[-0.01em] uppercase transition-all duration-300 no-underline shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:bg-[#e69600] hover:-translate-y-[2px] hover:shadow-[0_6px_15px_rgba(0,0,0,0.2)] text-center leading-tight">
            {visibleCount < videos.length ? 'MORE VIDEOS' : 'VIEW ON YOUTUBE'}
          </a>
        </div>

      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-[20px] backdrop-blur-sm transition-opacity duration-300" onClick={closeVideo}>
          <div className="relative w-full max-w-[1000px] aspect-video bg-black rounded-[16px] overflow-hidden shadow-2xl animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-[10px] right-[10px] text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-[10px] rounded-full z-[10] transition-colors w-[40px] h-[40px] flex items-center justify-center"
              onClick={closeVideo}
              title="Close video"
            >
              <i className="fas fa-times text-[20px]"></i>
            </button>
            <iframe 
              src={`${activeVideo}?autoplay=1`}
              title="Live Darshan Stream"
              className="w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

export default LiveDarshan;
