import React from 'react';

interface QuoteBoxProps {
  quote: string;
  author: string;
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ quote, author }) => {
  return (
    <div className="w-[755px] h-[186px] border bg-transparent rounded-[25px] shadow-lg flex flex-col justify-center px-10 py-6 text-black">
      <p className="text-[18px] leading-[28px] italic mb-4">“{quote}”</p>
      <p className="text-[16px] font-semibold text-right">— {author}</p>
    </div>
  );
};

export default QuoteBox;
