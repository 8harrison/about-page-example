"use client";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

interface PropsSection {
    name: string;
    href: string;
    current: boolean;
}
const message = "Gostaria de marcar uma consulta para terapia individual."
    .split(" ")
    .join("%20");

const whatsappLink = `https://wa.me/554888123179?text=${message}`;

let navigation = [
    { name: "Home", href: "#", current: true },
    { name: "Serviços", href: "#Services", current: false },
    { name: "Sobre mim", href: "#About", current: false },
    { name: "Contato", href: "#Contact", current: false },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const [sections, setSections] = useState(navigation);
    function handleChangeCurentSection(item: PropsSection) {
        navigation = navigation.map((it) => {
            if (it.href == item.href) {
                it.current = true;
            } else it.current = false;
            return it;
        });
        setSections(navigation);
    }
    return (
        <Disclosure as="nav" className="bg-green-800 fixed w-full z-10">
            {({ open }: any) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between w-full md:justify-around">
                            <div className=" inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-green-700 text-white focus:outline-none">
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="flex items-center  sm:items-stretch sm:justify-around mr-2 sm:w-full md:w-auto">
                                <div className="flex flex-shrink-0 items-center">
                                    <Image
                                        className="h-8 w-auto"
                                        src="/android-chrome-384x384.png"
                                        alt="Logo Genésio"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {sections.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                onClick={() =>
                                                    handleChangeCurentSection(
                                                        item
                                                    )
                                                }
                                                className={classNames(
                                                    item.current
                                                        ? "bg-green-900 text-white"
                                                        : "text-gray-300 hover:bg-green-700 hover:text-white",
                                                    "rounded-md px-3 py-2 text-base font-medium"
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
                            <div className="absolute inset-y-0 right-0 hidden md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="btn rounded-lg bg-green-300 hover:bg-green-500 hover:border-green-600 text-black text-sm font-bold border-green-500 active:bg-green-500 h-2 min-h-9 leading-none"
                                >
                                    <a href={whatsappLink}>AGENDAR CONSULTA</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {sections.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    onClick={() =>
                                        handleChangeCurentSection(item)
                                    }
                                    className={classNames(
                                        item.current
                                            ? "bg-green-900 text-white"
                                            : "text-gray-300 hover:bg-green-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
