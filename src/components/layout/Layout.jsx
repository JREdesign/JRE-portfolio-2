import React from 'react';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
    return (
        <div className="relative bg-zinc-950">
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-grid-pattern" />
            <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)] pointer-events-none" />

            <Navbar />

            <main className="relative z-10">
                {children}
            </main>
        </div>
    );
};
