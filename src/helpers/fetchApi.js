// api.giphy.com/v1/gifs/trending	
const limite = 20;

const getGifTrending = async () => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key${REACT_APP_GIPHY_API_KEY}&limit=${limite}`)
    const data = await resp.json(); 

    return data;
}