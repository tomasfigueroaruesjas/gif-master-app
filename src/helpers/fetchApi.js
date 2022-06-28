// api.giphy.com/v1/gifs/trending
const apiKey = 'QIRNYgirGv7c7KCENHFX3z5asdLL2gn1';
const limite = 20;

export const getGifTrending = async () => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limite}`)
    const { data } = await resp.json(); 

    return data;
}
