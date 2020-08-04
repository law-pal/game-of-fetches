import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
    constructor() {
    super()
    this.state = {
    data: [],
  }
}

componentDidMount() {
let one = 'http://anapioficeandfire.com/api/characters/16'
let two = 'http://www.anapioficeandfire.com/api/houses/378 '
let three = ' http://www.anapioficeandfire.com/api/houses/229'
let four = 'http://www.anapioficeandfire.com/api/houses/17'
let five =  'http://www.anapioficeandfire.com/api/characters/901'
let six = 'http://www.anapioficeandfire.com/api/houses/362'
let seven = 'http://www.anapioficeandfire.com/api/characters/232'

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);
const requestFour = axios.get(four);
const requestFive = axios.get(five);
const requestSix = axios.get(six);
const requestSeven = axios.get(seven);

  axios.all([requestOne, requestTwo, requestThree, requestFour,requestFive, requestSix, requestSeven])
  .then(axios.spread((...responses) => {
    const responseOne = responses[0].data.born;
    const responseTwo = responses[1].data.region;
    const responseThree = responses[2].data.coatOfArms;
    const responseFour = responses[3].data.seats[2];
    const responseFive = responses[4].data.aliases[1];
    const responseSix = responses[5].data.founder;
    const responseSeven = responses[6].data.books;
    this.setState({data: [...responses]});
    console.log(...responses);
  }))
  .catch(error => {
    console.log(error);
  });

}

  render() {
   
      return(
          <div>
            <p>{}</p>
          </div>
    );
  }
}



export default App;
