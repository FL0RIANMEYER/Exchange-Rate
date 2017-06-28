import React from 'react';
import { connect } from 'react-redux';

import { requestCurrencies } from '../actions/request';

import SearchComponent from '../components/search/search.jsx';
import SearchContainer from '../container/search/search.jsx';
import ResultComponent from '../components/result/result.jsx';
import ResultContainer from '../container/result/result.jsx';

import styles from './home.css';


const Search = SearchContainer(SearchComponent);
const Result = ResultContainer(ResultComponent);

const Home = class extends React.Component {
    componentDidMount() {
        // initial request to fill comboboxes with available currencies
        this.props.getCurrencies();
    }

    render() {
        return (
            <div className={styles.home}>
                <Search />
                <Result />
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    getCurrencies: () => {
        dispatch(requestCurrencies());
    },
});


export default connect(null, mapDispatchToProps)(Home);
