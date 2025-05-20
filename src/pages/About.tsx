import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-chessBlue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About BINUS Chess Club
              </h1>
              <p className="text-lg md:text-xl">
                Building a community of chess enthusiasts and fostering
                strategic thinking since 2024.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="section-title">Our History</h2>
                <p className="text-lg text-gray-700 mb-4">
                  BINUS Chess Club was established in 2024 by a small group of
                  passionate chess players who wanted to create a community for
                  students to learn, practice, and compete in chess.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Over the years, we've grown from a handful of members to one
                  of the most active student organizations at Bina Nusantara
                  University, hosting regular tournaments, workshops, and social
                  events.
                </p>
                <p className="text-lg text-gray-700">
                  Our club has represented BINUS in various inter-university and
                  public chess competitions.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src="simul.jpeg"
                      alt="BINUS Chess Club members playing chess"
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Mission & Vision</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-chessBlue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-chessBlue">🎯</span>
                </div>
                <h3 className="font-bold text-2xl text-chessBlue mb-4 text-center">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700">
                  To promote chess as an intellectual sport that enhances
                  critical thinking, strategy, and patience. We aim to create a
                  supportive community where players of all levels can improve
                  their skills while forming lasting friendships.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-chessGreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-chessGreen">👁️</span>
                </div>
                <h3 className="font-bold text-2xl text-chessGreen mb-4 text-center">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-700">
                  To be recognized as the leading chess club among Indonesian
                  universities, fostering a new generation of strategic thinkers
                  and problem solvers who will excel not only in chess but in
                  all aspects of their academic and professional lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-chessBlue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-chessBlue">🤝</span>
                </div>
                <h3 className="font-bold text-xl text-chessBlue mb-2">
                  Community
                </h3>
                <p className="text-gray-700">
                  Creating a welcoming environment for all chess enthusiasts,
                  regardless of skill level.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-chessGreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-chessGreen">🧠</span>
                </div>
                <h3 className="font-bold text-xl text-chessGreen mb-2">
                  Learning
                </h3>
                <p className="text-gray-700">
                  Encouraging continuous improvement through regular practice,
                  workshops, and mentorship.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-chessBlue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-chessBlue">🏆</span>
                </div>
                <h3 className="font-bold text-xl text-chessBlue mb-2">
                  Excellence
                </h3>
                <p className="text-gray-700">
                  Striving for the highest standards in competitions while
                  maintaining good sportsmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title text-center mb-8">
                Our Achievements
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center bg-white p-6 rounded-lg shadow-md">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="w-16 h-16 bg-chessBlue text-white rounded-full flex items-center justify-center font-bold text-xl">
                      2024
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-chessBlue mb-2">
                      ITB Rapid Chess Championship
                    </h3>
                    <p className="text-gray-700">
                      Participate and ranked in the top 20 out of 30 teams
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center bg-white p-6 rounded-lg shadow-md">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="w-16 h-16 bg-chessGreen text-white rounded-full flex items-center justify-center font-bold text-xl">
                      2023
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-chessGreen mb-2">
                      Indonesian Collegiate Chess Open
                    </h3>
                    <p className="text-gray-700">
                      Second place in team category and best female player award
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center bg-white p-6 rounded-lg shadow-md">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="w-16 h-16 bg-chessBlue text-white rounded-full flex items-center justify-center font-bold text-xl">
                      2022
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-chessBlue mb-2">
                      ASEAN University Games
                    </h3>
                    <p className="text-gray-700">
                      Bronze medal in mixed team rapid chess
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-chessBlue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Whether you're a complete beginner or an experienced player, we
              welcome all BINUS students who have an interest in chess. Join us
              to learn, practice, and compete in a friendly environment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Join Us Today
              </a>
              <a href="/events" className="btn-secondary">
                Upcoming Events
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
