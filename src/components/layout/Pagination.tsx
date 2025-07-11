"use client";
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className = ''
}) => {
  // Helper function to generate pagination range
  const getPageNumbers = () => {
    const delta = siblingCount;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const pageNumbers = totalPages > 1 ? getPageNumbers() : [];

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number') {
      onPageChange(page);
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`
          w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors
          ${currentPage === 1
            ? 'border-gray-200 text-gray-300 cursor-not-allowed'
            : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800'
          }
        `}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-2 py-1 text-gray-400 text-sm font-medium">
              ...
            </span>
          ) : (
            <button
              onClick={() => handlePageClick(page)}
              className={`
                w-10 h-10 rounded-full text-sm font-medium transition-colors
                ${page === currentPage
                  ? 'bg-green-500 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }
              `}
              aria-label={`Go to page ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`
          w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors
          ${currentPage === totalPages
            ? 'border-gray-200 text-gray-300 cursor-not-allowed'
            : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800'
          }
        `}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};
