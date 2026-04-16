import React, { useState, useEffect } from 'react';

function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { id: 1, image: '/assets/Image of temple.svg', alt: 'Shri Lakshmi Narayan Mandir Deities 1' },
    { id: 2, image: '/assets/Image of temple.svg', alt: 'Shri Lakshmi Narayan Mandir Deities 2' },
    { id: 3, image: '/assets/Image of temple.svg', alt: 'Shri Lakshmi Narayan Mandir Deities 3' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full max-w-[1355px] mx-auto h-[653px] border-[6px] border-[#FFA701] overflow-hidden z-10">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === slideIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
            <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover object-top" />
            <div className="absolute top-0 left-0 w-full h-full bg-transparent z-[2]"></div>
          </div>
        ))}

        <div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 text-center z-30 bg-[#B1403D]/[0.58] w-full max-w-[753px] h-[137px] flex flex-col justify-center items-center gap-[15px]">
          <h2 className="font-rosario text-[60px] font-medium tracking-[0px] drop-shadow-[2px_2px_5px_rgba(0,0,0,0.5)] text-[#FFA701] m-0">Shri Lakshmi Narayan Mandir</h2>
          <div className="flex justify-center gap-[21px]">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`w-[15px] h-[15px] rounded-full cursor-pointer transition-all duration-300 ${index === slideIndex ? 'bg-[#FFA701]' : 'bg-[#FFFFFF] hover:bg-[#FFA701]'}`}
                onClick={() => setSlideIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
