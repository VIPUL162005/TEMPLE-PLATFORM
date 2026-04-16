import React from 'react';
import siteData from '../data/config.json';

function Footer() {
  const { newsletterText, quickLinks, usefulLinks, contact, timings, copyright } = siteData.footer;
  return (
    <footer id="contact-us" className="relative">
      <div className="bg-[#F3A40C]/[0.95] py-[30px] relative z-[2] border-b-[2px] border-[rgba(0,0,0,0.05)]">
        <div className="w-full max-w-[1200px] mx-auto px-[5%]">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-[30px] md:gap-0">
            <p className="font-poppins text-[18px] font-medium text-[#4B5563] w-full md:max-w-[500px] leading-[1.5]">
              {newsletterText}
            </p>
            <form className="flex flex-col min-[480px]:flex-row items-center w-full md:w-auto md:justify-center" onSubmit={(e) => e.preventDefault()}>
              <label className="font-poppins text-[16px] font-semibold mb-[10px] min-[480px]:mb-0 min-[480px]:mr-[15px] text-[#33333E] whitespace-nowrap">Let's do it! —</label>
              <div className="bg-white rounded-[20px] min-[480px]:rounded-[50px] min-[480px]:h-[40px] flex flex-col min-[480px]:flex-row items-center p-[5px] min-[480px]:p-[4px] w-full min-[480px]:w-[100%] md:w-[672px] gap-[5px] min-[480px]:gap-0">
                <input type="email" placeholder="Enter your email Address" className="flex-[1] border-none bg-transparent pl-[15px] text-[14px] text-[#333] outline-none w-full min-[480px]:w-auto placeholder:text-[#C23632]/50 py-[10px] min-[480px]:py-0" />
                <button type="submit" className="bg-[#F3A40C] text-[#000000] border-none rounded-[50px] w-full min-[480px]:w-auto h-[40px] min-[480px]:h-full px-[25px] font-poppins font-semibold text-[14px] cursor-pointer transition-colors duration-300 hover:bg-[#e69600]">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#C23632] bg-[url('../public/assets/bg-symbols.svg')] bg-repeat bg-[size:500px] bg-center text-white pt-[80px] pb-[60px] relative z-[2]">
        <div className="w-full max-w-[1349px] mx-auto px-[5%] relative z-[2]">
          <div className="grid grid-cols-[1fr_1fr] md:grid-cols-3 min-[1100px]:grid-cols-5 gap-[40px] mb-[60px]">
            <div className="footer-col">
              <h4 className="font-body text-[20px] font-medium mb-[30px]">Quick Links</h4>
              <ul className="list-none p-0">
                {quickLinks.map((link, idx) => (
                  <li key={idx} className="mb-[15px]">
                    <a href={link.href} className="text-white no-underline text-[16px] opacity-90 transition-all duration-300 hover:opacity-100 hover:pl-[5px]">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="font-body text-[20px] font-medium mb-[30px]">Useful Links</h4>
              <ul className="list-none p-0">
                {usefulLinks.map((link, idx) => (
                  <li key={idx} className="mb-[15px]">
                    <a href={link.href} className="text-white no-underline text-[16px] opacity-90 transition-all duration-300 hover:opacity-100 hover:pl-[5px]">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-col col-span-2 min-[1100px]:col-span-1">
              <h4 className="font-body text-[20px] font-medium mb-[30px]">Contact Us</h4>
              <div className="flex items-start gap-[15px] mb-[20px] text-[15px] leading-[1.5]">
                <i className="fas fa-map-marker-alt text-[18px] text-[#F3A40C] mt-[4px]"></i>
                <span dangerouslySetInnerHTML={{ __html: contact.address }}></span>
              </div>
              <div className="flex items-center gap-[15px] mb-[20px] text-[15px] leading-[1.5]">
                <i className="far fa-envelope text-[18px] text-white"></i>
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center gap-[15px] mb-[20px] text-[15px] leading-[1.5]">
                <i className="fas fa-phone-alt text-[18px] text-[#F3A40C]"></i>
                <span>{contact.phone}</span>
              </div>
            </div>
            
            <div className="footer-col">
              <h4 className="font-body text-[20px] font-medium mb-[30px]">Temple timings</h4>
              {timings.map((timing, idx) => (
                <p key={idx} className="text-[16px] mb-[5px]">{timing}</p>
              ))}
            </div>
            
            <div className="footer-col">
              <h4 className="font-body text-[20px] font-medium mb-[30px]">Follow us</h4>
              <div className="flex gap-[15px] mb-[25px]">
                <a href="#" className="text-white"><i className="fab fa-facebook-f text-[24px]"></i></a>
                <a href="#" className="text-white"><i className="fab fa-youtube text-[24px]"></i></a>
              </div>
              <div className="flex items-center gap-[8px]">
                <span className="border-[1px] border-white px-[6px] py-[2px] rounded-[4px] text-[12px] font-medium text-white">Live</span>
                <span className="text-[14px] font-normal text-white">Stream</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F3A40C]/[0.95] py-[20px] text-left text-[16px] text-[#33333E] font-medium relative z-[2]">
        <div className="w-full max-w-[1200px] mx-auto px-[5%]">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
