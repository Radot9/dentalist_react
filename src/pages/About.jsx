import React from "react";
import Button from "../ui/Button";

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
      <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-12 mt-20 md:mt-30 lg:mt-40 items-center">
        <div>
          <img src="/images/male-female-dentist-examining-patient 1.jpg" className="rounded-2xl"></img>
        </div>
        <div className="flex-1/2">
        <p className="text-title text-deep-indigo font-bold">OUR PRIORITY</p>
          <h3 className="text-h2  font-bold text-deep-navy mb-4 lg:mb-8 tracking-tighter">
          Our clients are our 
          priority
          </h3>
          <p className="text-body text-midnight-indigo-60 font-medium mb-8 lg:mb-[72px] tracking-tight">
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
          <Button size="lg">Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
