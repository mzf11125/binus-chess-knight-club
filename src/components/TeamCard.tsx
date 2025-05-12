
import { cn } from "@/lib/utils";

interface TeamCardProps {
  name: string;
  position: string;
  rating?: number;
  image: string;
  bio: string;
  className?: string;
}

const TeamCard = ({ name, position, rating, image, bio, className }: TeamCardProps) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105", className)}>
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
        {rating && (
          <span className="absolute top-4 right-4 bg-chessBlue text-white py-1 px-3 rounded-full font-medium text-sm">
            Rating: {rating}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-chessBlue">{name}</h3>
        <h4 className="text-chessGreen font-medium mb-4">{position}</h4>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
