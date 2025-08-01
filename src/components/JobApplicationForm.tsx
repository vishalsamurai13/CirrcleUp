import React, { useState } from 'react';

// Define the shape of form data
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  expectedSalary: string;
  lastCompany: string;
  workExperience: string;
  marketingConsent: boolean;
}

// Define the shape of files
interface Files {
  cv: File | null;
  coverLetter: File | null;
}

// Define the component props
interface JobApplicationFormProps {
  jobNumber?: string;
  title?: string;
  onSubmit?: (formData: FormData & { files: Files; jobNumber: string; title: string }) => void;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({
  jobNumber = "17892102",
  title = "Recruitment Consultants (All levels)",
  onSubmit = (formData) => console.log("Form submitted:", formData),
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    expectedSalary: '',
    lastCompany: '',
    workExperience: '',
    marketingConsent: false,
  });

  const [files, setFiles] = useState<Files>({
    cv: null,
    coverLetter: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileUpload = (
    type: 'cv' | 'coverLetter',
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0] || null; // Null check for files
    if (file) {
      setFiles((prev) => ({
        ...prev,
        [type]: file,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      files,
      jobNumber,
      title,
    };
    onSubmit(submitData);
  };

  return (
    <div className="w-full max-w-[950px] mx-auto bg-gray-100 rounded-lg p-4 lg:p-8 font-sans">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h2 className="text-gray-600 text-base lg:text-lg font-medium mb-3 lg:mb-4">Job #{jobNumber}</h2>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight">{title}</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-gray-800 text-sm lg:text-base font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full p-3 lg:p-4 border-2 border-gray-800 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm lg:text-base"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-gray-800 text-sm lg:text-base font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 lg:p-4 border-2 border-gray-800 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm lg:text-base"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-800 text-sm lg:text-base font-medium mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-3 lg:p-4 border-2 border-gray-800 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm lg:text-base"
          />
        </div>

        {/* Expected Salary and Last Company */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-800 text-sm lg:text-base font-medium mb-2">
              Your Expected Salary *
            </label>
            <input
              type="text"
              name="expectedSalary"
              value={formData.expectedSalary}
              onChange={handleInputChange}
              className="w-full p-3 lg:p-4 border-2 border-gray-800 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm lg:text-base"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-sm lg:text-base font-medium mb-2">
              Last Company *
            </label>
            <input
              type="text"
              name="lastCompany"
              value={formData.lastCompany}
              onChange={handleInputChange}
              className="w-full p-3 lg:p-4 border-2 border-gray-800 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm lg:text-base"
            />
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <label className="block text-gray-800 text-sm lg:text-base font-medium mb-2">
            Write Something about your previous work experiences here *
          </label>
          <textarea
            name="workExperience"
            value={formData.workExperience}
            onChange={handleInputChange}
            rows={4}
            className="w-full p-3 lg:p-4 border-2 border-gray-800 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm lg:text-base lg:rows-6"
          />
        </div>

        {/* File Uploads */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* CV Upload */}
          <div>
            <label className="block text-gray-800 text-sm lg:text-base font-medium mb-3 lg:mb-4">
              Upload your CV *
            </label>
            <div className="border-2 border-dashed border-gray-800 rounded-lg p-6 lg:p-8 text-center bg-transparent">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileUpload('cv', e)}
                className="hidden"
                id="cv-upload"
              />
              <label htmlFor="cv-upload" className="cursor-pointer">
                <div className="w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-3 lg:mb-4 border-2 border-gray-800 rounded-full flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    className="lg:w-6 lg:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {files.cv ? (
                  <p className="text-gray-700 text-xs lg:text-sm break-all px-2">{files.cv.name}</p>
                ) : (
                  <p className="text-gray-700 text-xs lg:text-sm">Click to upload CV</p>
                )}
              </label>
            </div>
          </div>

          {/* Cover Letter Upload */}
          <div>
            <label className="block text-gray-800 text-sm lg:text-base font-medium mb-3 lg:mb-4">
              Upload Cover Letter
            </label>
            <div className="border-2 border-dashed border-gray-800 rounded-lg p-6 lg:p-8 text-center bg-transparent">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileUpload('coverLetter', e)}
                className="hidden"
                id="cover-letter-upload"
              />
              <label htmlFor="cover-letter-upload" className="cursor-pointer">
                <div className="w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-3 lg:mb-4 border-2 border-gray-800 rounded-full flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    className="lg:w-6 lg:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {files.coverLetter ? (
                  <p className="text-gray-700 text-xs lg:text-sm break-all px-2">{files.coverLetter.name}</p>
                ) : (
                  <p className="text-gray-700 text-xs lg:text-sm">Click to upload Cover Letter</p>
                )}
              </label>
            </div>
          </div>
        </div>

        {/* Marketing Consent */}
        <div className="flex items-start lg:items-center gap-3">
          <input
            type="checkbox"
            id="marketing-consent"
            name="marketingConsent"
            checked={formData.marketingConsent}
            onChange={handleInputChange}
            className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 border-2 border-gray-800 rounded focus:ring-green-500 focus:ring-2 mt-1 lg:mt-0 flex-shrink-0"
          />
          <label htmlFor="marketing-consent" className="text-gray-800 text-sm lg:text-base leading-relaxed">
            I would like to receive marketing communication from CircleUp
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-full transition-colors duration-200 text-base lg:text-lg"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;