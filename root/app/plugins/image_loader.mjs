export async function imageLoader(src){
    const image = new Image();
    image.src = src;
    await image.decode();
    return image;
}

export default imageLoader;