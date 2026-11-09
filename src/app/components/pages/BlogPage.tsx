import image_d130aa536eca972d1ad400df34090e5edf4176c7 from 'figma:asset/d130aa536eca972d1ad400df34090e5edf4176c7.jpg';
import { Calendar, User, ArrowRight, BookOpen, Heart, Lightbulb, Users, Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedSection, StaggerItem } from '../AnimatedSection';
import { CloudPattern } from '../CloudPattern';
import blogHeroImage from 'figma:asset/2aa927478d90739d78dc9b94fa5bd37b790fdc16.jpg';

interface BlogPageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const blogPosts = [
    {
      id: 1,
      title: "Why the 50/50 Model Works: Balancing Academics and Interests",
      excerpt: "Discover how our unique approach creates happy, confident learners who excel both academically and personally.",
      image: image_d130aa536eca972d1ad400df34090e5edf4176c7,
      date: "Dec 5, 2024",
      author: "Dr. Priya Sharma",
      category: "Educational Philosophy",
      color: "var(--lh-accent-teal)"
    },
    {
      id: 2,
      title: "The Importance of Play-Based Learning in Early Childhood",
      excerpt: "Learn why play is not just fun—it's fundamental to cognitive, social, and emotional development.",
      image: "https://images.unsplash.com/photo-1684971563816-5663a5347241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRvZGRsZXIlMjBwbGF5aW5nJTIwdG95c3xlbnwxfHx8fDE3NjUxNzk4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "Nov 28, 2024",
      author: "Rajesh Patel",
      category: "Child Development",
      color: "var(--lh-accent-pink)"
    },
    {
      id: 3,
      title: "Building Strong Phonics Foundation: A Parent's Guide",
      excerpt: "Simple, effective strategies you can use at home to support your child's literacy journey.",
      image: "https://images.unsplash.com/photo-1563383238568-c91235c22c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmclMjBjb2xvcmZ1bCUyMGJvb2t8ZW58MXx8fHwxNzY1MTc5ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "Nov 20, 2024",
      author: "Sunita Das",
      category: "Parenting Tips",
      color: "var(--lh-accent-orange)"
    },
    {
      id: 4,
      title: "Nurturing Creativity Through Art and Music",
      excerpt: "Explore how creative expression helps children develop problem-solving skills and emotional intelligence.",
      image: "https://images.unsplash.com/photo-1696527018053-3343b9853505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBhaW50aW5nJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY1MTM3Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "Nov 15, 2024",
      author: "Dr. Priya Sharma",
      category: "Activities",
      color: "var(--lh-accent-yellow)"
    },
    {
      id: 5,
      title: "Creating a Nature-Connected Childhood",
      excerpt: "The benefits of outdoor play and how we integrate nature into daily learning experiences.",
      image: "https://images.unsplash.com/photo-1524105640531-c9b3e7541450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbmF0dXJlJTIwZXhwbG9yYXRpb258ZW58MXx8fHwxNzY1MTc5ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "Nov 8, 2024",
      author: "Rajesh Patel",
      category: "Educational Philosophy",
      color: "var(--lh-primary-green)"
    },
    {
      id: 6,
      title: "Supporting Your Child's Emotional Development",
      excerpt: "Understanding emotions and building resilience in the early years.",
      image: "https://images.unsplash.com/photo-1470277760377-4cf074a2f7bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRlYWNoZXIlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NjUxODI2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "Nov 1, 2024",
      author: "Sunita Das",
      category: "Child Development",
      color: "var(--lh-accent-teal)"
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={blogHeroImage}
            alt="Blog & Resources"
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
              <BookOpen size={20} />
              <span>Blog & Resources</span>
            </motion.div>
            <h1 className="text-[rgb(250,224,54)] mb-6">Insights & Stories</h1>
            <p className="text-white/95">
              Expert advice, parenting tips, and stories from our Little Harvard community.
            </p>
          </AnimatedSection>
        </div>
        
        <CloudPattern />
      </section>

      {/* Featured Post */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4 text-center">
              Featured Article
            </h2>
          </AnimatedSection>

          <motion.div
            className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-[var(--lh-background-soft)] to-[var(--lh-background-green-tint)] rounded-3xl card-shadow p-4"
            whileHover={{ y: -5 }}
          >
            <div className="relative h-40 md:h-auto md:max-h-80">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover rounded-2xl mx-[0px] my-[20px]"
              />
              <div className="absolute top-14 left-4">
                <span className="bg-white text-[var(--lh-neutral-gray-900)] px-4 py-2 rounded-full">
                  {featuredPost.category}
                </span>
              </div>
            </div>
            <div className="p-4 md:p-6 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-[var(--lh-neutral-gray-600)] mb-3">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{featuredPost.author}</span>
                </div>
              </div>
              <h2 className="text-[var(--lh-neutral-gray-900)] mb-3">{featuredPost.title}</h2>
              <p className="text-[var(--lh-neutral-gray-600)] mb-4">{featuredPost.excerpt}</p>
              <motion.button
                onClick={() => onNavigate('blog-detail', featuredPost.id)}
                className="bg-[var(--lh-accent-orange)] text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2 self-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Read More</span>
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-spacing bg-gradient-to-br from-[var(--lh-background-soft)] to-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Latest Articles</h2>
            <p className="text-[var(--lh-neutral-gray-600)]">
              Explore our collection of resources for parents and educators.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <StaggerItem key={post.id} index={index}>
                <motion.article
                  className="bg-white rounded-3xl overflow-hidden card-shadow group cursor-pointer h-full flex flex-col"
                  whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
                  onClick={() => onNavigate('blog-detail', post.id)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-[var(--lh-neutral-gray-900)] px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-[var(--lh-neutral-gray-600)] mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span className="text-sm">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span className="text-sm">{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-[var(--lh-neutral-gray-900)] mb-3">{post.title}</h3>
                    <p className="text-[var(--lh-neutral-gray-600)] mb-4 flex-1">{post.excerpt}</p>
                    <button className="flex items-center gap-2 hover:gap-3 transition-all" style={{ color: post.color }}>
                      <span>Read Article</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Browse by Topic</h2>
            <p className="text-[var(--lh-neutral-gray-600)]">
              Find articles that interest you most.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Educational Philosophy", icon: <Lightbulb size={28} />, color: "var(--lh-accent-teal)", count: 12 },
              { name: "Child Development", icon: <Heart size={28} />, color: "var(--lh-accent-pink)", count: 18 },
              { name: "Parenting Tips", icon: <Users size={28} />, color: "var(--lh-accent-orange)", count: 15 },
              { name: "Activities", icon: <BookOpen size={28} />, color: "var(--lh-accent-yellow)", count: 20 }
            ].map((category, index) => (
              <StaggerItem key={index} index={index}>
                <motion.button
                  className="w-full bg-white rounded-2xl p-6 card-shadow text-center hover:-translate-y-1 transition-transform"
                  whileHover={{ boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
                >
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: category.color + '20', color: category.color }}>
                    {category.icon}
                  </div>
                  <h3 className="text-[var(--lh-neutral-gray-900)] mb-2">{category.name}</h3>
                  <p className="text-[var(--lh-neutral-gray-600)]">{category.count} articles</p>
                </motion.button>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Stay Connected */}
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