export const Image = ({ src, alt }: { src: string; alt: string }) => {
    // TODO: Convert to srcset once I have optimized images
    return <img class="w-full rounded-xl" src={src} alt={alt} />;
};
