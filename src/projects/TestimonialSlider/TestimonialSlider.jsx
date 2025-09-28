import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Cherise G",
    photoUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
  },
  {
    name: "Rosetta Q",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
  },
  {
    name: "Constantine V",
    photoUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
  },
];

const TestimonialSlider = () => {
  const [idx, setIdx] = useState(0);

  const { name, photoUrl, text } = testimonials[idx];

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prevIdx) => (prevIdx + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
 <div className="w-2xl p-6 rounded-xl bg-purple-600 shadow-xl flex flex-col items-center justify-start text-white">
      <img
        src={photoUrl}
        alt={name}
        className="w-30 h-30 rounded-full mb-4 mt-[-40px] object-cover border-4 border-purple-600 bg-white"
      />
      <div className="p-6 rounded-xl bg-purple-700 flex-1 flex flex-col justify-between">
        <h3 className="text-center text-lg">{text}</h3>
        <p className="text-center font-semibold mt-4">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialSlider;
