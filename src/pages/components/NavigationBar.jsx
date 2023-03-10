import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  return (
    <div className="w-[85vw] mt-4 lg:w-[94w] absolute flex flex-row mx-auto lg:mt-8 items-center text-white justify-between left-1/2 -translate-x-1/2 transform">
      <h1 className="font-bold text-6xl ">FV</h1>
      <FontAwesomeIcon
        className="sm:inline-block md:inline-block lg:hidden xl:hiddden 2xl:hidden text-2xl px-2 py-2 border-[1.5px] border-white rounded-lg"
        icon={faBars}
      />
      <div className=" space-x-8 hidden lg:flex lg:flex-row">
        <a className="text-xl font-medium">About</a>
        <a className="text-xl font-medium">Projects</a>
        <a className="text-xl font-medium">Contact</a>
      </div>
    </div>
  );
}

export default NavigationBar;
