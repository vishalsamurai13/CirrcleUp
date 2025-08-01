import React from 'react';

interface CaseStudyCardProps {
  title: string;
  description: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description }) => {
  return (
    <div className="relative w-[914px] h-[341px] flex flex-col justify-center items-center px-4 lg:px-10 text-center border-2 border-[#28B673]">
      {/* Corner Squares */}
      <div className="absolute top-[-8px] left-[-8px] w-[16px] h-[16px] border-2 border-[#28B673] bg-white" />
      <div className="absolute top-[-8px] right-[-8px] w-[16px] h-[16px] border-2 border-[#28B673] bg-white" />
      <div className="absolute bottom-[-8px] left-[-8px] w-[16px] h-[16px] border-2 border-[#28B673] bg-white" />
      <div className="absolute bottom-[-8px] right-[-8px] w-[16px] h-[16px] border-2 border-[#28B673] bg-white" />

      {/* Main Content */}
      <h3 className="text-[24px] lg:text-[32px] font-bold text-[#1C1C30] mb-6">{title}</h3>
      <p className="text-[16px] lg:text-[18px] text-[#1C1C30] lg:leading-[32px] max-w-[720px]">
        {description}
      </p>
    </div>
  );
};

export default CaseStudyCard;
