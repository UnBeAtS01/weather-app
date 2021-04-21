import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, resume, ...otherProp }) => {
    return (
        <button className={`  ${resume ? 'resume' : 'custom-button'}`} {...otherProp}>
            { children}
        </button >
    )
}

export default CustomButton;