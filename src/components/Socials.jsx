import { socials } from "../utilities/constants";

export const Socials = () => {
    return (
        <>
            <div className="flex gap-3 items-center">
                {socials.map(item => (
                    <a  key={item.id}
                        href={item.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:animate-ping ease-in-out">
                            <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-9 md:w-11 lg:w-12"/>
                    </a>
                ))}    
            </div>
            
        </>
    )
}