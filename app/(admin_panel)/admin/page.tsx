import dynamic from "next/dynamic";

const AdminApp = dynamic(() => import("@/components/AdminApp"), { ssr: false });

const Admin = () => <AdminApp />;

export default Admin;