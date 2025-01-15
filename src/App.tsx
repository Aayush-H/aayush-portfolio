import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="w-full px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          <div className="lg:col-span-2">
            <About />
            <Projects />
          </div>
          <div>
            <Skills />
            <Education />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

