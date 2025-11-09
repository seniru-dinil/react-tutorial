import { createContext, useRef, useState } from "react";
import Alert, { type TypeAlert } from "../components/Alert";

interface AlertContextProviderProps {
  children: React.ReactNode;
}

interface AlertContextTypes {
  showAlert: (config: TypeAlert) => void;
  closeAlert: () => void;
}

const AlertContext = createContext<AlertContextTypes>({
    //@ts-ignore
    showAlert:(config) => {},
    closeAlert: () => {}
});

const AlertContextProvider: React.FC<AlertContextProviderProps> = ({
  children,
}) => {

    const [open,setOpen] = useState<boolean>(false);
    const timeoutRef = useRef<undefined | number>(undefined);
    const [alert,setAlert] = useState<TypeAlert | undefined>(undefined);

    const showAlert = (config:TypeAlert) => {
        clearTimeout(timeoutRef.current);
        setOpen(true);
        setAlert(config);
        timeoutRef.current = setTimeout(()=>{
            setOpen(false);
            setAlert(undefined)
        },3000);        
        setOpen(true);
    }

    const closeAlert = () => {
        setOpen(false);
    }

  return (
    <AlertContext.Provider value={{
        showAlert,
        closeAlert
    }}>    
    {children}
    {open && <Alert alert={alert as TypeAlert}/>}    
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;


export {
  AlertContext
}

