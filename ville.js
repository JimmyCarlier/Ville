// Ville

let size = 20;
let char = "A";
let tableRandom = [];
let blank;
let tableVille ;

for (i = 0; i < size; i++) {
    tableRandom[i] = Math.floor(Math.random() * 10);
}

for (i = 0; i < size; i++) {
    tableVille="";
    for (j = 0; j <= size; j++) {
        blank = (size - tableRandom[j]);
        if(i<blank){
            tableVille+= " "
        }
        if(i>=blank){
            tableVille+= "A"
        }
    }
    console.log(tableVille)
}