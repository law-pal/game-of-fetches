import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      one: 'http://anapioficeandfire.com/api/characters/16',
      two: 'http://www.anapioficeandfire.com/api/houses/378 ',
      three: ' http://www.anapioficeandfire.com/api/houses/229',
      four: 'http://www.anapioficeandfire.com/api/houses/17',
      five : 'http://www.anapioficeandfire.com/api/characters/901',
      six:'http://www.anapioficeandfire.com/api/houses/362',
      seven: 'http://www.anapioficeandfire.com/api/characters/232'
    }

    // requestOne = axios.get(one);
    // requestTwo = axios.get(two);
    // requestThree = axios.get(three);
    // requestFour = axios.get(four);
    // requestFive = axios.get(five);
    // requestSix = axios.get(six);
    // requestSeven = axios.get(seven);
 
    // componentDidMount() {
    //   axios.all([requestOne, requestTwo, requestThree, requestFour,requestFive, requestSix, requestSeven])
    //   .then(axios.spread((...responses) => {
    //     const responseOne = responses[0]
    //     const responseTwo = responses[1]
    //     const responseThree = responses[2]
    //     const responseFour = responses[3]
    //     const responseFive = responses[4]
    //     const responseSix = responses[5]
    //     const responseSeven = responses[6]
    //   }))
    //   .catch(error => {
    //     console.log(error);
    //   });
    // }

  }

  requestOne = axios.get(one);
  requestTwo = axios.get(two);
  requestThree = axios.get(three);
  requestFour = axios.get(four);
  requestFive = axios.get(five);
  requestSix = axios.get(six);
  requestSeven = axios.get(seven);

  componentDidMount() {
    axios.all([requestOne, requestTwo, requestThree, requestFour,requestFive, requestSix, requestSeven])
    .then(axios.spread((...responses) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]
      const responseThree = responses[2]
      const responseFour = responses[3]
      const responseFive = responses[4]
      const responseSix = responses[5]
      const responseSeven = responses[6]
    }))
    .catch(error => {
      console.log(error);
    });
  }

    render() {
      return(
          <div>

          </div>
    );
  }
}



export default App;
