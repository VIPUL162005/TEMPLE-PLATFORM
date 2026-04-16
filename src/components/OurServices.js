import React from 'react';
import { Link } from 'react-router-dom';

function OurServices() {
  const services = [
    { title: 'Preeti Bhoj', action: 'Sponsor Now', image: '/assets/car Image1.svg', path: '/preeti-bhoj-sponsor' },
    { title: 'Pooja Booking', action: 'Book Now', image: '/assets/car Image2.svg', path: '/booking' },
    { title: 'Donations', action: 'Donate Now', image: '/assets/car Image3.svg', path: '#' },
    { title: 'Temple Priests', action: 'Click Here', image: '/assets/car Image4.svg', path: '#' },
    { title: 'Vedic Senior Parivar', action: 'Click Here', image: '/assets/car Image5.svg', path: '#' },
    { title: 'Vedic Hindi School', action: 'Click Here', image: '/assets/car Image6.svg', path: '#' },
    { title: 'Yoga Group', action: 'Click Here', image: '/assets/car Image7.svg', path: '#' },
    { title: 'Volunteer Info', action: 'Click Here', image: '/assets/car Image8.svg', path: '#' }
  ];

  return (
    <section className="relative bg-[#F5E298]/30 pt-[20px] pb-[150px] max-[650px]:py-[60px] services-bg-symbols">
      <div className="w-[95%] max-w-[1512px] mx-auto px-[20px]">
        <div className="text-center mb-[3rem]">
          <h2 className="font-heading font-bold text-[32px] text-[#C23632] mb-[16px]">Our Services</h2>
          <img src="/assets/ornament.svg" alt="Heading Ornament" className="block mx-auto mb-[40px] w-[365px] max-w-full h-auto" />
          <p className="w-full max-w-[1334px] mx-auto mb-[60px] font-times text-[28px] font-normal text-[#000000] leading-[1.3] text-left">
            Our Temple has different departments performing various different
            services, the main focus is on the deity worship, preeti bhoj, religious pooja & honam , yoga ,vedic
            education to kids and all other functions carried out in the temple.
          </p>
        </div>

        <div className="grid justify-center grid-cols-[280px] min-[650px]:grid-cols-2 min-[650px]:auto-cols-[280px] min-[1250px]:grid-cols-4 min-[1250px]:auto-cols-[320px] gap-y-[70px] gap-x-[40px] mt-[40px]">
          {services.map((service, index) => (
            <div key={index} className="relative pt-[70px] flex flex-col w-full min-[1250px]:w-[320px] min-[650px]:w-[280px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[140px] rounded-full border-[4px] border-[#FFFFFF] overflow-hidden z-[2] shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#F3A40C] rounded-[12px] pt-[85px] px-[20px] pb-[30px] text-center flex-1 flex flex-col justify-between items-center shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
                <h3 className="font-body text-[22px] font-medium text-[#33333E] mb-[20px]">{service.title}</h3>
                <Link to={service.path || '#'} className="bg-[#FFFFFF] text-[#33343E] py-[8px] px-[18px] rounded-[6px] text-[14px] font-semibold transition-all duration-300 no-underline shadow-[0_2px_5px_rgba(0,0,0,0.1)] hover:bg-[#f0f0f0] hover:-translate-y-[2px]">{service.action}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
