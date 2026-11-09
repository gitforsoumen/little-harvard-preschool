import image_9463156989de83bca9d3211f481149cbbb8adddb from 'figma:asset/9463156989de83bca9d3211f481149cbbb8adddb.jpg';
import { Calendar, User, ArrowLeft, Heart, Share2, Facebook, Twitter, Linkedin, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedSection, StaggerItem } from '../AnimatedSection';
import { CloudPattern } from '../CloudPattern';

interface BlogDetailPageProps {
  onNavigate: (page: string) => void;
  blogId?: number;
}

export function BlogDetailPage({ onNavigate, blogId }: BlogDetailPageProps) {
  // In a real app, you would fetch this data based on blogId
  const blogPost = {
    id: blogId || 1,
    title: "Why the 50/50 Model Works: Balancing Academics and Interests",
    excerpt: "Discover how our unique approach creates happy, confident learners who excel both academically and personally.",
    image: image_9463156989de83bca9d3211f481149cbbb8adddb,
    date: "Dec 5, 2024",
    author: "Dr. Priya Sharma",
    category: "Educational Philosophy",
    readTime: "5 min read",
    color: "var(--lh-accent-teal)",
    content: `
      <p>At Little Harvard Preschool, we believe that education should be a joyful journey of discovery, not a rigid race to check boxes. That's why we've built our entire philosophy around the 50/50 model—50% academics and 50% child's interests. This unique approach has transformed how our children learn, grow, and thrive.</p>

      <h3>What is the 50/50 Model?</h3>
      <p>The 50/50 model is simple yet revolutionary. We dedicate half of each day to building strong academic foundations—phonics, numeracy, literacy, and cognitive skills. The other half is entirely devoted to exploring what your child loves most: art, music, nature, storytelling, dance, or whatever sparks their curiosity.</p>

      <h3>Why This Balance Matters</h3>
      <p>Traditional education often focuses heavily on academics, leaving little room for creativity and self-expression. But research shows that children learn best when they're engaged, interested, and emotionally connected to what they're doing. When we honor both academics and interests, we create a learning environment where:</p>

      <ul>
        <li><strong>Children stay motivated:</strong> They look forward to school because they know they'll get to do things they love.</li>
        <li><strong>Learning becomes meaningful:</strong> Academic concepts make more sense when connected to real interests.</li>
        <li><strong>Confidence grows naturally:</strong> Success in their passion areas builds self-esteem that carries into academics.</li>
        <li><strong>Well-rounded development happens:</strong> Children develop both intellectual and creative skills simultaneously.</li>
      </ul>

      <h3>How It Works in Practice</h3>
      <p>A typical day at Little Harvard might look like this:</p>
      
      <p><strong>Morning (Academic Focus):</strong> Children engage in structured phonics lessons, number work, and literacy activities. Our teachers use play-based methods to make learning engaging and age-appropriate.</p>

      <p><strong>Afternoon (Interest-Based Learning):</strong> Children choose from various activity stations—art corner, music room, nature exploration area, storytelling circle, or building blocks. Teachers observe and facilitate, helping children dive deeper into their chosen interests.</p>

      <h3>Real Results We've Seen</h3>
      <p>Over the years, we've witnessed remarkable outcomes:</p>

      <ul>
        <li>Children who struggled with reading suddenly make breakthroughs after creating storybooks about their favorite topics.</li>
        <li>Shy children blossom into confident performers through our music and dance activities.</li>
        <li>Kids develop problem-solving skills through hands-on projects they're passionate about.</li>
        <li>Parents report happier, more curious children who genuinely love learning.</li>
      </ul>

      <h3>The Science Behind Our Approach</h3>
      <p>Our 50/50 model is backed by child development research. Studies show that when children have autonomy in their learning and can pursue their interests, they:</p>

      <ul>
        <li>Develop intrinsic motivation (they want to learn, not just to please adults)</li>
        <li>Build stronger neural connections through emotional engagement</li>
        <li>Retain information better because it's personally meaningful</li>
        <li>Develop self-regulation and decision-making skills</li>
      </ul>

      <h3>A Second Home, Not Just a School</h3>
      <p>The 50/50 model helps us create an environment that feels like a second home. Children aren't just students following a strict curriculum—they're young explorers with unique interests, talents, and curiosities. We honor that by giving them space to be themselves while also building the academic foundations they need for future success.</p>

      <h3>What Parents Tell Us</h3>
      <p>Parents often share that their children come home excited to tell them what they learned. They talk about the story they wrote, the song they learned, the painting they created—alongside their phonics practice and number work. This enthusiasm for learning is the true measure of success.</p>

      <h3>Join the Little Harvard Difference</h3>
      <p>If you're looking for a preschool that values your child as a whole person—not just a student—we invite you to experience the 50/50 model firsthand. Schedule a campus visit to see how we blend academics and interests into a joyful, nurturing learning experience.</p>

      <p>Because at Little Harvard, we believe every child deserves an education that honors both their mind and their heart.</p>
    `
  };

  const relatedPosts = [
    {
      id: 2,
      title: "The Importance of Play-Based Learning",
      image: "https://images.unsplash.com/photo-1684971563816-5663a5347241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRvZGRsZXIlMjBwbGF5aW5nJTIwdG95c3xlbnwxfHx8fDE3NjUxNzk4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "Nov 28, 2024"
    },
    {
      id: 3,
      title: "Building Strong Phonics Foundation",
      image: "https://images.unsplash.com/photo-1563383238568-c91235c22c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmclMjBjb2xvcmZ1bCUyMGJvb2t8ZW58MXx8fHwxNzY1MTc5ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "Nov 20, 2024"
    },
    {
      id: 4,
      title: "Nurturing Creativity Through Art",
      image: "https://images.unsplash.com/photo-1696527018053-3343b9853505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBhaW50aW5nJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY1MTM3Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "Nov 15, 2024"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="h-full relative z-10 flex items-end mx-auto px-6 pb-12" style={{ maxWidth: '1400px', width: '100%' }}>
          <div className="text-white max-w-4xl">
            <motion.button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-block bg-white text-[var(--lh-neutral-gray-900)] px-4 py-2 rounded-full mb-4">
                {blogPost.category}
              </div>
              <h1 className="text-white mb-4">{blogPost.title}</h1>
              <div className="flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <CloudPattern />
      </section>

      {/* Article Content */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            {/* Social Share Buttons */}
            <div className="flex items-center justify-between mb-12 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <span className="text-[var(--lh-neutral-gray-600)]">Share this article:</span>
                <div className="flex gap-3">
                  <motion.button
                    className="w-10 h-10 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={18} />
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={18} />
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={18} />
                  </motion.button>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[var(--lh-neutral-gray-600)]">
                <Heart size={20} className="text-[var(--lh-accent-pink)]" />
                <span>{Math.floor(Math.random() * 100) + 50} likes</span>
              </div>
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none"
              style={{
                color: 'var(--lh-neutral-gray-700)',
                lineHeight: '1.8'
              }}
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Author Bio */}
            <div className="mt-16 p-8 bg-gradient-to-br from-[var(--lh-background-soft)] to-[var(--lh-background-green-tint)] rounded-3xl">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-[var(--lh-primary-green)] flex items-center justify-center text-white text-2xl flex-shrink-0">
                  {blogPost.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-[var(--lh-neutral-gray-900)] mb-2">About {blogPost.author}</h3>
                  <p className="text-[var(--lh-neutral-gray-600)] mb-4">
                    Dr. Priya Sharma is an experienced educator with over 15 years of experience in early childhood education. 
                    She is passionate about creating nurturing learning environments that honor each child's unique journey.
                  </p>
                  <div className="flex gap-3">
                    <motion.button
                      className="w-8 h-8 rounded-full bg-white text-[var(--lh-primary-green)] flex items-center justify-center hover:opacity-80 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Twitter size={16} />
                    </motion.button>
                    <motion.button
                      className="w-8 h-8 rounded-full bg-white text-[var(--lh-primary-green)] flex items-center justify-center hover:opacity-80 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Linkedin size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-spacing bg-gradient-to-br from-[var(--lh-background-soft)] to-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Related Articles</h2>
            <p className="text-[var(--lh-neutral-gray-600)]">
              Continue exploring our insights and stories.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((post, index) => (
              <StaggerItem key={post.id} index={index}>
                <motion.article
                  className="bg-white rounded-3xl overflow-hidden card-shadow group cursor-pointer"
                  whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
                  onClick={() => {
                    // In a real app, you would navigate to the specific blog detail
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[var(--lh-neutral-gray-600)] mb-3">
                      <Calendar size={14} />
                      <span className="text-sm">{post.date}</span>
                    </div>
                    <h3 className="text-[var(--lh-neutral-gray-900)]">{post.title}</h3>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <motion.button
              onClick={() => onNavigate('blog')}
              className="bg-[var(--lh-accent-orange)] text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Articles</span>
              <ArrowLeft size={18} className="rotate-180" />
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}