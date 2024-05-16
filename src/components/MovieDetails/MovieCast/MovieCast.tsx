import { useState } from "react";
import { ICast } from "../../utils/CommonInterfaces/movieDetails";
import { CastMember } from "./CastMember";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface MovieCastProps {
  cast: ICast[];
}

export const MovieCast = ({ cast }: MovieCastProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const initialCast = cast?.slice(0, 15);
  const remainingCast = cast?.slice(15);

  return (
    <div className={`grid grid-cols-4 md:grid-cols-8 gap-3 ${!expanded ? 'expanded' : 'collapsed'}`}>
      {initialCast?.map((cast_member) => (
        <CastMember key={cast_member?.id} cast_member={cast_member} />
      ))}
      {/* Display "Down" icon when not expanded */}
      {!expanded && remainingCast?.length > 0 && (
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={toggleExpand}
        >
          <FaAngleDown className="h-6 w-6" title="expand cast" />
        </div>
      )}
      {/* Display remaining cast members when expanded */}
      {expanded &&
        remainingCast?.map((cast_member) => (
          <CastMember key={cast_member?.id} cast_member={cast_member} />
        ))}
      {expanded && (
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={toggleExpand}
        >
          <FaAngleUp className="h-6 w-6" title="collapse cast" />
        </div>
      )}
    </div>
  );
};
