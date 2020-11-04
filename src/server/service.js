import axios from 'axios';

class Service {
    _apiBase = 'https://yarn-ural.firebaseio.com';

    async getResource(url){
         const res = await axios.get(`${this._apiBase}${url}.json`);
        if(!res.data){
            throw new Error('Что то пошло не так')
        }
         return res.data
    };

    getSearchPlaceholder = async (id) => {
        return await this.getResource(`/searchPlaceholder/${id}`);
    };


    getBanner = async (numBanner) => {
        return await this.getResource(`/banner${numBanner}/`);
    };

    getInfoOfShops = async () => {
        return await this.getResource(`/infoOfShops/`);
    };

    getMainCarouselSlides = async () => {
        return await this.getResource(`/mainCarousel/`);
    };

}

export default Service;
