
let new_game = document.querySelector("#new-game");

const grid = document.querySelectorAll(".box");

// on clicking new game the page will reload
new_game.addEventListener('click', () => {
    location.reload();
})

const checkWinner = (() => {

    if (grid[0].innerHTML === grid[1].innerHTML && grid[1].innerHTML === grid[2].innerHTML)
        return grid[0].innerHTML;
    if (grid[0].innerHTML === grid[3].innerHTML && grid[3].innerHTML === grid[6].innerHTML)
        return grid[0].innerHTML;
    if (grid[0].innerHTML === grid[4].innerHTML && grid[4].innerHTML === grid[8].innerHTML)
        return grid[0].innerHTML;
    if (grid[3].innerHTML === grid[4].innerHTML && grid[4].innerHTML === grid[5].innerHTML)
        return grid[3].innerHTML;
    if (grid[1].innerHTML === grid[4].innerHTML && grid[4].innerHTML === grid[7].innerHTML)
        return grid[1].innerHTML;
    if (grid[2].innerHTML === grid[5].innerHTML && grid[5].innerHTML === grid[8].innerHTML)
        return grid[2].innerHTML;
    if (grid[6].innerHTML === grid[7].innerHTML && grid[7].innerHTML === grid[8].innerHTML)
        return grid[6].innerHTML;
    if (grid[2].innerHTML === grid[4].innerHTML && grid[4].innerHTML === grid[6].innerHTML)
        return grid[2].innerHTML;

    return "";
})

let checkDraw = () => {
    for (const box of grid) {
        if (box.innerHTML === '')
            return false;
    }
    return true;
}


let turn = true;

let winner = "";

for (const box of grid) {

    box.addEventListener('click', () => {
        if (winner != "" || winner==="draw")
            location.reload();

        if (box.innerHTML === "" && winner==="") {
            box.innerHTML = turn ? 'o' : "x";
            turn = !turn;
            
            if(box.innerHTML==="o")
            box.style.color="red"
            else
            box.style.color="blue"

            const draw = checkDraw();
            if (draw){
                document.querySelector("#greeting").innerHTML=`draw!`
               winner="draw"    
            }

            winner = checkWinner();
            if (winner != "") {
                document.querySelector("#greeting").innerHTML = `"Congratulations!! ${winner} Is The Winner"`
            }

        }
    })

}



