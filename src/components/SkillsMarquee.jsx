import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

import { skills } from '../data/data'

const SkillsMarquee = () => {
  return (
    <section
      id="skills"
      className=" py-28 scroll-mt-24 relative overflow-hidden "
    >

      <div
        className=" absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08),transparent_40%)] "  />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <SectionTitle
            subtitle="Tecnologías"
            title="Skills"
          />
        </Reveal>

        <Reveal>
          <div className="marquee">
            <div className="marquee-track">
              {[...skills, ...skills].map((skill, index) => {
                const Icon = skill.icon

                return (
                  <div
                    key={index}
                    className="  flex  items-center  gap-4  px-8   py-5  mx-4  rounded-2xl  border  border-white/10 bg-white/5  backdrop-blur-md  hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300 min-w-[220px] " >
                    <div className=" text-4xl text-cyan-400 " >
                      <Icon />
                    </div>

                    <div>
                      <h3 className=" text-lg font-semibold " >
                        {skill.name}
                      </h3>

                      <p className=" text-gray-400 text-sm " >
                        Tecnología
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default SkillsMarquee