export const NavLink = ({ children, href = "#" }) => {
    return (
        <a
            href={href}
            class="flex items-center gap-x-3 text-lg text-white-alt underline font-light underline-offset-2"
        >
            {children}
        </a>
    );
};
