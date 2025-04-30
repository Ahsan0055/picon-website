'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const images = Array.from({ length: 14 }, (_, i) => `/images/suc${i + 1}.jpeg`);

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    border: 'none',
    padding: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    zIndex: 1000,
  },
};

export default function OurSuccessSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage('');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full py-20 px-6 bg-[#f7f7f7] overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
        Our Success
      </h2>

      <div className="max-w-full overflow-hidden mx-auto">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-4">
              <div
                className="overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-105"
                onClick={() => openModal(src)}
              >
                <Image
                  src={src}
                  alt={`Success ${index + 1}`}
                  width={500}
                  height={400}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
        <Image
          src={selectedImage}
          alt="Full size"
          width={900}
          height={600}
          className="w-full h-auto rounded-xl shadow-xl"
        />
      </Modal>
    </section>
  );
}
