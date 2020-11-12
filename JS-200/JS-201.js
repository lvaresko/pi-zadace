for (let x = 0; x < 5; x = x + 1) {
    let y = 0;
    var pattern = "";

    while (y < x + 1) {
        pattern += "#";
        y++;
    }
    
    console.log(pattern);
}
