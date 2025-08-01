import Link from 'next/link';

interface JobCardProps {
  openings?: number;
  jobId: string;
  title: string;
  experience: string;
  location: string;
  skills: string[];
  applyLink: string;
  viewLink: string;
}

const JobCard: React.FC<JobCardProps> = ({ jobId, title, experience, location, skills, applyLink, viewLink }) => {
  return (
    <div className='bg-[#F7F7F7] p-4 shadow-lg rounded-lg lg:rounded-none'>
      <div>
        <h3 className='text-[#5F5F5F] text-xs lg:text-[13px]'>Job #{jobId}</h3>
        <h2 className='text-base lg:text-[18px] font-medium leading-tight mt-1'>{title}</h2>
        
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center mt-3 lg:mt-2'>
            <p className='text-sm lg:text-base'>Experience:</p>
            <span className='bg-[#D9D9D9] font-medium px-2 py-1 rounded-[20px] text-xs lg:text-[12px] w-fit'>{experience}</span>
        </div>
        
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center mt-3 lg:mt-2'>
            <p className='text-sm lg:text-base'>Location:</p>
            <span className='bg-[#D9D9D9] font-medium px-2 py-1 rounded-[20px] text-xs lg:text-[12px] w-fit'>{location}</span>
        </div>
        
        <div className='flex flex-col gap-2 mt-3 lg:mt-2'>
            <p className='text-sm lg:text-base'>Skills:</p>
            <div className='flex flex-wrap gap-1'>
              <span className='font-medium text-xs lg:text-[12px] leading-relaxed'>{skills.join(', ')}</span>
            </div>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-3 sm:justify-between mt-6 lg:mt-4'>
        <Link href={applyLink} className='bg-[#28B673]/75 text-white rounded-[20px] text-sm lg:text-[12px] shadow-lg p-3 lg:p-2 hover:bg-[#28B673] transition-all duration-200 text-center'>
          Apply Now
        </Link>
        <Link href={viewLink} className='bg-[#D3D3D3]/75 rounded-[20px] text-sm lg:text-[12px] shadow-lg p-3 lg:p-2 hover:bg-[#D3D3D3] transition-all duration-200 text-black text-center'>
          View Job
        </Link>
      </div>
    </div>
  );
};

export const JobCard2: React.FC<JobCardProps> = ({ openings, jobId, title, experience, location, skills, applyLink, viewLink }) => {
  return (
    <div className='bg-[#F7F7F7] p-4 lg:p-8 shadow-lg rounded-lg lg:rounded-none'>
      <div className='flex flex-col gap-3 lg:gap-4'>
        <div className='flex flex-col sm:flex-row sm:justify-between gap-2'>
          <h3 className='text-[#5F5F5F] text-xl lg:text-[28px]'>Job #{jobId}</h3>
          <h3 className='text-white text-xs lg:text-[12px] bg-black flex justify-center items-center px-2 py-1 gap-2 w-fit rounded'>
            No. of Openings:<span className='text-[#28B673] font-semibold'>{openings}</span>
          </h3>
        </div>
        
        <h2 className='text-2xl lg:text-[36px] font-medium leading-tight'>{title}</h2>
        
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center mt-2'>
            <p className='text-sm lg:text-base'>Experience:</p>
            <span className='bg-[#D9D9D3] font-medium px-2 py-1 rounded-[20px] text-xs lg:text-[12px] shadow-md w-fit'>{experience}</span>
        </div>
        
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center mt-2'>
            <p className='text-sm lg:text-base'>Location:</p>
            <span className='bg-[#D9D9D9] font-medium px-2 py-1 rounded-[20px] text-xs lg:text-[12px] shadow-md w-fit'>{location}</span>
        </div>
        
        <div className='flex flex-col gap-2 mt-2'>
          <p className='text-sm lg:text-base'>Skills:</p>
          <div className='flex gap-2 flex-wrap'>
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className='font-medium px-2 py-1 bg-blue-100 text-[#28B673] rounded-full shadow-md text-xs lg:text-[12px]'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 sm:justify-between mt-8 lg:mt-12'>
        <Link href={applyLink} className='bg-[#28B673]/75 text-white rounded-[20px] text-base lg:text-[18px] shadow-lg px-4 py-3 lg:px-6 lg:py-2 hover:bg-[#28B673] transition-all duration-200 text-center'>
          Apply Now
        </Link>
        <Link href={viewLink} className='bg-[#D3D3D3]/75 rounded-[20px] text-base lg:text-[18px] shadow-lg px-4 py-3 lg:px-6 lg:py-2 hover:bg-[#D3D3D3] transition-all duration-200 text-black text-center'>
          View Job
        </Link>
      </div>
    </div>
  );
};

export default JobCard;