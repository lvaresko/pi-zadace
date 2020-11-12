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

function provjeri_2(lista, pojam, status) {
    for (let i = 0; i < lista.length; i++)
        if ((lista[i].ime.toLowerCase().includes(pojam.toLowerCase()) || lista[i].prezime.toLowerCase().includes(pojam.toLowerCase())) && (lista[i].upisan == status))
            return true;
    return false;
}

console.log(provjeri_2(lista, "ST", true));
console.log(provjeri_2(lista, "st", false));