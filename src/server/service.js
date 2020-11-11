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

    getSearchPlaceholder = async () => {
        const id = Math.floor(Math.random() * 10);
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

    getMainCarouselMobileSlides = async () => {
        return await this.getResource(`/mainCarouselMobile/`);
    };

    getBrands = async () => {
        const brands =  await this.getResource(`/brands/`);
        this.shuffle(brands);
        return brands.slice(8)
    };

    getCatalog = async () => {
        return  await this.getResource(`/catalog/`);
    };

    getMobileNav = async () => {
        return  await this.getResource(`/mobileNav/`);
    };

    getFooterNav = async () => {
        return  await this.getResource(`/footerNav/`);
    };

    shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr
    }





}

export default Service;
