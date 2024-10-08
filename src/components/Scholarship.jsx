import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { honors } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const HonorCard = ({ index, name, description, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex-1 flex justify-center items-center"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-secondary p-3 rounded-xl sm:w-[200px] w-full flex flex-col justify-left items-left"
        style={{ height: "100%" }}
      >
        <div className="relative w-full h-[100px] flex justify-center items-center">
          <div className="w-20 h-20 bg-primary rounded-full flex justify-center items-center">
            <img
              src={image}
              alt="honor_icon"
              className="w-2/3 h-2/3 object-contain"
            />
          </div>
        </div>

        <div className="mt-3 flex-grow flex flex-col justify-top-left items-left">
          <h3 className="text-white font-bold text-[18px] text-left">{name}</h3>
          <p className="mt-1 text-white text-[12px] text-left">{description}</p>
        </div>

        {source_code_link && source_code_link.trim() !== "" && (
          <div className="mt-3">
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-[12px] underline text-left"
            >
              View Documentation
            </a>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Honor</p>
        <h2 className={`${styles.sectionHeadText}`}>Scholarship and Patent.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I have been recognized for my skills and accomplishments through
          various scholarships and patents. These accolades reflect my ability
          to excel in different domains, showcasing my dedication, expertise,
          and commitment to excellence. Each award highlights my achievements
          and the impact of my work in my field.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-4 gap-7">
        {honors.map((honor, index) => (
          <HonorCard key={`honor-${index}`} index={index} {...honor} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
