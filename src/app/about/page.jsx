"use client";
import { motion } from "framer-motion";


const AboutPage = () => {
  return (

    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container div */}
      <div className=" ">

        {/* text container start*/}

        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">

            {/* biography */}
          <div className="">BIOGRAPHY</div>

          {/* skills */}
          <div className="">SKILLS</div>

          {/* experience/project */}
          <div className="">PROJECTS</div>

        </div>
        

        {/* svg container start*/}

        <div className="hidden">

        </div>
        
      </div>

    </motion.div>

  )
}

export default AboutPage;