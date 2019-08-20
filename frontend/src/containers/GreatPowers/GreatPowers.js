import React, { Component } from "react";
import { connect } from 'react-redux';

import Aux from "../../hoc/Auxilary/Auxilary";

import Doughnut from '../../components/Chart/Doughnut/Doughnut'

import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../store/actions/index';

import { fetchEmissionsThatYear, duplicate } from '../../shared/util';

class GreatPowers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            greatPowers: [
                'United Kingdom',
                'China',
                'France',
                'Germany',
                'Italy',
                'Japan',
                'Russian Federation',
                'United States'
            ],
            emissions: undefined     
        }
    }

    componentDidMount () {

        if (typeof this.props.emissions === 'undefined') {
            this.props.onFetchEmissions();
        }
        else {
            this.setState({ emissions: this.rateGreatPowers(this.props.emissions, this.state.greatPowers)})
        }


        if (typeof this.props.populations === 'undefined') {
            this.props.onFetchPopulations();
        }
    }


    componentWillReceiveProps() {
        if (typeof this.props.emissions !== 'undefined') {
            this.setState({ emissions: this.rateGreatPowers(this.props.emissions, this.state.greatPowers)})
        }
    }

    rateGreatPowers = (emissions, greatPowers, year=2014) => {
        let greatPowersData = [];
        let doppler = duplicate(emissions); // duplicating array to prevent "short circuits"
        for (let g of greatPowers) {
            doppler.forEach(e => {
                if (e[0] === g) {
                    greatPowersData.push(e);
                } 
         })   
        }
        return fetchEmissionsThatYear(greatPowersData, year)
    }

    render () {
        if (this.props.loading || typeof this.state.emissions === 'undefined') {
            return (
                <Aux>
                    <Spinner />
                </Aux>
            )
        }
        return (
            <Aux>
                <Doughnut emissions={this.state.emissions}/>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        emissions: state.reducer.emissions,
        populations: state.reducer.populations,
        locations: state.reducer.locations,
        loading: state.reducer.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchEmissions: () => dispatch(actions.fetchEmissions()),
        onFetchPopulations: () => dispatch(actions.fetchPopulations())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GreatPowers)