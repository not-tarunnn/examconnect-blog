import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ExamConnect',
  description: 'Privacy Policy for ExamConnect - Learn how we protect your data.',
  robots: 'index, follow',
};

export default function PrivacyPolicy() {
  return (
    <div className="privacy-wrapper bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="privacy-hero border-b border-gray-200 bg-gradient-to-br from-white via-white to-gray-50 py-16 dark:border-gray-800 dark:from-black dark:via-black dark:to-gray-900 sm:py-24">
        <div className="privacy-hero-content mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="privacy-title text-4xl font-bold text-black dark:text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="privacy-subtitle mt-4 text-lg text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="privacy-content py-16 sm:py-24">
        <div className="privacy-container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="privacy-text space-y-8 text-gray-600 dark:text-gray-400">
            <div className="privacy-section">
              <h2 className="privacy-section-title text-2xl font-bold text-black dark:text-white">
                Introduction
              </h2>
              <p className="privacy-section-text mt-4 leading-relaxed">
                This Privacy Policy explains how ExamConnect collects, uses, discloses, and safeguards your information when you visit our website.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title text-2xl font-bold text-black dark:text-white">
                Information We Collect
              </h2>
              <p className="privacy-section-text mt-4 leading-relaxed">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className="privacy-list mt-4 space-y-2">
                <li className="privacy-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>Personal Data: Name, email address, phone number (if you choose to provide)</span>
                </li>
                <li className="privacy-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>Usage Data: Pages visited, time spent, browser type, IP address</span>
                </li>
                <li className="privacy-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>Device Information: Device type, operating system, device settings</span>
                </li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title text-2xl font-bold text-black dark:text-white">
                Use of Your Information
              </h2>
              <p className="privacy-section-text mt-4 leading-relaxed">
                We use the information we collect in the following ways:
              </p>
              <ul className="privacy-list mt-4 space-y-2">
                <li className="privacy-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>To provide, operate, and maintain our website</span>
                </li>
                <li className="privacy-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>To improve, personalize, and expand our website</span>
                </li>
                <li className="privacy-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>To understand and analyze how you use our website</span>
                </li>
                <li className="privacy-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>To develop new products, services, features, and functionality</span>
                </li>
                <li className="privacy-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>To communicate with you, either directly or through one of our partners</span>
                </li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title text-2xl font-bold text-black dark:text-white">
                Disclosure of Your Information
              </h2>
              <p className="privacy-section-text mt-4 leading-relaxed">
                We will not disclose your personal information to third parties without your consent, except as required by law or in the following circumstances:
              </p>
              <ul className="privacy-list mt-4 space-y-2">
                <li className="privacy-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>By law or legal process</span>
                </li>
                <li className="privacy-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>To enforce our Terms and Conditions</span>
                </li>
                <li className="privacy-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>To protect the rights and safety of our users and the public</span>
                </li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title text-2xl font-bold text-black dark:text-white">
                Security of Your Information
              </h2>
              <p className="privacy-section-text mt-4 leading-relaxed">
                We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title text-2xl font-bold text-black dark:text-white">
                Contact Us
              </h2>
              <p className="privacy-section-text mt-4 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at support@examconnect.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
