import React, { Component } from "react";
import Aux from "../../hoc/Auxilary/Auxilary";

import classes from './About.css';

class About extends Component {
    render() {
        const anchorStyles = "fa fa-cloud".concat(' ', classes.AboutDescrFirstIcon)
        return (
            <Aux>
                <header className={classes.AboutHeader}>
                    <h1 className={classes.AboutHeaderH}>Co2 Emissions App</h1>
                    <p className={classes.AboutHeaderText}>A brief introduction</p>
                </header>
                <div className={classes.AboutDescrFirstWrap}>
                    <div className={classes.AboutDescrFirstContent}>
                    <div className={classes.AboutDescrFirstDiv}>
                        <h1>What is this app about?</h1>
                        <h5>This app has a great functionality to observe and analyze harmful effects from the air pollution. The information you may obtain from here, could be used, for an instance, in referates etc.</h5>
                        <p>Rating component shows amounts of emissions in some particular year and could be calculated in absolute values or per capita. Changes component brings you a possibility of analyzing emissions for a certain period of time. Finally, you can compare pollution levels extracted by giant countries with emissions from smaller ones. Hopefully, this app could be able to make the world a little bit better place at least.</p>
                    </div>
                
                    <div className={classes.AboutDescrFirstIconDiv}>
                        <i className={anchorStyles}></i>
                    </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default About;