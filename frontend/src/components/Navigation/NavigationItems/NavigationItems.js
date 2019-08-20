import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>About</NavigationItem>
        <NavigationItem link="/rating">Rating</NavigationItem>
        <NavigationItem link="/changes">Changes</NavigationItem>
        <NavigationItem link="/great-powers">Great Powers</NavigationItem>
    </ul>
);

export default navigationItems;