import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { EDIT_PROFILE } from './actionTypes';
import { profileSuccess, profileError } from './actions';

//Include Both Helper File with needed methods
import { getFirebaseBackend } from '../../../helpers/firebase_helper';
import apis from '../../../apis/api';
import { postFakeProfile, postJwtProfile  } from '../../../helpers/fakebackend_helper';
 
const fireBaseBackend = getFirebaseBackend();

function* editProfile({ payload: { user } }) {

    try {
        if(process.env.REACT_APP_DEFAULTAUTH === "jwt")
        {
            const response = yield call(Request.get, apis.editProfile,  user );
            yield put(profileSuccess(response));
        }
    } catch (error) {
        yield put(profileError(error));
    }
}
export function* watchProfile() {
    yield takeEvery(EDIT_PROFILE, editProfile)
}

function* ProfileSaga() {
    yield all([
        fork(watchProfile),
    ]);
}

export default ProfileSaga;