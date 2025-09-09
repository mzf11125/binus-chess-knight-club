
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { getUpcomingEvents, getPastEvents } from "@/data/events";

const Events = () => {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-chessBlue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover our upcoming chess tournaments, workshops, and community
              gatherings.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Upcoming Events</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Join us for these exciting chess events and activities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                  image={event.image}
                  buttonText="View Details"
                  buttonLink={`/events/${event.id}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="section-title">Event Calendar</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Check out our full calendar to plan ahead for all our chess
              activities.
            </p>
            <Button asChild className="bg-chessBlue hover:bg-chessBlue-light">
              <a
                href="https://docs.google.com/spreadsheets/d/106VX7b3Eu4mTLt_MMe4MDbuGmixvU_6cMtSxucBpob8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Calendar
              </a>
            </Button>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Past Events</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Take a look at our previous chess events and activities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                  image={event.image}
                  buttonText="View Details"
                  buttonLink={`/events/${event.id}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Host Section */}
        <section className="py-16 bg-chessGreen text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Host a Chess Event?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              We're always open to collaborations and hosting special chess
              events. Contact us with your ideas!
            </p>
            <div className="inline-block bg-white text-chessGreen hover:bg-gray-100 font-bold px-6 py-3 rounded transition-colors">
              <a href="/contact">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
