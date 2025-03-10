"use client";
import { useState } from "react";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";

export default function StartProjectPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    deadline: "",
    details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const services = [
    { id: "website", label: "A New Website" },
    { id: "modernization", label: "Modernization" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "support", label: "Technical Support" },
    { id: "consulting", label: "Consulting" },
  ];

  const budgetOptions = [
    { id: "under5k", label: "Under $5k" },
    { id: "5k-10k", label: "$5k-$10k" },
    { id: "10k-20k", label: "$10k-$20k" },
    { id: "20kplus", label: "$20k+" },
    { id: "notsure", label: "Not sure yet" },
  ];

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const resetForm = () => {
    setSelectedServices([]);
    setBudget("");
    setFormData({
      name: "",
      email: "",
      deadline: "",
      details: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Validate required fields
    if (!formData.name || !formData.email || !formData.details || selectedServices.length === 0 || !budget) {
      setSubmitError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      const emailContent = {
        to: "info@chambers-consulting.dev",
        subject: "New Project Inquiry",
        text: `
New Project Inquiry:

Name: ${formData.name}
Email: ${formData.email}
Selected Services: ${selectedServices.join(", ")}
Budget Range: ${budgetOptions.find(b => b.id === budget)?.label}
${formData.deadline ? `Deadline: ${formData.deadline}` : "No deadline specified"}

Project Details:
${formData.details}
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
            <h2 className="text-3xl font-bold mb-4 text-green-400">Message Sent Successfully!</h2>
            <p className="text-gray-400 mb-6">
              Thank you for reaching out. I&apos;ll review your project details and get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Submit Another Inquiry
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
          Tell Us About Your Project
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          You want a website that grows with your business, expands your reach, and boosts your brand perception, 
          leading to more sales, leads, and an enhanced reputation. I&apos;m here to guide you towards that success.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Services Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">What can I help you with? <span className="text-red-500">*</span></h2>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <button
                    type="button"
                    key={service.id}
                    onClick={() => handleServiceToggle(service.id)}
                    className={`p-3 rounded-lg border-2 transition-colors text-left ${
                      selectedServices.includes(service.id)
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-neutral-700 hover:border-neutral-500"
                    }`}
                  >
                    {service.label}
                  </button>
                ))}
              </div>
              {/* {selectedServices.length === 0 && (
                <p className="text-sm text-red-500 mt-2">Please select at least one service</p>
              )} */}
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                <h2 className="text-sm font-medium mb-2">
                  What&apos;s your budget? <span className="text-red-500">*</span>
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {budgetOptions.map((option) => (
                    <button
                      type="button"
                      key={option.id}
                      onClick={() => setBudget(option.id)}
                      className={`p-3 rounded-lg border-2 transition-colors text-left ${
                        budget === option.id
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-neutral-700 hover:border-neutral-500"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                {/* {budget === "" && (
                  <p className="text-sm text-red-500 mt-2">Please select a budget range</p>
                )} */}
              </div>

              <div>
                <label htmlFor="deadline" className="block text-sm font-medium mb-2">
                  What&apos;s your deadline? (Optional)
                </label>
                <input
                  type="text"
                  id="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-neutral-800 border-2 border-neutral-700 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium mb-2">
                  Tell me more about your project <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="details"
                  rows={5}
                  value={formData.details}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-neutral-800 border-2 border-neutral-700 focus:border-blue-500 focus:outline-none"
                ></textarea>
              </div>

              {submitError && (
                <p className="text-sm text-red-500">{submitError}</p>
              )}

              <button 
                type="submit"
                disabled={isSubmitting || selectedServices.length === 0 || budget === ""}
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
                  "Send your details"
                )}
              </button>
            </div>
          </form>

          {/* Email Alternative Section */}
          <div className="space-y-8">
            <div className="bg-neutral-800/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4">Prefer to email?</h2>
              <p className="text-gray-400 mb-6">
                Feel free to send your project details directly to my inbox. I&apos;ll get back to you within 24 hours.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image 
                    src="/dave2.png" 
                    alt="David Chambers" 
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">David Chambers</h3>
                  <a 
                    href="mailto:david@chambers-consulting.dev" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    david@chambers-consulting.dev
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4">Not sure where to start?</h2>
              <p className="text-gray-400 mb-6">
                Get a free website audit to understand what&apos;s working and what could be improved in your current website.
              </p>
              <a 
                href="/audit"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Request Free Audit
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 