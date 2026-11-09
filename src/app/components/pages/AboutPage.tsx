import image_11e161cf67ba1c3f7e19e4e5342b73bca14fcfc0 from 'figma:asset/11e161cf67ba1c3f7e19e4e5342b73bca14fcfc0.jpg';
import image_efdf4a811ffa8fd67651454877ed32cbf3f8a79d from 'figma:asset/efdf4a811ffa8fd67651454877ed32cbf3f8a79d.jpg';
import image_9630e6053539a20e3c1bc0d5be254499f6fc2bad from 'figma:asset/9630e6053539a20e3c1bc0d5be254499f6fc2bad.jpg';
import image_0486c402c94da7dd6d95436d4b8872bc3a23f6f6 from 'figma:asset/0486c402c94da7dd6d95436d4b8872bc3a23f6f6.jpg';
import image_01ac0f6a9274e44f6e33191e4031c79861a2db9d from 'figma:asset/01ac0f6a9274e44f6e33191e4031c79861a2db9d.jpg';
import { Heart, Lightbulb, Smile, TreePine, Target, Users, Award, BookOpen, CheckCircle2, Star, Sparkles, Brain, MessageCircle, Shield, Palette } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedSection, StaggerItem } from '../AnimatedSection';
import { CloudPattern } from '../CloudPattern';
import { OurFocus } from '../OurFocus';
import aboutHeroImage from 'figma:asset/f5190ae8a76f6015fd10cc903ba96185f4b7820e.jpg';

