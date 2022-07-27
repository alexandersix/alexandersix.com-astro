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
        <header class="w-full overflow-x-hidden">
            <div class="flex items-center justify-end py-3 px-4">
                <button class="p-2" onClick={toggleMenu} aria-label="Open Menu">
                    <HamburgerIcon />
                </button>
            </div>

            <div
                class={`fixed inset-0 h-screen overflow-x-hidden bg-transparent ${
                    isOpen ? "pointer-events-auto" : "pointer-events-none"
                }`}
            >
                <nav
                    class={`top-0 bottom-0 right-0 absolute w-3/4 transform bg-black-dark p-6 duration-300 ease-out ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div class="mb-10 flex items-center justify-end">
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
                </nav>
            </div>

            {/* <nav */}
            {/*     class={`lg:hidden fixed top-0 right-0 bottom-0 bg-black-dark w-3/4 p-6 transform duration-300 ease-out ${ */}
            {/*         isOpen ? "" : "hidden" */}
            {/*     }`} */}
            {/*     aria-label="Global" */}
            {/* > */}
            {/*     <div class="mb-10 flex items-center justify-end"> */}
            {/*         <button onClick={toggleMenu} aria-label="Close Menu"> */}
            {/*             <CloseIcon /> */}
            {/*         </button> */}
            {/*     </div> */}
            {/*     <div class="flex flex-col gap-6"> */}
            {/*         <NavLink href="/"> */}
            {/*             <HouseIcon /> */}
            {/*             Home */}
            {/*         </NavLink> */}
            {/*         <NavLink href="/"> */}
            {/*             <PostIcon /> */}
            {/*             Posts */}
            {/*         </NavLink> */}
            {/*         <NavLink href="/"> */}
            {/*             <ContactIcon /> */}
            {/*             Contact */}
            {/*         </NavLink> */}
            {/*         <NavLink href="/"> */}
            {/*             <UsesIcon /> */}
            {/*             Uses */}
            {/*         </NavLink> */}
            {/*     </div> */}
            {/* </nav> */}
        </header>
    );
};
