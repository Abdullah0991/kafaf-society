'use client';
import Button from "@/components/Button";

const donationLink = process.env.NEXT_PUBLIC_DONATE_LINK;
type Props = { className?: string };

const DonateButton = ({ className }: Props) => (
    <Button
        label='تبرع'
        className={`p-2 bg-emerald-500 text-white cursor-pointer ${className}`}
        onClick={() => window.open(donationLink, '_blank')}
    />
);

export default DonateButton;