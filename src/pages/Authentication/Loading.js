import React, {useEffect} from 'react';
import '../../assets/scss/custom/pages/Authentication/loading.scss'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


const Loading = () => {
    return (
        <div className="example">
            <div className="loader">
                Loading...
            </div>
            <div className="text-center mt-4">Vui lòng đợi trong giây lát ...</div>
        </div>
    );
}

export default withRouter(connect()(Loading));