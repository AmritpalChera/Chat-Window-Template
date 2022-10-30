
import React from 'react';
import { BiSend } from 'react-icons/bi';

const Messages = ({ primaryColor }) => {

  const TheirMessage = ({text}) => (
    <div className='flex'>
      <div className='bg-slate-200 px-2 rounded-t-md rounded-r-md mt-1 max-w-4/5 break-words text-left'>{text }</div>
    </div>
  );

  const OurMessage = ({text}) => (
    <div className='flex justify-end'>
      <div className='bg-sky-300 px-2 rounded-t-md rounded-l-md mt-1 max-w-4/5 break-words text-left'>{text }</div>
    </div>
  );

  return (
    <div className='w-full h-full pb-12 flex flex-col'>
      <div className='flex-1 px-2 py-4 flex flex-col justify-end w-full overflow-hidden'>
        <div className='h-full overflow-y-auto noScrollbar'>
          <TheirMessage text="heyyy, I am Chatbot,  got any questions?"/>
          <OurMessage text="helooo"></OurMessage>
          <OurMessage text="yes, I wanted to ask how I do this SAMPLE task?"></OurMessage>
          <TheirMessage text="Have you checked out the FAQ yet?"/>
          <TheirMessage text="*YES/NO button prompts*" />
          <OurMessage text="No"></OurMessage>
          <TheirMessage text="Cool, check it out *here*. Let me know if it helps" />
          <TheirMessage text="*YES/NO button prompts*" />
          <OurMessage text="No"></OurMessage>
          <TheirMessage text="Let me forward this convo to a real person." />
          <TheirMessage text="Can I get your email or wallet address so I can notify you once I have an answer?" />
        </div>
        
      </div>

      {/* INPUT */}
      <div className='w-full flex px-3 pb-2'>
        <input autoFocus placeholder='Type here...' className='flex-1 border-slate-200 h-8 border rounded-lg shadow-sm shadow-slate-500 px-2 focus:outline-none'></input>
        <button className='bg-sky-500 w-8 flex items-center justify-center rounded-full ml-2 text-white shadow-md' style={{backgroundColor: primaryColor && primaryColor}}><BiSend /></button>
      </div>
    </div>
  )
}

export default Messages