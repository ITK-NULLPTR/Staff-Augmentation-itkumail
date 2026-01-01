import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
              <div className="row pt-5 pb-5">
          <div className="col-12 col-lg-5 col-xl-3 ">
            <div className="footer__single-logo">
              <Link href="/" className="logo">
                <Image src={logo} alt="Image" />
              </Link>
              <p className="description ">
                Innovative solutions. <br />
                Empowering businesses.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-5 gap-2">
            <div className="footer__single1">
              <div className="footer__single-intro">
                <h4>Offices</h4>

                <h5 className="pt-3">Manchester</h5>
              </div>
              <div className="footer__single-content">
                <ul className="">
                  <li>
                    <Link href="https://itkumail.com/">
                      ITK Online Solutions Ltd
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+443334444472">+44(0)3334444472</Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      2880 Davenport House, 261 Bolton Rd, Bury, BL8 2NZ, Lancs,
                      United Kingdom
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-4 gap-2">
            <div className="footer__single1">
              <div className="footer__single-intro">
                <h5 className="pt-5">Lahore</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link className="" href="https://itkumail.com/">
                      ITK Pvt Ltd
                    </Link>
                  </li>
                  <li>
                    <Link className="" href="tel:+923081472233">
                      +92 308 1472233
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      13-B Commercial Area, B block DHA Phase 5, 54000 Lahore,
                      Pakistan
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3 pb-5 ">
          <div className="pt-5 col-12 col-lg-2 col-xl-3 ">
            <iframe
              title="Rating"
              src="https://widget.clutch.co/widgets/get/13?ref_domain=yourwebsite.com&uid=2445786&rel_nofollow=true&scale=100"
              scrolling="no"
            ></iframe>
          </div>

          <div className="col-12 col-lg-2 col-xl-3">
            <div className="footer__single1">
              <div className="footer__single-intro">
                <h5>Services</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="https://itkumail.com/graphic-design/">
                      Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link href="https://itkumail.com/website-development/">
                      Website Development
                    </Link>
                  </li>

                  <li>
                    <Link href="https://itkumail.com/videography/">
                      Videography
                    </Link>
                  </li>
                  <li>
                    <Link href="https://itkumail.com/front-back-end/">
                      Front end / Back End Development
                    </Link>
                  </li>
                  <li>
                    <Link href="https://itkumail.com/marketing-services/">
                      Marketing Services
                    </Link>
                  </li>
                  <li>
                    <Link href="https://itkumail.com/ui-ux-design/">
                      UI / UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="https://itkumail.com/#">
                      Social Media Managment
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-3 ">
            <div className="footer__single1">
              <div className="footer__single-intro">
                <h5>Useful Links</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="https://itkumail.com/about-us/">About us</Link>
                  </li>
                  <li>
                    <Link href="https://itkumail.com/success-stories/">
                      Success Stories
                    </Link>
                  </li>

                  <li>
                    <Link href="https://itkumail.com/our-branding-process/">
                      Our Branding Process
                    </Link>
                  </li>
                  <li>
                    <Link href="https://itkumail.com/our-news">News</Link>
                  </li>
                  <li>
                    <Link href="hello@itkumail.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      hello@itkumail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5 col-xl-3">
            <div className="footer__single1">
              <div className="footer__single-intro">
                <h5>Get in touch</h5>
              </div>
              <div className="footer__single-content">
                <p>
                  By subscribing you agree to the Terms of Use and Privacy
                  Policy.
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
                  <div className="pt-3 col-12 col-lg-9">
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
        <div className="row pt-3 pb-2">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-6">
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

                <div className=" col-12 col-lg-6">
                  <ul className="footer-useful ">
                    <li>
                      <Link href="https://itkumail.com/terms-and-conditions/">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="https://itkumail.com/security-policy/">
                        Security Policy
                      </Link>
                    </li>

                    <li>
                      <Link href="https://itkumail.com/about-us/">
                        Accessibility Statement
                      </Link>
                    </li>
                  </ul>
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