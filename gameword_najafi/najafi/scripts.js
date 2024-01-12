let fillboxnum = 0;
let wordle = [];

function setbox(word) {
    if (fillboxnum >= 0 && fillboxnum <= 4) {
        fillboxnum = fillboxnum + 1;
        document.getElementById(`box${fillboxnum}`).outerHTML =
            `<div class="seebox-fill" id="box${fillboxnum}">${word}</div>`;
        wordle.push(word);
    }

}

function remove() {
    if (fillboxnum >= 1 && fillboxnum <= 5) {
        document.getElementById(`box${fillboxnum}`).outerHTML =
            `<div class="seebox" id="box${fillboxnum}"></div>`;
        fillboxnum = fillboxnum - 1;
        wordle.pop();
    }
}

let number = ["سابقه", "آسیاب", "دیروز" , "لوستر" ,"اسباب"]

let tutorial = Math.floor(Math.random() * number.length)

console.log(number[tutorial ])
const finalWord = number[tutorial ]

function confirmation() {
    if (wordle.join("") === finalWord) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: " افرین",
            showConfirmButton: false,
            timer: 1500
        })

    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: "اشتباه است ",
            showConfirmButton: false,
            timer: 1500
        })
    }

}




function guide(word) {
    Swal.fire({
        position: 'center',
        icon: 'info',
        title: "..موقعی که به یک خانه ی جدید میرویم چی را جابه جا میکنیم ..یک چیز نورانی است در خانه .. فردا نیست",
        
        showConfirmButton: false,
    })
}






