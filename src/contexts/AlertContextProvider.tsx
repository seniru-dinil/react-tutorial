import { createContext, useContext, useRef, useState } from "react";
import Alert from "../components/Alert";

interface AlertContextProviderProps {
  children: React.ReactNode;
}

interface AlertContextTypes {
  showAlert: (config: any) => void;
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
    const [alert,setAlert] = useState<any>(undefined);

    const showAlert = (config:any) => {
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
    {open && <Alert alert={alert}/>}    
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;


export const useAlertContext = () => {
    const alertContext = useContext(AlertContext);
    return alertContext;
}
