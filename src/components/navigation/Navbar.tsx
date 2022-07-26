import { useState } from "preact/hooks";
import { CloseIcon } from "../icons/CloseIcon";
import { ContactIcon } from "../icons/ContactIcon";
import { HamburgerIcon } from "../icons/Hamburger";
import { HouseIcon } from "../icons/HouseIcon";
import { PostIcon } from "../icons/PostIcon";
import { UsesIcon } from "../icons/UsesIcon";
import { NavLink } from "./NavLink";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div class="w-full h-screen overflow-hidden">
            <nav class="flex items-center justify-end py-3 px-4">
                <button class="p-2" onClick={toggleMenu} aria-label="Open Menu">
                    <HamburgerIcon />
                </button>

                <div
                    class={`fixed top-0 right-0 bottom-0 z-50 w-10/12 transform bg-black-dark p-6 duration-300 ease-out ${
isOpen ? "translate-x-0" : "translate-x-full"
}`}
                >
                    <div class="flex justify-end items-center mb-10">
                        <button onClick={toggleMenu} aria-label="Close Menu">
                            <CloseIcon />
                        </button>
                    </div>
                    <div class="flex flex-col gap-6">
                        <NavLink href="/">
                            <HouseIcon />
                            Home
                        </NavLink>
                        <NavLink href="/">
                            <PostIcon />
                            Posts
                        </NavLink>
                        <NavLink href="/">
                            <ContactIcon />
                            Contact
                        </NavLink>
                        <NavLink href="/">
                            <UsesIcon />
                            Uses
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};
