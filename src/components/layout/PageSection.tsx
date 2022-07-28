import { ComponentChildren } from "preact";

export const PageSection = ({
    isTop = false,
    children,
}: {
    isTop?: boolean;
    children: ComponentChildren;
}) => {
    return (
        <section class={`px-6 ${isTop ? "pt-8 pb-16" : "py-16"}`}>
            {children}
        </section>
    );
};
