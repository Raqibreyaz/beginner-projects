// 0 snake
// 1 water
// 2 gun

let isplay = false;

const checkWinner = ((a, b) => {

    if (a == b)
        return 0;
    else if (a == 0) {
        if (b == 1)
            return 1;
        return -1;
    }
    else if (a == 1) {
        if (b == 0)
            return -1;
        return 1;

    }
    else {
        if (b == 0)
            return 1;
        return -1;
    }
})

function updateScore(b) {
    let pscore = document.querySelectorAll('.points');

    if (b) {
        pscore[0].innerHTML = parseInt(pscore[0].innerHTML) + 1 + "";
    }
    else
        pscore[1].innerHTML = parseInt(pscore[1].innerHTML) + 1 + "";
}

function play() {

    const images = document.querySelector(".images").children;

    let rc = Math.floor(Math.random() * 3);


    for (const img of images) {

        img.addEventListener('click', () => {

            let choice = Number.parseInt(img.getAttribute('alt'));

            const winner = checkWinner(choice, rc);
            switch (winner) {
                case 0: {

                    break;
                }
                case 1: {

                    updateScore(true)
                    break;
                }
                case -1: {

                    updateScore(false)
                    break;
                }
            }
        }
        )
    }
}

function finish() {
    let pscore = document.querySelectorAll('.points');

    const you = pscore[0].innerHTML = parseInt(pscore[0].innerHTML);

    const comp = pscore[1].innerHTML = parseInt(pscore[1].innerHTML);

    const popup = document.getElementById('pop-up');

    if (you > comp) {
        popup.innerHTML = 'you win'
    }
    else {
        popup.innerHTML = 'you lose'
    }

    // let style = 'opacity:1 transform :scale(100%)';
    // popup.setAttribute('style',style)
    popup.style.opacity = 1;
    popup.style.transform = "scale(100%)";
}

function main() {

    let playButton = document.querySelector('.button').firstElementChild;

    playButton.addEventListener('click', () => {
        if (isplay) {
            finish();
            playButton.innerHTML = 'pick your choice'
        }
        else {
            playButton.innerHTML = 'end game'
            play();
        }
        isplay = !isplay;
    }
    )
}
main();