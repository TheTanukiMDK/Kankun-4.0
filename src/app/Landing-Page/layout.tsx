import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen bg-white">
            {children}
        </div>
    );
};

export default Layout;
