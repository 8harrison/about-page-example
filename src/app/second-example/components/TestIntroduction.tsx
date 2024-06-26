import Image from "next/image";

const message = "Gostaria de marcar uma consulta para terapia individual."
    .split(" ")
    .join("%20");

const whatsappLink = `https://wa.me/554888123179?text=${message}`;

export default function Introduction() {
    return (
        <div className="flex flex-col items-center shadow-sm md:flex-row bg-gradient-to-tr from-green-600 to-emerald-100 md:justify-around pt-16 h-full">
            <Image
                src="/genesio_sofa.png"
                alt="genesio no sofá"
                className="h-auto md:w-1/3  w-2/3 self-center m-2 rounded-lg max-w-96 "
                width={800}
                height={800}
            />
            <div className="flex flex-col px-6 sm:px-0 font-display justify-around prose md:my-2 md:self-stretch">
                <div>
                    <h3 className="text-3xl font-bold ">
                        Psicólogo Genésio Costa e Silva
                    </h3>
                    <h5 className="font-semibold text-gray-700 ">
                        Transformando Vidas com Psicologia
                    </h5>
                    <p className="my-6 text-gray-700 md:my-0 ">
                        Bem-vindo ao espaço de Genésio Costa e Silva, um
                        profissional dedicado a promover o bem-estar e a saúde
                        mental. Com uma abordagem centrada no paciente, Dr.
                        Genésio oferece um ambiente acolhedor e seguro para que
                        seus clientes possam explorar suas emoções e desafios de
                        forma aberta e honesta.
                    </p>
                </div>
                <div className="self-center bottom-1 overflow-auto">
                    <button
                        type="button"
                        className="btn rounded-lg bg-green-700 text-white p-6 h-16 text-xl font-bold hover:bg-green-500 hover:border-green-600 border-green-500 active:bg-green-500  leading-none"
                    >
                        <a href={whatsappLink} className="no-underline">
                            AGENDAR CONSULTA
                        </a>
                    </button>
                </div>
            </div>
            <Image
                className="hidden xl:flex max-w-96 opacity-80"
                src="/human_head.png"
                alt="Cabeça humana"
                width={800}
                height={500}
            />
        </div>
    );
}
