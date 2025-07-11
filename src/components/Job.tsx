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
    <div className='bg-[#F7F7F7] p-4 shadow-lg'>
      <div>
        <h3 className='text-[#5F5F5F] text-[13px]'>Job #{jobId}</h3>
        <h2 className='text-[18px] font-medium'>{title}</h2>
        <div className='flex gap-4 items-center mt-2'>
            <p>Experience:</p>
            <span className='bg-[#D9D9D9] font-medium px-2 py-1 rounded-[20px] text-[12px]'>{experience}</span>
        </div>
        <div className='flex gap-4 items-center mt-2'>
            <p>Location:</p>
            <span className='bg-[#D9D9D9] font-medium px-2 py-1 rounded-[20px] text-[12px]'>{location}</span>
        </div>
        <div className='flex gap-4 items-center mt-2'>
            <p>Skills:</p>
            <span className='font-medium px-2 py-1 gap-2 flex text-[12px]'>{skills.join(', ')}</span>
        </div>
      </div>

      <div className='flex justify-between mt-4' >
        <Link href={applyLink} className='bg-[#28B673]/75 text-white rounded-[20px] text-[12px] shadow-lg p-2 hover:bg-[#28B673] transition-all duration-200'>
          Apply Now
        </Link>
        <Link href={viewLink} className='bg-[#D3D3D3]/75 rounded-[20px] text-[12px] shadow-lg p-2 hover:bg-[#D3D3D3] transition-all duration-200 text-black'>
          View Job
        </Link>
      </div>
    </div>
  );
};

export const JobCard2: React.FC<JobCardProps> = ({ openings,jobId, title, experience, location, skills, applyLink, viewLink }) => {
  return (
    <div className='bg-[#F7F7F7] p-8 shadow-lg'>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between'>
          <h3 className='text-[#5F5F5F] text-[28px]'>Job #{jobId}</h3>
          <h3 className='text-white text-[12px] bg-black flex justify-center items-center px-2 gap-2'>No. of Openings:<span className='text-[#28B673] font-semibold'>{openings}</span></h3>
        </div>
        
        <h2 className='text-[36px] font-medium'>{title}</h2>
        
        <div className='flex gap-4 items-center mt-2'>
            <p>Experience:</p>
            <span className='bg-[#D9D9D9] font-medium px-2 py-1 rounded-[20px] text-[12px] shadow-md'>{experience}</span>
        </div>
        <div className='flex gap-4 items-center mt-2'>
            <p>Location:</p>
            <span className='bg-[#D9D9D9] font-medium px-2 py-1 rounded-[20px] text-[12px] shadow-md'>{location}</span>
        </div>
        <div className='flex gap-4 items-center mt-2'>
          <p>Skills:</p>
          <div className='flex gap-2 flex-wrap'>
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className='font-medium px-2 py-1 bg-blue-100 text-[#28B673] rounded-full shadow-md text-[12px]'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className='flex justify-between mt-12' >
        <Link href={applyLink} className='bg-[#28B673]/75 text-white rounded-[20px] text-[18px] shadow-lg px-6 py-2 hover:bg-[#28B673] transition-all duration-200'>
          Apply Now
        </Link>
        <Link href={viewLink} className='bg-[#D3D3D3]/75 rounded-[20px] text-[18px] shadow-lg px-6 py-2 hover:bg-[#D3D3D3] transition-all duration-200 text-black'>
          View Job
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
