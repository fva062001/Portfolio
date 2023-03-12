import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
function NavBarMini({ closeNavBar }) {
  const closeHandler = () => {
    console.log("here");
    closeNavBar();
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-2">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        exit={{ scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className=" w-[95vw] bg-white rounded-xl min-w-[95vw] h-fit"
      >
        <div className="  flex flex-col items-center space-y-4 py-6">
          <a className="text-2xl font-bold">About</a>
          <a className="text-2xl font-bold">Projects</a>
          <a className="text-2xl font-bold">Contact</a>
          <a className="text-xl font-bold" onClick={closeHandler}>
            <FontAwesomeIcon icon={faX} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default NavBarMini;
