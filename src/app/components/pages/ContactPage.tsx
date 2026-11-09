import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, CheckCircle, Send, Clock, Instagram, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedSection, StaggerItem } from '../AnimatedSection';
import { CloudPattern } from '../CloudPattern';
import contactHeroImage from 'figma:asset/e40953438ada15cb1df3826558864dd4637fa106.jpg';

export function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    age: '',
    phone: '',
    email: '',
    campus: 'bhubaneswar',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        parentName: '',
        childName: '',
        age: '',
        phone: '',
        email: '',
        campus: 'bhubaneswar',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={contactHeroImage}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        </div>
        
        <div className="h-full relative z-10 flex items-center mx-auto px-6" style={{ maxWidth: '1400px', width: '100%' }}>
          <AnimatedSection className="text-white max-w-3xl">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <MessageCircle size={20} />
              <span>Get in Touch</span>
            </motion.div>
            <h1 className="text-[rgb(250,224,54)] mb-6">We'd Love to Hear From You</h1>
            <p className="text-white/95">
              Whether you have questions about admissions, programs, or want to schedule a campus tour, we're here to help!
            </p>
          </AnimatedSection>
        </div>
        
        <CloudPattern />
      </section>

      {/* Quick Contact Methods */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <StaggerItem index={0}>
              <motion.a
                href="tel:7008679964"
                className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-[var(--lh-accent-teal)]/10 to-[var(--lh-accent-teal)]/5 rounded-3xl hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[var(--lh-accent-teal)] rounded-full flex items-center justify-center mb-4">
                  <Phone size={28} className="text-white" />
                </div>
                <h3 className="text-[var(--lh-neutral-gray-900)] mb-2">Call Us</h3>
                <p className="text-[var(--lh-neutral-gray-600)]">
                  Bhubaneswar: 7008679964<br />
                  Sambalpur: 7008679964
                </p>
              </motion.a>
            </StaggerItem>

            <StaggerItem index={1}>
              <motion.a
                href="https://wa.me/917008679964"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-[var(--lh-primary-green)]/10 to-[var(--lh-primary-green)]/5 rounded-3xl hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[var(--lh-primary-green)] rounded-full flex items-center justify-center mb-4">
                  <MessageCircle size={28} className="text-white" />
                </div>
                <h3 className="text-[var(--lh-neutral-gray-900)] mb-2">WhatsApp</h3>
                <p className="text-[var(--lh-neutral-gray-600)]">
                  Chat with us instantly<br />
                  +91 7008679964
                </p>
              </motion.a>
            </StaggerItem>

            <StaggerItem index={2}>
              <motion.a
                href="mailto:contact@littleharvard.edu"
                className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-[var(--lh-accent-orange)]/10 to-[var(--lh-accent-orange)]/5 rounded-3xl hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[var(--lh-accent-orange)] rounded-full flex items-center justify-center mb-4">
                  <Mail size={28} className="text-white" />
                </div>
                <h3 className="text-[var(--lh-neutral-gray-900)] mb-2">Email Us</h3>
                <p className="text-[var(--lh-neutral-gray-600)]">
                  contact@littleharvard.edu<br />
                  We'll respond within 24 hours
                </p>
              </motion.a>
            </StaggerItem>
          </div>
        </div>
      </section>

      {/* Contact Form & Campus Info */}
      <section className="section-spacing bg-gradient-to-br from-[var(--lh-background-soft)] to-[var(--lh-background-green-tint)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-white rounded-3xl p-8 card-shadow">
                <h2 className="text-[var(--lh-neutral-gray-900)] mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-20 h-20 bg-[var(--lh-primary-green)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={40} className="text-white" />
                    </div>
                    <h3 className="text-[var(--lh-neutral-gray-900)] mb-2">Thank You!</h3>
                    <p className="text-[var(--lh-neutral-gray-600)]">
                      We've received your message and will get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[var(--lh-neutral-gray-900)] mb-2">Parent/Guardian Name *</label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-full border border-[var(--lh-neutral-gray-200)] focus:outline-none focus:border-[var(--lh-primary-green)]"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[var(--lh-neutral-gray-900)] mb-2">Child's Name</label>
                        <input
                          type="text"
                          name="childName"
                          value={formData.childName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-full border border-[var(--lh-neutral-gray-200)] focus:outline-none focus:border-[var(--lh-primary-green)]"
                          placeholder="Child's name"
                        />
                      </div>
                      <div>
                        <label className="block text-[var(--lh-neutral-gray-900)] mb-2">Age</label>
                        <input
                          type="text"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-full border border-[var(--lh-neutral-gray-200)] focus:outline-none focus:border-[var(--lh-primary-green)]"
                          placeholder="e.g., 3 years"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[var(--lh-neutral-gray-900)] mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-full border border-[var(--lh-neutral-gray-200)] focus:outline-none focus:border-[var(--lh-primary-green)]"
                        placeholder="+91 1234567890"
                      />
                    </div>

                    <div>
                      <label className="block text-[var(--lh-neutral-gray-900)] mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-full border border-[var(--lh-neutral-gray-200)] focus:outline-none focus:border-[var(--lh-primary-green)]"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[var(--lh-neutral-gray-900)] mb-2">Preferred Campus</label>
                      <select
                        name="campus"
                        value={formData.campus}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-full border border-[var(--lh-neutral-gray-200)] focus:outline-none focus:border-[var(--lh-primary-green)]"
                      >
                        <option value="bhubaneswar">Bhubaneswar Campus</option>
                        <option value="sambalpur">Sambalpur Campus</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[var(--lh-neutral-gray-900)] mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-2xl border border-[var(--lh-neutral-gray-200)] focus:outline-none focus:border-[var(--lh-primary-green)] resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-[var(--lh-accent-orange)] text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Campus Locations */}
            <div className="space-y-6">
              <AnimatedSection>
                <h2 className="text-[var(--lh-neutral-gray-900)] mb-6">Our Campuses</h2>
              </AnimatedSection>

              {[
                {
                  name: "Bhubaneswar Campus",
                  address: "Plot No. 123, Patia, Bhubaneswar, Odisha - 751024",
                  phone: "7008679964",
                  whatsapp: "917008679964",
                  email: "bbsr@littleharvard.edu",
                  timing: "Mon-Sat: 9:00 AM - 5:00 PM",
                  color: "var(--lh-accent-teal)"
                },
                {
                  name: "Sambalpur Campus",
                  address: "Main Road, Near Bus Stand, Sambalpur, Odisha - 768001",
                  phone: "7008679964",
                  whatsapp: "917008679964",
                  email: "sbp@littleharvard.edu",
                  timing: "Mon-Sat: 9:00 AM - 5:00 PM",
                  color: "var(--lh-accent-orange)"
                }
              ].map((campus, index) => (
                <StaggerItem key={index} index={index}>
                  <motion.div
                    className="bg-white rounded-3xl p-8 card-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: campus.color + '20' }}>
                        <MapPin size={28} style={{ color: campus.color }} />
                      </div>
                      <div>
                        <h3 className="text-[var(--lh-neutral-gray-900)] mb-2">{campus.name}</h3>
                        <p className="text-[var(--lh-neutral-gray-600)]">{campus.address}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone size={18} className="text-[var(--lh-neutral-gray-400)]" />
                        <a href={`tel:${campus.phone}`} className="text-[var(--lh-neutral-gray-600)] hover:text-[var(--lh-primary-green)]">
                          {campus.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={18} className="text-[var(--lh-neutral-gray-400)]" />
                        <a href={`mailto:${campus.email}`} className="text-[var(--lh-neutral-gray-600)] hover:text-[var(--lh-primary-green)]">
                          {campus.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock size={18} className="text-[var(--lh-neutral-gray-400)]" />
                        <span className="text-[var(--lh-neutral-gray-600)]">{campus.timing}</span>
                      </div>
                    </div>

                    <motion.a
                      href={`https://wa.me/${campus.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 w-full text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                      style={{ backgroundColor: campus.color }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp Us</span>
                    </motion.a>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Find Us on the Map</h2>
            <p className="text-[var(--lh-neutral-gray-600)]">
              Visit our campuses and experience the Little Harvard difference in person.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Bhubaneswar Campus", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1234567890!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzQ2LjAiTiA4NcKwNDknMjguMiJF!5e0!3m2!1sen!2sin!4v1234567890" },
              { name: "Sambalpur Campus", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1234567890!2d83.9654!3d21.4668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI4JzAwLjUiTiA4M8KwNTcnNTUuNCJF!5e0!3m2!1sen!2sin!4v1234567890" }
            ].map((location, index) => (
              <StaggerItem key={index} index={index}>
                <div className="rounded-3xl overflow-hidden card-shadow">
                  <div className="bg-gradient-to-r from-[var(--lh-primary-green)] to-[var(--lh-accent-teal)] p-4">
                    <h3 className="text-white">{location.name}</h3>
                  </div>
                  <div className="h-80 bg-[var(--lh-background-soft)]">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={location.name}
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Newsletter */}
      <section className="section-spacing gradient-green-teal text-white">
        <div className="container-custom">
          <AnimatedSection className="text-center">
            <h2 className="text-white mb-4">Stay Connected</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Follow us on social media for daily updates, events, and glimpses into our vibrant learning community.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.a
                href="#"
                className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={24} />
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}