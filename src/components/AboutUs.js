import React, { useState } from 'react';

function AboutUs() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about-us" className="py-[100px] text-center bg-[#F7F4EA]">
      <div className="w-full max-w-[1512px] mx-auto px-[5%]">
        <div className="text-center mb-[3rem]">
          <h2 className="font-heading font-bold text-[32px] text-[#C23632] mb-[10px]">About Us</h2>
          <img src="/assets/ornament.svg" alt="Ornament" className="block mx-auto mb-[20px] w-[365px] max-w-full h-auto" />
          <h3 className="font-poppins text-[24px] font-medium text-[#000000] text-center mb-[40px]">Hindu Mandir Surrey Canada</h3>
        </div>
        <div className="max-w-[1343px] mx-auto flex flex-col">
          <p className="font-poppins text-[24px] font-medium leading-normal text-[#000000] mb-[20px] text-left">
            We, the Hindus of Canada, abiding by the principles of the Hindu Dharma as ordained and enshrined in
            the Shruti (Primary Scriptures: Vedas) and Samritis (Secondary Scriptures: puranas, two Epics,
            namely Ramayana, Mahabharata including Bhagwat Gita, etc.) and enunciated in Darshanas (schools of
            philosophy); resolve, to incorporate a religious, cultural, philosophical, educational, social,
            economic and charitable society, And to preserve, promote and {isExpanded ? 'practice our timeless traditions. We seek to cultivate an environment that nurtures spiritual growth, supports the community through philanthropic efforts, and serves as a beacon of harmony, peace, and universal brotherhood for generations to come.' : '...'}
          </p>
          <button 
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="self-end inline-flex justify-center items-center px-[45px] h-[70px] bg-[#F3A40C] border-[4px] border-[#800000] rounded-[10px] text-[#000000] font-rosario font-bold text-[24px] uppercase transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] hover:shadow-[0_6px_15px_rgba(0,0,0,0.2)] cursor-pointer"
          >
            {isExpanded ? 'READ LESS' : 'READ MORE'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
