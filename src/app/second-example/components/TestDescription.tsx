import Image from "next/image";
import Container from "./Container";

export default function TestDescription() {
    return (
        <Container className="bg-gradient-to-b from-green-600 to-emerald-100" id="Method">
            <div className="flex flex-col overflow-hidden shadow-sm md:flex-row md:justify-around font-display md:pt-20">
                <div className="flex flex-col justify-center flex-1 p-6 prose font-display md:py-20">
                    <h2 className="font-bold">Abordagem Terapêutica</h2>

                    <p className="my-6 indent-4 break-all text-base">
                        Utilizo uma abordagem integrativa, combinando técnicas
                        de terapia cognitivo-comportamental, humanista e
                        psicodinâmica, adaptando meu método às necessidades
                        únicas de cada indivíduo. Acredito que a terapia é um
                        espaço de co-construção, onde trabalhamos juntos para
                        encontrar caminhos de crescimento e transformação.
                    </p>
                </div>
                <Image
                    src="/ilustracoes/cerebro.png"
                    alt=""
                    className="h-auto md:w-1/3  w-1/2 self-center m-2 max-w-40 opacity-50"
                    width={800}
                    height={800}
                />
            </div>
            <div className="py-6 items-center font-display flex flex-col md:flex-row md:justify-around">
                <Image
                    src="/ilustracoes/cabeca.png"
                    alt=""
                    className="h-auto md:w-1/3 w-1/2 self-center m-2 max-w-40 opacity-50"
                    width={800}
                    height={800}
                />
                <article className="prose">
                    <h2 className="font-bold text-center">
                        Terapia Cognitivo-Comportamental
                    </h2>
                    <div className="flex flex-col md:flex-row font-display">
                        <p className="my-6 px-6 indent-4 break-all text-base text-black">
                            A Terapia Cognitivo-Comportamental (TCC) pode ser
                            extremamente eficaz para ajudar alguém a lidar com
                            uma variedade de problemas psicológicos. Focada na
                            relação entre pensamentos, sentimentos e
                            comportamentos, a <strong>TCC</strong> auxilia o
                            indivíduo a identificar e modificar padrões de
                            pensamento negativos e distorcidos. Isso pode levar
                            a mudanças positivas no comportamento e na
                            percepção, resultando em uma melhora significativa
                            no bem-estar emocional. Através de técnicas
                            estruturadas, como reestruturação cognitiva e
                            exposição gradual, a <strong>TCC</strong> capacita a
                            pessoa a enfrentar desafios de maneira mais saudável
                            e adaptativa, promovendo resiliência e
                            autoconfiança.
                        </p>
                    </div>
                </article>
            </div>
        </Container>
    );
}
