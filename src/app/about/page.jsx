"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/me.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Hi , my name is Sanal a self-taught MERN Stack developer , passionate about building innovative web solutions and apps.
              I am a BCA graduate studied under Kerala University , 2020-2023.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Wake Up to Reality...
            </span>

            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="475"
                height="414"
                viewBox="0 0 475 414"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M203 176C204.669 155.552 210.875 135.455 213.556 115.111C214.229 110.003 215.761 100.96 212.222 96.4444C208.551 91.7606 202.052 89.2699 196.556 87.7778C178.95 82.9979 161.031 83.7199 143.889 90.1111C135.554 93.2185 128.063 97.6863 120.944 102.944C119.713 103.854 114.98 106.779 114 108.667C110.05 116.278 107.682 127.322 105.389 135.167C101.313 149.113 97.4063 163.201 95.6667 177.667C94.2298 189.615 95.3408 201.594 107.444 206.889C123.025 213.706 141.447 216.02 158.333 215.111C174.204 214.257 189.272 208.457 205.111 207.222C229.888 205.29 265.64 213.626 270.111 242.889C272.656 259.549 265.095 276.668 255.889 290.111C245.54 305.222 228.003 314.073 211.333 320.444C187.491 329.557 163.159 327.662 139.444 318.444C107.539 306.043 83.4206 277.941 63 251.556C33.7674 213.785 16.5228 167.017 6.44443 120.667C0.783215 94.631 1.35503 68.5581 6.55554 42.5556C7.68798 36.8934 16.2744 33.6709 21.5555 35.4444C30.6653 38.5037 38.4048 46.8892 44.2222 53.9444C55.9086 68.1173 64.0746 84.1532 70.8889 101.111C83.4857 132.459 91.2478 165.734 101.444 197.889C109.379 222.911 118.289 247.848 129.889 271.444C133.315 278.414 137.365 283.753 142.778 289.222C144.691 291.155 155.2 305.378 159 303.778C161.218 302.844 163.414 300.702 165.222 299.222C172.175 293.533 178.946 289.116 183.333 280.889C191.703 265.196 195.068 249.346 195.778 231.667C195.993 226.311 196.661 219.494 194.778 214.222C193.924 211.832 190.11 210.744 188 210.222C177.344 207.587 164.867 213.32 155.111 216.889C150.029 218.748 145.92 219.84 143.333 224.778C136.05 238.683 131.12 255.454 128.444 270.889C128.19 272.357 126.498 277.926 127.222 279.556C127.723 280.682 129.77 281.687 130.556 282.778C133.982 287.536 147.251 275.482 149.889 273.889C154.525 271.088 158.806 267.567 163.556 265C164.267 264.616 166.277 264.279 166.778 263.778C168.356 262.2 167 252.704 167 250.889C167 248.655 166.418 242.431 164 241.222C157.06 237.752 148.806 247.522 145 252C140.138 257.72 144.258 276 152 276C159.818 276 162.915 262.084 163 256C163.049 252.491 163.095 248.953 163 245.444C162.958 243.875 161.814 242.555 163.444 244.889C166.159 248.775 189.575 281.455 191.222 279.111C195.061 273.648 195.558 261.946 192 256.222C188.896 251.228 185.789 246.07 183.444 240.667C182.877 239.358 182.704 237.333 181.778 236.222C179.612 233.624 179.98 232.38 183.222 231.222C186.324 230.115 189.582 227.703 193 228C199.103 228.531 205.701 234.965 208.778 240C213.243 247.308 224.112 244.734 228 238.444C232.495 231.172 229.159 214.306 224 208C222.449 206.104 222.245 202.171 219 202C207.947 201.418 210.696 215.006 215 221.222C220.539 229.223 220.704 203.495 220.778 202.111C220.929 199.292 219.023 192.214 221.444 193.667C225.641 196.185 227.99 203.294 230.778 207.111C237.221 215.933 245.207 216.414 247.556 204C250.61 187.854 247.766 170.283 244.833 154.444C240.133 129.06 232.591 104.417 224.333 80C218.29 62.1304 213.269 41.121 200.667 26.4444C200.217 25.921 190.474 13.9051 191 19.8889C193.106 43.8414 200.311 69.4789 209.333 91.6667C216.519 109.338 228.44 125.728 241.333 139.667C252.433 151.666 263.437 163.474 273.556 176.333C274.396 177.401 275.7 178.838 274.556 180.222C269.222 186.672 262.338 192.718 256.667 198.667C237.94 218.31 219.726 238.411 201.667 258.667C175.809 287.669 148.429 314.297 120.556 341.333C96.3879 364.775 73.5967 390.262 47.7778 411.778C45.3604 413.792 51.6113 406.778 53.7222 404.444C80.2769 375.088 107.545 346.295 135.222 318C187.543 264.511 243.134 214.131 297.333 162.556C329.021 132.402 361.149 102.125 395.333 74.7778C397.558 72.998 402.822 68.1566 403 71C403.011 71.1806 401.868 75.6879 401.778 75.7778C401.139 76.4166 399.829 75.5548 399.222 76.2222C398.736 76.7574 398.231 78.8842 398.056 79.2778C393.898 88.5822 388.739 97.8322 384 106.778C354.456 162.549 323.413 220.226 280.556 267.111C249.43 301.162 213.569 328.737 171.667 348.222C163.593 351.977 131.457 370.623 124.667 355.222C106.29 313.544 114.958 259.467 127 217.556C136.861 183.233 156.563 153.484 189.222 137.444C197.068 133.591 209.209 128.116 218.444 129.611C225.633 130.775 228.362 139.578 229.667 145.556C235.062 170.267 230.21 202.021 218.556 224.444C210.898 239.178 195.405 252.009 180.111 258.333C170.902 262.142 150.413 256.994 149 245.222C148.047 237.281 146.926 261.084 145.778 269C144.27 279.393 142.861 289.789 141.667 300.222C141.438 302.221 141.24 304.224 141 306.222C140.745 308.344 138.301 311.259 140 312.556C140.741 313.121 141.844 312.085 142.611 311.556C150.854 305.874 169.587 288.866 173.111 285.722C216.649 246.889 259.311 207.075 302.222 167.556C340.064 132.705 378.209 98.1577 415.611 62.8333C431.962 47.3909 448.99 31.9011 463.444 14.5556C466.648 10.7118 476.475 -0.015377 472 2.22222C470.911 2.76656 471 3.97726 471 5C471 7.32436 471.486 9.17143 469 10"
                  stroke="#110101"
                  stroke-width="3"
                  stroke-linecap="round" />
              </svg>
            </div>

            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Education
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* course TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    MERN Stack Developer
                  </div>
                  {/* course DESC */}
                  <div className="p-3 text-sm italic">
                    Self-learned MERN Stack developer passioned about developing 
                    MERN Stack projects.{" "}
                  </div>
                  {/* course DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 aug - Present
                  </div>
                  {/*  Institute */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Brototype
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* course TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    B.C.A(Bachelor Of Computer Apllication)
                  </div>
                  {/* course DESC */}
                  <div className="p-3 text-sm italic">
                    Completed B.C.A under Kerala University in IHRD 
                    College Of Applied Science , Perissery{" "}
                  </div>
                  {/* course DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020 - 2023{" "}
                  </div>
                  {/* Institute */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    IHRD College Of Applied Science , Perissery
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* course TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Higher Secondary Education{" "}
                  </div>
                  {/* course DESC */}
                  <div className="p-3 text-sm italic">
                    Completed the Higher Secondary Education under Kerala University in 2019.{" "}
                  </div>
                  {/* period  */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2018 - 2020{" "}
                  </div>
                   {/* school name */}
                   <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    D.B.H.S.S Cheriyanadu ,
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;