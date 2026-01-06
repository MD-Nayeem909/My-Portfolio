import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4 transition-all duration-500">
      <div
        onClick={onClick}
        className={`cursor-pointer rounded-2xl transition-all duration-500 ${
          isOpen
            ? "bg-linear-to-br from-primary/20 to-transparent border border-primary/30 p-8"
            : "bg-base-100 border-b border-base-300 p-6 hover:bg-base-200"
        }`}
      >
        <div className="flex justify-between items-center gap-4">
          <h3
            className={`text-lg md:text-xl font-medium transition-colors ${
              isOpen ? "text-primary" : "text-base-content"
            }`}
          >
            {question}
          </h3>
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
              isOpen
                ? "border-primary text-primary"
                : "border-neutral text-neutral"
            }`}
          >
            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
          </div>
        </div>

        {/* Answer with Animation */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-neutral leading-relaxed text-md">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const SupportSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // প্রথম প্রশ্নটি ডিফল্টভাবে খোলা থাকবে

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "Blending creativity and functionality, I design user-focused digital products and responsive websites that not only look stunning but also deliver results.",
    },
    {
      question: "How fast will I receive my work?",
      answer:
        "The timeline depends on the project scope. Typically, a landing page takes 1-2 weeks, while a full web application might take 4-8 weeks.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "I offer a milestone-based payment structure. If you are not satisfied with the initial concepts, we can discuss a partial refund or revisions.",
    },
    {
      question: "What if I have a single project?",
      answer:
        "I am happy to take on single projects! Whether it's a quick UI fix or a full brand identity, I'm here to help.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes, I provide monthly maintenance and support packages to ensure your website or app stays updated and secure.",
    },
  ];

  return (
    <section id="support" className="text-base-content py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left Side: Header */}
        <div className="lg:w-1/3">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-primary">✦</span>
            <span className="text-xl text-primary font-semibold uppercase tracking-widest">
              Support
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-6">FAQS</h2>
          <p className="text-neutral text-lg leading-relaxed">
            Not sure yet? Have some questions? We listed the ones most
            frequently asked.
          </p>
        </div>

        {/* Right Side: Accordion List */}
        <div className="lg:w-2/3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
