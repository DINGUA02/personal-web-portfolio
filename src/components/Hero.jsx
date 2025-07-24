import { Socials } from "./Socials"
import { DownloadFiles } from "./DownloadFiles"
import { Navbar } from "./Navbar"

export const Hero = () => {
    return(
        <section id="hero" className="flex flex-col gap-2 md: justify-center">
            <div className="hidden lg:flex lg:mb-5">
            <Navbar />
          </div>
            <h1 className="text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl">DJ Ingua</h1>
            <span className="text-xl bg-gradient-to-r from-stone-300 to-stone-950 bg-clip-text tracking-tight text-transparent mb-2 md:text-2xl lg:text-3xl lg:mb-5">Front-end Developer</span>
            <p className="text-gray-500 text-nowrap mb-2 md:text-xl lg:text-2xl lg:mb-10">I build sleek, responsive web experiences.</p>
            <Socials/>
            <div className="mt-10 md:self-baseline">
                <DownloadFiles />
            </div>
        </section>
    )
}