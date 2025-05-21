import { useRef } from "react"
import Card from "../components/Card"
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
   const grid2Container = useRef();

  return (
    <section className="c-space section-spacing">
        <h2 className="text-heading">Sobre mim</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
            <img src="assets/coding-pov.png" alt="código" 
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem]
            md:scale-[3] md:left-50 md:inset-y-10
            lg:scale-[2.5]"  />
            <div className="z-10">
              <p className="headtext">Um pouco mais sobre mim:</p>
              <p className="subtext">Venho desenvolvendo minhas habilidades
              na área de desenvolvimento de software
              </p>
            </div>
        </div>
        <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2
        bg-gradient-to-t from-indigo"/>
        
        <div ref={grid2Container} className="grid-default-color grid-2 flex items-center justify-center w-full h-full">
          <p className="flex items-end text-5xl text-gray-500">Habilidades</p>
          <Card style={{ top: "10%", left: "20%"}} image={"/assets/logos/css3.svg"} containerRef={grid2Container} />
          <Card style={{ top: "30%", left: "75%"}} image={"/assets/logos/tailwindcss.svg"} containerRef={grid2Container}/>
          <Card style={{ top: "60%", left: "20%"}} image={"/assets/logos/visualstudiocode.svg"} containerRef={grid2Container}/>
          <Card style={{ top: "90%", left: "40%"}} image={"/assets/logos/vitejs.svg"} containerRef={grid2Container}/>
          <Card style={{ top: "70%", left: "75%"}} image={"/assets/logos/wordpress.svg"} containerRef={grid2Container}/>
          <Card style={{ top: "10%", left: "16%"}} image={"/assets/logos/stripe.svg"} containerRef={grid2Container}/>
          <Card style={{ top: "26%", left: "45%"}} image={"/assets/logos/react.svg"} containerRef={grid2Container}/>
          <Card style={{ top: "48%", left: "67%"}} image={"/assets/logos/git.svg"} containerRef={grid2Container}/>
          <Card style={{ top: "54%", left: "43%"}} image={"/assets/logos/github.svg"} containerRef={grid2Container}/>
          <Card style={{ top: "34%", left: "22%"}} image={"/assets/logos/html5.svg"} containerRef={grid2Container}/>
          <Card style={{ top: "76%", left: "35%"}} image={"/assets/logos/javascript.svg"} containerRef={grid2Container}/>
        </div>
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">Moro no Brasil, mas estou aberto a trabalhar remotamente em todo o mundo</p>
         <figure className="absolute left-[30%] top-[10%]">
          <Globe />
          </figure>
          </div>
          
        </div>
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">Vamos trabalhar juntos?</p>
            <CopyEmailButton />
          </div>
        </div>
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tecnologias</p>
            <p className="subtext">Sou especialista em uma variedade de tecnologias,
              que me permitem desenvolver aplicações web e mobile.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%]
          md:scale-125">
            <Frameworks />
          </div>

        </div>
        </div>
    </section>
  )
}
export default About