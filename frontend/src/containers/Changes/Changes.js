import React, { Component } from "react";
import { connect } from 'react-redux';

import Aux from "../../hoc/Auxilary/Auxilary";

import classes from './Changes.css'

import Form from "../../components/UI/Form/Form";
import Select from '../../components/UI/Select/Select';
import Button from '../../components/UI/Button/Button'

import Line from '../../components/Chart/Line/Line';

import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';

import Spinner from '../../components/UI/Spinner/Spinner';

import { fetchLocationData } from '../../shared/util';

import * as actions from '../../store/actions/index';


class Changes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: undefined, 
            years: undefined,
            emissions: undefined,
            flub: false
        }
    }

    componentDidMount () {
        if (typeof this.props.emissions === 'undefined') {
            this.props.onFetchEmissions();
        }
    }

    handleSubmitForm = (event) => {
        event.preventDefault();

        if (typeof this.state.years === "undefined" || typeof this.state.location === "undefined") {
            this.setState({flub: true});
        }
        else {
            const data = fetchLocationData(this.props.emissions, this.state.years, this.state.location);  
            data.length > 0 ? this.setState({emissions: data}) : this.setState({flub: true})
        }
    }

    handleInputs = ({target}) => {
        this.setState({[target.name]: target.value});
    };

    render () {
        if (this.props.loading) {
            return (
                <Aux>
                    <Spinner />
                </Aux>
            )
        }
        
        let locations = typeof this.props.locations !== 'undefined' ? this.props.locations : [];

        let flub = this.state.flub ? <ErrorMessage show={this.state.flub}>Data not found or request is incorrect</ErrorMessage> : null;

        let component = <div className={classes.ChangesFormWrap}>
                            {flub}
                            <h1 className={classes.ChangesFormTitle}>Pollution changes</h1>
                            <Form 
                                handleSubmitForm={this.handleSubmitForm}
                                subheader="Please, enter a date for countdown and location.">
                                <Select 
                                    elementType='location'
                                    location={this.state.location}
                                    handleInputs={this.handleInputs}
                                    locations={locations}/>
                                <Select 
                                    elementType='years'
                                    years={this.state.years} 
                                    handleInputs={this.handleInputs}/>
                                <Button />
                            </Form>
                        </div>

        if (typeof this.state.emissions !== 'undefined') {
            component = <Line emissions={this.state.emissions} />;
        }

        return (
            <section className={classes.ChangesWrap}>
                {component}
            </section>
        )
    }
}


const mapStateToProps = state => {
    return {
        emissions: state.reducer.emissions,
        locations: state.reducer.locations,
        loading: state.reducer.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchEmissions: () => dispatch(actions.fetchEmissions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Changes)