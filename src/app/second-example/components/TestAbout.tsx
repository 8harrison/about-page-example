import Image from "next/image";

export default function TestAbout() {
    return (
        <div
            className="flex flex-col overflow-hidden  shadow-sm md:flex-row bg-green-300"
            id="About"
        >
            <Image
                src="/genesio_serio.png"
                alt=""
                className="h-auto md:w-1/3  w-2/3 self-center m-2 max-w-96"
                width={800}
                height={800}
            />
            <div className="flex flex-col justify-center flex-1 p-6 prose font-display">
                <h3 className="text-3xl font-bold">Sobre Mim</h3>

                <p className="my-6 text-gray-800 prose">
                    Sou Genésio Costa e Silva, psicólogo clínico com formação em
                    Psicologia pela [Nome da Universidade]. Minha missão é
                    ajudar meus clientes a encontrar equilíbrio emocional,
                    superar obstáculos e alcançar uma vida mais plena e
                    satisfatória. Tenho experiência em trabalhar com uma
                    variedade de questões, incluindo ansiedade, depressão,
                    estresse, relacionamentos e desenvolvimento pessoal.
                </p>
            </div>
        </div>
    );
}
