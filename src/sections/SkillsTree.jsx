import React, { useState, useRef, useEffect  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, FlaskConical, Code2, Database, Settings, Palette, Braces, Users, Smile } from "lucide-react";
import TitleHeader from "../components/TitleHeader";


const skills = {
  Python: {
    icon: <FlaskConical className="inline-block w-5 h-5 mr-2" />,
    branches: ["Flask", "Pandas", "NumPy"]
  },
  Java: {
    icon: <Braces className="inline-block w-5 h-5 mr-2" />,
    branches: ["Spring Boot", "OOP", "REST APIs"]
  },
  JavaScript: {
    icon: <Code2 className="inline-block w-5 h-5 mr-2" />,
    branches: ["Vanilla JavaScript", "React", "Node.js"]
  },
  Database: {
    icon: <Database className="inline-block w-5 h-5 mr-2" />,
    branches: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j", "ElasticSearch"]
  },
  DevTools: {
    icon: <Settings className="inline-block w-5 h-5 mr-2" />,
    branches: ["Git", "Docker", "Postman"]
  },
  Styling: {
    icon: <Palette className="inline-block w-5 h-5 mr-2" />,
    branches: ["CSS", "SCSS"]
  },
  Collaboration: {
    icon: <Users className="inline-block w-5 h-5 mr-2" />,
    branches: ["Teamwork", "Agile", "Scrum", "Cross-functional communication"]
  },
  SoftSkills: {
    icon: <Smile className="inline-block w-5 h-5 mr-2" />,
    branches: ["Critical thinking", "Problem Solving", "Adaptability"]
  }
};

const SkillBranch = ({ root, icon, branches }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const toggleOpen = () => setOpen(!open);

  return (
    <motion.div
      ref={ref}
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        onClick={toggleOpen}
        className="cursor-pointer bg-gradient-to-r from-black-50 to-black-100 text-white p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform"
      >
        <h2 className="text-xl font-semibold flex items-center justify-between">
          <span>{icon}{root}</span>
          {open ? <ChevronUp /> : <ChevronDown />}
        </h2>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl mt-2 ml-6 shadow-inner space-y-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {branches.map((branch, index) => (
              <motion.li
                key={index}
                className="bg-white-50 px-4 py-2 rounded-xl shadow hover:shadow-lg text-black-100 font-medium transition duration-300"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                {branch}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function SkillsTree() {
  return (
    <section
      id="skills"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Programming Languages & Skills"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10"></div>
            {Object.entries(skills).map(([root, { icon, branches }]) => (
              <SkillBranch key={root} root={root} icon={icon} branches={branches} />
            ))}
        </div>
      </div>
    </section>
  );
}
