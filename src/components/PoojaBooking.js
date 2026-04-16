import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import siteData from '../data/config.json';

function PoojaBooking() {
  const history = useHistory();
  const { generalServices, homams, samkaras, footerText } = siteData.poojaBooking;

  const renderRow = (item, idx) => (
    <tr key={idx} className="bg-[#FAF5ED] border-b border-[#e28743] hover:bg-[#F2E8D5] transition-colors">
      <td className="px-6 py-4 font-semibold text-gray-800 whitespace-pre-line border-r border-[#e28743] text-center">{item.name}</td>
      <td className="px-6 py-4 text-center font-bold text-gray-800 border-r border-[#e28743]">{item.inTemple}</td>
      <td className="px-6 py-4 text-center font-bold text-gray-800 border-r border-[#e28743]">{item.outWeekday}</td>
      <td className="px-6 py-4 text-center font-bold text-gray-800 border-r border-[#e28743]">{item.outWeekend}</td>
      <td className="px-6 py-4 text-center">
        <button 
          onClick={() => {
            if (item.route) {
              history.push(item.route);
            }
          }}
          className="bg-[#facc15] hover:bg-[#22c55e] hover:text-white text-gray-800 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] font-bold py-2 px-6 rounded-full transition-colors duration-200 w-full max-w-[140px] text-sm">
          Book Now
        </button>
      </td>
    </tr>
  );

  return (
    <div className="bg-[#F5F1E5] min-h-screen pb-20">
      {/* Header section with maroon background */}
      <div className="bg-[#c23632] relative">
        <div className="header-bg-symbols absolute top-0 left-0 w-full h-[170px] opacity-100 mix-blend-overlay"></div>
        <Header />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 mt-12 pb-16">
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-4xl md:text-5xl font-heading text-[#c23632] font-bold text-center mb-2">Book a Pooja</h1>
          <img src="/assets/ornament.svg" alt="Ornament" className="mb-4 w-[334px] h-[26px]" />
        </div>

        <div className="overflow-x-auto shadow-md border-2 border-[#e28743]">
          <table className="w-full text-sm text-center text-gray-500 font-body">
            <thead className="text-sm font-bold text-[#c23632] bg-[#fbb040] border-b-2 border-[#e28743]">
              <tr>
                <th scope="col" className="px-6 py-4 border-r border-[#e28743]">Service Name</th>
                <th scope="col" className="px-6 py-4 border-r border-[#e28743]">In the temple</th>
                <th scope="col" className="px-6 py-4 border-r border-[#e28743] w-[25%]">Outside Services(Weekdays)</th>
                <th scope="col" className="px-6 py-4 border-r border-[#e28743] w-[25%]">Outside Service(Weekends&Holidays)</th>
                <th scope="col" className="px-6 py-4">Booking</th>
              </tr>
            </thead>
            <tbody>
              {generalServices.map(renderRow)}
              
              {/* HOMAMS/HAVAN section separator */}
              <tr className="bg-[#fcd34d] border-b border-[#e28743]">
                <td colSpan="5" className="px-6 py-3 font-bold text-lg text-[#c23632] text-center uppercase tracking-wider">
                  HOMAMS/HAVAN
                </td>
              </tr>
              
              {homams.map(renderRow)}

              {/* Samkaras section separator */}
              <tr className="bg-[#fcd34d] border-b border-[#e28743]">
                <td colSpan="5" className="px-6 py-3 font-bold text-lg text-[#c23632] text-center uppercase tracking-wider">
                  Samkaras
                </td>
              </tr>

              {samkaras.map(renderRow)}
            </tbody>
          </table>
        </div>

        <div className="mt-2 mb-4 w-full">
          <p className="text-left font-semibold text-gray-900 text-[17px] leading-relaxed">
            {footerText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PoojaBooking;
