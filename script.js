let fields = []
let current_player = 'cross';
let game_over = false;

let AUDIO_WRONG = new Audio('./audio/wrong.wav');
let AUDIO_WIN = new Audio('./audio/win.wav');

function select_field(field_number) {
    if (!fields[field_number] && !game_over) {   /* if field not occupied */
    change_current_player();
    fields[field_number] = current_player;
    console.log(fields);
    render_fields();
    check_for_winner();
    } else {
        AUDIO_WRONG.play();
        }
}

function change_current_player() {
    if (current_player == 'cross') {
        current_player = 'circle';
        document.getElementById('player_1').classList.add('player_inaktive');
        document.getElementById('player_2').classList.remove('player_inaktive');
    } else {
        current_player = 'cross';
        document.getElementById('player_2').classList.add('player_inaktive');
        document.getElementById('player_1').classList.remove('player_inaktive');
    }
}

function render_fields() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'cross') {
            document.getElementById('cross_'+i).classList.remove('d_none');
        }
        else if (fields[i] == 'circle') {
            document.getElementById('circle_'+i).classList.remove('d_none');
        }  
    }
}

function check_for_winner() {
    let winner;
    if (fields[0] && fields[0] === fields[1] && fields[0] === fields[2]) {
        winner = fields[0];
        document.getElementById('line_0').style.transform = 'scaleX(1)';
    }
    else if (fields[3] && fields[3] === fields[4] && fields[3] === fields[5]) {
        winner = fields[3];
        document.getElementById('line_1').style.transform = 'scaleX(1)';
    }
    else if (fields[6] && fields[6] === fields[7] && fields[6] === fields[8]) {
        winner = fields[6]
        document.getElementById('line_2').style.transform = 'scaleX(1)';
    }
    else if (fields[0] && fields[0] === fields[3] && fields[0] === fields[6]) {
        winner = fields[0];
        document.getElementById('line_3').style.transform = 'scaleX(1) rotate(90deg)';
    }
    else if (fields[1] && fields[1] === fields[4] && fields[1] === fields[7]) {
        winner = fields[1];
        document.getElementById('line_4').style.transform = 'scaleX(1) rotate(90deg)';
    }
    else if (fields[2] && fields[2] === fields[5] && fields[2] === fields[8]) {
        winner = fields[2];
        document.getElementById('line_5').style.transform = 'scaleX(1) rotate(90deg)';
    }
    else if (fields[0] && fields[0] === fields[4] && fields[0] === fields[8]) {
        winner = fields[0];
        document.getElementById('line_6').style.transform = 'scaleX(1) rotate(45deg)';
    }
    else if (fields[2] && fields[2] === fields[4] && fields[2] === fields[6]) {
        winner = fields[2];
        document.getElementById('line_7').style.transform = 'scaleX(1) rotate(-45deg)';
    }
    if (winner) {
        console.log(winner + ' hat gewonnen');
        AUDIO_WIN.play();
        game_over = true;
        setTimeout(()=>{window.location.href="./endscreen.html"}, 2000);
    }
}