import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import SectionNav from "@/components/SectionNav";

const Index = () => {
  const upcomingEvents = [
    {
      title: "Weekly Club Meeting",
      date: "Every Friday, 4:00 PM",
      location: "BINUS Campus, Room 301",
      description:
        "Join us for casual play, puzzles and discussions. All skill levels welcome!",
      image:
        "https://images.unsplash.com/photo-1610633389918-7d5b62977dc3?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "BINUS Chess Tournament",
      date: "June 15, 2025",
      location: "BINUS Auditorium",
      description:
        "Our annual chess tournament with prizes for different categories and skill levels.",
      image:
        "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Grandmaster Workshop",
      date: "July 5, 2025",
      location: "BINUS Conference Room",
      description:
        "Learn advanced strategies from an international chess grandmaster.",
      image:
        "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&auto=format&fit=crop&q=80",
    },
  ];

  // Scroll handling for smooth navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - 100 &&
          scrollPosition < sectionTop + sectionHeight - 100
        ) {
          section.classList.add("active-section");
        } else {
          section.classList.remove("active-section");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SectionNav />
      <main className="flex-grow">
        {/* Hero Section - Full height */}
        <div id="home" className="section">
          <Hero />
        </div>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">About BINUS Chess Club</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2024, BINUS Chess Club is a community of chess
                enthusiasts at Bina Nusantara University. We welcome players of
                all skill levels, from beginners to advanced competitors.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to promote chess as an intellectual sport, create
                a supportive community, and represent BINUS University in
                competitive chess events.
              </p>
              <Button asChild className="bg-chessBlue hover:bg-chessBlue-light">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-chessBlue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-chessBlue">♟️</span>
                </div>
                <h3 className="font-bold text-xl text-chessBlue mb-2">
                  Weekly Meetings
                </h3>
                <p className="text-gray-600">
                  Regular practice sessions and friendly matches to improve your
                  skills.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-chessGreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-chessGreen">🏆</span>
                </div>
                <h3 className="font-bold text-xl text-chessGreen mb-2">
                  Tournaments
                </h3>
                <p className="text-gray-600">
                  Internal and inter-university competitions throughout the
                  academic year.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-chessBlue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-chessBlue">📚</span>
                </div>
                <h3 className="font-bold text-xl text-chessBlue mb-2">
                  Workshops
                </h3>
                <p className="text-gray-600">
                  Learn from experienced players and invited chess masters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-16 w-full">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Upcoming Events</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join us for our upcoming chess activities, tournaments, and
                workshops.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                  image={event.image}
                  buttonLink="/events"
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-chessBlue hover:bg-chessBlue-light">
                <Link to="/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Membership CTA Section - Moved back to bottom */}
        <section id="join" className="py-16 bg-chessBlue text-white w-full">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join BINUS Chess Club?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Whether you're a beginner or an experienced player, we welcome all
              BINUS students who share our passion for chess.
            </p>
            <Button
              asChild
              className="bg-white text-chessBlue hover:bg-gray-100 font-bold px-6 py-3"
            >
              <Link to="/contact">Join Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
