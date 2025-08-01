import React from 'react';

const JobDetailsComponent = ({ 
  jobNumber = "17892102",
  title = "Recruitment Consultants (All levels)",
  aboutTheJob = "We are hiring Recruitment Consultants with a minimum of 1 year of experience to join our dynamic team. In this role, you'll handle end-to-end recruitment, build client relationships, and source top talent across industries. We're looking for motivated individuals who thrive in fast-paced environments and are eager to grow their careers. Join us for a supportive work culture, performance-based incentives, and opportunities for professional advancement.",
  responsibilities = [
    "Manage the full recruitment lifecycle from job posting to candidate onboarding.",
    "Source and screen candidates through databases, job portals, and networking.",
    "Build and maintain strong relationships with clients to understand their hiring needs.",
    "Coordinate and schedule interviews, ensuring a smooth recruitment process.",
    "Provide regular updates and reports to clients on recruitment progress.",
    "Meet monthly/quarterly targets and contribute to team performance goals."
  ],
  requirements = [
    "Minimum 1 year of experience in recruitment or talent acquisition.",
    "Excellent communication, negotiation, and interpersonal skills.",
    "Ability to work independently and manage multiple roles simultaneously."
  ],
  benefits = [
    "Attractive performance-based incentives and bonuses.",
    "Opportunities for career growth and internal promotions.",
    "Supportive work environment with ongoing training and mentorship.",
    "Flexible work options and a healthy work-life balance."
  ],
  closingText = "This role is perfect for individuals eager to grow their career in recruitment, gain hands-on experience with real clients, and contribute to impactful hiring solutions. If you're passionate about connecting the right talent with the right opportunities and thrive in a fast-paced environment, we invite you to apply and grow with us!",
  onApply = () => console.log("Apply button clicked"),
  onSave = () => console.log("Save button clicked")
}) => {
  return (
    <div className="w-full max-w-[950px] mx-auto bg-gray-100 rounded-lg p-4 lg:p-8 font-sans">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h2 className="text-gray-600 text-base lg:text-lg font-medium mb-3 lg:mb-4">Job #{jobNumber}</h2>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight">{title}</h1>
      </div>

      {/* About the Job */}
      <div className="mb-6 lg:mb-8">
        <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4 flex items-center">
          <span className="w-2 h-2 bg-gray-800 rounded-full mr-3 flex-shrink-0"></span>
          About the Job
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
          {aboutTheJob}
        </p>
      </div>

      {/* Responsibilities */}
      <div className="mb-6 lg:mb-8">
        <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4 flex items-center">
          <span className="w-2 h-2 bg-gray-800 rounded-full mr-3 flex-shrink-0"></span>
          Responsibilities
        </h3>
        <ol className="space-y-2 lg:space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-gray-700 leading-relaxed text-sm lg:text-base">
              {index + 1}. {responsibility}
            </li>
          ))}
        </ol>
      </div>

      {/* Requirements */}
      <div className="mb-6 lg:mb-8">
        <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4 flex items-center">
          <span className="w-2 h-2 bg-gray-800 rounded-full mr-3 flex-shrink-0"></span>
          Requirements
        </h3>
        <ol className="space-y-2 lg:space-y-2">
          {requirements.map((requirement, index) => (
            <li key={index} className="text-gray-700 leading-relaxed text-sm lg:text-base">
              {index + 1}. {requirement}
            </li>
          ))}
        </ol>
      </div>

      {/* Benefits */}
      <div className="mb-6 lg:mb-8">
        <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4 flex items-center">
          <span className="w-2 h-2 bg-gray-800 rounded-full mr-3 flex-shrink-0"></span>
          Benefits
        </h3>
        <ol className="space-y-2 lg:space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-gray-700 leading-relaxed text-sm lg:text-base">
              {index + 1}. {benefit}
            </li>
          ))}
        </ol>
      </div>

      {/* Closing Text */}
      <div className="mb-6 lg:mb-8">
        <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
          {closingText}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
        <button 
          onClick={onApply}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 lg:px-8 rounded-full transition-colors duration-200 text-sm lg:text-base text-center"
        >
          APPLY NOW
        </button>
        <button 
          onClick={onSave}
          className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 lg:px-8 rounded-full border-2 border-gray-300 transition-colors duration-200 text-sm lg:text-base text-center"
        >
          SAVE THIS JOB
        </button>
      </div>
    </div>
  );
};

export default JobDetailsComponent;