import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { label: "Home", id: "home" },
        { label: "Services", id: "services" },
        { label: "Gallery", id: "gallery" },
        { label: "Team", id: "team" },
        { label: "Testimonials", id: "testimonials" },
        { label: "Contact", id: "contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-background/95 backdrop-blur-md shadow-elegant"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <button
                        onClick={() => scrollToSection("home")}
                        className={`text-2xl font-bold font-serif transition-all duration-300 hover:scale-105 ${
                            isScrolled
                                ? "text-foreground hover:text-primary"
                                : "text-light-tan hover:text-white"
                        }`}
                    >
                        Luxe Salon
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`relative font-medium transition-all duration-300 group ${
                                    isScrolled
                                        ? "text-foreground hover:text-primary"
                                        : "text-light-tan hover:text-white"
                                }`}
                            >
                                <span className="relative z-10">
                                    {link.label}
                                </span>
                                <span
                                    className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                                        isScrolled
                                            ? "bg-primary"
                                            : "bg-light-tan"
                                    }`}
                                ></span>
                            </button>
                        ))}
                        <Button
                            variant="default"
                            onClick={() => scrollToSection("contact")}
                            className="ml-4"
                        >
                            Book Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden transition-colors ${
                            isScrolled ? "text-foreground" : "text-light-tan"
                        }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
                        className={`md:hidden py-4 backdrop-blur-md border-t ${
                            isScrolled
                                ? "bg-background/95 border-border"
                                : "bg-dark-chocolate/95 border-white/20"
                        }`}
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`relative font-medium text-left px-4 py-2 rounded-md transition-all duration-300 group ${
                                        isScrolled
                                            ? "text-foreground hover:text-primary hover:bg-primary/10"
                                            : "text-light-tan hover:text-white hover:bg-white/10"
                                    }`}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {link.label}
                                        <span
                                            className={`w-0 h-0.5 transition-all duration-300 group-hover:w-8 ${
                                                isScrolled
                                                    ? "bg-primary"
                                                    : "bg-light-tan"
                                            }`}
                                        ></span>
                                    </span>
                                </button>
                            ))}
                            <Button
                                variant="default"
                                onClick={() => scrollToSection("contact")}
                                className="mx-4"
                            >
                                Book Now
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
