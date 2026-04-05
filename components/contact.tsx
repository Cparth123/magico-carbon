"use client";

import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const offices = [
    {
      location: "India (Manufacturing)",
      region: "India (Manufacturing)",
      address: "A-14/2, Malviya Nagar Extn Saket, Delhi 110017",
      phone: "+91 8010223355",
      email: "sales@magicotradelinks.com",
    },
    {
      location: "United States",
      region: "United States",
      address: "13364 Spurce Wood Trl, Frisco, TX 75033",
      phone: "+1 (214) 779-6566",
      email: "sales@magicotradelinks.com",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productType: "",
    volume: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsLoading(false);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      productType: "",
      volume: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-5 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5 md:mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            CONTACT US
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-10 mb-5 md:mb-10">
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Request a Quote
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                ✓ Thank you! We&apos;ve received your inquiry. Our team will
                contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#1000cc] focus:ring-2 focus:ring-[#1000cc]/20 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#1000cc] focus:ring-2 focus:ring-[#1000cc]/20 transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#1000cc] focus:ring-2 focus:ring-[#1000cc]/20 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#1000cc] focus:ring-2 focus:ring-[#1000cc]/20 transition-colors"
                    placeholder="+1 (XXX) XXX-XXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Product Type *
                  </label>
                  <select
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#1000cc] focus:ring-2 focus:ring-[#1000cc]/20 transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="GAC">Granular (GAC)</option>
                    <option value="PAC">Powdered (PAC)</option>
                    <option value="EAC">Pelletized (EAC)</option>
                    <option value="custom">Custom/Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Volume Required *
                  </label>
                  <input
                    type="text"
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#1000cc] focus:ring-2 focus:ring-[#1000cc]/20 transition-colors"
                    placeholder="e.g., 100 MT/month"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#1000cc] focus:ring-2 focus:ring-[#1000cc]/20 transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Submit Request"}
              </button>
              <p className="text-xs text-slate-500 text-center">
                We&apos;ll respond within 24 hours.
              </p>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#1000cc]" />
                    {office.region}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#1000cc] flex-shrink-0 mt-0.5" />
                      <p className="text-slate-600">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#1000cc]" />
                      <a
                        href={`tel:${office.phone}`}
                        className="text-slate-600 hover:text-[#1000cc] transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#1000cc]" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-slate-600 hover:text-[#1000cc] transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-br from-[#1000cc]/5 to-[#3d33e0]/5 rounded-xl border border-[#1000cc]/20 p-6">
              <p className="text-sm text-slate-700">
                <strong>Need samples or technical data sheets?</strong> Our team
                can provide product samples, comprehensive technical
                specifications, and safety documentation quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
