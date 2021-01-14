import axios from "axios";
import {getURL, simplifyParams} from "./common";
import {authHeader} from "../helpers/jwt-token-access/auth-token-header";
import {authHeaderGetApi} from "../helpers/jwt-token-access/auth-token-header";

axios.interceptors.request.use(
    (config) => Promise.resolve(config),
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => Promise.reject(error)
);

class Request {
    constructor() {
        this.cancelToken = axios.CancelToken;
        this.source = this.cancelToken.source();
    }

    get(
        url,
        params,
    ) {
        // const key = authHeader();
        // console.log(key)
        const {urlProcess, allParams} = getURL(url, params);
        return axios
            .get(urlProcess, {
                params: allParams,
                headers: authHeader()
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
            })
    }

    getApi(
        url,
        params,
    ) {
        // const key = authHeader();
        // console.log(key)
        const {urlProcess, allParams} = getURL(url, params);
        return axios
            .get(urlProcess, {
                params: allParams,
                headers: authHeaderGetApi()
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
            })
    }

    post(
        url,
        params,
        config,
    ) {
        const key = `post-${url}`;
        const {urlProcess} = getURL(url, params);
        let formData = new FormData();
        Object.keys(params).forEach((key) => {
            simplifyParams(formData, key, params[key]);
        });

        return axios
            .post(urlProcess, formData, {
                headers: authHeader(),
            })
            .then((response) => {
                const ret = response.data;
                return ret;
            })
            .catch((error) => {
            })
    }

    actionCancel() {
        this.source.cancel("Operation canceled by the user.");
    }
}

export default new Request();
