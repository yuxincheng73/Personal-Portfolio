export default function RecipePicker() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-slate-200">Recipe Picker</h1>
        
        <div className="space-y-8">
          {/* Project Overview */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Project Overview</h2>
            <p className="text-slate-400">
              A personalized recipe recommendation platform that helps users discover new recipes based on their 
              available ingredients, cuisines, and dietary preferences. Users can easily add recipes to their cart and organize them for the week. 
              Additionally, the platform uses AI-powered suggestions to generate recipes tailored to individual preferences, making meal planning even easier and more convenient.
              <br />
              <br />
              <b><a href="https://recipe-picker-demo.herokuapp.com" target="_blank" rel="noopener noreferrer">Visit the website</a></b>
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-300">Problem</h3>
            <p className="text-slate-400">
            Many people struggle with meal planning due to busy lifestyles, often feeling frustrated by the challenge of deciding what to cook and 
            finding recipes that match their dietary needs and available ingredients. 
            Traditional recipe websites can be overwhelming, as they often ignore personal preferences and dietary restrictions.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-300">Goal</h3>
            <p className="text-slate-400">
              The goal is to create an intelligent recipe recommendation system that simplifies meal planning.
              By providing users the flexibility to filter recipes based on their dietary needs and available ingredients and plan their meals for the week, the platform helps users
              make better decisions and ultimately more satisfied with their meals. 
            </p>
          </section>

          {/* Technical Details */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Technical Details</h2>
            <p className="text-slate-400">
              The application leverages modern web technologies and AI to deliver personalized recipe recommendations.
              The frontend is built with React and Tailwind CSS for a responsive and intuitive user interface, while the backend
              uses Java Spring Boot for efficient API endpoints and secure database integration.
              <br /><br />
              Spring Boot was chosen for its robust backend capabilities including database integration (Hibernate) and secure authentication (Spring Security). 
              It also offers better performance than Python due to its compiled nature and optimizations in the JVM. 
              Cookie based authentication was used for the login system as it has builtin browser support and session persistenc.
              <br /><br />
              As for the database, I used MySQL for its scalability and performance. The database schema design is shown below. 
            </p>
            <div className="my-6">
              <img 
                src="/images/recipe-picker/Database_Design_Layout.png" 
                alt="System Architecture" 
                className="rounded-xl w-full max-w-3xl mx-auto border-2 border-slate-600/30 shadow-lg shadow-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-900/20 opacity-80 hover:opacity-100"
              />
              <p className="text-sm text-slate-400 text-center mt-2">
                System architecture showing the recommendation engine and API integration
              </p>
            </div>
            <p className="text-slate-400">
              I wanted to design the layout of the website to be as user-friendly and intuitive as possible. It is responsive and can be used on any device. 
              The user can easily add recipes to their cart and organize them for the week. The user can also increase the quantity of each recipe chosen.
              When searching for recipes, the user can filter them based on the ingredients, cuisines, and dietary preferences.
              {/* The recommendation engine uses collaborative filtering and content-based filtering techniques to suggest recipes.
              We implemented a hybrid approach that considers both user preferences and ingredient similarity to provide relevant
              recommendations.
              <br /><br />
              The system includes a sophisticated ingredient matching algorithm that can identify suitable recipe substitutions
              and handle various ingredient forms (fresh, frozen, canned, etc.). */}
            </p>
            <div className="my-6">
              <img 
                src="/images/recipe-picker-architecture.png" 
                alt="System Architecture" 
                className="rounded-xl w-full max-w-3xl mx-auto border-2 border-slate-600/30 shadow-lg shadow-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-900/20 opacity-80 hover:opacity-100"
              />
              <p className="text-sm text-slate-400 text-center mt-2">
                System architecture showing the recommendation engine and API integration
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Personalized recipe suggestions</li>
                  <li>Keyword-based recipe search</li>
                  <li>Ingredient, cuisine, and dietary restriction filtering</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  {/* <li>Pantry management system</li> */}
                  {/* <li>Recipe favoriting and history</li> */}
                  <li>Cart based meal planning system</li>
                  <li>Mobile-responsive design</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Results</h2>
            <p className="text-slate-400 mb-4">
              The Recipe Picker platform has successfully made my meal planning process much more efficient and enjoyable!
            </p>

            <div className="my-6">
              <video 
                className="rounded-xl w-full max-w-3xl mx-auto border-2 border-slate-600/30 shadow-lg shadow-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-900/20 opacity-80 hover:opacity-100"
                controls
              >
                <source src="/videos/recipe-picker-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-sm text-slate-400 text-center mt-2">
                Demo video showcasing the recipe picker in action
              </p>
            </div>
          </section>

          {/* Technologies Used */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {["React", "Java", "Spring Boot", "Javascript", "MySQL", "Tailwind CSS"].map((tech) => (
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
};