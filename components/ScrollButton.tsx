import React, { useState } from 'react';

const ScrollButton = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(false);
    } else if (scrolled <= 0) {
      setVisible(true);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div>
      <button
        type="button"
        onClick={scrollToBottom}
        className="inline-block items-center transition duration-300 ease border-2 border-orange-400 hover:scale-110 text-orange-400 text-base font-medium rounded-full px-8 py-3 cursor-pointer"
      >
        Hire Me
      </button>
    </div>
  );
};

export default ScrollButton;
