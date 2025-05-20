const About = () => {
  return (
    <section className="c-space section-spacing">
        <h2 className="text-heading">Sobre mim</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
            <img src="assets/coding-pov.png" alt="código" 
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem]
            md:scale-[3] md:left-50 md:inset-y-10
            lg:scale-[2.5]"  />
        </div>
        <div className="grid-default-color grid-2">

        </div>
        <div className="grid-black-color grid-3">

        </div>
        <div className="grid-special-color grid-4">

        </div>
        <div className="grid-default-color grid-5">

        </div>
        </div>
    </section>
  )
}
export default About