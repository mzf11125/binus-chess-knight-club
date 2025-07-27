import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";

// TODO:
/*
PICTURES:
Stanley Christian Gunawan
Fahri Fadhil
Muhammad Reza Alghifari
Jordan

CHESSCOM USERNAMES:
Galvent Chiuwen
Jordan
Michaela Zaneta Hwang
Keven Wilbert Felik
*/
const Team = () => {
  const organizers = [
    {
      name: "Galvent Chiuwen",
      position: "President & Founder",
      rating: 2010,
      image: "galvent.png",
      bio: "Galvent founded the BINUS Chess Club and currently serves as its president, leading with passion and strategic vision.",
      chessComUsername: "Orangemuffin67"
    },
    {
      name: "Alessandro Moreno Lawadinata",
      position: "Treasurer",
      rating: 2230,
      image: "alessandromoreno.png",
      bio: "High-rated organizer contributing significantly to club treasuries and finances.",
      chessComUsername: "AlessandroMoreno96",
    },
    {
      name: "Geoffrey Antonio Arifin",
      position: "Secretary",
      rating: 2010,
      image: "Geoffrey.png",
      bio: "Geoffrey manages all club documentation, meeting minutes, and communications with members.",
      chessComUsername: "AutumnMann19",
    },
    {
      name: "Aristo Ardy Wijaya",
      position: "Event Deputy",
      rating: 1960,
      image: "aristo.png",
      bio: "Aristo assists in event planning and execution, ensuring smooth operations during club activities.",
      chessComUsername: "aristo123456",
    },
    {
      name: "Muhammad Zidan Fatonie",
      position: "IT Staff",
      rating: 1460,
      image: "zidan.png",
      bio: "Zidan manages the club's digital presence, website, and technical infrastructure for online tournaments.",
      chessComUsername: "mzf11125",
    },
    {
      name: "Steven Ang",
      position: "Event Manager",
      rating: 1240,
      image: "stevenang.png",
      bio: "Steven plans and coordinates all chess events, tournaments, and workshops for the club.",
      chessComUsername: "PhantomXRG",
    },
    {
      name: "Keven Wilbert Felik",
      position: "Marketing Manager",
      rating: 1,
      image: "keven.png",
      bio: "Keven manages promotional activities, social media, and outreach campaigns for the club.",
    },
  ];

  const activists = [
    {
      name: "Syuja Ardhanu",
      position: "Club Activist",
      rating: 2290,
      image: "activist/scaled/syuja.png",
      bio: "Committed member contributing to various club initiatives and activities.",
    },
    {
      name: "Hans Kartawinata",
      position: "Club Activist",
      rating: 2160,
      image: "activist/scaled/hans.png",
      bio: "Highly skilled activist contributing to club development and member engagement.",
      chessComUsername: "Countered",
    },
    {
      name: "Stanley Christian Gunawan",
      position: "Club Activist",
      rating: 1630,
      image: "activist/scaled/stanley.png",
      bio: "Dedicated activist supporting various club initiatives and activities.",
      chessComUsername: "Stych2312",
    },
    {
      name: "Josevan NoeleDave",
      position: "Club Activist",
      rating: 1600,
      image: "activist/scaled/noele.png",
      bio: "Active member contributing to the club's growth and community building efforts.",
      chessComUsername: "NoeleDavee",
    },
    {
      name: "Sia Malvino Al Keane",
      position: "Club Activist",
      rating: 1510,
      image: "activist/scaled/malvino.png",
      bio: "Enthusiastic activist participating in club events and member development.",
      chessComUsername: "malmal_l",
    },
    {
      name: "Hibatullah Dony Ananda",
      position: "Club Activist",
      rating: 1480,
      image: "activist/scaled/hibatullah.png",
      bio: "Committed activist supporting club operations and community outreach.",
      chessComUsername: "yellowcat2224",
    },
    {
      name: "Dominikus Sebastian Ramli",
      position: "Club Activist",
      rating: 1420,
      image: "activist/scaled/sebastian.png",
      bio: "Active member contributing to various club initiatives and events.",
      chessComUsername: "Bas77z",
    },
    {
      name: "Fahri Fadhil",
      position: "Club Activist",
      rating: 1400,
      image: "activist/scaled/fahri.png",
      bio: "Dedicated activist supporting club development and member engagement.",
      chessComUsername: "Codename_Vangeance",
    },
    {
      name: "Melsandi Gunawan",
      position: "Club Activist",
      rating: 1380,
      image: "activist/scaled/melsandi.png",
      bio: "Enthusiastic member contributing to club activities and growth.",
      chessComUsername: "MELSANDI",
    },
    {
      name: "Owen Siau",
      position: "Club Activist",
      rating: 1270,
      image: "activist/scaled/owen.png",
      bio: "Active participant in club events and community building efforts.",
      chessComUsername: "Ony0n",
    },
    {
      name: "Nathanael Vitzgerald",
      position: "Club Activist",
      rating: 1250,
      image: "activist/scaled/nathanael.png",
      bio: "Committed member supporting various club initiatives and activities.",
      chessComUsername: "IJN_MuSaNathShi",
    },
    {
      name: "Anthony Vriyatama",
      position: "Club Activist",
      rating: 1220,
      image: "activist/scaled/anthony.png",
      bio: "Dedicated activist contributing to club development and member engagement.",
      chessComUsername: "tonyvvv",
    },
    {
      name: "Muhammad Reza Alghifari",
      position: "Club Activist",
      rating: 1130,
      image: "activist/scaled/reza.png",
      bio: "Active member participating in club events and activities.",
      chessComUsername: "Expanics",
    },
    {
      name: "Frederick Sawedi",
      position: "Club Activist",
      rating: 520,
      image: "activist/scaled/frederick.png",
      bio: "Enthusiastic member contributing to club community and development.",
      chessComUsername: "FrederickSawedi",
    },
    {
      name: "Osel Citta Chen",
      position: "Club Activist",
      rating: 420,
      image: "activist/scaled/osel.png",
      bio: "Dedicated member supporting club activities and growth initiatives.",
      chessComUsername: "Spitblaze",
    },
    {
      name: "Jeremiah Chang",
      position: "Club Activist",
      rating: 400,
      image: "activist/scaled/jeremiah.png",
      bio: "Active participant in club events and community building efforts.",
      chessComUsername: "Jeremiah-Chang",
    },
    {
      name: "Jordan",
      position: "Club Activist",
      rating: 400,
      image: "activist/scaled/jordan.png",
      bio: "Committed member contributing to various club initiatives and activities.",
    },
    {
      name: "Michaela Zaneta Hwang",
      position: "Event Deputy",
      rating: 400,
      image: "activist/scaled/michaela.png",
      bio: "Michaela assists in event planning and execution, ensuring smooth operations during club activities.",
    },
  ];

  const HonorableMention = [
    {
      name: "Bakti Amirul Jabar",
      position: "Club Activist",
      rating: 2160,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      bio: "Highly skilled activist contributing to club development and member engagement.",
    },
    {
      name: "Bakti Amirul Jabar",
      position: "Club Activist",
      rating: 2160,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      bio: "Highly skilled activist contributing to club development and member engagement.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-chessBlue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hall of Fame
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Meet our top-rated chess players and dedicated club members ranked
              by their chess ratings.
            </p>
          </div>
        </section>

        {/* Organizers Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Club Organizers</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our leadership team and organizers who coordinate club activities
              and strategic planning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {organizers.map((organizer, index) => (
                <TeamCard
                  key={index}
                  name={organizer.name}
                  position={organizer.position}
                  rating={organizer.rating}
                  image={organizer.image}
                  bio={organizer.bio}
                  chessComUsername={organizer.chessComUsername}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Activists Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Club Activists</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our dedicated activists who actively participate in club events
              and contribute to our community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {activists.map((activist, index) => (
                <TeamCard
                  key={index}
                  name={activist.name}
                  position={activist.position}
                  rating={activist.rating}
                  image={activist.image}
                  bio={activist.bio}
                  chessComUsername={activist.chessComUsername}
                />
              ))}
            </div>
          </div>
        </section>

        {/* hall of fame Section
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Honorable Mention</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our dedicated activists who actively participate in club events
              and contribute to our community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </section> */}

        {/* Join Section */}
        <section className="py-16 bg-chessGreen text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Join Our Hall of Fame?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              We're always looking for enthusiastic chess players to join our
              community. Become a member today and climb up our Hall of Fame
              rankings!
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
