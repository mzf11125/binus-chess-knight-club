import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const EventDetail = () => {
  const { id } = useParams();

  // Sample event data - in a real app this would come from an API
  const allEvents = [
    {
      id: "weekly-meeting",
      title: "Weekly Club Meeting",
      date: "Every Friday, 4:00 PM",
      location: "BINUS Campus, Room 301",
      description:
        "Join us for casual play, puzzles and discussions. All skill levels welcome!",
      image: "/dailyblitzkrieg.jpeg",
      type: "upcoming",
      fullDescription:
        "Our weekly club meetings are the heart of our chess community. Every Friday at 4:00 PM, we gather in Room 301 for an evening of chess, learning, and friendship. Whether you're a complete beginner or an experienced player, you'll find a welcoming environment to improve your game. We typically start with casual games, followed by puzzle-solving sessions and discussions about chess strategies. Don't forget to bring your chess set if you have one!",
    },
    {
      id: "grand-launching",
      title: "Grand Launching BCC",
      date: "March 13, 2025",
      location: "BINUS Auditorium",
      description: "Our grand launching as official BINUS club.",
      image: "/bcclaunch.jpeg",
      type: "past",
      fullDescription:
        "The grand launching of BINUS Chess Club was a momentous occasion that marked our official recognition as a student organization. The event took place in the main auditorium with over 200 attendees, including faculty members, students, and chess enthusiasts. The ceremony featured opening remarks from university officials, a chess exhibition match, and the unveiling of our club charter. This event established our commitment to promoting chess culture within the BINUS community.",
    },
  ];

  const event = allEvents.find((event) => event.id === id);

  if (!event) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
            <p className="text-gray-600 mb-8">
              The event you're looking for doesn't exist.
            </p>
            <Button asChild className="bg-chessBlue hover:bg-chessBlue-light">
              <a href="/events">Back to Events</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-chessBlue text-white py-16">
          <div className="container mx-auto px-4">
            <Button
              asChild
              className="mb-6 bg-white text-chessBlue hover:bg-gray-100"
            >
              <a href="/events">← Back to Events</a>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {event.title}
            </h1>
            <div className="text-xl mb-4">
              <p className="mb-2">📅 {event.date}</p>
              <p>📍 {event.location}</p>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-chessBlue">
                  About This Event
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {event.fullDescription}
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Event Details</h3>
                  <div className="space-y-2">
                    <p>
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p>
                      <strong>Type:</strong>{" "}
                      {event.type === "upcoming"
                        ? "Upcoming Event"
                        : "Past Event"}
                    </p>
                  </div>
                </div>

                {event.type === "upcoming" && (
                  <div className="space-y-4">
                    <Button className="w-full bg-chessBlue hover:bg-chessBlue-light">
                      Register for Event
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href="/contact">Contact for More Info</a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;
