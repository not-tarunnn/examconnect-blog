import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 JEE Preparation Tips for 2024',
    excerpt:
      'Master the fundamentals and ace your JEE exam with these proven preparation strategies.',
    date: 'March 15, 2024',
    author: 'ExamConnect Team',
    category: 'JEE Preparation',
    image: '📚',
  },
  {
    id: 2,
    title: 'NEET Biology: Complete Study Guide',
    excerpt:
      'Comprehensive guide to NEET Biology with detailed chapter breakdowns and key concepts.',
    date: 'March 10, 2024',
    author: 'ExamConnect Team',
    category: 'NEET',
    image: '🔬',
  },
  {
    id: 3,
    title: 'Time Management Strategies for Competitive Exams',
    excerpt:
      'Learn how to manage your time effectively during exams and improve your overall performance.',
    date: 'March 5, 2024',
    author: 'ExamConnect Team',
    category: 'Study Tips',
    image: '⏰',
  },
  {
    id: 4,
    title: 'Understanding JEE Main Exam Pattern 2024',
    excerpt:
      'Complete breakdown of JEE Main exam pattern, marking scheme, and important updates.',
    date: 'February 28, 2024',
    author: 'ExamConnect Team',
    category: 'JEE Preparation',
    image: '📋',
  },
  {
    id: 5,
    title: 'NEET Chemistry: Organic Chemistry Mastery',
    excerpt:
      'Deep dive into organic chemistry with practical examples and quick revision techniques.',
    date: 'February 20, 2024',
    author: 'ExamConnect Team',
    category: 'NEET',
    image: '🧪',
  },
  {
    id: 6,
    title: 'Mock Tests: Your Path to Success',
    excerpt:
      'Why mock tests are crucial and how to use them effectively in your preparation journey.',
    date: 'February 15, 2024',
    author: 'ExamConnect Team',
    category: 'Study Tips',
    image: '✅',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section border-b border-gray-200 bg-gradient-to-br from-white via-white to-gray-50 dark:border-gray-800 dark:from-black dark:via-black dark:to-gray-900">
        <div className="hero-content mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="hero-text max-w-3xl">
            <h1 className="hero-title text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl lg:text-6xl">
              Master Your Exams with ExamConnect
            </h1>
            <p className="hero-subtitle mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 sm:text-xl">
              Your complete guide to JEE and NEET preparation. Get expert tips,
              study strategies, latest exam updates, and comprehensive resources
              to ace your competitive exams.
            </p>
            <div className="hero-cta mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="cta-primary rounded-lg bg-black px-8 py-3 font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Explore Articles
              </button>
              <button className="cta-secondary rounded-lg border border-gray-300 px-8 py-3 font-semibold text-black transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900">
                Subscribe for Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-section bg-white py-20 dark:bg-black sm:py-32">
        <div className="blog-container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="blog-header mb-16">
            <h2 className="blog-title text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Latest Articles
            </h2>
            <p className="blog-subtitle mt-4 text-lg text-gray-600 dark:text-gray-400">
              Discover the latest tips, tricks, and strategies for exam success
            </p>
          </div>

          {/* Blog Grid */}
          <div className="blog-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="blog-card flex flex-col overflow-hidden rounded-lg border border-gray-200 transition-all hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:hover:border-gray-700 dark:hover:shadow-lg"
              >
                {/* Card Image/Icon */}
                <div className="card-image bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center dark:from-blue-950 dark:to-blue-900">
                  <span className="text-5xl">{post.image}</span>
                </div>

                {/* Card Content */}
                <div className="card-content flex flex-1 flex-col p-6">
                  <div className="card-meta mb-3 flex items-center gap-2">
                    <span className="category-badge inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="card-title mb-2 text-xl font-bold text-black dark:text-white line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="card-excerpt mb-4 flex-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Card Footer */}
                  <div className="card-footer space-y-4 border-t border-gray-200 pt-4 dark:border-gray-800">
                    <div className="card-metadata space-y-2 text-xs text-gray-500 dark:text-gray-500">
                      <div className="date-info flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="author-info flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                    </div>
                    <button className="card-link flex items-center gap-2 font-semibold text-black transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-400">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="blog-footer mt-12 text-center">
            <button className="view-all-btn inline-flex items-center gap-2 rounded-lg border border-black px-8 py-3 font-semibold text-black transition-colors hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section border-t border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900 sm:py-24">
        <div className="cta-container mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="cta-title text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Ready to Ace Your Exams?
          </h2>
          <p className="cta-text mt-4 text-lg text-gray-600 dark:text-gray-400">
            Subscribe to our newsletter for weekly preparation tips and exam
            updates delivered to your inbox.
          </p>
          <div className="cta-form mt-8 flex max-w-md flex-col gap-3 sm:mx-auto sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="cta-input flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 focus:border-black focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-white"
            />
            <button className="cta-submit rounded-lg bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
