function randomNumber(min, max) {
    var range = max - min + 1;

    return Math.floor(Math.random() * range + min);
}

var playerScore = 0;
var dealerScore = 0;

function getScore() {
    return `\n\nYour hand: ${playerScore}\nDealer hand: ${dealerScore}`;
}

function blackjack() {
    // Deals the player a random number between 4 and 21 inclusive.
    playerScore += randomNumber(4, 21);

    // If the player has 21 they win!
    if (playerScore === 21) {
        alert(`Blackjack!${getScore()}`);
        return;
    }

    // Deals a random number between 2 and 11 inclusive to the dealer.
    dealerScore += randomNumber(2, 11);

    var keepGoing = true;

    while (keepGoing) {
        var hit = confirm(`Would you like to hit?${getScore()}`);

        // If the player hits, add a number between 2 and 11.
        if (hit) {
            playerScore += randomNumber(2, 11);

            // If the player goes over 21 they lose.
            if (playerScore > 21) {
                alert(`Bust!${getScore()}`);
                keepGoing = false;
                return;
            }

            // If the player has 21, stay for them.
            if (playerScore === 21) {
                alert(`Stay!${getScore()}`);
                keepGoing = false;
            }
        } else {
            keepGoing = false;
        }

        // Repeat until they choose to stay or they bust
    }

    // Once player stays add a number between 2 and 11 to the dealer's hand.

    // If dealer number is less than 17 add another number
    while (dealerScore < 17) {
        dealerScore += randomNumber(2, 11);
        alert(getScore());

        // Repeat until the number is over over 17 but less than 21, or if the dealer goes over 21
    }

    // If dealer goes over 21 they lose.
    if (dealerScore > 21) {
        alert(`Dealer busts, you win!${getScore()}`);
        return;
    }

    // Once dealer stops, and neither player bust, compare each number to 21. Whoever is closer wins!
    if (dealerScore < playerScore) {
        alert(`You win!${getScore()}`);
    } else if (dealerScore === playerScore) {
        alert(`Draw!${getScore()}`);
    } else {
        alert(`You lose!${getScore()}`);
    }
}

blackjack();