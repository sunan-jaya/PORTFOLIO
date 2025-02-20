import { ButtonPrimary, ButtonOutline} from "./Button"
import { ReactTyped } from "react-typed"


const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">

        <div className="container">
                
            <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg lg:hidden">
                        <img 
                        src="/images/avatar-1.png" 
                        width={40} height={40} 
                        alt="Sunan Jaya Potrait" 
                        className="img-cover" />
                    </figure>

                    <div className="flex items-center gap-1.5 text-zinc-400 text-bold tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"> </span>
                        </span>

                        Available for work
                    </div>
            </div>
                

            <h2 className="headline-4 mt-5">Hello, It's</h2>

            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-2 mb-2">Sunan Jaya</h2>

            <h2 className="headline-3 mb-8 max-sm:mb-5">
                I am - {" "}

                <ReactTyped
                    strings={[
                        "Project Management Enthusiast",
                        "System Analyst",
                        "Journalist",
                        "Content Writer"
                    ]}
                    typeSpeed={40}
                    backSpeed={30}
                    loop
                    className="text-orange-400"
                />
            </h2>

            <div className="flex items-center gap-3">
                <ButtonPrimary
                    href= "https://drive.google.com/file/d/1SzaqVNCIhpAaOIkP6obMCejSaHOApkOU/view?usp=drive_link"
                    target= "_blank"
                    label= "My resume"
                    icon= "download"
                />

                {/* BUTTON OUTLINED - SCROLL DOWN */}
                {/* <ButtonOutline
                    href= "#about"
                    label= "Scroll down"
                    icon= "arrow_downward"
                    className= "lg:hidden"
                /> */}

                {/* BUTTON BUTTON OUTLINED - LINKEDINN */}
                {/* <ButtonOutline
                    href="https://linkedin.com/in/sunan-jaya-irmawan"
                    target="_blank"
                    rel="noreferrer"
                    label="LinkedIn"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                    }            
                /> */}
            </div>

        </div>

    </section>
  )
}

export default Hero
