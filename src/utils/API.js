import axios from "axios";
const key = `ts=8&apikey=1f2c8ca0a08a1f8caa7f0cab071dca30&hash=09ef186eb114f844ac8698e059ea9181`;

const api = {
    getComics: () => {
        return axios.get(`https://gateway.marvel.com/v1/public/comics?${key}&format=comic&formatType=comic&noVariants=true&dateDescriptor=thisWeek&orderBy=-onsaleDate&limit=3`)
    },

    getHeroes: (hero) => {
        return axios.get(`https://gateway.marvel.com/v1/public/characters?${key}&nameStartsWith=${hero}&orderBy=name&limit=8`)
    }
}

export default api