import { createContext, useState } from "react";
import Alert, { type TypeAlert } from "../components/Alert";

interface AlertContextProviderProps {
  children: React.ReactNode;
}

interface AlertContextTypes {
  showAlert: (config: TypeAlert) => void;  
}

const AlertContext = createContext<AlertContextTypes>({
    //@ts-ignore
    showAlert:(config) => {},  
});

const AlertContextProvider: React.FC<AlertContextProviderProps> = ({
  children,
}) => {

     
    const [alert,setAlert] = useState<TypeAlert | undefined>(undefined);

    const showAlert = (config:TypeAlert) => {
       setAlert(config);
    }


  return (
    <AlertContext.Provider value={{
        showAlert,        
    }}>    
    {children}
    <Alert alert={alert}/>
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;


export {
  AlertContext
}

