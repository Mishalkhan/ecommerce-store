import React from "react";
import { Truck, ShieldCheck, Gem, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Truck size={32} />,
      title: "Fast Delivery",
      description: "Get your products delivered quickly and safely to your doorstep.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Secure Payment",
      description: "Multiple secure payment options with full data protection.",
    },
    {
      icon: <Gem size={32} />,
      title: "Premium Quality",
      description: "Carefully selected tech products built for performance.",
    },
    {
      icon: <Headphones size={32} />,
      title: "24/7 Support",
      description: "Our team is always ready to help you anytime.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Shop With Us
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          We provide high-quality tech products with reliable service and customer satisfaction at the core.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="text-indigo-500 mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-500 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
