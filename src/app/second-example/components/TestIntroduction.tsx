import Image from "next/image";
import { whatsappLink } from "./utils";

export default function Introduction() {
    return (
        <div className="flex flex-col items-center shadow-sm md:flex-row bg-gradient-to-tr from-green-600 to-emerald-100 md:justify-around py-16 pt-28 h-full">
            <div className="flex flex-col px-6 sm:px-0 font-display justify-between prose md:my-2 md:self-stretch">
                <div className="md:mt-40 md:pl-10">
                    <h1 className="font-bold">
                        Psicólogo Genésio Costa
                    </h1>
                    <h2 className="font-medium text-gray-700 ">
                        Transformando Vidas com Psicologia
                    </h2>
                </div>
                <div className="self-center">
                    <a href={whatsappLink} className="no-underline">
                        <button
                            type="button"
                            className="btn rounded-lg bg-green-300 hover:bg-green-500 hover:border-green-600 border-green-500 active:bg-green-500"
                        >
                            AGENDAR CONSULTA
                        </button>
                    </a>
                </div>
            </div>
            <Image
                src="/genesio_sofa.png"
                alt="genesio no sofá"
                className="h-auto md:w-1/3  w-2/3 self-center m-2 rounded-lg max-w-96"
                width={800}
                height={800}
            />
        </div>
    );
}
