let lista = [
    {
        ime: "Marko",
        prezime: "Markić",
        upisan: true
    },
    {
        ime: "Ivan",
        prezime: "Ivić",
        upisan: false
    },
    {
        ime: "Luka",
        prezime: "Lukić",
        upisan: false
    },
    {
        ime: "Marta",
        prezime: "Martić",
        upisan: true
    },
    {
        ime: "Tea",
        prezime: "Lenić",
        upisan: false
    },
    {
        ime: "Roko",
        prezime: "Rokić",
        upisan: true
    },
    {
        ime: "Kristijan",
        prezime: "Kosa",
        upisan: true
    },
    {
        ime: "Matej",
        prezime: "Petko",
        upisan: true
    },
    {
        ime: "Tin",
        prezime: "Ton",
        upisan: false
    },
    {
        ime: "Toni",
        prezime: "Kosta",
        upisan: true
    }
];

function provjeri(lista, pojam) {
    for (let i = 0; i < lista.length; i++){
        if (lista[i].ime == pojam || lista[i].prezime == pojam && lista[i].upisan) return true;
        else return false;
    }
}

console.log(provjeri(lista, "Kosta"));

