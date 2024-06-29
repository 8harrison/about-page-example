'use client'
import { useNavMobileContext } from "@/components/contexts";

export default function ToastEmail(){
    const {isSendEmail} = useNavMobileContext()
    const visibleToast = isSendEmail.isVisible ? '' : 'hidden'
    return (
        <div className={"toast toast-center " + visibleToast}>
            <div className="alert alert-success text-white font-bold">
                <span>{isSendEmail.message}</span>
            </div>
        </div>
    );
}