import { ComponentChildren } from "preact";

export const InlineLink = ({ href, children }: { href: string, children: ComponentChildren }) => {
    return (
        <a class="inline-block text-green-light underline" href={href}>
            {children}
        </a>
    );
};
