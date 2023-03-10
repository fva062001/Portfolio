import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import NavigationBar from "./components/NavigationBar";
import MainTitle from "./components/MainTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div
        className={`min-w-[100vw] min-h-[100vh] relative ${styles.mainImage}`}
      >
        <div className={styles.overlay}></div>
        <NavigationBar />
        <MainTitle />
        <FontAwesomeIcon
          className=" lg:hidden absolute left-1/2 -translate-y-1/2 bottom-20 font-bold text-white text-xl animate-bounce"
          icon={faAngleDown}
        />
      </div>
    </>
  );
}
