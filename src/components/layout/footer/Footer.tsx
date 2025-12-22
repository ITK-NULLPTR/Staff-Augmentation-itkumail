import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-6">
            <div className="footer__single">
              <Link href="/" className="logo">
                <Image src={logo} alt="Image" />
              </Link>
              <div className="footer__single-meta">
                <Link
                  href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                  target="_blank"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  2880 Davenport House, 261 Bolton Rd, Bury, BL8 2NZ, Lancs,
                  United Kingdom
                </Link>
                <br></br>
                <Link
                  href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                  target="_blank"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  13-B Commercial Area, B block DHA Phase 5, 54000 Lahore,
                  Pakistan
                </Link>
                <br></br>
                <Link href="tel:406-555-0120">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  +44(0)3334444472
                </Link>
                <br></br>
                <Link href="tel:406-555-0120">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  +92 308 1472233
                </Link>
                <br></br>
                <Link href="mailto:info@xpovio.com">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                hello@itkumail.com
                </Link>
              </div>
             
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-2 gap-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>discover</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="https://itkumail.com/website-development/">Website Development</Link>
                  </li>
                  <li>
                    <Link href="https://itkumail.com/graphic-design/">Graphic Design</Link>
                  </li>
                    <li>
                    <Link href="https://itkumail.com/videography/">Videography</Link>
                  </li>
                  <li>
                    <Link href="https://itkumail.com/front-back-end/">Front end / Back End Development</Link>
                  </li>
                  <li>
                    <Link href="https://itkumail.com/marketing-services/">Marketing Services</Link>
                  </li>
                      <li>
                    <Link href="https://itkumail.com/ui-ux-design/">UI / UX Design</Link>
                  </li>
                      <li>
                    <Link href="https://itkumail.com/#">Social Media Managment</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Subscribe our newsletter</h5>
              </div>
              <div className="footer__single-content">
                <p>
                  Welcome to our digital agency We specialize in helping
                  business most like yours succeed online.
                </p>
                <div className="footer__single-form">
                  <form action="#" method="post">
                    <div className="input-email">
                      <input
                        type="email"
                        name="subscribe-news"
                        id="subscribeNews"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className="subscribe">
                        <i className="fa-sharp fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="footer__copyright-text text-center text-lg-start">
                    <p>
                      Copyright &copy;
                      <span id="copyYear">{currentYear}</span> by{" "}
                      <Link
                        href="https://themeforest.net/user/UltraDevs"
                        target="_blank"
                      >
                        ITkumail{" "}
                      </Link>
                      . All rights reserved.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="social justify-content-center justify-content-lg-end">
                    <Link href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="https://www.twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="https://www.pinterest.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
