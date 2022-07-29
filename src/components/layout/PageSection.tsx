import { ComponentChildren } from "preact";

export const PageSection = ({
    isTop = false,
    hasXPadding = true,
    children,
}: {
    isTop?: boolean;
    hasXPadding?: boolean;
    children: ComponentChildren;
}) => {
    return (
        <section
            class={`${hasXPadding ? "px-6" : "px-0"} ${
                isTop ? "pt-8 pb-16" : "py-16"
            }`}
        >
            {children}
        </section>
    );
};
