import { motion } from 'framer-motion';
import { useMouse } from 'react-use';
import { useRef } from 'react';

export default function Portfolio() {
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);

  return (
    <div
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white font-sans overflow-hidden"
    >
      {/* Floating Mouse Blob */}
      <motion.div
        className="fixed w-64 h-64 rounded-full bg-purple-400 opacity-20 filter blur-3xl pointer-events-none z-0"
        animate={{ x: docX - 128, y: docY - 128 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />

      {/* Blurred Lights Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 opacity-30 rounded-full filter blur-2xl animate-ping"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 space-y-12">
        <motion.img
          src="/mahsa1.jpg"
          alt="Mahsa Radnejad"
          className="w-36 h-36 rounded-full shadow-lg border-4 border-white object-cover"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-2">Mahsa Radnejad</h1>
          <p className="text-lg text-slate-300">PhD Student | Software Engineering | Technical Debt Researcher</p>
        </motion.div>

        <motion.section
          className="max-w-3xl text-left bg-white bg-opacity-5 p-8 rounded-2xl backdrop-blur-xl border border-white/20 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">About Me</h2>
          <p className="text-slate-200 mb-4">
            I’m a PhD student at the University of Maryland, Baltimore County, focusing on explainable AI and technical debt.
            I'm passionate about improving automated testing, creating interpretable tools for developers, and bridging the gap between AI and software engineering.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Skills</h2>
          <ul className="list-disc list-inside text-slate-200 space-y-1">
            <li>Languages: Python, SQL, JavaScript</li>
            <li>Tools: Git, GitHub, PyTorch, Scikit-learn, VS Code</li>
            <li>Research: Technical Debt, Explainable AI, Automated Testing</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Projects</h2>
          <ul className="list-disc list-inside text-slate-200 space-y-1">
            <li><strong>XAI for Test Debt:</strong> Interpretable ML tools to detect test debt in CI pipelines.</li>
            <li><strong>Quantum Software Quality:</strong> Identified testing issues in quantum computing platforms.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Contact</h2>
          <ul className="text-slate-200 space-y-1">
            <li>Email: mahsa@example.com</li>
            <li>GitHub: <a href="https://github.com/MahsaRadnejad" className="text-blue-400 underline">github.com/MahsaRadnejad</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/mahsaradnejad" className="text-blue-400 underline">linkedin.com/in/mahsaradnejad</a></li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
}
