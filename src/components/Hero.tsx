import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-chessBlue text-white w-full h-screen flex items-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('together2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          filter: "brightness(0.7)",
        }}
      ></div>
      <div className="container relative mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Welcome to BINUS Chess Club
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-10 animate-slide-up">
          Join our community of chess enthusiasts to learn, compete, and grow
          together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
          <Button
            asChild
            className="bg-white text-chessBlue hover:bg-gray-100 font-bold px-6 py-3"
          >
            <Link to="/events">Upcoming Events</Link>
          </Button>
          <Button
            asChild
            className="bg-chessGreen hover:bg-chessGreen-light font-bold px-6 py-3"
          >
            <Link to="/contact">Join Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
