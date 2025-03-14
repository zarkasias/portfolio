import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export const metadata = {
  title: 'Terms and Conditions | David Chambers',
  description: 'Terms and Conditions for Chambers Consulting',
};

const TermsAndConditions: React.FC = () => {
  return (
    <PageLayout className="pt-24 md:w-[80%] mx-auto" showFooterBlurb={false}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-lg prose-invert">
          <p className="text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-300">
            Welcome to Chambers Consulting. These terms and conditions outline the rules and regulations for the use of our website.
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use our website if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p className="text-gray-300">
            Other than the content you own, under these terms, Chambers Consulting and/or its licensors own all the intellectual property rights and materials contained on this website.
            You are granted a limited license only for the purpose of viewing the material contained on this website.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Restrictions</h2>
          <p className="text-gray-300">
            You are specifically restricted from all of the following:
          </p>
          <ul className="list-disc pl-5 text-gray-300 mt-2">
            <li>Publishing any website material in any other media</li>
            <li>Selling, sublicensing, and/or otherwise commercializing any website material</li>
            <li>Publicly performing and/or showing any website material</li>
            <li>Using this website in any way that is or may be damaging to this website</li>
            <li>Using this website contrary to applicable laws and regulations, or in any way that may cause harm to the website or to any person or business entity</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Your Content</h2>
          <p className="text-gray-300">
            In these terms and conditions, &quot;Your Content&quot; shall mean any audio, video, text, images, or other material you choose to display on this website. By displaying Your Content, you grant Chambers Consulting a non-exclusive, worldwide, irrevocable, royalty-free license to use, reproduce, adapt, publish, translate, and distribute it on any media.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. No Warranties</h2>
          <p className="text-gray-300">
            This website is provided &quot;as is,&quot; with all faults, and Chambers Consulting express no representations or warranties of any kind related to this website or the materials contained on this website.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-300">
            In no event shall Chambers Consulting, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <p className="text-gray-300">Email: contact@chambers-consulting.dev</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsAndConditions; 