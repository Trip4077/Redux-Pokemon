import React, { Component } from 'react';

import { connect } from 'react-redux';
import { update } from './actions';
import axios from 'axios';

import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
          .then(res => {
            console.log(res)
            return this.props.update(res);
          })
          .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Hell0 PokeRedux!</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps,{ update })(App);
