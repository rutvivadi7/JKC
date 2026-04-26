import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const People: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="People"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 text-white mt-16 px-8 sm:px-12 lg:px-20 xl:px-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-3">People</h1>
          <p className="text-lg opacity-90">Our Most Important Resource</p>
        </div>
      </section>

      {/* People Overview */}
      <section className="py-12 sm:py-16 px-8 sm:px-12 lg:px-20 xl:px-28">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-600">Our People Make the Difference</h2>
            <p className="text-gray-700 text-xl leading-loose">
              Employees are our most important resource. We bring infrastructure to households and businesses alike. Each day, our people and teams work together to achieve incredible things, safely and with the highest standard, that positively impact the communities where we live and work.
            </p>
            <p className="text-gray-700 text-xl leading-loose">
              Our success is built on the dedication, expertise, and commitment of our team members who bring their best to every project, every day.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-2">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={IMAGES.GALLERY.CONSTRUCTION_1}
              alt="Team collaboration"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-blue-600 mb-6 text-center">Our People Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">R</span>
              </div>
              <h4 className="text-xl font-bold text-blue-600 mb-3">Respect</h4>
              <p className="text-gray-700 text-xl leading-relaxed">
                We treat every team member with dignity and respect, valuing diverse perspectives and contributions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
              <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">G</span>
              </div>
              <h4 className="text-xl font-bold text-blue-600 mb-3">Growth</h4>
              <p className="text-gray-700 text-xl leading-relaxed">
                We invest in our people's professional development and provide opportunities for career advancement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
              <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">C</span>
              </div>
              <h4 className="text-xl font-bold text-blue-600 mb-3">Collaboration</h4>
              <p className="text-gray-700 text-xl leading-relaxed">
                We work together as one team, supporting each other to achieve common goals and shared success.
              </p>
            </div>
          </div>
        </div>

        {/* Employee Development */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">Employee Development</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Training & Education</h4>
              <ul className="text-gray-700 text-base space-y-2">
                <li>• Comprehensive onboarding programs</li>
                <li>• Continuous skills development</li>
                <li>• Leadership training opportunities</li>
                <li>• Technical certification support</li>
                <li>• Safety training and awareness</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Career Advancement</h4>
              <ul className="text-gray-700 text-base space-y-2">
                <li>• Clear career progression paths</li>
                <li>• Mentorship programs</li>
                <li>• Cross-functional opportunities</li>
                <li>• Performance recognition</li>
                <li>• Internal promotion priority</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Work Environment */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">Our Work Environment</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { letter: 'S', label: 'Safe', desc: 'Safety-first culture with comprehensive protocols', color: 'bg-blue-600' },
              { letter: 'I', label: 'Inclusive', desc: 'Diverse and welcoming workplace for all', color: 'bg-green-600' },
              { letter: 'I', label: 'Innovative', desc: 'Encouraging creativity and new ideas', color: 'bg-purple-600' },
              { letter: 'R', label: 'Rewarding', desc: 'Competitive benefits and recognition programs', color: 'bg-orange-600' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-white text-lg font-bold">{item.letter}</span>
                </div>
                <h4 className="text-lg font-bold text-blue-600 mb-1">{item.label}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Employee Benefits */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-3xl font-bold text-blue-600 mb-5 text-center">Why Our People Choose JKC</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Comprehensive Benefits</h4>
              <ul className="text-gray-700 text-base space-y-2">
                <li>• Health, dental, and vision insurance</li>
                <li>• Retirement savings plans</li>
                <li>• Paid time off and holidays</li>
                <li>• Life and disability insurance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Work-Life Balance</h4>
              <ul className="text-gray-700 text-base space-y-2">
                <li>• Flexible work arrangements</li>
                <li>• Employee assistance programs</li>
                <li>• Wellness initiatives</li>
                <li>• Family-friendly policies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ConnectionSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default People;
