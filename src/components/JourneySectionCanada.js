'use client';
import { MessageCircle, FileText, Plane } from 'lucide-react';

export default function JourneySectionCanada() {
  const steps = [
    {
      icon: <MessageCircle size={40} className="text-white" />,
      title: 'Consult',
      description:
        'Connect with our certified experts to explore your study options and receive personalized guidance.',
    },
    {
      icon: <FileText size={40} className="text-white" />,
      title: 'Apply',
      description:
        'We assist you in preparing applications, documentation, and managing deadlines for top universities.',
    },
    {
      icon: <Plane size={40} className="text-white" />,
      title: 'Fly',
      description:
        'Get complete pre-departure support and prepare for your exciting journey abroad with confidence.',
    },
  ];

  return (
    <div className="w-full bg-white py-20 px-6 md:px-16">
      <h2 className="text-3xl md:text-5xl font-bold text-blue-900 text-center mb-16">
        Your Journey, Our Commitment
      </h2>

      <div className="flex justify-between items-center gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center space-y-4"
          >
            {/* Icon */}
            <div className="w-24 h-24 rounded-full bg-blue-900 flex items-center justify-center shrink-0 shadow-lg">
              {step.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
