import downloadArrow from "../assets/downloadarrow.svg"

export const DownloadFiles = () => {
    return(
        <div className="flex gap-2 lg:gap-4">
            <a className="flex gap-1 bg-neutral-900 p-2 rounded-lg text-sm items-center border border-gray-600 animate-pulse animation-delay-1000 hover:animate-none md:text-lg md:py-2 " 
                style={{ animationDelay: "1s" }}
                href="./Resume.pdf"
                target="_blank"
                rel="noopener noreferrer">Resume
            <img src={downloadArrow} 
                className="w-5 md:w-5" 
                alt="download icon" /></a>
            <a className="flex gap-1 bg-neutral-900 p-2 rounded-lg text-sm items-center border border-gray-600 animate-pulse animation-delay-2000 hover:animate-none md:text-lg md:py-2 "
                style={{ animationDelay: "2s" }} 
                href="./UpliftCertificate.pdf"
                target="_blank"
                rel="noopener noreferrer">Uplift Cert
            <img src={downloadArrow} 
                className="w-5 md:w-5" 
                alt="download icon" /></a>
        </div>    
    )
}