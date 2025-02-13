import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center py-20 relative">
        {/* Social Media Sidebar */}
        <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
          <div className="flex flex-col space-y-6">
            <div className="w-[1px] h-20 bg-slate-400 mx-auto"></div>
            <a href="https://www.linkedin.com/in/yuxinchengg/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/yuxincheng73" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <div className="w-[1px] h-20 bg-slate-400 mx-auto"></div>
          </div>
        </div>

        <div className="container mx-auto px-24">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4 text-slate-200">Yu Xin Cheng</h1>
            <h2 className="text-2xl font-bold mb-4 text-slate-400">Software Developer</h2>
            <p className="text-xl text-slate-400">
              Passionate about creating impactful solutions and delivering exceptional web experiences | Streamlining Processes and Driving Efficiency with Automation
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-slate-200">About Me</h2>
          <div className="max-w-2xl">
            <p className="mb-4 text-slate-400">
              Hello! Hi, I'm Yu Xin Cheng, a passionate software developer with a keen interest in building innovative and efficient solutions. 
              I love creating side projects and exploring new technologies to solve real-world problems. 
              My technical expertise spans across a wide range of programming languages and tools, including Python, Java, React, SQL, and more.
            </p>
            <p className="mb-4 text-slate-400">
              I'm always looking to challenge myself and expand my knowledge. 
              Currently, I'm working on fun side projects like a Recipe Chooser app that simplifies meal planning, 
              and a Personalized Spotify Music Recommender that offers tailored music suggestions based on individual preferences.
            </p>
            <p className="text-slate-400">
              When I'm not coding, I enjoy experimenting with new recipes in the kitchen, staying active at the gym, or exploring new destinations travelling.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-slate-200">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Recipe Picker",
                description: "Built an intelligent recipe recommendation system using machine learning to help users discover recipes based on their preferences and available ingredients, reducing food waste.",
                link: "/projects/recipe-picker"
              },
              {
                id: 2,
                title: "Sheep Facial Recognition (AI)",
                description: "Developed regression models using Convolutional Neural Networks (CNNs) and cascaded networks to accurately locate facial landmarks, enabling unique identification of individual sheep.",
                link: "/projects/sheep-facial-recognition"
              },
              {
                id: 3,
                title: "Student Course Selection Website",
                description: "Created a course selection website using React and Flask, allowing students to search for courses, manage timetables, and leave comments and ratings.",
                link: "/projects/course-selection"
              }
            ].map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 bg-opacity-50 p-6 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30 flex flex-col h-full"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-slate-300">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                </div>
                <div className="mt-auto">
                  <Link 
                    href={project.link}
                    className="inline-block px-4 py-2 text-emerald-400 border border-emerald-400 rounded-xl hover:bg-emerald-400 hover:text-white transition-all duration-200"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-slate-200">Contact Me</h2>
            <form className="space-y-4 bg-[#151E2C] p-8 rounded-xl">
              <div>
                <label htmlFor="name" className="block mb-1 text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 bg-[#0f1623] border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-[#0f1623] border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-[#0f1623] border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-300"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

