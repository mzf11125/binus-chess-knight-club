import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles, upcomingArticles } from "@/data/articles";
import { Clock, User, TrendingUp } from "lucide-react";

const Articles = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-chessBlue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Chess Improvement Guides
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive rating improvement guides written by our club members.
              From complete beginner to master level - we've got you covered.
            </p>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">Available Guides</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Article Header */}
                  <div className="bg-gradient-to-r from-chessBlue to-chessGreen p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {article.ratingRange}
                      </span>
                      <div className="flex items-center text-white/80 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {article.title}
                    </h3>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-chessBlue/10 flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-chessBlue" />
                      </div>
                      <div>
                        <p className="font-medium text-chessBlue">{article.author}</p>
                        <p className="text-sm text-gray-500">{article.authorRole}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <Link
                      to={`/articles/${article.id}`}
                      className="inline-flex items-center text-chessBlue hover:text-chessGreen font-medium transition-colors"
                    >
                      Read Full Guide
                      <TrendingUp className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">Coming Soon</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Our club members are working on comprehensive guides for higher rating ranges. 
              Stay tuned for expert-level content!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {upcomingArticles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {article.ratingRange}
                    </span>
                    <span className="text-yellow-600 text-sm font-medium">Coming Soon</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-600">by {article.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-chessGreen text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Contribute?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Are you an experienced player who wants to share knowledge? 
              We're always looking for contributors to write guides for specific rating ranges.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-chessGreen hover:bg-gray-100 font-bold px-6 py-3 rounded transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;