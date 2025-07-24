import { jobs } from "../utilities/constants";
import { DownloadFiles } from "./DownloadFiles";

export const Experience = () => {
    return(
        <section id="experience"
            className="flex flex-col gap-10 mt-16">
            <div>
                <h2 className="text-2xl text-gray-500 font-medium md:text-2xl">Experience</h2>
            </div>
            {jobs.map(job => (
                <div key={job.id}
                     className="">
                        <h2 className="text-gray-500 md:text-lg">{job.tenure}</h2>
                        <div className="flex flex-col gap-5">
                            <div>
                                <h2 className="md:text-xl">{job.role}</h2>
                                <h3 className="text-gray-500 md:text-lg">{job.company}</h3>
                            </div>
                            <p className="text-balanced text-gray-400 leading-relaxed">{job.description}</p>
                        </div>
                </div>
            ))}
        </section>
    )
}