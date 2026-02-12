"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Mail } from "lucide-react";

const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Projects", href: "/projects", icon: Briefcase },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-black border-t border-brand-primary/30 px-6 py-4 flex justify-around items-center z-50 md:hidden">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 transition-colors duration-200 ${isActive ? "text-brand-primary-light" : "text-gray-400 hover:text-white"
              }`}
          >
            <item.icon size={24} />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
