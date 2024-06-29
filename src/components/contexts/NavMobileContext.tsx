"use client";
import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

interface ToastProps{
    isVisible: boolean;
    message: string;
}
export interface INavMobileContext {
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
    isSendEmail: ToastProps;
    setSendEmail: Dispatch<SetStateAction<ToastProps>>;
}



const NavMobileContext = createContext<INavMobileContext>(null!);

export function NavMobileProvider({ children }: { children: React.ReactNode }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isSendEmail, setSendEmail] = useState({isVisible: false, message: ''});
    return (
        <NavMobileContext.Provider
            value={{ isVisible, setIsVisible, isSendEmail, setSendEmail }}
        >
            {children}
        </NavMobileContext.Provider>
    );
}

export function useNavMobileContext() {
    return useContext(NavMobileContext);
}
