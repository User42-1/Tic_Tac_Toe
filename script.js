let fields = []
let current_player = 'cross';

function change_current_player() {
    if (current_player == 'cross') {
        current_player = 'circle';
    } else {
        current_player = 'cross';
    }
    return current_player;
}

function select_field(field_number) {
    fields[field_number] = change_current_player();
    console.log(fields);
    render_fields();
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