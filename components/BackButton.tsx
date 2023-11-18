'use client';
import { useRouter } from "next/navigation";
import Image from "next/image";

const BackButton = ({ className }: { className?: string }) => {
    const router = useRouter();

    return (
        <button aria-label='Back' className={`rounded-full p-1 border ${className}`} onClick={() => router.back()}>
            <Image src={'/back_icon.svg'} alt={'back'} width={24} height={24} />
        </button>
    );
};

export default BackButton;