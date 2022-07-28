import { ComponentChildren } from "preact";
import { DiagonalArrow } from "../icons/DiagonalArrow";

export const Link = ({
    href,
    children,
}: {
    href: string;
    children: ComponentChildren;
}) => {
    return (
        <a
            class="inline-flex items-center text-base font-normal tracking-wide text-white"
            href={href}
        >
            {children}
            <DiagonalArrow />
        </a>
    );
};
