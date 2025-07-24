import { techStacks } from "../utilities/constants";

export const TechStacks = () => {
    return (
        <div className="flex flex-col gap-10  items-center">
            <h2 className="text-gray-500 md:text-xl lg:hidden">TechStack</h2>
            <div className="flex gap-3 md:gap-16">
                {techStacks.map((stack, index) => (
                    <div key={stack.id}
                        className="flex flex-col items-center">
                            <div className="animate-bounce"
                                style={{animationDelay: `${index * -0.9}s`}}>
                                    <img 
                                        src={stack.image} 
                                        alt={stack.name}
                                        className="w-7 md:w-12 lg:w-16"/>
                            </div>
                            <p className="text-gray-500 font-medium text-sm md:text-balance">{stack.name}</p>
                    </div>
                ))}
            </div>    
        </div>
    )
}