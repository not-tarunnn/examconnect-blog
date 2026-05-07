import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | ExamConnect',
  description: 'Terms & Conditions for ExamConnect - Read our legal terms.',
  robots: 'index, follow',
};

export default function TermsAndConditions() {
  return (
    <div className="terms-wrapper bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="terms-hero border-b border-gray-200 bg-gradient-to-br from-white via-white to-gray-50 py-16 dark:border-gray-800 dark:from-black dark:via-black dark:to-gray-900 sm:py-24">
        <div className="terms-hero-content mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="terms-title text-4xl font-bold text-black dark:text-white sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="terms-subtitle mt-4 text-lg text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="terms-content py-16 sm:py-24">
        <div className="terms-container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="terms-text space-y-8 text-gray-600 dark:text-gray-400">
            <div className="terms-section">
              <h2 className="terms-section-title text-2xl font-bold text-black dark:text-white">
                Agreement to Terms
              </h2>
              <p className="terms-section-text mt-4 leading-relaxed">
                By accessing and using ExamConnect, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title text-2xl font-bold text-black dark:text-white">
                Use License
              </h2>
              <p className="terms-section-text mt-4 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) on ExamConnect for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="terms-list mt-4 space-y-2">
                <li className="terms-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>Modifying or copying the materials</span>
                </li>
                <li className="terms-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>Using the materials for any commercial purpose or for any public display</span>
                </li>
                <li className="terms-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>Attempting to decompile or reverse engineer any software contained on ExamConnect</span>
                </li>
                <li className="terms-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>Removing any copyright or other proprietary notations from the materials</span>
                </li>
                <li className="terms-list-item flex gap-3">
                  <span className="text-lg">•</span>
                  <span>Transferring the materials to another person or "mirroring" the materials on any other server</span>
                </li>
              </ul>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title text-2xl font-bold text-black dark:text-white">
                Disclaimer
              </h2>
              <p className="terms-section-text mt-4 leading-relaxed">
                The materials on ExamConnect are provided on an 'as is' basis. ExamConnect makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title text-2xl font-bold text-black dark:text-white">
                Limitations
              </h2>
              <p className="terms-section-text mt-4 leading-relaxed">
                In no event shall ExamConnect or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ExamConnect, even if we or one of our authorized representatives has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title text-2xl font-bold text-black dark:text-white">
                Accuracy of Materials
              </h2>
              <p className="terms-section-text mt-4 leading-relaxed">
                The materials appearing on ExamConnect could include technical, typographical, or photographic errors. ExamConnect does not warrant that any of the materials on our website are accurate, complete, or current. ExamConnect may make changes to the materials contained on our website at any time without notice.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title text-2xl font-bold text-black dark:text-white">
                Links
              </h2>
              <p className="terms-section-text mt-4 leading-relaxed">
                ExamConnect has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title text-2xl font-bold text-black dark:text-white">
                Modifications
              </h2>
              <p className="terms-section-text mt-4 leading-relaxed">
                ExamConnect may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title text-2xl font-bold text-black dark:text-white">
                Governing Law
              </h2>
              <p className="terms-section-text mt-4 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which ExamConnect operates, and you irrevocably submit to the exclusive jurisdiction of the courts located in that location.
              </p>
            </div>

            <div className="terms-section">
              <h2 className="terms-section-title text-2xl font-bold text-black dark:text-white">
                Contact Us
              </h2>
              <p className="terms-section-text mt-4 leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us at support@examconnect.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
