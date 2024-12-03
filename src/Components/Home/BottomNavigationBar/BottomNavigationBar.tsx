import { AiFillHome, AiOutlineSearch, AiFillSetting } from "react-icons/ai";
import { FiUser } from "react-icons/fi";

const BottomNavigationBar = () => {
  const navItems = [
    { label: "Home", icon: <AiFillHome /> },
    { label: "Search", icon: <AiOutlineSearch /> },
    { label: "Profile", icon: <FiUser /> },
    { label: "Settings", icon: <AiFillSetting /> },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#1f0942] via-[#150726] to-[#0a0011] text-white flex justify-around items-center rounded-3xl border-2 border-purple-500 shadow-xl shadow-purple-700/50 xl:w-[48rem] lg:w-[36rem] md:w-96 w-80 xl:h-20 lg:h-18 sm:h-16 h-14">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center cursor-pointer xl:text-lg lg:text-base sm:text-sm text-xs hover:text-purple-200 transition duration-300"
        >
          <div className="xl:text-3xl lg:text-2xl sm:text-xl text-lg">{item.icon}</div>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigationBar;
