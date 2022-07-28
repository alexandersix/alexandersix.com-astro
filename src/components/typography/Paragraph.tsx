import { ComponentChildren } from "preact";

export const Paragraph = ({ children }: { children: ComponentChildren }) => {
    return <p class="text-base font-light text-white-alt mb-6">{children}</p>;
};
