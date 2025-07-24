import { TechStacks } from "./TechStacks"

export const About = () => {
    return(
        <section id="about"
            className="mt-10">
            <div>
                <h2 className="text-2xl font-medium text-gray-500 mb-10 md:text-2xl">About</h2>
            </div>
            
            <p className="mt-5 leading-relaxed md:text-balance">I’m a front-end developer passionate about building visually appealing interfaces that don’t just look good but also provide a smooth and intuitive user experience. I enjoy solving logical challenges that lead to robust, responsive, and accessible applications. <br /><br />

            I built most of my tech foundation during an intensive 5-month course at Uplift Code Camp, where I developed strong skills in HTML, CSS, and JavaScript. This eventually opened the door for me to dive deeper into React and frameworks like Tailwind CSS. <br /><br />

            Before shifting to tech, I worked in sales and customer service, that taught me how to communicate effectively, understand client needs, and navigate business goals. These transferable skills make me comfortable in client-facing roles, collaborative works , and when needed, I can even help sell the product. <br /><br />

            Outside of coding, I’m into outdoor activities — weightlifting and boxing are my current go-tos. I’m also a huge dog lover.</p>
            <div className="mt-10 lg:hidden">
                <TechStacks />
            </div>
        </section>
    )
}