import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    href?: string;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    href,
    onClick,
    className = "",
}) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 text-base";

    const variants = {
        primary: "bg-gradient-to-r from-primary to-accent-orange text-white hover:shadow-lg hover:shadow-primary/50 hover:scale-105",
        secondary: "bg-white text-black hover:bg-gray-100",
        outline: "border-2 border-white text-white hover:bg-white hover:text-black",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedClassName}>
                {children}
                <FiArrowUpRight className="ml-2" size={20} />
            </a>
        );
    }

    return (
        <button onClick={onClick} className={combinedClassName}>
            {children}
            <FiArrowUpRight className="ml-2" size={20} />
        </button>
    );
};

export default Button;
