import React, { useState } from 'react';
import Header from './Header';
import { useHistory } from 'react-router-dom';
import siteData from '../data/config.json';

function CarPooja({ configKey = 'carPooja' }) {
  const history = useHistory();
  const [poojaOption, setPoojaOption] = useState('');
  const [additionalDonation, setAdditionalDonation] = useState('');

  const poojaData = siteData[configKey] || siteData.carPooja;
  const { title, image, aboutHeading, aboutText, options, termsAndConditions } = poojaData;

  const selectedOptionData = options.find(opt => opt.value === poojaOption);
  const baseAmount = selectedOptionData ? selectedOptionData.baseCost : 0;
  const totalDonation = baseAmount + (Number(additionalDonation) || 0);
  return (
    <div className="bg-[#F5EDCE] min-h-screen">
      {/* Header section with maroon background */}
      <div className="bg-[#c23632] relative">
        <div className="header-bg-symbols absolute top-0 left-0 w-full h-[170px] opacity-100 mix-blend-overlay"></div>
        <Header />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 mt-8 pb-16">

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 bg-[#FFFFFF] shadow-sm border border-[#c23632] rounded-sm overflow-hidden flex flex-col">
            <div>
               <img src={image} alt={title} className="w-full h-[400px] object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "/assets/Image 2.svg" }} />
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#c23632] mb-1 font-heading normal-case">{title}</h2>
              <h3 className="text-lg font-bold text-[#c23632] mb-2 font-heading normal-case">{aboutHeading}</h3>
              <p className="text-[14px] font-semibold text-[#000000] leading-relaxed font-body mb-2">
                 {aboutText}
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-[549px] lg:flex-none mt-6 lg:mt-0">
            <div className="bg-[#F5EDCE] border border-[#c23632] shadow-sm p-6 w-full h-full rounded-sm">
               <h2 className="text-[#c23632] font-heading font-bold text-2xl mb-6 normal-case">{title}</h2>
               
               <form 
                 className="space-y-4"
                 onSubmit={(e) => {
                   e.preventDefault();
                   history.push('/payment');
                 }}
               >
                 <div>
                    <label className="block text-[13px] font-bold text-[#000000] mb-1">Select Date <span className="text-red-500">*</span></label>
                    <input type="date" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#c23632] text-sm text-[#000000] bg-white" />
                 </div>

                 <div>
                    <label className="block text-[13px] font-bold text-[#000000] mb-1">Select Pooja Option <span className="text-red-500">*</span></label>
                    <select 
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#c23632] bg-gradient-to-b from-gray-50 to-gray-200 text-sm text-[#000000] font-semibold shadow-sm appearance-none"
                      value={poojaOption}
                      onChange={(e) => setPoojaOption(e.target.value)}
                    >
                      <option value=""></option>
                      {options.map((opt, idx) => (
                        <option key={idx} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                 </div>

                 {poojaOption !== '' && (
                   <div className="mt-4">
                      <label className="block text-[13px] font-bold text-[#000000] mb-1">Want to add more donation?</label>
                      <div className="flex border border-gray-300 rounded shadow-sm overflow-hidden bg-white">
                        <span className="bg-[#F6C465] px-4 py-2 font-bold text-[#000000] border-r border-gray-300 flex items-center justify-center">
                          $
                        </span>
                        <input 
                          type="number" 
                          min="0"
                          className="flex-1 p-2 focus:outline-none text-sm text-[#000000] bg-white" 
                          placeholder="Enter Additional Amount"
                          value={additionalDonation}
                          onChange={(e) => setAdditionalDonation(e.target.value)}
                        />
                      </div>
                   </div>
                 )}
                 
                 <div className="flex items-center space-x-2 mt-4 pt-2">
                    <input type="checkbox" className="w-4 h-4 accent-[#fbb040] border-gray-300 rounded bg-white" />
                    <label className="text-[13px] font-[500] text-[#000000] block">Any Special Request</label>
                 </div>

                 <div className="font-bold text-[#000000] text-[16px] mt-6 mb-4">
                    Total donation:${totalDonation}
                 </div>

                 <div className="flex justify-center mt-2 mb-6">
                    <button type="submit" className="bg-[#F6C465] hover:bg-[#fbb040] text-[#000000] font-bold py-2 px-8 w-full transition-colors duration-200 text-[15px]">
                      Book Now
                    </button>
                 </div>
               </form>

               <div className="mt-8 text-left whitespace-pre-line">
                 <p className="text-[12px] font-semibold text-[#000000] leading-snug">
                   {termsAndConditions ? termsAndConditions.replace(/\\n/g, '\n') : ''}
                 </p>
               </div>
            </div>
          </div>
        </div>

        {/* Dynamic Footer Text Block */}
        <div className="mt-10 mb-4 w-full">
          <p className="text-left font-bold text-[#000000] text-[16px] leading-[1.6]">
             {siteData.poojaBooking && siteData.poojaBooking.footerText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarPooja;
