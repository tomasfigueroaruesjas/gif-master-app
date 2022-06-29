

// api.giphy.com/v1/gifs/trending
const apiKey = 'QIRNYgirGv7c7KCENHFX3z5asdLL2gn1';
const limite = 20;

export const getGifTrending = async () => {
    try {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limite}`)
        const { data } = await resp.json(); 

        return data;
    } catch (error) {
        console.log(error)
    }
    
}

export const getGifSearch = async (termino, cantidad) => {
    try {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${termino}&limit=${cantidad}`)
        const { data } = await resp.json();

        return data;
    } catch (error) {
        console.log(error)
    }
    
}
