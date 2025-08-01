import { useState, useMemo } from "react";
import { useQueries } from '@tanstack/react-query';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import { Trophy, Medal, Award, ChevronDown, ChevronUp } from "lucide-react";

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
  const [showAllTopMembers, setShowAllTopMembers] = useState(false);
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
      chessComUsername: "ds0401",
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

  // Combine all members and sort by rating for Hall of Fame
  const allMembers = [...organizers, ...activists].sort((a, b) => b.rating - a.rating);
  const topMembers = allMembers.slice(0, 10);

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

        {/* Hall of Fame Top 10 Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">🏆 Top Highest Rated Members</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our elite chess players with the highest ratings across all club members.
            </p>
            <div className="max-w-2xl mx-auto">
              <TopRatedMembersList 
                allMembers={allMembers} 
                showAll={showAllTopMembers}
              />
              
              {/* Expand/Collapse Button */}
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllTopMembers(!showAllTopMembers)}
                  className="flex items-center gap-2 mx-auto text-chessBlue hover:text-chessGreen font-medium transition-colors"
                >
                  {showAllTopMembers ? (
                    <>
                      Show Less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Show More <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
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

// Fetch chess.com rating helper function
const fetchChessComRating = async (username: string): Promise<number | null> => {
  try {
    const response = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
    if (!response.ok) {
      throw new Error('Player not found');
    }
    
    const data = await response.json();
    
    // Get all available ratings
    const ratings = [
      data.chess_rapid?.last?.rating,
      data.chess_blitz?.last?.rating,
      data.chess_bullet?.last?.rating,
    ].filter((rating): rating is number => rating !== undefined);
    
    // Return the highest rating, or null if no ratings found
    return ratings.length > 0 ? Math.max(...ratings) : null;
  } catch (error) {
    console.log(`Failed to fetch rating for ${username}:`, error);
    return null;
  }
};

// Component that handles fetching all ratings and sorting them
const TopRatedMembersList = ({ allMembers, showAll }: { allMembers: any[]; showAll: boolean }) => {
  // Fetch ratings for all members with chess.com usernames
  const ratingQueries = useQueries({
    queries: allMembers.map((member) => ({
      queryKey: ['chessRating', member.chessComUsername],
      queryFn: () => member.chessComUsername ? fetchChessComRating(member.chessComUsername) : Promise.resolve(null),
      enabled: !!member.chessComUsername,
      staleTime: 1000 * 60 * 60, // 1 hour
      retry: 1,
    }))
  });

  const sortedMembers = useMemo(() => {
    // Create members with live ratings
    const membersWithLiveRatings = allMembers.map((member, index) => {
      const query = ratingQueries[index];
      const liveRating = query.data;
      const isLoading = query.isLoading;
      
      return {
        ...member,
        liveRating: liveRating || member.rating,
        isLoadingRating: isLoading,
        hasLiveData: !!liveRating
      };
    });

    // Sort by live rating (descending)
    return membersWithLiveRatings.sort((a, b) => b.liveRating - a.liveRating);
  }, [allMembers, ratingQueries]);

  const displayMembers = sortedMembers.slice(0, showAll ? 10 : 5);

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Award className="w-6 h-6 text-amber-600" />;
    return (
      <div className="w-6 h-6 bg-chessBlue text-white rounded-full flex items-center justify-center text-sm font-bold">
        {rank}
      </div>
    );
  };

  const handleUsernameClick = (username: string) => {
    window.open(`https://www.chess.com/member/${username}`, '_blank');
  };

  return (
    <>
      {displayMembers.map((member, index) => (
        <div key={`${member.name}-${index}`} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm mb-3 hover:shadow-md transition-shadow">
          {getRankIcon(index + 1)}
          <div className="flex-1">
            <h3 className="font-bold text-lg text-chessBlue">{member.name}</h3>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-chessGreen font-medium">
                Rating: {member.isLoadingRating ? (
                  <span className="animate-pulse">Loading...</span>
                ) : (
                  <>
                    {member.liveRating}
                    {member.chessComUsername && !member.isLoadingRating && member.hasLiveData && (
                      <span className="text-xs opacity-75 ml-1">📡</span>
                    )}
                  </>
                )}
              </span>
              {member.chessComUsername && (
                <button
                  onClick={() => handleUsernameClick(member.chessComUsername)}
                  className="text-gray-600 hover:text-chessBlue hover:underline transition-colors"
                >
                  @{member.chessComUsername}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

// Component for top-rated member with live Chess.com rating
export default Team;
