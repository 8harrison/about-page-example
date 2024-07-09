"use client";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { whatsappLink } from "./utils";
import { useNavMobileContext } from "@/components/contexts";

interface PropsSection {
    name: string;
    href: string;
    current: boolean;
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export const classHamburger =
    "text-gray-300 hover:bg-green-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium nav-b-item";
export const classHamburgerActive =
    "bg-green-900 text-white block rounded-md px-3 py-2 text-base font-medium nav-b-item";

export default function Example() {
    const { navigation, setNavigation } = useNavMobileContext();
    function handleChangeCurentSection(item: PropsSection) {
        let navigations = navigation.map((it) => {
            if (it.href == item.href) {
                it.current = true;
                it.classNameB = classHamburgerActive;
            } else {
                it.classNameB = classHamburger;
                it.current = false;
            }
            return it;
        });

        setNavigation(navigations);
    }
    return (
        <Disclosure
            as="nav"
            className="bg-green-800 fixed w-full z-10"
            id="nav"
        >
            {({ open }: any) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative flex h-24 items-center justify-between w-full md:justify-around">
                            <div className=" inset-y-0 left-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-green-700 text-white focus:outline-none">
                                    {open ? (
                                        <XMarkIcon
                                            className="block w-10"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block w-10"
                                            aria-hidden="true"
                                            id="burg-btn"
                                        />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="flex items-center sm:justify-around mr-2 md:w-full">
                                <div className="flex flex-shrink-0 items-center">
                                    <Image
                                        className="h-14 w-auto"
                                        src="/favicon_package_v0.16/new_logo_genesio-removebg-preview.png"
                                        alt="Logo Genésio"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className="hidden md:ml-6 md:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                id={item.id}
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    "text-gray-300 hover:bg-green-700 hover:text-white focus:bg-green-900 active:bg-green-900 rounded-md px-3 py-2 text-base font-medium nav-item"
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 hidden xl:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="btn rounded-lg bg-green-300 hover:bg-green-500 hover:border-green-600 text-black text-sm font-bold border-green-500 active:bg-green-500 h-2 min-h-9 leading-none"
                                >
                                    <a href={whatsappLink}>AGENDAR CONSULTA</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2" id="panel">
                            {navigation.map((item) => (
                                <a
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                    id={item.id}
                                    key={item.name}
                                    href={item.href}
                                    className={item.classNameB}
                                    onClick={(e) =>
                                        handleChangeCurentSection(item)
                                    }
                                >
                                    <DisclosureButton>
                                        {item.name}
                                    </DisclosureButton>
                                </a>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
