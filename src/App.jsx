import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Experience } from "./components/Experience"
import { Projects } from "./components/Projects"
import { TechStacks } from "./components/TechStacks"
import { Footer } from "./components/Footer"
import { GradientMouse } from "./components/GradiantMouse"

function App() {

  return (
    <>
    <GradientMouse>
      <div className="overflow-x-hidden text-stone-300 antialiased cursor-default select-none">
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
      </div>
      
        <header className="sticky top-0 bg-inherit backdrop-blur-xl z-10 lg:hidden">
          <Navbar />
        </header>
      

      <main className="cursor-default select-none container mx-auto px-8 md:px-14 lg:px-50 lg:flex lg:gap-10">
        <div className="lg:w-1/2 lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between items-center lg:h-screen">
          <div>
            <Hero />
          </div>
          <div className="hidden lg:flex lg:mb-10">
            <TechStacks />
          </div>
        </div>
        <div className="lg:flex-1 lg:overflow-y-auto lg:w-1/2">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </main>
    </GradientMouse>  
    </>
  )
}

export default App
