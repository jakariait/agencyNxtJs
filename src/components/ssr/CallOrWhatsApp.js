import React from 'react';

const CallOrWhatsApp = () => {
  return (
    <div>
      <div className={"flex items-center justify-center relative"}>
        <a
          href="tel:+8801234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-500 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-l-lg transition duration-300 w-36"
        >
          Call Now
        </a>
        {/* OR Section */}
        <div className="text-white absolute bg-black px-1 py-1 rounded-full border-3 border-white z-50  flex items-center justify-center">
          OR
        </div>
        <a
          href="https://wa.me/8801234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-800 text-white font-semibold px-6  py-3 rounded-r-lg transition duration-300 w-36"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default CallOrWhatsApp;