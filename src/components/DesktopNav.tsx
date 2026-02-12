"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
    const pathname = usePathname();

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-brand-black/80 backdrop-blur-md border-b border-brand-primary/20 z-50 hidden md:block">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold bg-gradient-to-r from-white to-brand-primary-light bg-clip-text text-transparent">
                    Portfolio
                </Link>
                <nav className="flex gap-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-primary-light ${isActive ? "text-brand-primary-light" : "text-gray-300"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
};

export default DesktopNav;
