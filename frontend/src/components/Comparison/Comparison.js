import React from 'react';

import ComparisonForm from './ComparisonForm/ComparisonForm';
import Bar from '../Chart/Bar/Bar'

import classes from './Comparison.css';

const comparison = (props) => {
    let locations = typeof props.locations !== 'undefined' ? props.locations : [];
    let component =  <ComparisonForm
                        locations={locations}
                        flub={props.flub}
                        handleSubmitForm={props.handleSubmitForm}
                        handlerForLocation={props.handlerForLocation}
                        handlerForLocationForComparison={props.handlerForLocationForComparison}
                        handleSelectYear={props.handleSelectYear}/>
    if (typeof props.locationInfo !== 'undefined' && typeof props.locationForComparisonInfo !== 'undefined') {
        component = <Bar locationInfo={props.locationInfo} locationForComparisonInfo={props.locationForComparisonInfo}  show/>
    }
    return (
        <section className={classes.ComparisonWrap}>
            {component}
        </section> 
    )
}

export default comparison;