import React, { Component } from "react";
import { connect } from 'react-redux';

import Aux from "../../hoc/Auxilary/Auxilary";

import Spinner from '../../components/UI/Spinner/Spinner';

import Pareto from '../../components/Chart/Pareto/Pareto';

import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';

import Form from '../../components/UI/Form/Form';
import Select from '../../components/UI/Select/Select';
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import Button from '../../components/UI/Button/Button';

import classes from './Rating.css'

import * as actions from '../../store/actions/index';

import { rateByDescending, ratePerCapita, fetchEmissionsThatYear, fetchPopulationThatYear, duplicate } from '../../shared/util';

class Rating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            years: undefined,
            amount: undefined,
            emissions: undefined,
            perCapita: false,
            flub: false
        }
    }

    componentDidMount () {
        if (typeof this.props.emissions === 'undefined') {
            this.props.onFetchEmissions();
        }
        if (typeof this.props.populations === 'undefined') {
            this.props.onFetchPopulations();
        }
    }

    componentWillUnmount() {
        this.setState({perCapita: false}) // setting checkbox state back to false to resist misunderstanding between state and the actual html element
    }

    rate = (emissions, amount) => {
        const populationsThatYear = fetchPopulationThatYear(this.props.populations, this.state.years);
         if (this.state.perCapita) {
            const doppler = duplicate(emissions); // duplicating array to prevent "short circuits"
            return ratePerCapita(doppler, populationsThatYear).slice(0, amount);
        }
        else {
            return rateByDescending(emissions).slice(0, amount);
        } 
    }

    handleSubmitForm = (event) => {
        event.preventDefault();
        if (typeof this.state.amount === 'undefined' || typeof this.state.years === 'undefined') {
            this.setState({flub: true}) //defining an error
        }
        else {
            const emissionsThatYear = fetchEmissionsThatYear(this.props.emissions, this.state.years);
            const ratedEmissions = this.rate(emissionsThatYear, this.state.amount);
            ratedEmissions.length > 0 ? this.setState({emissions: ratedEmissions}) : this.setState({flub: true})
        }
    }

    handleInputs = ({target}) => {
        if (target.name === 'perCapita') {
            this.setState({[target.name]: target.checked});
            return
        }
        this.setState({[target.name]: target.value});
    }

    render () {
        if (this.props.loading) {
            return (
                <Aux>
                    <Spinner />
                </Aux>
            )
        }

        let flub = this.state.flub ? <ErrorMessage show={this.state.flub}>Data not found or request is incorrect</ErrorMessage> : null;

        let component = <div className={classes.CountryRationgWrap}>
                            <div className={classes.CountryRationgFormWrap}>
                                {flub}
                                <h1 className={classes.CountryRatingFormTitle}>Pollution rating list</h1>
                                <Form 
                                    handleSubmitForm={this.handleSubmitForm} 
                                    subheader="Please, enter the amount of locations and countdown year.">
                                    <Select 
                                        elementType="amount"
                                        amount={this.state.amount}
                                        handleInputs={this.handleInputs}/>
                                    <Select 
                                        elementType="years"
                                        years={this.state.years}
                                        handleInputs={this.handleInputs}/>
                                    <Checkbox 
                                        state={this.state.perCapita}
                                        name="perCapita"
                                        label="Per capita"
                                        handleInputs={this.handleInputs} />
                                    <Button />
                                </Form>
                            </div>
                        </div> 
        if (typeof this.state.emissions !== "undefined") {
            component = <Pareto perCapita={this.state.perCapita} emissions={this.state.emissions} />
        }

        return (
            <section className={classes.CountryRatingWrap}>
                {component}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        emissions: state.reducer.emissions,
        locations: state.reducer.locations,
        populations: state.reducer.populations,
        loading: state.reducer.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchEmissions: () => dispatch(actions.fetchEmissions()),
        onFetchPopulations: () => dispatch(actions.fetchPopulations())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rating)