'use client';
import Button from "@/components/Button";

const donationPhone = process.env.NEXT_PUBLIC_DONATE_PHONE;
type Props = { className?: string };

const DonateButton = ({ className }: Props) => (
    <Button
        label='تبرع'
        className={`p-2 bg-emerald-500 text-white cursor-pointer ${className}`}
        onClick={() => window.open(`https://wa.me/${donationPhone}`, '_blank')}
    />
);

export default DonateButton;