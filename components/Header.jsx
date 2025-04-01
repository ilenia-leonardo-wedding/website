'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const smoothScroll = useCallback((e, href) => {
        e.preventDefault();
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({
                behavior: "smooth",
            });
        }
        setIsMenuOpen(false);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <div className="w-full flex justify-center items-start">
            <div className="w-[97vw] h-[80px] z-[10000] absolute mt-[5px] top-[1%] flex justify-around items-start">

                {/* Logo */}
                <div className="w-[100%] pl-[1%] ">
                    <Link href="#hero">
                        <div className="w-[20%] md:w-[30%] absolute left-0 top-0">
                            <Image className="object-cover h-[30%] lg:h-[20%] w-[55%] lg:w-[15%]" alt="anelli" src="/giusti.svg" width={200} height={200} />
                        </div>
                    </Link>

                </div>

                {/* Hamburger Menu */}
                <button
                    className="text-white z-[555544444] mt-0"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} strokeWidth={0.8} /> : <Menu size={24} strokeWidth={0.8} />}
                </button>

                {/* Popup Menu */}
                <div
                    className={`fixed inset-0 bg-primary z-[5555]  bg-zucchero text-bianco hover:text-secondaryChiaro w-full h-full flex items-center uppercase  justify-center flex-col transition-transform duration-1000 ease-in-out primary text-5xl  ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
                        }`}
                >
                    <Link href="#cerimonia" onClick={(e) => smoothScroll(e, "#cerimonia")}><h4 className="py-2">Cerimonia</h4></Link>
                    <Link href="#festeggiamenti" onClick={(e) => smoothScroll(e, "#festeggiamenti")}><h4 className="py-2">Festeggiamenti</h4></Link>
                    <Link href="#rsvp" onClick={(e) => smoothScroll(e, "#rsvp")}><h4 className="py-2">RSVP</h4></Link>

                    {/* <Link href="#hero">
                        <div className="w-[90%] md:w-[30%] ">
                            <Image className="object-cover h-[10%] w-auto absolute left-[20%] -rotate-[29deg] bottom-4" alt="anelli" src="/giusti.svg" width={200} height={200} />
                        </div>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

