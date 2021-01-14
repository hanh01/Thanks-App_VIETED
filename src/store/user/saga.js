import {all, fork, put, call, takeEvery} from 'redux-saga/effects'

import {GET_ALL_PARTNER} from './actionTypes'
import { apiError, getAllPartnerSuccess} from './actions'
import apiUrls from "../../apis/api";
import Request from "../../apis/Request";

function* getAllPartners() {
    try {
        const response = yield call(Request.getApi, apiUrls.getAllPartner, {});
        console.log(response);
        yield  put(getAllPartnerSuccess(response.data));
    } catch (error) {
        yield put(apiError(error));
    }
}

export function* watchGetAllPartner() {
    yield takeEvery(GET_ALL_PARTNER, getAllPartners);
}

function* partnerSaga() {
    yield all([fork(watchGetAllPartner)])
}

export default partnerSaga;