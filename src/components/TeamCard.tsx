
import { cn } from "@/lib/utils";
import { useChessRating } from "@/hooks/useChessRating";

interface TeamCardProps {
  name: string;
  position: string;
  rating?: number;
  image: string;
  bio: string;
  className?: string;
  chessComUsername?: string;
}

const TeamCard = ({ name, position, rating, image, bio, className, chessComUsername }: TeamCardProps) => {
  const { data: liveRating, isLoading } = useChessRating(chessComUsername, rating || 0);
  
  const displayRating = liveRating || rating;

  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105", className)}>
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
        {displayRating && (
          <span className="absolute top-4 right-4 bg-chessBlue text-white py-1 px-3 rounded-full font-medium text-sm flex items-center gap-1">
            {isLoading ? (
              <span className="animate-pulse">Loading...</span>
            ) : (
              <>
                Rating: {displayRating}
                {chessComUsername && !isLoading && (
                  <span className="text-xs opacity-75">📡</span>
                )}
              </>
            )}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-chessBlue">{name}</h3>
        <h4 className="text-chessGreen font-medium mb-4">{position}</h4>
        <p className="text-gray-600">{bio}</p>
        {chessComUsername && (
          <p className="text-xs text-gray-500 mt-2">
            Chess.com: @{chessComUsername}
          </p>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
