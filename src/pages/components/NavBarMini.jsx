import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
function NavBarMini({ closeNavBar, goTo }) {
  const closeHandler = () => {
    closeNavBar();
  };
  const handleMovement = () => {
    goTo();
    closeNavBar();
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-2">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ y: 2, scale: 1 }}
        className=" w-[95vw] bg-white rounded-xl min-w-[95vw] h-fit"
      >
        <div className="  flex flex-col items-center space-y-4 py-6">
          <a onClick={handleMovement} className="text-2xl font-bold">
            About
          </a>
          <a onClick={handleMovement} className="text-2xl font-bold">
            Projects
          </a>
          <a onClick={handleMovement} className="text-2xl font-bold">
            Contact
          </a>
          <a className="text-xl font-bold" onClick={closeHandler}>
            <FontAwesomeIcon icon={faX} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default NavBarMini;
