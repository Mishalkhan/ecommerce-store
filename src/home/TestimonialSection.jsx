import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Sarah Khan",
      message:
        "Amazing quality products and super fast delivery. I’m really impressed!",
    },
    {
      name: "Ali Raza",
      message:
        "Great pricing and smooth checkout experience. Highly recommend.",
    },
    {
      name: "John Smith",
      message:
        "Customer support was very helpful and responsive. Excellent service!",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="mt-12"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-gray-600 leading-relaxed">
                  “{item.message}”
                </p>
                <h4 className="mt-6 font-semibold text-indigo-600">
                  {item.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default TestimonialSlider;
