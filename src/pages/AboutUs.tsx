import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-end justify-start pb-10">
        <div className="absolute inset-0">
          <img
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-white px-8 sm:px-12 lg:px-20 xl:px-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Connection With Intention</h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 sm:py-16 px-8 sm:px-12 lg:px-20 xl:px-28 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-[#1769bc]">About Us</h2>
            <p className="text-gray-700 text-xl leading-loose">
              JKC (Jay Krishna Construction) is a leading provider of specialty contracting services to
              the telecommunications infrastructure and utility industries throughout the
              Nation. Since our incorporation in 1998, we have expanded
              our scope and service offerings organically and through acquisitions.
              Our geographic presence and substantial workforce provide the scale needed to
              quickly execute on opportunities to service existing and new customers
              throughout urban and rural areas.
            </p>
            <p className="text-gray-700 text-xl leading-loose">
              JKC's family of companies supply telecommunications providers with a
              comprehensive portfolio of specialty services, including program management;
              planning; engineering and design; aerial, underground, and wireless construction;
              maintenance; and fulfillment services. Additionally, we provide underground
              facility locating services for various utilities, including telecommunications
              providers, and other construction and maintenance services for electric and gas
              utilities. JKC supplies the labor, tools, and equipment necessary to provide
              these services to our customers.
            </p>
          </div>
          <div className="relative">
            <img
              src={IMAGES.GALLERY.CONSTRUCTION_4}
              alt="About Us"
              className="w-full h-[480px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="w-full">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0">
              <img
                src={IMAGES.GALLERY.CONSTRUCTION_1}
                alt="Our Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/55"></div>
            </div>
            <div className="relative z-10 text-center text-white px-12">
              <h2 className="text-5xl sm:text-6xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl sm:text-2xl font-semibold">To connect India.</p>
            </div>
          </div>
          <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0">
              <img
                src={IMAGES.GALLERY.CONSTRUCTION_2}
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/75"></div>
            </div>
            <div className="relative z-10 text-center text-white px-12">
              <h2 className="text-5xl sm:text-6xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-3">
                <p className="text-xl sm:text-2xl font-semibold">Serve customers skillfully.</p>
                <p className="text-xl sm:text-2xl font-semibold">Deliver results with discipline.</p>
                <p className="text-xl sm:text-2xl font-semibold">Accountable in all we do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 sm:py-16 px-8 sm:px-12 lg:px-20 xl:px-28 bg-white">
        <h2 className="text-4xl font-bold text-[#1769bc] mb-6">Our Values</h2>
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          {/* Diagram on the left */}
          <div className="flex justify-center items-center pr-8">
            <img
              src="/images/About Us/Image1.png"
              alt="Our Values Diagram"
              className="w-full max-w-[500px] max-h-[500px] object-contain"
            />
          </div>
          {/* Values in 2-column grid on the right */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#1769bc] mb-2">People</h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                Our people are at the heart of everything we do. They are our most important resource. Every day, we strive
                to create and maintain a healthy environment in which they can grow their skills, work collaboratively, and
                deliver high quality services to our customers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1769bc] mb-2">Safety</h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                An instinctually safe culture is our goal, ensuring our teams, and everyone who comes in contact with our
                work, gets home safely each day.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1769bc] mb-2">Integrity</h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                We hold ourselves accountable to one another and treat others with respect. We are honest, forthright,
                and ethical in the work we perform and deliver every day.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1769bc] mb-2">Innovation</h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                We continually challenge ourselves to improve our performance and solve problems, driving innovation,
                informed but unconstrained by our past experiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1769bc] mb-2">Customer Focus</h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                Customers are at the forefront of everything we do. By understanding their needs and exceeding their
                expectations, we strive to be valued partners, delivering the high quality our customers require and
                building enduring relationships.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1769bc] mb-2">Sustainability</h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                We manage all aspects of our operations with accountability, understanding the economic, environmental,
                and social impacts our operations create for our people, stakeholders and the communities in which we work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
