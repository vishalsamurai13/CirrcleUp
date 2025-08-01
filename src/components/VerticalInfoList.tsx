import React from "react";

interface InfoItem {
  icon: React.ReactNode;
  paragraph: string;
}

interface VerticalInfoListProps {
  title?: string;
  items: InfoItem[];
  wrapperClassName?: string;
  showDivider?: boolean;
}

const VerticalInfoList: React.FC<VerticalInfoListProps> = ({
  title,
  items,
  wrapperClassName = "",
  showDivider = true,
}) => {
  return (
    <section className="w-full lg:pr-16 lg:pl-16 lg:pt-8 px-4 py-12">
      <div className={wrapperClassName}>
        <h1 className="text-[30px] lg:text-[40px] font-medium mb-12">{title}</h1>
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-start space-x-6"> 
              <div className="flex gap-6 items-center">
                <div className="text-lg lg:text-2xl text-black">{item.icon}</div>
                <p className="text-gray-700 text-[14px] leading-relaxed lg:text-[20px]">{item.paragraph}</p>
              </div>
              {showDivider && <span className="w-full h-[1px] bg-black mt-2" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalInfoList;