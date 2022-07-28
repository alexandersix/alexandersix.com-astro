import { ComponentChildren } from "preact";
import { SectionLine } from "../decorations/SectionLine";

export const SectionHeading = ({
    children,
}: {
    children: ComponentChildren;
}) => {
    return (
        <div class="mb-6 flex items-center gap-4">
            <h2 class="heading text-3xl font-semibold text-white">{children}</h2>
            <SectionLine />
        </div>
    );
};
