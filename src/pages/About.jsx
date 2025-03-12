import React from "react";
import Button from "../ui/Button";
import DoctorGrid from "../components/DoctorGrid";
import FAQSection from "../components/FAQSection";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto font-ubuntu">
      {/* Hero */}
      <div className="flex mt-24 lg:mt-[120px] flex-col gap-8 md:gap-12 lg:flex-row items-center lg:space-x-24 relative">
        <div className="flex-1/2 flex-start">
          <h2 className="text-h1 font-bold text-deep-navy mb-4 lg:mb-8">
            About Us
          </h2>
          <p className="text-body text-midnight-indigo-60 font-medium mb-8 lg:mb-[72px] tracking-tight">
            We want you to feel amazing about your oral wellness. Not just twice
            a year, but every time you take a bite, tell a joke, laugh, or share
            a kiss.
          </p>
          <Button size="lg">Contact Us</Button>
        </div>

        <div className="relative flex justify-center items-center w-full lg:w-auto">
          <svg
            className="absolute inset-0 flex items-center justify-center"
            width="144"
            height="144"
            viewBox="0 0 144 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[...Array(8)].map((_, row) =>
              [...Array(8)].map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={2 + col * 20}
                  cy={2 + row * 20}
                  r="2"
                  fill="#7ABADD"
                />
              ))
            )}
          </svg>

          <img
            src="/images/About-image.png"
            className="rounded-4xl relative z-10"
            alt="About"
          />
        </div>
      </div>

      {/* Priority */}
      <section class="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div class="relative w-full md:w-1/2 mb-8 md:mb-0">
              <div class="absolute top-0 left-0 w-full h-full bg-sky-mist rounded-lg transform -translate-x-4 -translate-y-4"></div>
              <div class="relative z-10">
                <img
                  src="/images/male-female-dentist-examining-patient 1.jpg"
                  alt="Medical professionals with patient"
                  class="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div class="w-full md:w-1/2">
              <div class="max-w-lg">
                <span class="text-title text-deep-indigo font-bold">
                  OUR PRIORITY
                </span>
                <h2 class="text-h2 font-bold text-deep-navy mb-4 lg:mb-8 tracking-tighter max-w-[410px]">
                  Our clients are our priority
                </h2>
                <p className="text-body text-midnight-indigo-60 font-medium mb-8 lg:mb-[72px] tracking-tight">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
                <Button size="lg">Book an appointment</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}

      <section class="relative w-full py-12 md:py-16 lg:py-30 overflow-visible">
        <div class="mx-auto">
          <div class="bg-indigo-100 rounded-2xl lg:rounded-4xl p-6 lg:p-12 mx-auto min-h-[350px] max-h-[700px] h-auto">
            <div class="text-center mb-8 md:mb-12 max-w-2xl mx-auto lg:pt-10">
              <span class="text-title text-deep-indigo font-bold">SAFETY</span>
              <h2 class="text-h2 font-bold text-deep-navy mb-4 lg:mb-8 tracking-tighter max-w-[510px] mx-auto">
                We put the safety first
              </h2>
              <p class="text-body text-midnight-indigo-60 font-medium mb-8 lg:mb-[72px] tracking-tight max-w-[840px] mx-auto">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </div>

            <div class="relative rounded-2xl overflow-hidden shadow-lg max-w-[840px] mx-auto">
              <img
                src="/images/dental-cabinet-with-various-medical-equipment 1.jpg"
                alt="Modern dental office with equipment"
                class="w-full h-auto"
              />

              <div class="absolute inset-0 flex items-center justify-center">
                <button class="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-gray-100 transition duration-300">
                  <svg
                    className="pl-1 w-7 h-7 text-deep-indigo fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}

      <div className="flex flex-col md:flex-row mt-12 md:mt-52 lg:mt-30 space-x-3 justify-between">
        <div className="flex-1/2">
          <p className="text-title text-deep-indigo font-bold">MEET OUR TEAM</p>
          <h2 className="text-h2 font-bold text-deep-navy mb-4 lg:mb-8 tracking-tighter max-w-[510px]">
            Get to know the dentalist dental Team
          </h2>
        </div>

        <p className="text-body text-midnight-indigo-60 font-medium mb-8 lg:mb-[72px] tracking-tight max-w-[510px] flex-1/2">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <section className="my-8">
        <DoctorGrid />
      </section>
      <section className="my-8 lg:my-16">
        <FAQSection />
      </section>
    </div>
  );
};

export default About;
