import { all ,fork} from 'redux-saga/effects';

//public
import AccountSaga from './auth/register/saga';
import AuthSaga, {fetchData, watchFetchData} from './auth/login/saga';
import ForgetSaga from './auth/forgetpwd/saga';
import ProfileSaga from './auth/profile/saga';
import LayoutSaga from './layout/saga';
import PartnerSaga from './user/saga';


export default function* rootSaga() {
    yield all([
        //public
        AccountSaga(),
        AuthSaga(),
        ProfileSaga(),
        ForgetSaga(),
        LayoutSaga(),
        PartnerSaga()
    ]);
    // yield fork(watchFetchData)
}