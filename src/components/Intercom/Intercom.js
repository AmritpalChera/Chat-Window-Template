import Messages from "components/Messages/Messages";
import React from "react";
import { useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { IoClose } from 'react-icons/io5';
import Header from "../Header/Header";
import WindowContainer from "../Helpers/WindowContainer";

const Intercom = ({name, buttonColor}) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(!active);


  return (
    <div className="fixed bottom-5 right-3">
      <div
        className="
         w-10 h-10 rounded-full flex items-center justify-center
          bg-sky-500 text-white font-medium
         shadow-md hover:shadow-slate-700
         shadow-slate-500 cursor-pointer hover:text-lg"
        onClick={toggleActive}
        style={{backgroundColor: buttonColor && buttonColor}}
      >
        {<BiMessageDetail className={`transition-all ease-in-out ${!active? 'rotate-0' : 'rotate-180 w-0 h-0'} duration-500 `}/>}
        {<IoClose className={`transition-all ease-in-out ${active?'rotate-0' : 'rotate-180 w-0 h-0' } duration-500`}/>}
      </div>

      {/* CHAT WINDOW */}
      {active && <WindowContainer>
        <Header name={name} toggleClose={toggleActive} />
        <Messages primaryColor={buttonColor}/>
      </WindowContainer>
      }
    </div>
  );
};

export default Intercom;
