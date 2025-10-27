'use client'
import { useState, useMemo, useEffect, useRef } from "react";
import { useQueries } from '@tanstack/react-query';
import { motion, useInView, animate } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Award, ChevronDown, ChevronUp, Users, Key } from "lucide-react";

// TODO:
/*
PICTURES:
Muhammad Reza Alghifari
Jordan

CHESSCOM USERNAMES:
Jordan
Michaela Zaneta Hwang
Keven Wilbert Felik
*/

// Animated Counter Component for the member count
function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          node.textContent = Math.round(latest).toString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>0</span>;
}


const Team = () => {
  const [showAllTopMembers, setShowAllTopMembers] = useState(false);
  // Club President
  const clubPresident = [
    {
      name: "Galvent Chiuwen",
      position: "Founder & President",
      rating: 2010,
      image: "galvent.png",
      bio: "Galvent founded the BINUS Chess Club and currently serves as its president, leading with passion and strategic vision.",
      chessComUsername: "Orangemuffin67"
    },
  ];

  // General Board (DPI Umum)
  const generalBoard = [
    {
      name: "Geoffrey Antonio Arifin",
      position: "Secretary",
      rating: 2010,
      image: "Geoffrey.png",
      bio: "Geoffrey manages all club documentation, meeting minutes, and communications with members.",
      chessComUsername: "AutumnMann19",
    },
    {
      name: "Alessandro Moreno Lawadinata",
      position: "Treasurer",
      rating: 2230,
      image: "alessandromoreno.png",
      bio: "High-rated organizer contributing significantly to club treasuries and finances.",
      chessComUsername: "AlessandroMoreno96",
    },
  ];

  // Regional Representatives (PIC Region)
  const regionalReps = [
    {
      name: "Steven Ang",
      position: "Regional Head - Kemanggisan",
      rating: 1240,
      image: "stevenang.png",
      bio: "Steven leads the Kemanggisan region and coordinates regional activities.",
      chessComUsername: "PhantomXRG",
    },
    {
      name: "Owen Siau",
      position: "Regional Head - Alsut",
      rating: 1270,
      image: "activist/scaled/owen.png",
      bio: "Owen leads the Alsut region and manages regional coordination.",
      chessComUsername: "Ony0n",
    },
  ];

  // Division Heads (Kepala Divisi Umum)
  const divisionHeads = [
    {
      name: "Keven Wilbert Felik",
      position: "Head of Marketing",
      rating: 1,
      image: "keven.png",
      bio: "Keven manages promotional activities, social media, and outreach campaigns for the club.",
    },
    {
      name: "Aristo Ardy Wijaya",
      position: "Head of Event",
      rating: 1960,
      image: "aristo.png",
      bio: "Aristo leads event planning and execution, ensuring smooth operations during club activities.",
      chessComUsername: "aristo123456",
    },
    {
      name: "Muhammad Zidan Fatonie",
      position: "Head of IT",
      rating: 1460,
      image: "zidan.png",
      bio: "Zidan manages the club's digital presence, website, and technical infrastructure for online tournaments.",
      chessComUsername: "mzf11125",
    },
    {
      name: "Dominikus Sebastian Ramli",
      position: "Deputy of IT",
      rating: 1420,
      image: "activist/scaled/sebastian.png",
      bio: "Sebastian assists in IT operations, web development, and manages the club's LinkedIn.",
      chessComUsername: "Bas77z",
    },
  ];

  // Combine all organizers for Hall of Fame
  const organizers = [...clubPresident, ...generalBoard, ...regionalReps, ...divisionHeads];

  const activists = [
    {
      name: "Syuja Ardhanu",
      position: "Club Activist",
      rating: 2290,
      image: "activist/scaled/syuja.png",
      bio: "Committed member contributing to various club initiatives and activities.",
      chessComUsername: "ds0401",
    },
    // RESIGNED
    // {
    //   name: "Hans Kartawinata",
    //   position: "Club Activist",
    //   rating: 2160,
    //   image: "activist/scaled/hans.png",
    //   bio: "Highly skilled activist contributing to club development and member engagement.",
    //   chessComUsername: "Countered",
    // },
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
      name: "Fahri Fadhil",
      position: "Club Activist",
      rating: 1400,
      image: "activist/scaled/fadhil.png",
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
      name: "Nathanael Vitzgerald",
      position: "Club Activist",
      rating: 1250,
      image: "activist/scaled/nathanael.png",
      bio: "Committed member supporting various club initiatives and activities.",
      chessComUsername: "NathXAra",
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
      position: "Club Activist",
      rating: 400,
      image: "activist/scaled/michaela.png",
      bio: "Michaela assists in event planning and execution, ensuring smooth operations during club activities.",
    },
    {
      name: "Aureylius Crystaldo Darmadji",
      position: "Club Activist",
      rating: 900,
      image: "activist/scaled/aureylius.png",
      bio: "Rey contributes to marketing and club outreach",
      chessComUsername: "aniyeo"
    },
    {
      name: "Evan Edward",
      position:"Club Activist",
      rating: 400,
      image:"activist/scaled/evan.png",
      bio: "Evan assists in organizing club events and community outreach.",
      chessComUsername: "NsxRagna"
    },
    {
      name: "Erwin Rommel Immanuel",
      position: "Club Activist",
      rating: 400,
      image: "activist/scaled/reza.png",
      bio: "Active member participating in club events and activities."
    },
    {
      name: "Fadli Oktaviano Raynhadi",
      position: "Club Activist", 
      rating: 400,
      image: "activist/scaled/reza.png",
      bio: "Dedicated activist contributing to club development and member engagement.",
      chessComUsername: "oktrayn"
    }
  ];

  const members = [
    {
      name: "Joel Suwanto",
      position: "Club Member",
      rating: 2670,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      bio: "Dedicated club member contributing to various chess activities and tournaments.",
      chessComUsername: "TheUnderDog001",
    },
    {
      name: "Ray Mclung Gunawan",
      position: "Club Member", 
      rating: 2560,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      bio: "Active chess player and club member participating in various events and competitions.",
      chessComUsername: "Patrickskakk",
    },
    {
      name: "Christopher Vincentius Kurniawan",
      position: "Club Member",
      rating: 2260,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80", 
      bio: "Enthusiastic chess player and club member supporting community activities.",
      chessComUsername: "LVCW",
    },
    {
      name: "Clement Lewi Limuel",
      position: "Club Member",
      rating: 2140,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      bio: "Enthusiastic chess player contributing to club community.",
      chessComUsername: "WataHata",
    },
    {
      name: "Vincent Oei",
      position: "Club Member",
      rating: 1970,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      bio: "Dedicated club member supporting chess activities and growth.",
      chessComUsername: "Yungfu",
    },
    {
      name: "Harry Santosa",
      position: "Club Member",
      rating: 1760,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      bio: "Active member participating in club events and tournaments.",
      chessComUsername: "Hello1nicetomeetyou",
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
  const allMembers = [...organizers, ...activists, ...members].sort((a, b) => b.rating - a.rating);
  const topMembers = allMembers.slice(0, 10);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* NEW Member Count Section - Redesigned */}
        <section className="bg-chessBlue text-gray-800 py-20">
            <div className="container mx-auto px-4 text-center flex flex-col items-center text-white">
                <Users className="w-16 h-16 mb-4 text-white" />
                <h1 className="text-7xl font-extrabold tracking-tight">
                    <AnimatedCounter value={214} />
                </h1>
                <p className="text-2xl font-medium text-white mt-2">
                    Active Club Members
                </p>
                <p className="text-lg text-slate-400 max-w-xl mx-auto mt-4">
                    Our community is growing! We are proud to have a strong and active group of chess enthusiasts.
                </p>
                <a 
                    href="/contact"
                    className="mt-8 inline-block bg-chessGreen text-white font-bold px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                    Join Our Club
                </a>
            </div>
        </section>

        {/* Hall of Fame Top 10 Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">🏆 Hall of Fame</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our elite chess players with the highest ratings across all club members.
            </p>
            
            <Tabs defaultValue="members" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                <TabsTrigger value="members">Members</TabsTrigger>
                <TabsTrigger value="activists">Activists</TabsTrigger>
              </TabsList>
              
              <TabsContent value="members" className="space-y-6">
                <div className="max-w-2xl mx-auto">
                  <TopRatedMembersList 
                    allMembers={allMembers} 
                    showAll={showAllTopMembers}
                    useStaticRating={true}
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
              </TabsContent>
              
              <TabsContent value="activists" className="space-y-6">
                <div className="max-w-2xl mx-auto">
                  <TopRatedMembersList 
                    allMembers={[...organizers, ...activists]} 
                    showAll={showAllTopMembers}
                    useStaticRating={false}
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
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Organizers Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Club Organizers</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Our leadership team and organizers who coordinate club activities
              and strategic planning.
            </p>
            
            {/* Club President */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-chessBlue text-center mb-8">Club President</h3>
              <div className="grid grid-cols-1 gap-8 max-w-sm mx-auto">
                {clubPresident.map((member, index) => (
                  <TeamCard
                    key={index}
                    name={member.name}
                    position={member.position}
                    rating={member.rating}
                    image={member.image}
                    bio={member.bio}
                    chessComUsername={member.chessComUsername}
                  />
                ))}
              </div>
            </div>

            {/* General Board */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-chessBlue text-center mb-8">General Board</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {generalBoard.map((member, index) => (
                  <TeamCard
                    key={index}
                    name={member.name}
                    position={member.position}
                    rating={member.rating}
                    image={member.image}
                    bio={member.bio}
                    chessComUsername={member.chessComUsername}
                  />
                ))}
              </div>
            </div>

            {/* Regional Representatives */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-chessBlue text-center mb-8">Regional Representatives</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {regionalReps.map((member, index) => (
                  <TeamCard
                    key={index}
                    name={member.name}
                    position={member.position}
                    rating={member.rating}
                    image={member.image}
                    bio={member.bio}
                    chessComUsername={member.chessComUsername}
                  />
                ))}
              </div>
            </div>

            {/* Division Heads */}
            <div>
              <h3 className="text-2xl font-bold text-chessBlue text-center mb-8">Division Heads</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {divisionHeads.map((member, index) => (
                  <TeamCard
                    key={index}
                    name={member.name}
                    position={member.position}
                    rating={member.rating}
                    image={member.image}
                    bio={member.bio}
                    chessComUsername={member.chessComUsername}
                  />
                ))}
              </div>
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


