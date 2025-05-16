import React from 'react';
import GoldButton from '@/components/GoldButton';

interface ClubSectionProps {
  onJoinClick: () => void;
}

const ClubSection: React.FC<ClubSectionProps> = ({ onJoinClick }) => {
  return (
    <section className="pt-32 pb-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 rounded-full bg-gold/5 blur-3xl top-1/4 left-1/4 animate-float"></div>
        <div className="absolute w-96 h-96 rounded-full bg-navy-light/30 blur-3xl bottom-1/4 right-1/4 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 text-center reveal">
            7FOUNDERS — The Entrepreneurship Program
          </h1>

          {/* Who We Are Section */}
          <div className="glass-card p-8 mb-12 reveal">
            <h2 className="text-2xl font-serif font-semibold text-gold-light mb-4">Who We Are</h2>
            <p className="text-white/80 mb-4">
              7FOUNDERS is an innovative and unique initiative that connects submarine service veterans with the world of entrepreneurship. We believe that the capabilities acquired beneath the surface — high discipline, strategic thinking, operational responsibility, and pursuit of excellence — are exactly the traits that drive entrepreneurs to real success.
            </p>
            <p className="text-white/80">
              This is not just another incubator or accelerator. It's a deep, quality, and precise community model for entrepreneurs who want to move forward with real support, meaningful connections, and a strategic thinking circle around them.
            </p>
          </div>

          {/* Who Is It For Section */}
          <div className="glass-card p-8 mb-12 reveal">
            <h2 className="text-2xl font-serif font-semibold text-gold-light mb-4">Who Is It For?</h2>
            <p className="text-white/80 mb-4">The program is suitable for entrepreneurs who:</p>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li className="flex items-start">
                <span className="text-gold-light mr-2">•</span>
                <span>Are in an active and advanced stage, not just an early-stage idea</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-light mr-2">•</span>
                <span>Have well-defined and measurable goals, such as raising capital, entering new markets, building a team</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-light mr-2">•</span>
                <span>Understand the value of connections with other submarine veterans — people who were there, understand the dynamics, and share similar DNA</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-light mr-2">•</span>
                <span>Not just tech entrepreneurs — also in services, education, sustainability, security, health, product management, and more</span>
              </li>
            </ul>
          </div>

          {/* Program Goals Section */}
          <div className="glass-card p-8 mb-12 reveal">
            <h2 className="text-2xl font-serif font-semibold text-gold-light mb-4">Program Goals Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Raising $10 million within six months",
                "Hiring 50 quality employees in the coming year",
                "Reaching 1,000 paying customers within 12 months",
                "International launch in three new markets",
                "Building a complete founding team",
                "Connecting with a strategic partner in the venture's field"
              ].map((goal, index) => (
                <div key={index} className="flex items-start p-4 bg-navy-light/30 rounded-lg hover:bg-navy-light/50 transition-colors">
                  <span className="text-gold-light mr-2">🎯</span>
                  <span className="text-white/80">{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What You Get Section */}
          <div className="glass-card p-8 mb-12 reveal">
            <h2 className="text-2xl font-serif font-semibold text-gold-light mb-4">What You Get</h2>
            <div className="space-y-4">
              {[
                { icon: "💼", title: "Personalized Advisory Board", description: "A circle of volunteer advisors (up to 10 hours per advisor) who accompany the entrepreneur in relevant areas of expertise." },
                { icon: "🤝", title: "Closed Events", description: "Community meetings with advisors, founders, investors, and other submarine veterans." },
                { icon: "🔗", title: "Strategic Connections", description: "We actively work to connect entrepreneurs with factors that can help them grow." },
                { icon: "📈", title: "Exposure to Investment Managers", description: "For those ready to raise capital — we open doors to relevant investors." },
                { icon: "🌊", title: "Quality Community", description: "A strong, thinking, and acting group of entrepreneurs. A place for collaboration, mutual support, and learning." }
              ].map((item, index) => (
                <div key={index} className="flex items-start p-4 bg-navy-light/30 rounded-lg hover:bg-navy-light/50 transition-colors">
                  <span className="text-2xl mr-4">{item.icon}</span>
                  <div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cost Section */}
          <div className="glass-card p-8 mb-12 reveal">
            <h2 className="text-2xl font-serif font-semibold text-gold-light mb-4">Cost</h2>
            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-white">500 ILS</span>
              <span className="text-white/70 ml-2">(Symbolic cost only)</span>
            </div>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>To maintain mutual commitment</li>
              <li>The cost is subsidized by the community itself</li>
              <li>We don't take percentages or brokerage fees — we only ask for real commitment from participants</li>
            </ul>
          </div>

          {/* How to Join Section */}
          <div className="glass-card p-8 mb-12 reveal">
            <h2 className="text-2xl font-serif font-semibold text-gold-light mb-4">How to Join</h2>
            <div className="space-y-4">
              {[
                "Fill out the registration form",
                "Attend the launch event on May 21, 2025",
                "Start a real journey with people who understand the language, background, and aspiration"
              ].map((step, index) => (
                <div key={index} className="flex items-center p-4 bg-navy-light/30 rounded-lg">
                  <span className="w-8 h-8 rounded-full bg-gold/20 text-gold-light flex items-center justify-center mr-4">
                    {index + 1}
                  </span>
                  <span className="text-white/80">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="glass-card p-8 mb-12 reveal">
            <h2 className="text-2xl font-serif font-semibold text-gold-light mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "Who is it really for?",
                  answer: "Submarine veteran entrepreneurs who are in an advanced stage, with clear goals, and interested in smart connections."
                },
                {
                  question: "How much does it cost?",
                  answer: "500 ILS – symbolic payment for participation."
                },
                {
                  question: "What do I get?",
                  answer: "Personalized Advisory Board, access to closed events, professional connections, exposure to investors, supportive community."
                },
                {
                  question: "What happens after 10 hours of consultation?",
                  answer: "If the connection with the advisor is successful and there is interest – we will continue to accompany and help deepen the connection and even integrate the advisor into the venture."
                }
              ].map((faq, index) => (
                <div key={index} className="p-4 bg-navy-light/30 rounded-lg hover:bg-navy-light/50 transition-colors">
                  <h3 className="text-white font-medium mb-2">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center reveal">
            <GoldButton variant="default" size="lg" showArrow onClick={onJoinClick}>
              Join Now
            </GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubSection; 