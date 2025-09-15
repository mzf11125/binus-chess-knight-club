import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, User, Calendar, TrendingUp } from "lucide-react";
import { format } from "date-fns";
import matter from 'gray-matter';
import { marked } from 'marked';

const articleModules = import.meta.glob('../data/articles/*.md', { as: 'raw' });

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      setError(false);

      const path = `../data/articles/${id}.md`;
      const loadArticleContent = articleModules[path];

      if (loadArticleContent) {
        try {
          const markdownText = await loadArticleContent();
          const { data, content } = matter(markdownText);
          const contentHtml = await marked(content);
          setArticle({ id, ...data, contentHtml });
        } catch (e) {
          console.error(`Error processing article ${id}:`, e);
          setError(true);
        }
      } else {
        setError(true);
      }

      setLoading(false);
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Loading...</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
            <Link
              to="/articles"
              className="inline-flex items-center text-chessBlue hover:text-chessGreen font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Link>
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
        {/* Article Header */}
        <section className="bg-gradient-to-r from-chessBlue to-chessGreen text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/articles"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Articles
              </Link>
              <div className="mb-4">
                <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {article.ratingRange}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span>{article.author} • {article.authorRole}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{format(new Date(article.publishedDate), 'MMMM d, yyyy')}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div
                className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.contentHtml }}
              />
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="bg-chessBlue/10 text-chessBlue px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
                <Link
                  to="/articles"
                  className="inline-flex items-center text-chessBlue hover:text-chessGreen font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  All Articles
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-chessGreen hover:text-chessBlue font-medium transition-colors"
                >
                  Questions? Contact Us
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;