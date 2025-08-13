import { Award, BarChart, CheckCircle, Mail, Send, Users } from 'lucide-react';

export default function Landing() {
  // We'll define the feature data here to keep the JSX clean
  const features = [
    {
      icon: <Award className="h-10 w-10 text-custom-blue" />,
      image: '/src/assets/img/f1.png',
      title: "Automated Data Cleaning & Processing",
      description: "Upload raw CSV/Excel survey files and let the system handle missing data, outliers, and rule-based validations automatically. Eliminates manual errors and ensures consistent, reproducible results.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-custom-blue" />,
      title: "AI-Powered Insights & Visualization",
      description: "Instantly convert processed data into interactive charts, graphs, and statistical dashboards.Generate ready-to-use PDF/HTML reports for official releases.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-custom-blue" />,
      title: "Scalable & High-Performance Architecture",
      description: "Handles large datasets with ease using open-source, high-speed processing tools like Pandas, Matplotlib, and FastAPI.Optimized for both small surveys and large-scale government data.",
    },
    {
      icon: <Users className="h-10 w-10 text-custom-blue" />,
      title: "User-Friendly Interface",
      description: "Configure every step — from cleaning to weighting — without coding skills.Tooltips, guided steps, and an intuitive UI make it accessible to all, even non-technical staff.",
    },
  ];

  return (
    <div id="home" className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 text-gray-800">
      <main className="container mx-auto px-6 py-8">
        
        <section className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24 animate-fade-in-up">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              From Complexity  <span className="text-custom-blue">to Clarity,</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Accu-Gov Empower agencies to deliver faster, smarter statistical outcomes.
            </p>
            <div className="mt-8 space-x-4">
              <a href="#contact" className="bg-custom-blue text-black px-8 py-3 rounded-full  font-semibold shadow-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300">
                Get Started
              </a>
              <a href="#features" className="text-custom-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/src/assets/img/main.png" alt="Digital Governance Illustration" className="w-full h-auto rounded-lg shadow-2xl" />
          </div>
        </section>

        
        <section id="features" className="py-12 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Everything You Need, All in One Place</h2>
            <p className="text-lg text-gray-600 mt-2">Discover the powerful features that make Accu-Gov unique.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="py-12 md:py-24 bg-white rounded-xl shadow-lg">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
            <h4 className="text-xl font-semibold text-custom-blue mt-2">Team TOI</h4>
            <div className="w-24 h-1 bg-custom-purple mx-auto my-4 rounded"></div>
            <p className="mt-4 text-lg text-gray-600">
              We are a team passionate about transforming the way government and research organizations handle survey data.
              
               Our platform bridges the gap between raw, unstructured datasets and decision-ready insights.By combining AI-driven automation, open-source technology, and an intuitive interface, we make complex statistical processes faster, more accurate, and error-free. 
               {<br/>}
               Whether it’s cleaning messy datasets, applying design weights, or generating professional reports, our solution ensures that data teams spend less time fixing errors and more time making impactful decisions.Our mission is simple:
Empower data professionals with the tools they need to deliver reliable, timely, and insightful results — every time.
            </p>
          </div>
        </section>
        
        <section id="contact" className="py-12 md:py-24">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="text-lg text-gray-600 mt-2">Have a question or want to get started? Send us a message!</p>
          </div>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-custom-blue focus:border-custom-blue transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-custom-blue focus:border-custom-blue transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message"  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-custom-blue focus:border-custom-blue transition"></textarea>
              </div>
              <div className="text-center">
                 <button type="submit" className="w-full bg-custom-blue text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-6 py-8 text-center">
            <p>&copy; {new Date().getFullYear()} Accu-Gov. All Rights Reserved.</p>
            <p className="text-gray-400 text-sm mt-2">Built by Team TOI</p>
        </div>
      </footer>
    </div>
  );
}