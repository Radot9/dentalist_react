import React from "react";
import { Phone, Clock, MapPin } from "lucide-react";
import Logo from "/images/Logo2.png";

const Footer = () => {
  return (
    <footer className="bg-midnight-indigo text-white py-16 px-12 font-ubuntu">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Logo and Description - Takes full width on mobile, half width on desktop */}
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center">
              <div className="flex-1/12">
                <img src={Logo} />
              </div>
            </div>
            <p className="text-neutral text-body">
              Dental Care Seattle is a top-rated local practice for cosmetic,
              preventative, and restorative dentistry on First Hill
            </p>

            <div>
              <h3 className="uppercase text-link font-medium mb-4 text-neutral">
                FOLLOW US ON
              </h3>
              <div className="flex space-x-6">
                <a href="#" className="text-white hover:text-blue-400">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-current"
                  >
                    <path d="M18.6668 6.67334C18.0002 7.00001 17.3002 7.13334 16.5668 7.3C15.9516 6.64668 15.0652 6.23334 14.1002 6.23334C12.2518 6.23334 10.7502 7.73333 10.7502 9.58333C10.7502 9.90001 10.7836 10.2167 10.8502 10.5167C7.98349 10.35 5.42689 9.01667 3.76521 7C3.41687 7.61667 3.2502 8.31667 3.2502 9.05C3.2502 10.45 3.92519 11.7 4.95016 12.45C4.40016 12.45 3.88351 12.3 3.43351 12.05V12.1C3.43351 13.7 4.59349 15.05 6.1168 15.35C5.50013 15.5 4.85013 15.5 4.20015 15.35C4.66682 16.7 5.91679 17.7 7.36677 17.7C6.20015 18.6333 4.70016 19.1667 3.10019 19.1667C2.76686 19.1667 2.40019 19.1333 2.06686 19.1C3.53343 20.1 5.2668 20.6667 7.10014 20.6667C14.1002 20.6667 17.9168 14.8333 17.9168 9.85C17.9168 9.66667 17.9168 9.51667 17.9002 9.35C18.5835 8.85 19.1668 8.23333 19.6168 7.51667L18.6668 6.67334Z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-current"
                  >
                    <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" />
                    <circle cx="11.994" cy="11.979" r="3.003" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right side container for Quick Links and Contact Info */}
          <div className="md:col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Quick Links */}
              <div>
                <h2 className="text-title font-semibold mb-6 text-neutral">
                  QUICK LINKS
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Dental Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Dentist
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-title text-neutral font-semibold mb-6">
                  CONTACT & INFORMATION
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-white p-4 rounded-lg mr-4">
                      <Phone className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <p className="text-neutral text-sm">Phone Number</p>
                      <p className="text-body text-white">+088 123 654 987</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-white p-4 rounded-lg mr-4">
                      <Clock className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <p className="text-neutral text-sm">Open Hour</p>
                      <p className="text-body text-white">
                        09:00 AM - 18:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-white p-4 rounded-lg mr-4">
                      <MapPin className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <p className="text-neutral text-sm">Clinic Address</p>
                      <p className="text-body text-white">
                        35 West Dental Street California 1004
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-neutral">©Dentalist. All Right Reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="text-neutral hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
