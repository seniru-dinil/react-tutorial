import React, { useEffect, useRef, useState } from "react";
import type { TypeAlert } from "../types";


const Alert:React.FC<{alert:TypeAlert | undefined}> = ({alert}) => {
  
  const timeoutRef = useRef<undefined | number>(undefined);
  const [open,setOpen] = useState<boolean>(false);

  useEffect(() => {
    
    if(alert){
        setOpen(true);
        timeoutRef.current = setTimeout(()=>{
            setOpen(false);              
        },1000);
    }
    return () => clearTimeout(timeoutRef.current);

  },[alert])
 
    
  return (
    <div
      className={
        `bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 w-fit fixed bottom-4 transform transition-all duration-500 ease-in-out ` +
        (open ? 'translate-x-4 opacity-100' : '-translate-x-full opacity-0')
      }
      role="alert"
      aria-hidden={!open}
    >
      <p className="font-bold">{alert?.title}</p>
      <p>{alert?.message}</p>
    </div>
  );
};

export default React.memo(Alert);