export function AboutPage() {
  return (
    <div>
      {/* Hero Section with Image */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHeroImage}
            alt="Our Story"
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
              <Heart size={20} />
              <span>About Us</span>
            </motion.div>
            <h1 className="text-[rgb(250,224,54)] mb-6">A School With the Heart of a Mother</h1>
            <p className="text-white/95">
              Where childhood is sacred, learning is joyful, and every child is nurtured with love, care, and understanding.
            </p>
          </AnimatedSection>
        </div>
        
        <CloudPattern />
      </section>

      {/* Our Story */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-[var(--lh-neutral-gray-900)] mb-6">Our Story</h2>
              <p className="text-[var(--lh-neutral-gray-600)] mb-4">
                Little Harvard Preschool began as a dream to create a school where children feel at home—not stressed. 
                A place where discovery, kindness, and confidence flourish naturally.
              </p>
              <p className="text-[var(--lh-neutral-gray-600)] mb-4">
                We believe that childhood is sacred and learning should be joyful, free, and deeply personal. 
                Every child deserves a nurturing environment where they can grow at their own pace, explore their 
                unique interests, and develop into confident, compassionate individuals.
              </p>
              <p className="text-[var(--lh-neutral-gray-600)] mb-6">
                Founded with the vision of creating a second home for children, Little Harvard has grown into a 
                community where every child is seen, heard, loved, and understood. We're not just a preschool—we're 
                a family that celebrates each child's journey.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-[var(--lh-accent-orange)]/10 text-[var(--lh-accent-orange)] px-4 py-2 rounded-full">
                  <Star size={18} />
                  <span>15+ Years of Excellence</span>
                </div>
                <div className="flex items-center gap-2 bg-[var(--lh-accent-teal)]/10 text-[var(--lh-accent-teal)] px-4 py-2 rounded-full">
                  <Users size={18} />
                  <span>500+ Happy Families</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--lh-accent-yellow)]/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[var(--lh-accent-pink)]/20 rounded-full blur-2xl" />
                <img
                  src={image_01ac0f6a9274e44f6e33191e4031c79861a2db9d}
                  alt="Happy teachers with children"
                  className="rounded-3xl shadow-2xl w-full h-[400px] object-cover relative z-10"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section-spacing bg-gradient-to-br from-[var(--lh-background-soft)] to-[var(--lh-background-green-tint)]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Our Philosophy</h2>
            <p className="text-[var(--lh-neutral-gray-600)] max-w-2xl mx-auto">
              Core values that guide everything we do at Little Harvard.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              {
                icon: <Heart size={32} />,
                title: 'Respect for each child',
                color: 'var(--lh-accent-pink)'
              },
              {
                icon: <Smile size={32} />,
                title: 'Joyful learning',
                color: 'var(--lh-accent-yellow)'
              },
              {
                icon: <Lightbulb size={32} />,
                title: 'Curiosity-driven',
                color: 'var(--lh-accent-orange)'
              },
              {
                icon: <TreePine size={32} />,
                title: 'Nature-connected',
                color: 'var(--lh-primary-green)'
              },
              {
                icon: <Shield size={32} />,
                title: 'Emotionally safe environment',
                color: 'var(--lh-accent-teal)'
              }
            ].map((value, index) => (
              <StaggerItem key={index} index={index}>
                <motion.div
                  className="bg-white rounded-2xl p-6 card-shadow text-center h-full"
                  whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: value.color + '20', color: value.color }}
                  >
                    {value.icon}
                  </div>
                  <p className="text-[var(--lh-neutral-gray-700)]">{value.title}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Our Approach</h2>
            <p className="text-[var(--lh-neutral-gray-600)] max-w-2xl mx-auto">
              A blend of proven educational methodologies adapted to Indian culture and values.
            </p>
          </AnimatedSection>

          {/* Educational Methodologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                image: image_0486c402c94da7dd6d95436d4b8872bc3a23f6f6,
                title: "Montessori",
                description: "Independence, sensorial learning",
                overlayColor: "rgba(0, 128, 0, 0.85)"
              },
              {
                image: image_9630e6053539a20e3c1bc0d5be254499f6fc2bad,
                title: "Reggio Emilia",
                description: "Creativity, expression, projects",
                overlayColor: "rgba(255, 127, 0, 0.85)"
              },
              {
                image: image_efdf4a811ffa8fd67651454877ed32cbf3f8a79d,
                title: "Play-Based",
                description: "Joy and discovery",
                overlayColor: "rgba(233, 30, 99, 0.85)"
              },
              {
                image: image_11e161cf67ba1c3f7e19e4e5342b73bca14fcfc0,
                title: "Indian Cultural Grounding",
                description: "Respect, culture, grounding",
                overlayColor: "rgba(0, 151, 167, 0.85)"
              }
            ].map((approach, index) => (
              <StaggerItem key={index} index={index}>
                <motion.div
                  className="rounded-3xl overflow-hidden card-shadow group cursor-pointer"
                  whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-[450px] md:h-[500px] overflow-hidden">
                    <img
                      src={approach.image}
                      alt={approach.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div 
                      className="absolute bottom-0 left-0 right-0 p-8 text-center"
                      style={{ backgroundColor: approach.overlayColor }}
                    >
                      <h3 className="text-white mb-2">{approach.title}</h3>
                      <p className="text-white">{approach.description}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
          
        </div>
      </section>

      {/* Our Focus */}
      <OurFocus />

      {/* Our Team */}
      <section className="section-spacing bg-[rgb(255,255,255)]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Our Team</h2>
            <p className="text-[var(--lh-neutral-gray-600)] max-w-2xl mx-auto">
              Meet the passionate educators who make Little Harvard a nurturing second home for your children.
            </p>
          </AnimatedSection>

          {/* Founder */}
          <AnimatedSection className="mb-16">
            <div className="bg-white rounded-3xl p-8 md:p-12 card-shadow max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--lh-accent-orange)]/20 rounded-full blur-2xl" />
                  <img
                    src="https://images.unsplash.com/photo-1758685848006-1bc450061624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXQlMjB3b21hbnxlbnwxfHx8fDE3NjUxOTUyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Founder"
                    className="rounded-2xl w-full h-[350px] object-cover relative z-10"
                  />
                </div>
                <div>
                  <div className="inline-block bg-[var(--lh-accent-orange)]/10 text-[var(--lh-accent-orange)] px-3 py-1 rounded-full mb-3">
                    Founder & Director
                  </div>
                  <h3 className="text-[var(--lh-neutral-gray-900)] mb-3">Dr. Priya Mehta</h3>
                  <p className="text-[var(--lh-neutral-gray-600)] mb-4">
                    With over 20 years of experience in early childhood education, Dr. Mehta founded Little Harvard 
                    with a vision to create a school where children feel loved, safe, and excited to learn. She holds 
                    a Ph.D. in Child Psychology and is a certified Montessori educator.
                  </p>
                  <p className="text-[var(--lh-neutral-gray-600)]">
                    &ldquo;Every child is unique, and our job is to nurture their individual spark while building a 
                    strong foundation for lifelong learning.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Teachers */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Ms. Anjali Sharma",
                role: "Lead Teacher - Nursery",
                image: "https://images.unsplash.com/photo-1705504613777-0724b5e4ef1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwc21pbGluZ3xlbnwxfHx8fDE3NjUxOTUyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                experience: "8 years of experience",
                training: "Certified in Montessori & Play-Based Learning"
              },
              {
                name: "Ms. Ritu Desai",
                role: "Lead Teacher - LKG & UKG",
                image: "https://images.unsplash.com/photo-1543430720-fa600c67e423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwaGFwcHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUxOTUzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                experience: "10 years of experience",
                training: "B.Ed in Early Childhood Education"
              },
              {
                name: "Ms. Kavita Nair",
                role: "Arts & Music Teacher",
                image: "https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY1MTg1NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                experience: "6 years of experience",
                training: "Specialized in Creative Arts Education"
              }
            ].map((teacher, index) => (
              <StaggerItem key={index} index={index}>
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden card-shadow"
                  whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[var(--lh-neutral-gray-900)] mb-1">{teacher.name}</h3>
                    <p className="text-[var(--lh-accent-teal)] mb-3">{teacher.role}</p>
                    <div className="space-y-2 text-[var(--lh-neutral-gray-600)]">
                      <p className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[var(--lh-primary-green)] mt-0.5 flex-shrink-0" />
                        <span>{teacher.experience}</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[var(--lh-primary-green)] mt-0.5 flex-shrink-0" />
                        <span>{teacher.training}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>

          {/* Support Staff */}
          <AnimatedSection>
            <div className="bg-gradient-to-br from-[var(--lh-primary-green)]/10 to-[var(--lh-accent-teal)]/10 rounded-3xl p-8 text-center">
              <Users size={40} className="text-[var(--lh-primary-green)] mx-auto mb-4" />
              <h3 className="text-[var(--lh-neutral-gray-900)] mb-3">Our Support Team</h3>
              <p className="text-[var(--lh-neutral-gray-600)] max-w-2xl mx-auto">
                Behind every successful day at Little Harvard is a dedicated team of support staff including caregivers, 
                administrative personnel, and maintenance staff who ensure a clean, safe, and welcoming environment. 
                Each team member is trained to provide the highest level of care and warmth to our children.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing gradient-orange-pink text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-white mb-4">Join the Little Harvard Family</h2>
            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
              Experience a school where your child will thrive academically, emotionally, and socially.
            </p>
            <motion.button
              className="bg-white text-[var(--lh-accent-orange)] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Visit
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}