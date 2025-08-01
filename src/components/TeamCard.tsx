
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

  const handleRatingClick = () => {
    if (chessComUsername) {
      window.open(`https://www.chess.com/member/${chessComUsername}`, '_blank');
    }
  };

  const handleUsernameClick = () => {
    if (chessComUsername) {
      window.open(`https://www.chess.com/member/${chessComUsername}`, '_blank');
    }
  };

  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105", className)}>
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
        {displayRating && (
          <button
            onClick={handleRatingClick}
            disabled={!chessComUsername}
            className={cn(
              "absolute top-4 right-4 py-1 px-3 rounded-full font-medium text-sm flex items-center gap-1 transition-all duration-200",
              chessComUsername 
                ? "bg-chessBlue text-white hover:bg-chessBlue-light hover:scale-105 cursor-pointer" 
                : "bg-chessBlue text-white cursor-default"
            )}
          >
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
          </button>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-chessBlue">{name}</h3>
        <h4 className="text-chessGreen font-medium mb-4">{position}</h4>
        <p className="text-gray-600">{bio}</p>
        {chessComUsername && (
          <button
            onClick={handleUsernameClick}
            className="text-xs text-gray-500 mt-2 hover:text-chessBlue hover:underline transition-colors cursor-pointer"
          >
            Chess.com: @{chessComUsername}
          </button>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
