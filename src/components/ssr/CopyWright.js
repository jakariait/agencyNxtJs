import React from 'react';

const CopyWright = () => {
  return (
    <div className={"bg-black border-t border-red-500 py-1 px-2"}>
      {/* Copyright */}
      <div className="text-center text-sm text-gray-400   pt-4">
        © {new Date().getFullYear()} All Rights Reserved. Design & Developed by{" "}
        <a
          href="https://jakaria.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:underline"
        >
          Jakaria
        </a>
      </div>
    </div>
  );
};

export default CopyWright;