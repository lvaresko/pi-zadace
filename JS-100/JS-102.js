let bodovi = prompt("Unesi broj bodova");
let ocjena;            
let poruka;            
            
if(bodovi < 50){           
    ocjena = 1;           
    poruka = "Ocjena: nedovoljan (" + ocjena + ") :(";           
} else if (bodovi > 50 && bodovi < 62.9){           
    ocjena = 2;            
    poruka = "Nimalo loše!\nOcjena: dovoljan (" + ocjena + ")";
} else if (bodovi > 63 && bodovi < 75.9){            
    ocjena = 3;            
    poruka = "Solidno!\nOcjena: dobar (" + ocjena + ")";            
} else if (bodovi > 76 && bodovi < 88.9){            
    ocjena = 4;            
    poruka = "Bravo!\nOcjena: vrlo dobar (" + ocjena + ")";            
} else {            
    ocjena = 5;            
    poruka = "Svaka čast! Izvrstan posao.\nOcjena: izvrstan (" + ocjena + ")";            
}            

console.log(poruka);


