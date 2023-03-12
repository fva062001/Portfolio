import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import NavigationBar from "./components/NavigationBar";
import MainTitle from "./components/MainTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import NavBarMini from "./components/NavBarMini";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showNavBar, setShowNavBar] = useState(false);

  const showNavBarHandler = () => {
    setShowNavBar(true);
  };

  const closeNavBar = () => {
    setShowNavBar(false);
  };

  return (
    <>
      <div
        className={`min-w-[100vw] min-h-[100vh] relative ${styles.mainImage}`}
      >
        <div className={styles.overlay}></div>
        <NavigationBar showNavBar={showNavBarHandler} />
        <MainTitle />
        <FontAwesomeIcon
          className=" lg:hidden absolute left-1/2 -translate-y-1/2 bottom-20 font-bold text-white text-xl animate-bounce"
          icon={faAngleDown}
        />
        {showNavBar && <NavBarMini closeNavBar={closeNavBar} />}
      </div>
    </>
  );
}
