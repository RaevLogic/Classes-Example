// Blackjack Game Example

class Card {
  constructor(suit, number) {
    this.suit = suit;
    this.number = number;
    this.value = `${this.number} of ${this.suit}`;
  };
};

class Deck {
  constructor() {
    this.cards = [];
    this.newDeck();
  };

  newDeck() {
    this.clear();
    const suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
    const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    suits.forEach((suit) => {
      numbers.forEach((number) => {
        this.cards.push(new Card(suit, number));
      });
    });
  };

  clear() {
    while (this.cards.length > 0) {
      this.cards.pop();
    }
  };

  shuffle() {
    this.cards.sort(() => Math.random() > 0.5 ? 1 : -1);
  };

  deal() {
    return this.cards.pop();
  };
};

class Dealer {
  constructor() {
    this.deck = new Deck();
    this.hand = [];
  };

  shuffleCards() {
    this.deck.shuffle();
    this.deck.shuffle();
    this.deck.shuffle();
  };

  dealcard() {
    return this.deck.deal();
  };

  receiveCard() {
    this.hand.push();
  };
};

class Player {
  constructor() {
    this.hand = [];
  }

  receiveCard(card) {
    this.hand.push(card);
  };

  discardHand() {
    this.hand = [];
  };
};

class Table {
  constructor() {
    this.dealer = new Dealer();
    this.players = [];
  }

  join(player) {
    if (this.players.length > 5) {
      console.log('Game is full.');
    } else if (this.players.indexOf(player) > -1) {
      console.log('Player is already at the table.');
    } else {
      this.players.push(player);
    }
  };

  runGame() {
    let dealer = this.dealer;
    let players = this.players;

    if (players.length === 0) {
      console.log('No players at the table.');
    } else {
      console.log("Let's play some Blackjack!");
      dealer.shuffleCards();
      for(let i = 0; i < 2; i++) {
        players.forEach((player) => {
          player.receiveCard(dealer.dealcard());
        });
        dealer.receiveCard(dealer.dealcard());
      }
      console.log('Dealer hand', dealer.hand.map((card) => card.value));
      players.forEach((player) => {
        console.log('Player hand', player.hand.map((card) => card.value));
      });
    }
  };
};

// Test
const table = new Table();
const roger = new Player();
const scott = new Player();
const riley = new Player();
const reiyn = new Player();
const jensyn = new Player();

table.join(roger);
table.join(scott);
table.join(riley);
table.join(reiyn);
table.join(jensyn);

// Build until first hand
table.runGame();