import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | ExamConnect',
  description: 'Learn about ExamConnect and our mission to help students succeed in JEE and NEET exams.',
  keywords: ['about', 'ExamConnect', 'JEE', 'NEET'],
};

export default function About() {
  return (
    <div className="about-wrapper bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="about-hero border-b border-gray-200 bg-gradient-to-br from-white via-white to-gray-50 py-16 dark:border-gray-800 dark:from-black dark:via-black dark:to-gray-900 sm:py-24">
        <div className="about-hero-content mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="about-title text-4xl font-bold text-black dark:text-white sm:text-5xl">
            About ExamConnect
          </h1>
          <p className="about-description mt-6 text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
            Your trusted companion on the journey to exam success.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content py-16 sm:py-24">
        <div className="about-container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="about-text space-y-8">
            <div className="about-section">
              <h2 className="about-section-title text-2xl font-bold text-black dark:text-white">
                Our Mission
              </h2>
              <p className="about-section-text mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                At ExamConnect, we believe that every student deserves access to quality
                preparation resources and expert guidance. Our mission is to empower students
                aspiring for JEE and NEET by providing comprehensive study materials, expert
                tips, and proven strategies that lead to success.
              </p>
            </div>

            <div className="about-section">
              <h2 className="about-section-title text-2xl font-bold text-black dark:text-white">
                What We Offer
              </h2>
              <ul className="about-list mt-4 space-y-3 text-gray-600 dark:text-gray-400">
                <li className="about-list-item flex gap-3">
                  <span className="about-list-icon text-lg">✓</span>
                  <span>Expert study guides and comprehensive resources</span>
                </li>
                <li className="about-list-item flex gap-3">
                  <span className="about-list-icon text-lg">✓</span>
                  <span>Latest exam updates and pattern changes</span>
                </li>
                <li className="about-list-item flex gap-3">
                  <span className="about-list-icon text-lg">✓</span>
                  <span>Proven preparation strategies and time management tips</span>
                </li>
                <li className="about-list-item flex gap-3">
                  <span className="about-list-icon text-lg">✓</span>
                  <span>Community support and peer learning opportunities</span>
                </li>
              </ul>
            </div>

            <div className="about-section">
              <h2 className="about-section-title text-2xl font-bold text-black dark:text-white">
                Our Team
              </h2>
              <p className="about-section-text mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                We are a dedicated team of educators, exam experts, and passionate mentors
                committed to helping students achieve their dreams. With years of experience
                in competitive exam preparation, we understand the challenges students face
                and provide tailored solutions.
              </p>
            </div>

            <div className="about-section">
              <h2 className="about-section-title text-2xl font-bold text-black dark:text-white">
                Why Choose ExamConnect?
              </h2>
              <p className="about-section-text mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                ExamConnect is built on the foundation of trust, expertise, and student success.
                We continuously update our content to reflect the latest exam patterns and
                provide resources that are accurate, relevant, and effective. Join thousands of
                students who have benefited from our guidance and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta border-t border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900 sm:py-16">
        <div className="about-cta-content mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="about-cta-title text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Start Your Journey with ExamConnect
          </h2>
          <p className="about-cta-text mt-4 text-gray-600 dark:text-gray-400">
            Subscribe to our newsletter and stay updated with the latest exam news and
            preparation tips.
          </p>
          <button className="about-cta-btn mt-6 rounded-lg bg-black px-8 py-3 font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
}
