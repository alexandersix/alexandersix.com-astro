export const PageHeading = ({ children }) => {
    const childTokens: Array<string> = children.props.value.split(" ");
    const mainText = childTokens.slice(0, -1).join(" ");
    const lastWord = childTokens.at(-1);

    return (
        <h1 class="text-6xl text-white text-left">
            {mainText} <span class="site-gradient text-transparent bg-clip-text font-semibold">{lastWord}</span>
        </h1>
    );
};
