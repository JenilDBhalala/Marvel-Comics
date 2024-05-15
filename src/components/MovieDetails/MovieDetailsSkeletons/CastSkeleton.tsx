const CastSkeleton = () => {
  return (
    <div className="flex flex-col items-start">
      <svg
        className="h-16 w-16 text-gray-300 dark:text-gray-700"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
      </svg>
      <div className="mt-2">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
      </div>
    </div>
  );
};

export default CastSkeleton;
