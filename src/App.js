import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <img
            src="public/IMG_4779.JPG"
            alt="Mahsa Radnejad"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-md"
          />
          <h1 className="text-4xl font-bold">Mahsa Radnejad</h1>
          <p className="text-lg text-gray-600">PhD Student | Software Engineering | Technical Debt Researcher</p>
        </div>

        {/* About Me */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            I’m a PhD student at the University of Maryland, Baltimore County, focusing on explainable AI and technical debt.
            I'm passionate about improving automated testing, creating interpretable tools for developers, and bridging the gap between AI and software engineering.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Languages: Python, SQL, JavaScript</li>
            <li>Tools: Git, GitHub, PyTorch, Scikit-learn, VS Code</li>
            <li>Research: Technical Debt, Explainable AI, Automated Testing</li>
          </ul>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>XAI for Test Debt:</strong> Interpretable ML tools to detect test debt in CI pipelines.</li>
            <li><strong>Quantum Software Quality:</strong> Identified testing issues in quantum computing platforms.</li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <ul className="text-gray-700 space-y-2">
            <li>Email: mahsa@example.com</li>
            <li>GitHub: <a href="https://github.com/MahsaRadnejad" className="text-blue-600 underline">github.com/MahsaRadnejad</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/mahsaradnejad" className="text-blue-600 underline">linkedin.com/in/mahsaradnejad</a></li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default App;
