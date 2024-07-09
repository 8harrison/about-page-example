import Image from "next/image";
import { useRef, useEffect } from "react";
import Container from "./Container";

export default function TestAbout() {
    return (
        <Container
            className="flex flex-col overflow-hidden items-center shadow-sm md:flex-row bg-green-300 md:justify-around md:pb-10"
            id="About"
        >
            <Image
                src="/genesio_sofa.png"
                alt=""
                className="h-auto md:w-1/3  w-2/3 self-center m-2 max-w-96"
                width={800}
                height={800}
            />
            <div className="flex flex-col justify-center flex-1 p-6 prose font-display">
                <h3 className="text-3xl font-bold text-center">Sobre Mim</h3>

                <p className="my-6 break-all text-base indent-4 font-medium text-black">
                    Sou Genésio Costa e Silva, psicólogo clínico com formação em
                    Psicologia pela [Nome da Universidade]. Minha missão é
                    ajudar meus clientes a encontrar equilíbrio emocional,
                    superar obstáculos e alcançar uma vida mais plena e
                    satisfatória. Tenho experiência em trabalhar com uma
                    variedade de questões, incluindo ansiedade, depressão,
                    estresse, relacionamentos e desenvolvimento pessoal.
                </p>
                <p className="my-6 md:my-0 break-all indent-4 text-black">
                    Bem-vindo ao espaço de Genésio Costa e Silva, um
                    profissional dedicado a promover o bem-estar e a saúde
                    mental. Com uma abordagem centrada no paciente, Dr. Genésio
                    oferece um ambiente acolhedor e seguro para que seus
                    clientes possam explorar suas emoções e desafios de forma
                    aberta e honesta.
                </p>
            </div>
        </Container>
    );
}
