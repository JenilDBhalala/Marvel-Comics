const MovieDetails = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-200 text-black dark:bg-gray-900 dark:text-white">
      <div className="relative h-[65vh] w-full overflow-hidden">
        <div>
            <img
              alt="Movie Backdrop"
              className="h-full w-full object-cover object-top"
              src="https://image.tmdb.org/t/p/w500/kGWpZewzInbzTuaIHcy0bFgzXuM.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-200 to-transparent dark:from-gray-900" />
        </div>
      </div>
      <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr]">
          <div className="relative">
            <img
              alt="Movie Poster"
              className="h-auto w-full rounded-lg shadow-lg"
              height={450}
              src="https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
              style={{
                aspectRatio: "300/450",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="mt-4">
              <h2 className="text-lg font-bold">Cast</h2>
              <div className="grid grid-cols-5 gap-4 items-start">
                <div className="flex flex-col items-center">
                  <img
                    alt="Cast Member"
                    className="h-16 w-16 rounded-full"
                    height={64}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width={64}
                  />
                  <div className="mt-2 text-sm font-medium">
                    Timothée Chalamet
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    alt="Cast Member"
                    className="h-16 w-16 rounded-full"
                    height={64}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width={64}
                  />
                  <div className="mt-2 text-sm font-medium">
                    Rebecca Ferguson
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    alt="Cast Member"
                    className="h-16 w-16 rounded-full"
                    height={64}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width={64}
                  />
                  <div className="mt-2 text-sm font-medium">Oscar Isaac</div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    alt="Cast Member"
                    className="h-16 w-16 rounded-full"
                    height={64}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width={64}
                  />
                  <div className="mt-2 text-sm font-medium">Zendaya</div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    alt="Cast Member"
                    className="h-16 w-16 rounded-full"
                    height={64}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width={64}
                  />
                  <div className="mt-2 text-sm font-medium">Javier Bardem</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold">Dune</h1>
              <p className="mt-2 text-lg text-gray-900 dark:text-gray-400">
                A mythic and emotionally charged hero's journey, "Dune" tells
                the story of Paul Atreides, a brilliant and gifted young man
                born into a great destiny beyond his understanding, who must
                travel to the most dangerous planet in the universe to ensure
                the future of his family and his people.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-gray-900 dark:text-gray-400">Release Year</div>
                <div className="text-lg font-medium">2021</div>
              </div>
              <div>
                <div className="text-gray-900 dark:text-gray-400">Runtime</div>
                <div className="text-lg font-medium">155 minutes</div>
              </div>
              <div>
                <div className="text-gray-900 dark:text-gray-400">Budget</div>
                <div className="text-lg font-medium">$165,000,000</div>
              </div>
              <div>
                <div className="text-gray-900 dark:text-gray-400">Revenues</div>
                <div className="text-lg font-medium">$400,000,000</div>
              </div>
             
              <div>
                <div className="text-gray-900 dark:text-gray-400">Status</div>
                <div className="text-lg font-medium">Released</div>
              </div>
              <div>
                <div className="text-gray-900 dark:text-gray-400">IMDB</div>
                <div className="text-lg font-medium">8.2</div>
              </div>
            </div>
              <div>
                <div className="text-gray-900 dark:text-gray-400">Genres</div>
                <ul className="space-x-3 flex">
                  <li>Science Fiction</li>
                  <li>Action</li>
                  <li>Adventure</li>
                </ul>
              </div>
            <div>
              <div className="text-gray-900 dark:text-gray-400">Tagline</div>
              <div className="text-lg font-medium">
                "A mythic and emotionally charged hero's journey."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
