"use client";

import { useNavMobileContext } from "@/components/contexts";
import { useRef } from "react";
import { formStatus, validateFormFields } from "./utils";

export default function Form() {
    const { setSendEmail } = useNavMobileContext();
    const formRef = useRef<HTMLFormElement | null>(null);
    const setToastTime = (formStatus: {
        isVisible: boolean;
        message: string;
    }) => {
        setSendEmail(formStatus);
        setTimeout(() => {
            setSendEmail({ isVisible: false, message: "" });
        }, 1500);
    };
    const action = async (event: FormData) => {
        let fullName = event.get("fullname");
        const email = event.get("email");
        const message = event.get("message");
        const error = validateFormFields(event);
        if (error) setToastTime(error);
        else {
            const response = await fetch("/api", {
                method: "POST",
                body: JSON.stringify({ fullName, email, message }),
            });
            const data = await response.json();
            if (response.status == 200) setToastTime(formStatus["SUCCESS"]);
            formRef.current?.reset();
        }
    };

    return (
        <form
            ref={formRef}
            action={action}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
            <label className="block">
                <span className="mb-1">Nome Completo</span>
                <input
                    type="text"
                    name="fullname"
                    placeholder="Leroy Jenkins"
                    className="block w-full rounded-md shadow-sm focus:ring bg-gray-100"
                />
            </label>
            <label className="block">
                <span className="mb-1">Email</span>
                <input
                    type="email"
                    name="email"
                    placeholder="leroy@jenkins.com"
                    className="block w-full rounded-md shadow-sm focus:ring bg-gray-100"
                />
            </label>
            <label className="block">
                <span className="mb-1">Mensagem</span>
                <textarea
                    name="message"
                    rows={3}
                    className="block w-full rounded-md focus:ring bg-gray-100"
                ></textarea>
            </label>
            <button
                type="submit"
                className=" btn text-lg bg-green-300 active:bg-green-200 hover:bg-green-200 self-center border-green-400 active:border-green-300 hover:border-green-300"
            >
                Enviar
            </button>
        </form>
    );
}
