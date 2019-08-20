import React from 'react';

import classes from './Footer.css';

const footer = () => {
    return (
        <div className={classes.FooterWrap}>
            <p className={classes.FooterAuthor}>Made with love for development and natural environment by <a href='https://github.com/IlmastMaksim' target='__blank'>Maksim Ilmast</a></p>
        </div>
    );
}

export default footer;