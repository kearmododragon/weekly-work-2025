console.log ("Example")

// Application State //
let deck

// DOM elements //

// Event listeners //

// classes //

    // card //
    class card {

        static rankLookup = {
            "A" : 14,
            "K" : 13,
            "Q" : 12,
            "J" : 11
        }
        constructor (suit, rank){
            this.suit = suit
            this.rank = rank
        }

    }
    
    // deck //
     class Deck {
        static suits = ["SP", "D", "H", "C"]
        static ranks = [ 2,3,4,5,6,7,8,9,10, "J", "Q", "K", "A"]
        constructor(){
            this.cards = []
        }
        makeDeck(){
            //iterate over a set of static properties (suit and rank) -> nested for loop -> generate 52 card objects
            console.log(this.cards)
            for(let s = 0;s<Deck.suits.length; s++){
                for (let r = 0; r<Deck.ranks.length; r++){
                    let suit = Deck.suits[s]
                    let rank = Deck.ranks[r]
                    let newCard = new card(suit, rank)
                }
            }
        }
     }
    // game //

// functions

function initialize () {
    console.log ("Start deck factory")
    deck = new Deck ()
    console.log(deck)
    deck.makeDeck()
    console.log(deck)
}

initialize()