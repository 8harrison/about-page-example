import Image from "next/image";
import Container from "./Container";

interface ServicesAvailable {
    service: string;
    image: string;
    descricao: string;
}

export default function Services() {
    const services: ServicesAvailable[] = [
        {
            service: "Terapia Individual",
            image: "/servicos/terapia_individual.png",
            descricao: ` A terapia individual é um processo colaborativo entre o 
                        psicólogo e o paciente, focado no desenvolvimento
                        pessoal e na resolução de questões emocionais. Este tipo
                        de terapia oferece um espaço seguro e confidencial onde
                        os indivíduos podem explorar seus pensamentos,
                        sentimentos e comportamentos com a orientação de um
                        profissional qualificado.`,
        },
        {
            service: "Terapia de Casal",
            image: "/servicos/terapia_casal.webp",
            descricao: `A terapia de casal é uma forma de terapia voltada para 
            ajudar casais a resolver conflitos, melhorar a comunicação e 
            fortalecer a relação. Este processo é mediado por um psicólogo 
            especializado em dinâmica de relacionamentos, proporcionando um 
            espaço seguro para que ambos os parceiros possam expressar suas 
            preocupações e trabalhar juntos em direção a um relacionamento 
            mais saudável e satisfatório.`,
        },
        {
            service: "Terapia Familiar",
            image: "/servicos/terapia_familiar.jpeg",
            descricao: `A terapia familiar é um tipo de intervenção 
            psicoterapêutica que envolve a participação de membros de uma 
            família para resolver conflitos, melhorar a comunicação e fortalecer 
            os vínculos familiares. Facilitada por um psicólogo especializado, 
            esta forma de terapia cria um ambiente seguro e neutro onde os 
            membros da família podem expressar suas preocupações e trabalhar 
            juntos para superar desafios.`,
        },
        {
            service: "Aconselhamento para Adolescentes",
            image: "/servicos/terapia_adol.webp",
            descricao: `O aconselhamento para jovens é uma intervenção 
            psicoterapêutica focada nas necessidades e desafios específicos 
            enfrentados pelos adolescentes e jovens adultos. Este tipo de 
            aconselhamento oferece um espaço seguro e confidencial onde os 
            jovens podem explorar suas emoções, preocupações e tomar decisões 
            informadas sobre suas vidas com a orientação de um psicólogo 
            especializado.`,
        },
        {
            service: "Grupos de Apoio",
            image: "/servicos/grupo_apoio.jpeg",
            descricao: `Grupos de apoio são encontros organizados onde pessoas 
            que compartilham experiências, desafios ou condições semelhantes se 
            reúnem para oferecer e receber suporte mútuo. Facilitados por um 
            psicólogo ou terapeuta, esses grupos proporcionam um ambiente seguro 
            e acolhedor para discutir preocupações, compartilhar histórias e 
            desenvolver estratégias de enfrentamento.`,
        },
    ];
    return (
        <Container
            className="font-display bg-green-200 flex flex-col items-center pl-8"
            id="Services"
        >
            <h2 className="text-3xl font-bold text-center mt-8 mb-8">
                Serviços Oferecidos
            </h2>
            <ul className="flex items-center carousel w-full">
                {services.map((ser: ServicesAvailable) => (
                    <Card
                        key={ser.service}
                        image={ser.image}
                        service={ser.service}
                        descricao={ser.descricao}
                    />
                ))}
            </ul>
        </Container>
    );
}

function Card({ image, service, descricao }: ServicesAvailable) {
    return (
        <>
            <div className="card h-[500px] w-80 shadow-xl my-10 flex-row items-center sm:w-11/12 bg-green-300 sm:max-w-2xl md:max-w-3xl sm:h-96 carousel-item mx-8 sm:pb-10">
                <figure className="aspect-auto sm:aspect-square sm:w-52 lg:aspect-square md:w-80 rounded-xl self-stretch ">
                    <Image
                        src={image}
                        alt={service}
                        className="rounded-xl opacity-75 hidden sm:flex"
                        width={800}
                        height={800}
                    />
                </figure>
                <div className="card-body sm:w-2/4 prose">
                    <h3 className="card-title">{service}</h3>
                    <p className="tracking-widest text-base text-left text-black font-display break-all indent-4">
                        {descricao}
                    </p>
                </div>
            </div>
        </>
    );
}
