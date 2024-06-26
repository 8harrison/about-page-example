import Image from "next/image";

export default function TestDescription() {
    return (
        <>
            <div className="flex flex-col overflow-hidden shadow-sm md:flex-row bg-gradient-to-br from-green-600 to-emerald-100 md:justify-around font-display md:pt-8">
                <div className="flex flex-col justify-center flex-1 p-6 prose font-display ">
                    <h3 className="text-3xl font-bold">
                        Abordagem Terapêutica
                    </h3>

                    <p className="my-6 text-gray-800 ">
                        Utilizo uma abordagem integrativa, combinando técnicas
                        de terapia cognitivo-comportamental, humanista e
                        psicodinâmica, adaptando meu método às necessidades
                        únicas de cada indivíduo. Acredito que a terapia é um
                        espaço de co-construção, onde trabalhamos juntos para
                        encontrar caminhos de crescimento e transformação.
                    </p>
                </div>
                <Image
                    src="/brain_image.png"
                    alt=""
                    className="h-auto md:w-1/3  w-1/2 self-center m-2 max-w-96 "
                    width={800}
                    height={800}
                />
            </div>
            <div className="flex flex-col overflow-hidden shadow-sm bg-gradient-to-bl py-6 items-center md:items-stretch from-green-600 to-emerald-100 md:justify-around font-display">
                <h3 className="text-3xl font-bold text-center">
                    Terapia Cognitivo-Comportamental
                </h3>
                <div className="flex flex-col md:flex-row  font-display w-auto md:justify-around md:items-center">
                    <Image
                        src="/mental-health.png"
                        alt=""
                        className="h-auto md:w-1/3  w-1/2 self-center m-2 max-w-96"
                        width={800}
                        height={800}
                    />
                    <p className="my-6 text-gray-800 px-6 max-w-lg">
                        A Terapia Cognitivo-Comportamental (TCC) pode ser
                        extremamente eficaz para ajudar alguém a lidar com uma
                        variedade de problemas psicológicos. Focada na relação
                        entre pensamentos, sentimentos e comportamentos, a TCC
                        auxilia o indivíduo a identificar e modificar padrões de
                        pensamento negativos e distorcidos. Isso pode levar a
                        mudanças positivas no comportamento e na percepção,
                        resultando em uma melhora significativa no bem-estar
                        emocional. Através de técnicas estruturadas, como
                        reestruturação cognitiva e exposição gradual, a TCC
                        capacita a pessoa a enfrentar desafios de maneira mais
                        saudável e adaptativa, promovendo resiliência e
                        autoconfiança.
                    </p>
                </div>
            </div>
        </>
    );
}
