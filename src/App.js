import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import Nav from "./components/Nav";
// import Container from "./components/Container";
import simpsons from "./simpsons.json";
import Jumbotron from "./components/Jumbotron";
import SimpsonCard from "./components/SimpsonCard";

//sets state to 0 or empty
class App extends Component {
	state = {
		simpsons,
		clickedCard: [],
		score: 0
	};

	//when user clicks on a card > take card out of array
	cardClick = event => {
		const currentCard = event.target.alt;
		const cardAlreadyClicked =
			this.state.clickedCard.indexOf(currentCard) > -1;

		//if user clicks on a card that has already been selected, the game resets
		if (cardAlreadyClicked) {
			this.setState({
				simpsons: this.state.simpsons.sort(function (a, b) {
					return 0.5 - Math.random();
				}),
				clickedCard: [],
				score: 0
			});
			alert("You lose. Play again?");
			//if user clicks on an available card, the score is increased and cards shuffle
    } else {
      this.setState(
        {
          simpsons: this.state.simpsons.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCard: this.state.clickedCard.concat(
            currentCard
          ),
          score: this.state.score + 1
				},
				//if user gets all 12 cards correct, return congratulations message and reset game
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              simpsons: this.state.simpsons.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCard: [],
              score: 0
            });
          }
        }
      );
    }
  };

			render() {
				return (
					<div>
						<Nav />
						<Jumbotron>
							<h1>The Simpson's Clicky Game!</h1>
							<br></br>
							<h2>Click on an image to earn points, but don't click on any more than once!</h2>
							<br></br>
							<h2>Score: {this.props.score}</h2>
						</Jumbotron>
						<div className="col-lg-6 card-columns" style={{margin: '0 auto'}}>
						{this.state.simpsons.map(simpsons => (
            <SimpsonCard
              cardClick={this.cardClick}
              id={simpsons.id}
              key={simpsons.id}
              image={simpsons.image}
            />
          ))}
							

						</div>
						<Counter />
					</div>
				);
			}
		}

		export default App;
