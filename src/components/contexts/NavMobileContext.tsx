"use client";
import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

interface ToastProps {
    isVisible: boolean;
    message: string;
}
interface PropsSection {
    name: string;
    href: string;
    current: boolean;
    id: string;
    classNameB: string;
}
let navigations: PropsSection[] = [
    {
        name: "Home",
        href: "#Home",
        current: true,
        id: "home",
        classNameB:
            "bg-green-900 text-white block rounded-md px-3 py-2 text-base font-medium",
    },
    {
        name: "Abordagem",
        href: "#Method",
        current: false,
        id: "method",
        classNameB:
            "text-gray-300 hover:bg-green-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium",
    },
    {
        name: "Serviços",
        href: "#Services",
        current: false,
        id: "services",
        classNameB:
            "text-gray-300 hover:bg-green-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium",
    },
    {
        name: "Sobre mim",
        href: "#About",
        current: false,
        id: "about",
        classNameB:
            "text-gray-300 hover:bg-green-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium",
    },
    {
        name: "Contato",
        href: "#Contact",
        current: false,
        id: "contact",
        classNameB:
            "text-gray-300 hover:bg-green-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium",
    },
];
export interface INavMobileContext {
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
    isSendEmail: ToastProps;
    setSendEmail: Dispatch<SetStateAction<ToastProps>>;
    navigation: PropsSection[];
    setNavigation: Dispatch<SetStateAction<PropsSection[]>>;
}

const NavMobileContext = createContext<INavMobileContext>(null!);

export function NavMobileProvider({ children }: { children: React.ReactNode }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isSendEmail, setSendEmail] = useState({
        isVisible: false,
        message: "",
    });
    const [navigation, setNavigation] = useState(navigations);
    return (
        <NavMobileContext.Provider
            value={{
                isVisible,
                setIsVisible,
                isSendEmail,
                setSendEmail,
                navigation,
                setNavigation,
            }}
        >
            {children}
        </NavMobileContext.Provider>
    );
}

export function useNavMobileContext() {
    return useContext(NavMobileContext);
}
