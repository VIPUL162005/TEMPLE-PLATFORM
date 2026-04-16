import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import siteData from '../data/config.json';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { leftLinks, rightLinks, logoAlt } = siteData.header;

  const navLinkClass = "group font-overlock text-[20px] font-bold text-white transition-all relative drop-shadow-md hover:text-[#fff59d]";
  const navLinkAfter = "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="bg-transparent text-white relative z-50 h-[170px]">
      <div className="flex justify-center items-center max-w-[1512px] mx-auto p-0 h-full relative z-10">
        <div className="flex justify-between w-full items-start absolute top-[93px] left-0 px-[108px] box-border">
          <nav className={`mr-auto ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
            <ul className="flex gap-10 items-center">
              {leftLinks.map((link, idx) => (
                <li key={idx}>
                  {link.route ? (
                    <Link to={link.route} onClick={closeMenu} className={`${navLinkClass} ${navLinkAfter}`}>{link.label}</Link>
                  ) : (
                    <a href={link.href} onClick={closeMenu} className={`${navLinkClass} ${navLinkAfter}`}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <nav className={`ml-auto ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
            <ul className="flex gap-10 items-center">
              {rightLinks.map((link, idx) => (
                <li key={idx}>
                  {link.route ? (
                    <Link to={link.route} onClick={closeMenu} className={`${navLinkClass} ${navLinkAfter}`}>{link.label}</Link>
                  ) : (
                    <a href={link.href} onClick={closeMenu} className={`${navLinkClass} ${navLinkAfter}`}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-center z-10">
          <Link to="/" onClick={closeMenu}>
            <img src="/assets/Logo.svg" alt={logoAlt} className="w-[254px] h-[141px] object-cover" />
          </Link>
        </div>

        <div className={`md:hidden cursor-pointer z-[1001] ${isMenuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
          <div className="w-[25px] h-[3px] bg-white m-[5px] transition-all"></div>
          <div className="w-[25px] h-[3px] bg-white m-[5px] transition-all"></div>
          <div className="w-[25px] h-[3px] bg-white m-[5px] transition-all"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
