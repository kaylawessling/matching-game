import React, { Component } from 'react';
import Header from './Header';
import Card from './Card';
import GameOver from './GameOver';
import Share from './Share';

import './App.style.css';

class EasyGame extends Component {

  state = {
    isFlipped: Array(12).fill(false),
    shuffledCard: EasyGame.duplicateCard(),
    clickCount: 1,
    prevSelectedCard: -1,
    prevCardId: -1,
    items: []
  };

  static generateRandomNumber(){
    return Math.floor(Math.random() * (7 - 1) + 1)
  }

  static checkNumber(arr, random) {
    let result = arr.reduce((a, e, i) => {
      if(e === random) {
        a.push(i)
      }
      return a
    }, [])

    if(result.length < 2) {
      return true
    }
    return false;
  }

  static duplicateCard = () => {
    let results = []
    for(var i=0; i<12; i++){
      let random = this.generateRandomNumber()
      while(!this.checkNumber(results, random)) {
        random = this.generateRandomNumber()
      }
      results.push(random)
    }
    console.log(results)
    return results
  };

  handleClick = event => {
    event.preventDefault();
    const cardId = event.target.id;
    const newFlipps = this.state.isFlipped.slice();
    this.setState({
        prevSelectedCard: this.state.shuffledCard[cardId],
        prevCardId: cardId
    });

    if (newFlipps[cardId] === false) {
      newFlipps[cardId] = !newFlipps[cardId];
      this.setState(prevState => ({
        isFlipped: newFlipps,
        clickCount: this.state.clickCount + 1
      }));

      if (this.state.clickCount === 2) {
        this.setState({ clickCount: 1 });
        const prevCardId = this.state.prevCardId;
        const newCard = this.state.shuffledCard[cardId];
        const previousCard = this.state.prevSelectedCard;

        this.isCardMatch(previousCard, newCard, prevCardId, cardId);
      }
    }
  };

  isCardMatch = (card1, card2, card1Id, card2Id) => {
    if (card1 === card2) {
      const hideCard = this.state.shuffledCard.slice();
      hideCard[card1Id] = -1;
      hideCard[card2Id] = -1;
      setTimeout(() => {
        this.setState(prevState => ({
          shuffledCard: hideCard
        }))
      }, 1000);
    } else {
      const flipBack = this.state.isFlipped.slice();
      flipBack[card1Id] = false;
      flipBack[card2Id] = false;
      setTimeout(() => {
        this.setState(prevState => ({ isFlipped: flipBack }));
      }, 1000);
    }
  };

  restartGame = () => {
    this.setState({
      isFlipped: Array(12).fill(false),
      shuffledCard: EasyGame.duplicateCard().sort(() => Math.random() - 0.5),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1
    });
  };

  isGameOver = () => {
    return this.state.isFlipped.every((element, index, array) => element !== false);
  };

  render() {
    return (
     <div>
       <Header restartGame={this.restartGame} />
       { this.isGameOver() ? <GameOver restartGame={this.restartGame} /> :
       <div className="grid-container">
          {
            this.state.shuffledCard.map((cardNumber, index) =>
              <Card
                key={index}
                id={index}
                cardNumber={cardNumber}
                isFlipped={this.state.isFlipped[index]}
                handleClick={this.handleClick}
              />
            )
          }
        </div>
       }
     </div>
    );
  }
}

export default EasyGame;
