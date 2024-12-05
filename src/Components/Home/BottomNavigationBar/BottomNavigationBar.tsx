import { AiFillHome, AiFillSetting, AiOutlineMenu } from "react-icons/ai";
import { MdGroupAdd } from "react-icons/md";
import { GiMining } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

import { useTranslation } from "react-i18next";


const BottomNavigationBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { t } = useTranslation();

  const navItems = [
    { label: t("Navigation.Btn1"), icon: <AiFillHome /> },
    { label: t("Navigation.Btn2"), icon: <GiMining /> },
    { label: t("Navigation.Btn3"), icon: <MdGroupAdd /> },
    { label: t("Navigation.Btn4"), icon: <AiFillSetting /> },
  ];

  return (
    <div
      className={`fixed 
        ${isCollapsed 
          ? 'bottom-4 left-4 w-16 h-16 bg-gradient-to-b from-purple-600 to-purple-900 rounded-full cursor-pointer'
          : 'bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#1f0942] via-[#150726] to-[#0a0011] xl:w-[48rem] lg:w-[36rem] md:w-96 w-80 xl:h-20 lg:h-18 sm:h-16 h-14 rounded-3xl'
        }
        text-white flex justify-around items-center border-2 border-purple-500 
        shadow-xl shadow-purple-700/50 transition-all duration-500 ease-in-out`}
      onClick={() => isCollapsed && setIsCollapsed(false)}
    >
      {!isCollapsed && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsCollapsed(true);
          }}
          className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-b from-purple-600 to-purple-900 rounded-full flex items-center justify-center hover:bg-purple-800 transition-colors duration-300"
        >
          <IoMdClose size={20} className="text-white" />
        </button>
      )}
      
      {isCollapsed ? (
        <div className="w-full h-full flex items-center justify-center">
          <AiOutlineMenu size={28} className="text-white" />
        </div>
      ) : (
        navItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center cursor-pointer xl:text-lg lg:text-base sm:text-sm text-xs hover:text-purple-200 transition duration-300"
          >
            <div className="xl:text-3xl lg:text-2xl sm:text-xl text-lg">{item.icon}</div>
            <span>{item.label}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default BottomNavigationBar;
