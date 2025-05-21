import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";

const Team = () => {
  const organizers = [
    {
      name: "Galvent",
      position: "President & Founder",
      rating: 1850,
      image: "galvent.png",
      bio: "Galvent founded the BINUS Chess Club and currently serves as its president, leading with passion and strategic vision.",
    },
    {
      name: "Geoffrey",
      position: "Secretary",
      rating: 1760,
      image: "Geoffrey.png",
      bio: "Geoffrey manages all club documentation, meeting minutes, and communications with members.",
    },
    {
      name: "Moreno",
      position: "Treasurer",
      rating: 1700,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      bio: "Moreno oversees the club's finances, budget planning, and ensures proper fund allocation for events.",
    },
    {
      name: "Zidan",
      position: "IT Staff",
      rating: 1200,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
      bio: "Zidan manages the club's digital presence, website, and technical infrastructure for online tournaments.",
    },
    {
      name: "Steven",
      position: "Event Manager",
      rating: 1580,
      image: "stevenang.png",
      bio: "Steven plans and coordinates all chess events, tournaments, and workshops for the club.",
    },
    {
      name: "Keven",
      position: "Marketing Manager",
      rating: 1500,
      image: "keven.png",
      bio: "Keven manages promotional activities, social media, and outreach campaigns for the club.",
    },
    {
      name: "Aristo",
      position: "Event Deputy",
      rating: 1720,
      image: "aristo.png",
      bio: "Aristo assists in event planning and execution, ensuring smooth operations during club activities.",
    },
    {
      name: "Michaela",
      position: "Event Deputy",
      rating: 1720,
      image: "aristo.png",
      bio: "Aristo assists in event planning and execution, ensuring smooth operations during club activities.",
    },
  ];

  const activists = [
    {
      name: "Steven",
      position: "Event Manager",
      rating: 1580,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      bio: "Steven plans and coordinates all chess events, tournaments, and workshops for the club.",
    },
    {
      name: "Keven",
      position: "Marketing Manager",
      rating: 1500,
      image:
        "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&auto=format&fit=crop&q=80",
      bio: "Keven manages promotional activities, social media, and outreach campaigns for the club.",
    },
    {
      name: "Aristo",
      position: "Event Deputy",
      rating: 1720,
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
      bio: "Aristo assists in event planning and execution, ensuring smooth operations during club activities.",
    },
  ];

  const members = [
    {
      name: "Jessica Wijaya",
      position: "Active Member",
      rating: 1430,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
      bio: "Jessica joined in 2023 and has shown remarkable improvement in her chess skills.",
    },
    {
      name: "Budi Santoso",
      position: "Active Member",
      rating: 1550,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
      bio: "Budi specializes in endgame strategies and participates in all club tournaments.",
    },
    {
      name: "Dewi Anggraini",
      position: "Active Member",
      rating: 1480,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
      bio: "Dewi is a dedicated member who helps organize outreach events.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-chessBlue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Meet the dedicated people behind BINUS Chess Club who work hard to
              create a thriving chess community.
            </p>
          </div>
        </section>

        {/* Organizers Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Club Organizers</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our leadership team is responsible for coordinating club
              activities and strategic planning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {organizers.map((organizer, index) => (
                <TeamCard
                  key={index}
                  name={organizer.name}
                  position={organizer.position}
                  rating={organizer.rating}
                  image={organizer.image}
                  bio={organizer.bio}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Club Activist</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our Staff help run club operations and contribute significantly to
              our community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activists.map((activist, index) => (
                <TeamCard
                  key={index}
                  name={activist.name}
                  position={activist.position}
                  rating={activist.rating}
                  image={activist.image}
                  bio={activist.bio}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Members Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Hall of Fame</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              These are some of our dedicated members who regularly participate
              in club activities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <TeamCard
                  key={index}
                  name={member.name}
                  position={member.position}
                  rating={member.rating}
                  image={member.image}
                  bio={member.bio}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section className="py-16 bg-chessGreen text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              We're always looking for enthusiastic chess players to join our
              community. Become a member today and be part of our growing chess
              family!
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

export default Team;
