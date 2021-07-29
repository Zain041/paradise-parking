import React, { Fragment } from 'react';
import './Loading.css';

const LoadingComponent = () => {
    return (
        <Fragment>
            <div className='animated_gif' >
                <div className='sk-chase'>
                    <div className='sk-chase-dot'></div>
                    <div className='sk-chase-dot'></div>
                    <div className='sk-chase-dot'></div>
                    <div className='sk-chase-dot'></div>
                    <div className='sk-chase-dot'></div>
                    <div className='sk-chase-dot'></div>
                </div>
            </div>
        </Fragment>
    );
};

export default LoadingComponent;
