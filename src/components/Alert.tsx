import React from "react";

const Alert:React.FC<{alert:any}> = ({alert}) => {
 
    
  return (
    <div
      className={`
        bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 w-fit 
        fixed bottom-4 
        transform transition-all duration-500 ease-in-out
        translate-x-4 opacity-100
      `}
      role="alert"
    >
      <p className="font-bold">{alert?.title}</p>
      <p>{alert?.message}</p>
    </div>
  );
};

export default React.memo(Alert);
