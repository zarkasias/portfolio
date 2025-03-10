"use client";
import { useState } from "react";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";

export default function AuditPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      website: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Validate required fields
    if (!formData.name || !formData.email || !formData.website) {
      setSubmitError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      const emailContent = {
        to: "info@chambers-consulting.dev",
        subject: "Website Audit Request",
        text: `
New Website Audit Request:

Name: ${formData.name}
Email: ${formData.email}
Website: ${formData.website}
        `,
      };

      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailContent),
      });

      setSubmitSuccess(true);
      resetForm();
    } catch (error) {
      setSubmitError("Failed to send message. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <PageLayout className="pt-24 md:w-[80%] h-[80vh] mx-auto" showFooterBlurb={false}>
        <div className="px-4 py-12 text-center">
          <div className="bg-neutral-800/50 rounded-xl p-12 pb-14 backdrop-blur-sm max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-green-400">Audit Request Sent!</h2>
            <p className="text-gray-400 mb-6">
              Thank you for requesting a website audit. I&apos;ll analyze your website and get back to you within 24 hours with detailed insights and recommendations.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Request Another Audit
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout className="pt-24 md:w-[80%] mx-auto" showFooterBlurb={false}>
      <div className="px-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-100 mb-4">
          Get Your Free Website Audit
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Discover how your website can work harder for your business. Get actionable insights on performance, 
          accessibility, and user experience to help drive more conversions.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-3">
                What&apos;s your name? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 border-2 border-neutral-700 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-3">
                What&apos;s your email address? <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 border-2 border-neutral-700 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium mb-3">
                What&apos;s your website URL? <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="website"
                value={formData.website}
                onChange={handleInputChange}
                required
                placeholder="https://"
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 border-2 border-neutral-700 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {submitError && (
              <p className="text-sm text-red-500">{submitError}</p>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-400 text-white py-3 rounded-lg hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Request Your Free Audit"
              )}
            </button>
          </form>

          <div className="space-y-8">
            <div className="bg-neutral-800/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6">What You&apos;ll Get</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 relative flex-shrink-0">
                    <Image 
                      src="/icons/performance.png" 
                      alt="Performance" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Performance Analysis</h3>
                    <p className="text-gray-400">Detailed insights into your website&apos;s speed and performance metrics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 relative flex-shrink-0">
                    <Image 
                      src="/icons/mobile-access.png" 
                      alt="Accessibility" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Accessibility Review</h3>
                    <p className="text-gray-400">Assessment of how well your site serves all users, including those with disabilities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 relative flex-shrink-0">
                    <Image 
                      src="/icons/action.png" 
                      alt="Recommendations" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Action Items</h3>
                    <p className="text-gray-400">Specific recommendations to improve your website&apos;s effectiveness.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4">Ready to Start a Project?</h2>
              <p className="text-gray-400 mb-6">
                Already know what you need? Let&apos;s discuss your project requirements and create something amazing together.
              </p>
              <a 
                href="/start-project"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 