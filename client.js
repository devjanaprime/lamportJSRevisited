let thing = [ 'stuff', 'junk' ];

const testFunction = () => {
    console.log( 'thing:', thing );
    thing = 1234;
    console.log( 'thing:', thing );
    thing = ()=>{
        console.log( 9 * 3 );
        return true;
    }
    console.log( 'thing:', thing );
    thing();
    console.log( thing() );
    return 'testFunction tested';
}

/// object literals vs classes
let card = {
    number: 9,
    suit: 'clubs',
    faceUp: true
} 

console.log( 'card:', card );
card.faceUp = false;
console.log( 'card:', card );

// CARD CLASS
class Card{
    constructor( number, suit ){
        this.number = number;
        this.suit = suit;
        this.faceUp = false;
    } // end constructor
    flip(){
        this.faceUp = !this.faceUp;
        return this;
    } // end flip method
} // end class

let spades = [
    new Card( 1, 'spades' ),
    new Card( 2, 'spades' ),
    new Card( 3, 'spades' ),
    new Card( 4, 'spades' ),
    new Card( 5, 'spades' ),
    new Card( 6, 'spades' ),
    new Card( 7, 'spades' ),
    new Card( 8, 'spades' ),
    new Card( 9, 'spades' ),
    new Card( 10, 'spades' )
];

console.log( spades );
// our deck of cards
let deck = [];
/// nested loops
const suits = [ 'clubs', 'diamonds', 'hearts', 'spades' ];
for( let i=0; i<suits.length; i++ ){
    console.log( 'in suits loop:', suits [ i ] );
    for( let j=1; j<11; j++ ){
        deck.push( new Card( j, suits [ i ] ) );
    } //end number
} // end suits
console.log( deck );
/// come back to this in a moment:

