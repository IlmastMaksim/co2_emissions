import React from 'react';

import Form from '../../UI/Form/Form';
//import LocationSelect from '../../UI/Selects/LocationSelect/LocationSelect';
//import DateSelect from '../../UI/Selects/DateSelect/DateSelect';
import Button from '../../UI/Button/Button';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';

import classes from './ComparisonForm.css';

const comparisonForm = (props) => {

    let flub = props.flub ? <ErrorMessage show={props.flub}>Data not found or request is incorrect</ErrorMessage> : null;
    //const locationNamesComparison = ['United States', 'Russian Federation', 'Italy', 'France', 'United Kingdom', 'China', 'Japan', 'Germany'] // Great powers
    
    return (
        <div className={classes.ComparisonFormWrap}>
            {flub}
            <h1 className={classes.ComparisonFormTitle}>Pollution comparison</h1>
            <Form
                handleSubmitForm={props.handleSubmitForm}
                subheader="Please, enter some location, location for comparison and countdown year">

               {/*} <LocationSelect handlerForLocation={props.handlerForLocation} locationNames={props.locations}/>
                <LocationSelect handlerForLocationForComparison={props.handlerForLocationForComparison} locationNames={locationNamesComparison} locationForComparison/>
                <DateSelect handleSelectYear={props.handleSelectYear} onlyYear/>*/}
                <Button />

            </Form>
        </div>
    )
}

export default comparisonForm;