import { DiagonalArrow } from "../icons/DiagonalArrow";
import { Paragraph } from "../typography/Paragraph";

export const UsesSection = ({
    heading,
    href,
    content,
}: {
    heading: string;
    href: string;
    content: string;
}) => {
    return (
        <div class="mb-10">
            <a class="inline-flex items-center gap-1 mb-3" href={href}>
                <h3 class="text-xl font-medium text-white">{heading}</h3>
                <DiagonalArrow size={20} />
            </a>
            <Paragraph>{content}</Paragraph>
        </div>
    );
};
