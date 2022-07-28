import { ComponentChildren } from "preact";
import { SectionLine } from "../decorations/SectionLine";

export const SectionHeading = ({
    children,
}: {
    children: ComponentChildren;
}) => {
    return (
        <div class="mb-6 flex items-center gap-4">
            <h2 class="relative w-full bg-black-light text-3xl font-semibold text-white">
                <span class="relative z-10 inline bg-inherit pr-4">
                    {children}
                </span>
                <SectionLine />
            </h2>
        </div>
    );
};
