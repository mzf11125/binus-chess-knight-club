
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const EventCard = ({
  title,
  date,
  location,
  description,
  image,
  buttonText = "Learn More",
  buttonLink = "#",
  className,
}: EventCardProps) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden flex flex-col", className)}>
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-xl text-chessBlue mb-2">{title}</h3>
        <div className="text-sm text-gray-500 mb-4">
          <p>{date}</p>
          <p>{location}</p>
        </div>
        <p className="text-gray-600 mb-6 flex-1">{description}</p>
        <Button asChild className="self-start bg-chessBlue hover:bg-chessBlue-light">
          <a href={buttonLink}>{buttonText}</a>
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