// Component that handles fetching all ratings and sorting them
const fetchChessComRating = async (username: string): Promise<number | null> => {
  const lowerUsername = username.toLowerCase();
  try {
    const response = await fetch(`https://api.chess.com/pub/player/${lowerUsername}/stats`);
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
const TopRatedMembersList = ({ allMembers, showAll, useStaticRating }: { allMembers: any[]; showAll: boolean; useStaticRating?: boolean }) => {
  // Filter members with usernames for querying (dedupe by username to avoid index shifts)
  const membersWithUsernames = useMemo(() => {
    const seen = new Set<string>();
    return allMembers.filter((member) => {
      if (!member.chessComUsername) return false;
      const key = member.chessComUsername.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [allMembers]);

  // Only fetch live ratings if useStaticRating is false
  const ratingQueries = useQueries({
    queries: useStaticRating ? [] : membersWithUsernames.map((member) => ({
      queryKey: ['chessRating', member.chessComUsername],
      queryFn: () => fetchChessComRating(member.chessComUsername),
      staleTime: 1000 * 60 * 60, // 1 hour
      retry: 1,
    })),
  });

  // Create a map of usernames to live ratings and loading states
  const liveDataMap = useMemo(() => {
    const map = new Map<string, { liveRating: number | null; isLoading: boolean }>();
    membersWithUsernames.forEach((member, index) => {
      const query = ratingQueries[index];
      const liveRating = query?.data ?? null;
      const isLoading = query?.isLoading || false;
      map.set(member.chessComUsername, { liveRating, isLoading });
    });
    return map;
  }, [membersWithUsernames, ratingQueries]);

  const sortedMembers = useMemo(() => {
    if (useStaticRating) {
      // Use static ratings and sort by rating
      return [...allMembers].sort((a, b) => b.rating - a.rating).map(member => ({
        ...member,
        liveRating: member.rating, // Use static rating
        isLoadingRating: false,
        hasLiveData: false
      }));
    }

    // Assign live ratings using the map
    const membersWithLiveRatings = allMembers.map((member) => {
      const data = member.chessComUsername ? liveDataMap.get(member.chessComUsername) : null;
      const liveRating = data?.liveRating ?? member.rating;
      const isLoading = data?.isLoading ?? false;
      const hasLiveData = data?.liveRating !== null;


      return {
        ...member,
        liveRating,
        isLoadingRating: isLoading,
        hasLiveData
      };
    });

    return membersWithLiveRatings.sort((a, b) => b.liveRating - a.liveRating);
  }, [allMembers, liveDataMap, useStaticRating]);

  const displayMembers = sortedMembers.slice(0, showAll ? 12 : 5);

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