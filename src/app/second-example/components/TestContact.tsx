import Image from "next/image";
import { whatsappLink } from "./utils";
import React from "react";

export default async function TestContact({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="py-6 bg-green-600 font-display" id="Contact">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6 flex flex-col justify-between">
                    <h1 className="text-4xl font-bold">Entre em Contato</h1>
                    <p className="pt-2 pb-2">
                        Preencha o formulário e comece uma conversa
                    </p>
                    <div className="py-6 space-y-6 md:py-0 flex flex-col">
                        <p className="flex items-center">
                            <Image
                                src="https://www.svgrepo.com/show/379072/marker.svg"
                                className="w-5 h-5 mr-2 sm:mr-4 opacity-65 ml-1"
                                width={50}
                                height={50}
                                alt="Endereço"
                            />
                            <span>Fake address, 9999 City</span>
                        </p>
                        <p className="flex items-center">
                            <Image
                                src="https://www.svgrepo.com/show/506672/phone.svg"
                                className="w-7 h-7 mr-1 sm:mr-3 opacity-65"
                                width={50}
                                height={50}
                                alt="Telefone"
                            />
                            <span>123456789</span>
                        </p>
                        <p className="flex items-center">
                            <Image
                                src="https://www.svgrepo.com/show/511917/email-1572.svg"
                                className="w-5 h-5 mr-2 sm:mr-4 opacity-65 ml-1"
                                width={50}
                                height={50}
                                alt="E-mail"
                            />
                            <span>contact@business.com</span>
                        </p>
                        <a href={whatsappLink} className="self-center">
                            <button className="btn bg-green-300 active:bg-green-200 hover:bg-green-200 border-green-400 active:border-green-300 hover:border-green-300">
                                <Image
                                    src="https://www.svgrepo.com/show/110197/whatsapp.svg"
                                    className="w-5 "
                                    width={50}
                                    height={50}
                                    alt="WhatsApp"
                                />
                                WhatsApp
                            </button>
                        </a>
                    </div>
                </div>
                {children}
            </div>
        </section>
    );
}
