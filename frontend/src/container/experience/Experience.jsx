import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Experience.scss";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
   s   <h2 className="head-text">Experience</h2>

      <div className="app__skills-exp">
        <VerticalTimeline
          animate={true}
        >
          {experiences.map((experience) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={experience.year}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={
                experience.year === "2020 - 2021" ? <DiNodejs /> : <FaReact />
              }
            >
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      <p
                        className="py-2 text-gray-600 text-sm 
    text-justify"
                      >
                        {work.desc}
                      </p>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__skills"),
  "experience",
  "app__primarybg"
);
