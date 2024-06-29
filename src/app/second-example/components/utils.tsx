import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { z } from "zod";
const mailerSend = new MailerSend({
    apiKey: process.env.API_KEY_MAIL!,
});

interface EmailMessage {
    fullName: string;
    email: string;
    message: string;
}

export async function onSubmit(email: EmailMessage) {
    try {
        const sentFrom = new Sender(
            "test@trial-0p7kx4x83rmg9yjr.mlsender.net",
            "Harrison Monteiro de Oliveira"
        );
        const recipients = [
            new Recipient("monteiro4100@gmail.com", "Harrison Monteiro"),
        ];

        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setSubject(`Mensagem de ${email.fullName}`)
            .setTemplateId("zr6ke4n5d594on12")
            .setPersonalization(formatBodyEmail(email));
        // await mailerSend.email.send(emailParams);
    } catch (e) {
        console.log(e);
    }
}

const formatBodyEmail = (client: EmailMessage) => {
    return [
        {
            email: "monteiro4100@gmail.com",
            data: {
                client: {
                    name: client.fullName,
                    message: client.message,
                    email: client.email,
                },
                comment: {
                    date: new Date().toLocaleDateString(),
                },
                account_name: "Harrison Oliveira",
                actual_year: new Date().getFullYear(),
            },
        },
    ];
};

const inputSchema = z.object({
    fullName: z.string().min(3, "REQ_NAME"),
    email: z
        .string({ message: "REQ_EMAIL" })
        .email({ message: "INVALID_EMAIL" }),
    message: z.string().min(10, "REQ_MESSAGE"),
});

export function validateFormFields(data: FormData) {
    const fullName = data.get("fullname");
    const email = data.get("email");
    const message = data.get("message");
    const validatefields = inputSchema.safeParse({ email, fullName, message });
    const firstError = validatefields.error?.flatten().fieldErrors;
    if (firstError?.fullName) return formStatus[firstError.fullName[0]];
    if (firstError?.email) return formStatus[firstError.email[0]];
    if (firstError?.message) return formStatus[firstError.message[0]];
    return null;
}

interface Status {
    isVisible: boolean;
    message: string;
}

type FormStatus = {
    [key: string]: Status;
};

export const formStatus: FormStatus = {
    SUCCESS: { isVisible: true, message: "Mensagem enviada." },
    REQ_EMAIL: { isVisible: true, message: "O email é obrigatório!" },
    INVALID_EMAIL: { isVisible: true, message: "Email inválido!" },
    REQ_NAME: { isVisible: true, message: "Nome muito curto!" },
    REQ_MESSAGE: { isVisible: true, message: "Mensagem muito curta!" },
};
