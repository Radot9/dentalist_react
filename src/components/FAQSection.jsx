import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqItems = [
    {
      question: "Is there any cost or obligation if I request an offer?",
      answer:
        "I see Coint being a long-term part of my business structure. Not just for this business, but also our future endeavors.",
    },
    {
      question: "What kind of construction services will be purchased?",
      answer:
        "Our construction services include residential and commercial building, renovations, remodeling, and specialized installations. We focus on quality workmanship and sustainable building practices to ensure long-lasting results for all our clients.",
    },
    {
      question: "How Do I Print My Auto Insurance ID Card?",
      answer:
        "You can print your Auto Insurance ID Card by logging into your online account and navigating to the 'Documents' section. From there, select 'Insurance ID Cards' and choose the option to download or print. Alternatively, you can use our mobile app to access a digital version of your card that's always available when you need it.",
    },
    {
      question: "How Do I Know What Deductible Applies To My Policy?",
      answer:
        "Your policy deductibles are listed on your policy declarations page, which you can access through your online account. Different coverages may have different deductible amounts. If you're unsure which deductible applies to a specific situation, please contact our customer service team who can provide personalized guidance.",
    },
    {
      question: "If I Am Moving, Will I Need To Request A New Agent?",
      answer:
        "If you're moving within the same state, you can keep your current agent in most cases. However, if you're moving to a new state, you'll need to request a new agent as insurance regulations vary by state. Contact our customer service at least 30 days before your move so we can help make the transition smooth and ensure continuous coverage.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 font-ubuntu">
      <div className="text-center mb-10">
        <p className="text-deep-indigo font-bold uppercase text-title mb-2">
          FAQ
        </p>
        <h2 className="text-h2 font-bold text-midnight-indigo">
          Frequently asked question
        </h2>
      </div>

      <div className="border-t border-gray-200">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`border-b border-gray-200 transition-all duration-300 ease-in-out 
                      ${
                        openQuestion === index
                          ? "border-t-2 border-t-[#583FBC] -mt-px"
                          : ""
                      }`}
            style={{
              background:
                openQuestion === index
                  ? "linear-gradient(to bottom, #e0f2fe, white)"
                  : "transparent",
            }}
          >
            <button
              className="flex justify-between items-center w-full py-5 px-2 text-left focus:outline-none transition-all duration-300"
              onClick={() => toggleQuestion(index)}
            >
              <span
                className={`font-medium transition-all duration-300 ${
                  openQuestion === index
                    ? "text-midnight-indigo"
                    : "text-navy-900"
                }`}
              >
                {item.question}
              </span>
              <div className="transform transition-transform duration-300">
                {openQuestion === index ? (
                  <ChevronUp className="h-5 w-5 text-midnight-indigo" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[neutral]" />
                )}
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openQuestion === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-2 pb-5 text-neutral">
                <p className="p-2 text-neutral">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
