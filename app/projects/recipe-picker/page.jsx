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
              A personalized recipe recommendation platform that helps users discover new recipes based on their dietary preferences,
              available ingredients, and cooking skill level. The application uses machine learning to provide tailored suggestions
              and helps reduce food waste by suggesting recipes using ingredients users already have.
              <br />
              <br />
              <b><a href="https://recipe-picker-demo.herokuapp.com" target="_blank" rel="noopener noreferrer">Visit the website</a></b>
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-300">Problem</h3>
            <p className="text-slate-400">
              Many people struggle with meal planning and often waste food because they don't know what to cook with their available ingredients.
              Traditional recipe websites can be overwhelming and don't consider personal preferences or dietary restrictions.
              <br/><br/>
              <b>Food Waste</b><br/>
              The average household wastes approximately 30% of their food, often due to poor meal planning and unused ingredients.
              <br/><br/>
              <b>Decision Fatigue</b><br/>
              With countless recipes available online, users often feel overwhelmed and spend excessive time searching for suitable recipes
              that match their dietary needs and available ingredients.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-300">Goal</h3>
            <p className="text-slate-400">
              The goal is to create an intelligent recipe recommendation system that simplifies meal planning and reduces food waste.
              By offering <b>personalized suggestions</b> based on user preferences and available ingredients, the platform helps users
              make better use of their groceries while discovering new recipes they'll love.
            </p>
          </section>

          {/* Technical Details */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Technical Details</h2>
            <p className="text-slate-400">
              The application leverages modern web technologies and machine learning to deliver personalized recipe recommendations.
              The frontend is built with Next.js and Tailwind CSS for a responsive and intuitive user interface, while the backend
              uses Python with FastAPI for efficient API endpoints.
              <br /><br />
              The recommendation engine uses collaborative filtering and content-based filtering techniques to suggest recipes.
              We implemented a hybrid approach that considers both user preferences and ingredient similarity to provide relevant
              recommendations.
              <br /><br />
              The system includes a sophisticated ingredient matching algorithm that can identify suitable recipe substitutions
              and handle various ingredient forms (fresh, frozen, canned, etc.).
            </p>
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <img 
                  src="/images/recipe-picker-architecture.png" 
                  alt="System Architecture" 
                  className="rounded-lg w-full border border-slate-700/30"
                />
                <p className="text-sm text-slate-400 text-center mt-2">
                  System architecture showing the recommendation engine and API integration
                </p>
              </div>
              <div>
                <img 
                  src="/images/recipe-picker-algorithm.png" 
                  alt="Recommendation Algorithm" 
                  className="rounded-lg w-full border border-slate-700/30"
                />
                <p className="text-sm text-slate-400 text-center mt-2">
                  Visualization of the recipe recommendation algorithm
                </p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-300">Smart Recommendations</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Personalized recipe suggestions</li>
                  <li>Ingredient-based recipe search</li>
                  <li>Dietary restriction filtering</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-300">User Experience</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Pantry management system</li>
                  <li>Recipe favoriting and history</li>
                  <li>Mobile-responsive design</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Results</h2>
            <p className="text-slate-400 mb-4">
              The Recipe Picker platform has successfully helped users reduce food waste and simplify their meal planning process.
            </p>

            <p className="text-slate-400">
              Users start by creating a profile and setting their dietary preferences and restrictions. They can then input their
              available ingredients or sync with their digital shopping lists. The system provides instant recipe recommendations
              based on these inputs.
              <br /><br />
              The recommendation engine learns from user interactions, improving suggestions over time. Users can save favorite
              recipes, rate them, and add personal notes. The platform also suggests ingredient substitutions when users are
              missing specific items.
              <br /><br />
              The mobile-responsive design ensures users can easily access recipes while grocery shopping or cooking, and the
              step-by-step instructions include helpful tips and videos for more complex techniques.
            </p>
            <div className="my-6">
              <img 
                src="/images/recipe-picker-dashboard.png" 
                alt="Recipe Picker Dashboard" 
                className="rounded-lg w-full max-w-3xl mx-auto border border-slate-700/30"
              />
              <p className="text-sm text-slate-400 text-center mt-2">
                User dashboard showing personalized recipe recommendations and pantry management
              </p>
            </div>
            <div className="my-6">
              <video 
                className="rounded-lg w-full max-w-3xl mx-auto border border-slate-700/30"
                controls
              >
                <source src="/videos/recipe-picker-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-sm text-slate-400 text-center mt-2">
                Demo video showcasing the recipe recommendation and pantry management features
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
} 