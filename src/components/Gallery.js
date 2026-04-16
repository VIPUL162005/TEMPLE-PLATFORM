import React from 'react';

function Gallery() {
  return (
    <section id="gallery" className="py-[80px] pb-[100px] bg-[#F7F4EA] services-bg-symbols">
      <div className="w-full max-w-[1512px] mx-auto px-[5%]">
        <div className="text-center">
          <h2 className="text-[#C23632] font-heading font-bold text-[36px] min-[650px]:text-[50px]">Video & Image Gallery</h2>
        </div>
        <div className="flex justify-center items-center gap-[40px] max-w-[1358px] mx-auto mt-[50px] flex-wrap">
          <div className="gallery-item w-[280px] h-[380px] rounded-[20px] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative bg-[#fff] p-[10px]">
            <img src="/assets/Image11.svg" alt="Gallery image 1" className="w-full h-full object-cover rounded-[12px]" />
          </div>
          <div className="gallery-item w-[280px] h-[380px] rounded-[20px] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative bg-[#fff] p-[10px]">
            <img src="/assets/Image12.svg" alt="Gallery image 2" className="w-full h-full object-cover rounded-[12px]" />
          </div>
          <div className="gallery-item w-[280px] h-[380px] rounded-[20px] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative bg-[#fff] p-[10px]">
            <img src="/assets/Image13.svg" alt="Gallery image 3" className="w-full h-full object-cover rounded-[12px]" />
          </div>
          <div className="gallery-item w-[280px] h-[380px] rounded-[20px] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative bg-[#fff] p-[10px]">
            <img src="/assets/Image14.svg" alt="Gallery image 4" className="w-full h-full object-cover rounded-[12px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
