import { useState } from 'react';
import image_2c37ed1eb5705758f7df21fa2887662832f4d3ea from 'figma:asset/2c37ed1eb5705758f7df21fa2887662832f4d3ea.jpg';
import { CheckCircle2, FileText, Users, Calendar, Phone, Mail, MapPin, Clock, Download, ArrowRight, Clipboard, Baby, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedSection, StaggerItem } from '../AnimatedSection';
import { CloudPattern } from '../CloudPattern';
import { BookingModal } from '../BookingModal';
import admissionsHeroImage from 'figma:asset/ed884129fe12227640f6cb3655d19ee9a1319190.jpg';

interface AdmissionsPageProps {
  onNavigate: (page: string) => void;
}

export function AdmissionsPage({ onNavigate }: AdmissionsPageProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={admissionsHeroImage}
            alt="Admissions"
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
              <FileText size={20} />
              <span>Admissions 2024-25</span>
            </motion.div>
            <h1 className="text-[rgb(250,224,54)] mb-6">Join the Little Harvard Family</h1>
            <p className="text-white/95 mb-6">
              Begin your child's journey of joyful learning, exploration, and growth with us.
            </p>
            <motion.button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-white text-[var(--lh-accent-orange)] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Schedule a Visit</span>
              <ArrowRight size={20} />
            </motion.button>
          </AnimatedSection>
        </div>
        
        <CloudPattern />
      </section>

      {/* How to Apply */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">How to Apply</h2>
            <p className="text-[var(--lh-neutral-gray-600)] max-w-2xl mx-auto">
              A simple, welcoming process to help your child join our nurturing community.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                icon: <Clipboard size={32} className="text-[var(--lh-accent-teal)]" />,
                title: "Fill Enquiry Form",
                description: "Submit your enquiry form online or visit our campus to get started.",
                color: "var(--lh-accent-teal)"
              },
              {
                step: "02",
                icon: <Users size={32} className="text-[var(--lh-accent-pink)]" />,
                title: "School Tour",
                description: "Schedule a visit to experience our facilities and meet our teachers.",
                color: "var(--lh-accent-pink)"
              },
              {
                step: "03",
                icon: <Baby size={32} className="text-[var(--lh-accent-orange)]" />,
                title: "Interaction with Child",
                description: "A friendly interaction to understand your child's interests and needs.",
                color: "var(--lh-accent-orange)"
              },
              {
                step: "04",
                icon: <CheckCircle2 size={32} className="text-[var(--lh-primary-green)]" />,
                title: "Enrolment",
                description: "Complete the enrolment process and welcome to Little Harvard!",
                color: "var(--lh-primary-green)"
              }
            ].map((step, index) => (
              <StaggerItem key={index} index={index}>
                <motion.div
                  className="bg-white rounded-3xl p-8 card-shadow text-center relative"
                  whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: step.color }}>
                    <span>{step.step}</span>
                  </div>
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center mt-4" style={{ backgroundColor: step.color + '20' }}>
                    {step.icon}
                  </div>
                  <h3 className="text-[var(--lh-neutral-gray-900)] mb-3 text-[20px]">{step.title}</h3>
                  <p className="text-[var(--lh-neutral-gray-600)]">{step.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Age Criteria */}
      <section className="section-spacing bg-gradient-to-br from-[var(--lh-background-soft)] to-[var(--lh-background-green-tint)]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Eligibility &amp; Age Criteria</h2>
            <p className="text-[var(--lh-neutral-gray-600)] max-w-2xl mx-auto">
              Our programs are designed for specific age groups to ensure optimal development.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { program: "Mother-Toddler", age: "1.5 - 3 years", color: "var(--lh-accent-pink)" },
              { program: "Playgroup", age: "2 - 3.5 years", color: "var(--lh-accent-yellow)" },
              { program: "Nursery", age: "3 - 4 years", color: "var(--lh-accent-teal)" },
              { program: "LKG", age: "4 - 5 years", color: "var(--lh-primary-green)" },
              { program: "UKG", age: "5 - 6 years", color: "var(--lh-accent-orange)" },
              { program: "Class 1 & 2", age: "6 - 8 years", color: "var(--lh-accent-pink)" }
            ].map((item, index) => (
              <StaggerItem key={index} index={index}>
                <motion.div
                  className="bg-white rounded-2xl p-6 card-shadow text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: item.color + '20' }}>
                    <Calendar size={28} style={{ color: item.color }} />
                  </div>
                  <h3 className="text-[var(--lh-neutral-gray-900)] mb-2">{item.program}</h3>
                  <p className="text-[var(--lh-neutral-gray-600)]">Age: {item.age}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-6 max-w-3xl mx-auto card-shadow">
              <p className="text-[var(--lh-neutral-gray-600)]">
                <strong>Note:</strong> Age as on 31st March of the academic year will be considered for admission. 
                For queries regarding age criteria, please contact our admissions team.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Downloadable Forms */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Downloadable Forms</h2>
            <p className="text-[var(--lh-neutral-gray-600)] max-w-2xl mx-auto">
              Download the necessary forms to begin your admission process.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Admissions Form",
                description: "Complete this form with your child's details and parent information to begin the admission process.",
                icon: <FileText size={40} className="text-[var(--lh-accent-orange)]" />,
                color: "var(--lh-accent-orange)"
              },
              {
                title: "School Handbook",
                description: "Learn about our policies, programs, curriculum, and everything you need to know about Little Harvard.",
                icon: <Download size={40} className="text-[var(--lh-accent-teal)]" />,
                color: "var(--lh-accent-teal)"
              }
            ].map((form, index) => (
              <StaggerItem key={index} index={index}>
                <motion.div
                  className="bg-white rounded-3xl p-8 card-shadow"
                  whileHover={{ y: -5, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
                >
                  <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: form.color + '20' }}>
                    {form.icon}
                  </div>
                  <h3 className="text-[var(--lh-neutral-gray-900)] mb-3 text-center">{form.title}</h3>
                  <p className="text-[var(--lh-neutral-gray-600)] mb-6 text-center">
                    {form.description}
                  </p>
                  <motion.button
                    className="w-full text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    style={{ backgroundColor: form.color }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={20} />
                    <span>Download {form.title}</span>
                  </motion.button>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section-spacing bg-[var(--lh-background-soft)]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Fee Structure</h2>
            <p className="text-[var(--lh-neutral-gray-600)] max-w-2xl mx-auto">
              Transparent and affordable pricing for quality education.
            </p>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            <motion.div
              className="bg-white rounded-3xl overflow-hidden card-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-[var(--lh-primary-green)] to-[var(--lh-accent-teal)] text-white p-8 text-center">
                <FileText size={48} className="mx-auto mb-4" />
                <h3 className="text-white mb-2">Fee Information</h3>
                <p className="text-white/90">Academic Year 2024-25</p>
              </div>
              
              <div className="p-12 text-center">
                <p className="text-[var(--lh-neutral-gray-900)] text-xl mb-6">
                  Detailed fee structure and payment options are <strong>available on request</strong>.
                </p>
                <p className="text-[var(--lh-neutral-gray-600)] mb-8">
                  Please contact our admissions team for complete fee details tailored to your selected program.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="bg-[var(--lh-accent-orange)] text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone size={20} />
                    <span>Request Fee Details</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book a School Tour */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Book a School Tour</h2>
            <p className="text-[var(--lh-neutral-gray-600)] max-w-2xl mx-auto">
              Experience our campus firsthand. Schedule a visit to meet our team and explore our facilities.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                campus: "Bhubaneswar Campus",
                address: "Plot No. 123, Patia, Bhubaneswar, Odisha",
                phone: "+91 1234567890",
                whatsapp: "+91 1234567890",
                timing: "Mon-Sat: 9:00 AM - 5:00 PM",
                color: "var(--lh-accent-teal)"
              },
              {
                campus: "Sambalpur Campus",
                address: "Main Road, Sambalpur, Odisha",
                phone: "+91 0987654321",
                whatsapp: "+91 0987654321",
                timing: "Mon-Sat: 9:00 AM - 5:00 PM",
                color: "var(--lh-accent-orange)"
              }
            ].map((campus, index) => (
              <StaggerItem key={index} index={index}>
                <motion.div
                  className="bg-white rounded-3xl p-8 card-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: campus.color + '20' }}>
                    <MapPin size={32} style={{ color: campus.color }} />
                  </div>
                  <h3 className="text-[var(--lh-neutral-gray-900)] mb-6">{campus.campus}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-[var(--lh-neutral-gray-400)] flex-shrink-0 mt-1" />
                      <p className="text-[var(--lh-neutral-gray-600)]">{campus.address}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={20} className="text-[var(--lh-neutral-gray-400)] flex-shrink-0 mt-1" />
                      <p className="text-[var(--lh-neutral-gray-600)]">{campus.phone}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={20} className="text-[var(--lh-neutral-gray-400)] flex-shrink-0 mt-1" />
                      <p className="text-[var(--lh-neutral-gray-600)]">{campus.timing}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => setIsBookingModalOpen(true)}
                      className="w-full text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                      style={{ backgroundColor: campus.color }}
                    >
                      <Calendar size={18} />
                      <span>Schedule a Visit</span>
                    </button>
                    
                    <a
                      href={`https://wa.me/${campus.whatsapp.replace(/\s/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={18} />
                      <span>Contact on WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing gradient-orange-pink text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-white mb-4">Ready to Get Started?</h2>
            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
              Take the first step towards your child's joyful learning journey. Schedule a campus visit today.
            </p>
            <motion.button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-white text-[var(--lh-accent-orange)] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={20} />
              <span>Schedule a Visit</span>
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}