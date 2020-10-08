

let player1 = {
    health: 100,
    attack: {
        smallSlap: 1,
        smallPunch: 5,
        smallKick: 10,
    }

}

let player2 = {
    health: 100,
    attack: {
        smallSlap: 3,
        smallPunch: 8,
        smallKick: 6,
    }
}

function attack(x, s) {
    if (x == 'x') { players[s].health -= players[s].attack.smallSlap }
    if (x == 'y') { players[s].health -= players[s].attack.smallPunch }
    if (x == 'z') { players[s].health -= players[s].attack.smallKick }

    displayHealth()
    if (s == 1) { Clock() }
}

let players = [player1, player2]

function displayHealth() {
    let healthdisplay0 = document.getElementById('displayHealth-0')
    healthdisplay0.innerText = `${players[0].health}`
    let healthdisplay1 = document.getElementById('displayHealth-1')
    healthdisplay1.innerText = `${players[1].health}`

}


function Clock() {
    let num = 5;
    // while (num > 0) {
    //     let timerdisplay = document.getElementById('timer')
    //     timerdisplay.innerText = `${num}`
    //     // setTimeout(() => {
    //     // }, 1000)
    //     debugger
    //     setTimeout(() => {
    //         num--
    //     }, 1000);
    //     // num--
    // }
    let timerdisplay = document.getElementById('timer')
    timerdisplay.innerText = `${num}`
    let timer = setInterval(() => {
        num--

        if (num == 0) {
            clearInterval(timer)
            timerdisplay.innerText = `${num}`
        } else {
            timerdisplay.innerText = `${num}`
        }
    }, 1000);
}

// function time() {


// }






















displayHealth()
