import { ICast } from "../../utils/CommonInterfaces/movieDetails";
import { CastImageSkeleton } from "../MovieDetailsSkeletons/CastSkeleton";

interface CastMemberProps {
  cast_member: ICast;
}

export const CastMember = ({ cast_member }: CastMemberProps) => {
  const movieImageBaseURL = import.meta.env.VITE_MOVIE_IMAGE_BASE_URL;

  return (
    <div className="flex flex-col items-center">
      {cast_member?.profile_path ? (
        <img
          alt="Cast Member"
          className="h-16 w-16 rounded-full"
          height={64}
          src={`${movieImageBaseURL}${cast_member?.profile_path}`}
          style={{
            aspectRatio: "64/64",
            objectFit: "cover",
          }}
          width={64}
        />
      ) : (
        <CastImageSkeleton />
      )}
      <div className="mt-2 text-sm font-medium text-center">{cast_member?.name}</div>
    </div>
  );
};
