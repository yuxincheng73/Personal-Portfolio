export default function CourseSelection() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-slate-200">Student Course Selection Website</h1>
        
        <div className="space-y-8">
          {/* Project Overview */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Project Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <p className="text-slate-400">
                A comprehensive course selection platform built with React and Flask, enabling students to efficiently manage their academic schedules.
                My team of five developed a student course selection website with features to streamline course management. Students can search for courses, organize their timetables, and leave comments and ratings to help others make informed decisions.
                <br />
                <br />
                <b><a href="https://ece444-group4.herokuapp.com/" target="_blank" rel="noopener noreferrer"> Visit the website </a></b>
              </p>
              <img 
                src="/images/course-selection/cs_1.png"
                alt="Course Selection Overview"
                className="rounded-xl w-full border-2 border-slate-600/30 shadow-lg shadow-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-900/20 opacity-80 hover:opacity-100"
                width={800}
                height={600}
              />
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-300">Problem</h3>
            <p className="text-slate-400">
              Traditional course registration systems are often cumbersome, lack real-time updates, and provide limited information for decision-making. 
              Students struggle with schedule conflicts and accessing comprehensive course information in one place. The existing systems often lead to:
              <br/><br/>
              <b>Scheduling Conflicts</b><br/>
              Students face difficulties in visualizing potential schedule conflicts and managing course load effectively.
              <br/><br/>
              <b>Information Access</b><br/>
              Limited access to crucial information like course reviews, prerequisites, and real-time availability makes informed decision-making challenging.
              A dedicated platform designed to streamline course selection would greatly benefit students by providing a more organized and efficient approach.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-300">Goal</h3>
            <p className="text-slate-400">
            The goal of this platform is to provide students with a centralized, up-to-date resource for course selection and planning. 
            By offering <b>interactive tools</b> like timetables and discussion boards for course reviews, the system helps students save time 
            and make more informed decisions.
            </p>
          </section>

          {/* Technical Details */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Technical Details</h2>
            <p className="text-slate-400">
              The application is built using a modern tech stack that ensures scalability, performance, and maintainability. 
              The frontend utilizes React with Material-UI for a polished user interface, while the backend is powered by Flask and SQLAlchemy 
              for robust data management.
              <br /><br />
              We began by selecting a monolithic architecture, given the project's small scale and limited number of contributors. 
              This approach avoided the complexity and overhead of a cloud-based setup. 
              To structure the website, we followed the MVC framework, separating concerns into three key components: 
              the user interface, request handling, and data storage.
              <br /><br />
              To manage collaboration efficiently, we adopted a SCRUM agile development process, holding weekly check-ins to track progress and 
              assign tasks. We used GitHub Project Board to organize user stories and streamline workflow.
            </p>
            <div className="my-6">
              <img 
                src="/images/course-selection/cs_2.png" 
                alt="System Architecture" 
                className="rounded-xl w-full max-w-3xl mx-auto border-2 border-slate-600/30 shadow-lg shadow-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-900/20 opacity-80 hover:opacity-100"
              />
              <p className="text-sm text-slate-400 text-center mt-2">
                System architecture diagram showing the interaction between frontend and backend components
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-300">Course Management</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Advanced course search and filtering system</li>
                  <li>Interactive drag-and-drop timetable management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-300">User Experience</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Course rating and review system</li>
                  <li>Responsive design for all devices</li>
                  <li>Intuitive user interface</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Results</h2>
            <p className="text-slate-400 mb-4">
              The Course Selection Website has successfully transformed the course registration experience for students, 
              delivering significant improvements in efficiency and user satisfaction. 
            </p>

            <p>When visiting the website, new users must sign in or register to ensure their course selections are saved for future visits.
            <br /><br />
            After logging in, users can navigate to the Course Search page to find courses using keyword search or category filters. 
            Results are displayed in a table, where users can add courses to their selection with a single click.
            <br /><br />
            For more details, users can click on a course code to view a dedicated page with complete course information. 
            This page also features a comments and ratings section, allowing students to share insights and aid others in decision-making.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img 
                  src="/images/course-selection/cs_3.png"
                  alt="Course Search Interface"
                  className="rounded-xl w-full h-72 object-cover border-2 border-slate-600/30 shadow-lg shadow-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-900/20 opacity-80 hover:opacity-100"
                />
                <p className="text-sm text-slate-400 text-center mt-2">
                  Course search and filtering interface
                </p>
              </div>
              <div>
                <img
                  src="/images/course-selection/cs_4.png" 
                  alt="Course Details Page"
                  className="rounded-xl w-full h-72 object-cover border-2 border-slate-600/30 shadow-lg shadow-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-900/20 opacity-80 hover:opacity-100"
                />
                <p className="text-sm text-slate-400 text-center mt-2">
                  Detailed course information page
                </p>
              </div>
              <div>
                <img
                  src="/images/course-selection/cs_5.png"
                  alt="Timetable View" 
                  className="rounded-xl w-full h-72 object-cover border-2 border-slate-600/30 shadow-lg shadow-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-900/20 opacity-80 hover:opacity-100"
                />
                <p className="text-sm text-slate-400 text-center mt-2">
                  Interactive timetable management
                </p>
              </div>
              <div>
                <img
                  src="/images/course-selection/cs_6.png"
                  alt="Reviews Section"
                  className="rounded-xl w-full h-72 object-cover border-2 border-slate-600/30 shadow-lg shadow-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-900/20 opacity-80 hover:opacity-100"
                />
                <p className="text-sm text-slate-400 text-center mt-2">
                  Course ratings and reviews section
                </p>
              </div>
            </div>
          </section>

          {/* Technologies Used */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {["React", "Flask", "Python","SQLAlchemy", "MySQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Back Button */}
          <div className="mt-8">
            <a
              href="/#projects"
              className="inline-block px-6 py-3 text-emerald-400 border border-emerald-400 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-200"
            >
              ← Back to Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 