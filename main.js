//Objective: The game ends and a winner is determined when one player holds all the cards.
//need two players for the game to play
let players = () => {
    this.player1 = player1;
    this.player2 = player2;

}

//display deck of cards in the middle of the page 
    //obtain cards with images and code to display
    //display on the page

fetch('https://deckofcardsapi.com/api/deck/new/').then(res => {
        console.log(res);
    });
    

//display card count number boxes for each player
    //label and content areas
    //connect output display with the player's current card count.
//display title/area for each player
//only two players are allowed to play (at this time)
//start game
//shuffle deck
//deal the deck between both Players
//each player, lays down one card face up.
//both players can see all the cards in the container area.
//cards will compared against their values.
//the card with the higher value wins the current play and takes possesion of both cards.
//if both cards in play are the same, the players must lay down three(3) cards face down.
//The fourth card is drawn by each player and revealed. Which ever card has a higher value will take possession of all the cards in play.       Including the facedown cards.
//navigation will show instructions
//'restart game' in navigation will allow the user to reset the game back to the starting point.
//'end game' in navigation will allow the user to end the game where they are currently playing.
    //If 'end game' is clicked, users will be prompted so understand they are leaving the game. 
    //confirming prompt will display text to 'Play Again'


class Card {
    constructor(value){
        this.value = value;

    }
}
