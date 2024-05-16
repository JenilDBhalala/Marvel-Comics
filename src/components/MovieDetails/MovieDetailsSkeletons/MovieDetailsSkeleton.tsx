import CastSkeleton from "./CastSkeleton";
import MovieDetailBackdropSkeleton from "./MovieDetailBackdropSkeleton";
import MovieDetailPosterSkeleton from "./MovieDetailPosterSkeleton";

const MovieDetailsSkeleton = () => {
  const castSkeletonCount: number = 8;
  return (
    <div className="animate-pulse min-h-screen w-full bg-zinc-200 text-black dark:bg-[#1D232A] dark:text-white">
      <div className="relative h-[65vh] w-full overflow-hidden">
        <MovieDetailBackdropSkeleton />
      </div>
      <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr]">
          <div className="relative">
            <MovieDetailPosterSkeleton />
          </div>
          <div className="space-y-6">
            <div>
              <div className="h-10 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-700 mb-2.5"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="h-3.5 bg-gray-300 rounded-full w-24 dark:bg-gray-700 mb-2.5"></div>
                <div className="h-4 bg-gray-300 rounded-full w-12 dark:bg-gray-700 mb-2.5"></div>
              </div>
              <div>
                <div className="h-3.5 bg-gray-300 rounded-full w-20 dark:bg-gray-700 mb-2.5"></div>
                <div className="h-4 bg-gray-300 rounded-full w-28 dark:bg-gray-700 mb-2.5"></div>
              </div>
              <div>
                <div className="h-3.5 bg-gray-300 rounded-full w-16 dark:bg-gray-700 mb-2.5"></div>
                <div className="h-4 bg-gray-300 rounded-full w-28 dark:bg-gray-700 mb-2.5"></div>
              </div>
              <div>
                <div className="h-3.5 bg-gray-300 rounded-full w-20 dark:bg-gray-700 mb-2.5"></div>
                <div className="h-4 bg-gray-300 rounded-full w-32 dark:bg-gray-700 mb-2.5"></div>
              </div>

              <div>
                <div className="h-3.5 bg-gray-300 rounded-full w-16 dark:bg-gray-700 mb-2.5"></div>
                <div className="h-4 bg-gray-300 rounded-full w-24 dark:bg-gray-700 mb-2.5"></div>
              </div>
              <div>
                <div className="h-3.5 bg-gray-300 rounded-full w-14 dark:bg-gray-700 mb-2.5"></div>
                <div className="h-4 bg-gray-300 rounded-full w-10 dark:bg-gray-700 mb-2.5"></div>
              </div>
            </div>
            <div>
              <div className="h-3.5 bg-gray-300 rounded-full w-16 dark:bg-gray-700 mb-2.5"></div>
              <div className="inline-grid grid-cols-3 gap-4 ">
                <div className="h-4 bg-gray-300 rounded-full w-20 dark:bg-gray-700 mb-2.5"></div>
                <div className="h-4 bg-gray-300 rounded-full w-20 dark:bg-gray-700 mb-2.5"></div>
                <div className="h-4 bg-gray-300 rounded-full w-20 dark:bg-gray-700 mb-2.5"></div>
              </div>
            </div>
            <div>
              <div className="h-3.5 bg-gray-300 rounded-full w-16 dark:bg-gray-700 mb-2.5"></div>
              <div className="h-4 bg-gray-300 rounded-full w-30 dark:bg-gray-700 mb-2.5"></div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold">Cast</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2.5 items-start">
            {[...Array(castSkeletonCount)].map((_, index) => (
              <CastSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSkeleton;
