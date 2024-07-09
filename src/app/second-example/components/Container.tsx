"use client";

import { useNavMobileContext } from "@/components/contexts";
import { classHamburger, classHamburgerActive } from "./TestHeader";

export default function Container({
    className,
    id,
    children,
}: {
    className: string;
    id: string;
    children: React.ReactNode;
}) {
    const { navigation, setNavigation } = useNavMobileContext();
    let active =
        "bg-green-900 text-white rounded-md px-3 py-2 text-base font-medium nav-item";
    let normal =
        "text-gray-300 hover:bg-green-700 hover:text-white focus:bg-green-900 active:bg-green-900 rounded-md px-3 py-2 text-base font-medium nav-item";

    function handleChangeClassBurger(
        scrollY: number,
        maxHeight: number,
        minHeight: number
    ) {
        const newClass = navigation.map((element) => {
            if (element.id == id.toLowerCase()) {
                if (scrollY >= minHeight && scrollY <= maxHeight) {
                    element.classNameB = classHamburgerActive;
                } else {
                    element.classNameB = classHamburger;
                }
            }
            return element;
        });
        setNavigation(newClass);
    }

    function handleChangeClass(
        spans: HTMLCollectionOf<Element>,

        eleHeightFirst: number,
        eleHeightSecond: number
    ) {
        const scrollY = window.scrollY;

        Array.from(spans).forEach((el) => {
            if (el.id === id.toLowerCase()) {
                if (scrollY >= eleHeightSecond && scrollY <= eleHeightFirst) {
                    el.className = active;
                } else {
                    el.className = normal;
                }
            }
        });
    }

    return (
        <div
            className={className}
            id={id}
            ref={(node: HTMLDivElement) => {
                try {
                    let spans = document.getElementsByClassName("nav-item");

                    spans[0].className = active;

                    const element = document.getElementById(id);
                    window.addEventListener("scroll", () => {
                        const scrollY = window.scrollY;
                        const offset = element?.offsetTop;

                        const height = element?.scrollHeight!;
                        const minHeight = offset! * 0.75;
                        const maxHeight = height + offset! * 0.85;
                       
                        handleChangeClass(spans, maxHeight, minHeight);
                        if (window.innerWidth < 768) {
                            handleChangeClassBurger(
                                scrollY,
                                maxHeight,
                                minHeight
                            );
                        }
                    });
                } catch (e: any) {}
            }}
        >
            {children}
        </div>
    );
}
