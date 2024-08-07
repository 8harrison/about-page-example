import Services from "./components/Services";
import TestAbout from "./components/TestAbout";
import TestContact from "./components/TestContact";
import TestDescription from "@/app/second-example/components/TestDescription";
import Example from "./components/TestHeader";
import Introduction from "@/app/second-example/components/TestIntroduction";
import { NavMobileProvider } from "@/components/contexts";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ToastEmail from "./components/ToastEmail";



export default function SecondExample() {
    return (
        <NavMobileProvider>
            <div>
                <Example />
                <Introduction />
                <TestDescription />
                <Services />
                <TestAbout />
                <TestContact>
                    <Form />
                </TestContact>
                <Footer />
                <ToastEmail />
            </div>
        </NavMobileProvider>
    );
}
