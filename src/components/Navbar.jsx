

export const Navbar = () => {
    
    return(
        <>
            <div className="mb-10"> 
                <nav className="flex items-center justify-center py-4">
                    <div className="flex flex-shrink-0 items-center gap-5 text-gray-500 font-medium md:text-xl md:font-semibold lg:gap-10 lg:mt-5">
                        <a href="#about"
                            className="hover:scale-125 hover:text-gray-400">About</a>
                        <a href="#experience"
                            className="hover:scale-125 hover:text-gray-400">Experience</a>
                        <a href="#projects"
                            className="hover:scale-125 hover:text-gray-400">Projects</a>
                    </div>
                </nav>
            </div>    
            </>
    )
}