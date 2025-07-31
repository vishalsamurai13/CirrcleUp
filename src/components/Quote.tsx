import React from 'react';

interface QuoteBoxProps {
  quote: string;
  author: string;
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ quote, author }) => {
  return (
    <div className="w-full lg:w-[755px] h-[186px] border bg-transparent rounded-[25px] shadow-lg flex flex-col justify-center lg:px-10 px-4 py-6 text-black">
      <p className="text-[14px] lg:text-[18px] leading-[28px] italic mb-4">“{quote}”</p>
      <p className="text-[12px] lg:text-[16px] font-semibold text-right">— {author}</p>
    </div>
  );
};

export default QuoteBox;
