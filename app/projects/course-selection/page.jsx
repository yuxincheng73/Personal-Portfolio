export default function CourseSelection() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-slate-200">Student Course Selection Website</h1>
        
        <div className="space-y-8">
          {/* Project Overview */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Project Overview</h2>
            <p className="text-slate-400">
              Developed a comprehensive course selection platform that enables students to efficiently search for courses,
              create and manage their timetables, and engage with course content through ratings and comments.
            </p>
          </section>

          {/* Key Features */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Key Features</h2>
            <ul className="list-disc list-inside text-slate-400 space-y-2">
              <li>Advanced course search with multiple filters</li>
              <li>Interactive timetable management system</li>
              <li>Course rating and review system</li>
              <li>Real-time conflict detection</li>
              <li>Responsive design for all devices</li>
            </ul>
          </section>

          {/* Technologies Used */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Flask",
                "Python",
                "SQLAlchemy",
                "RESTful API",
                "Tailwind CSS",
                "PostgreSQL"
              ].map((tech) => (
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