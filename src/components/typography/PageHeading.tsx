import { ComponentChildren } from "preact";

export const PageHeading = ({ isBlog = false, children }: { isBlog?: boolean, children: ComponentChildren }) => {
    const childTokens: Array<string> = children.props.value.split(" ");
    const mainText = childTokens.slice(0, -1).join(" ");
    const lastWord = childTokens.at(-1);

    return (
        <h1 class={`${ isBlog ? "text-5xl" : "text-6xl" } text-white text-left font-light`}>
            {mainText} <span class="site-gradient text-transparent bg-clip-text font-semibold">{lastWord}</span>
        </h1>
    );
};
