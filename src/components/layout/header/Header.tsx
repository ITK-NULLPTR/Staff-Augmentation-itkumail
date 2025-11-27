import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/images/logo.png";
import logoLight from "public/images/logo-light.png";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderTwo = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar cmn-nav";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  let logoSrc = logo;

  const router = useRouter();
  if (router.pathname === "/index-two-light") {
    logoSrc = logoLight;
  }

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="https://itkumail.com/" aria-label="go to home">
                      <Image src={logoSrc} priority alt="Image" />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                         <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                         ABOUT US
                        </button>
                        <ul className="navbar__sub-menu navbar__sub-menu--lg">
                          <li>
                            <Link href="https://itkumail.com/about-us/">About</Link>
                          </li>
                          <li>
                            <Link href="https://itkumail.com/success-stories/">
                              Success Stories
                            </Link>
                          </li>
                          <li>
                            <Link href="https://itkumail.com/our-branding-process/">Our Branding Process</Link>
                          </li>
                          <li>
                            <Link href="https://itkumail.com/our-news">
                             News
                            </Link>
                          </li>
                          <li>
                            <Link href="https://itkumail.com/#">Testimonials</Link>
                          </li>                                                   
                        </ul>
                      </li>
                       
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          SERVICES
                        </button>
                        <ul className="navbar__sub-menu navbar__sub-menu--lg">
                          <li>
                            <Link href="https://itkumail.com/website-development/">Website Development</Link>
                          </li>
                          <li>
                            <Link href="https://itkumail.com/front-back-end/">
                           Front end / Back End Development
                            </Link>
                          </li>
                          <li>
                            <Link href="https://itkumail.com/ui-ux-design/">UI / UX Design</Link>
                          </li>
                          <li>
                            <Link href="https://itkumail.com/graphic-design/">
                              Graphic Design
                            </Link>
                          </li>
                          <li>
                            <Link href="https://itkumail.com/marketing-services/">Marketing Services</Link>
                          </li>
                          <li>
                            <Link href="index-three-light">
                             Social Media Managment
                            </Link>
                          </li>
                          <li>
                            <Link href="https://itkumail.com/videography/">Videography</Link>
                          </li>
                         </ul>
                      </li>
                      
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          Engagement Models
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="our-services">Software Development Outsourcing</Link>
                          </li>
                          <li>
                            <Link href="service-single">Dedicated Teams</Link>
                          </li>
                          <li>
                            <Link href="service-single">IT Staff Augmentation</Link>
                          </li>
                          <li>
                            <Link href="service-single">New Venture Partnership</Link>
                          </li>
                        </ul>
                      </li>
                      
                     
                   </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-flex">
                      <Link href="https://itkumail.com/contact-us/" className="btn btn--secondary">
                        Let&apos;s Talk
                      </Link>
                    </div>
                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default HeaderTwo;
