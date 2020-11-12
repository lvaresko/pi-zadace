let size = 8;
let pattern = "";

for (let x = 0; x < size; x++) {
    if (x % 2 == 0) {
        for (let y = 1; y <= size; y++) {
            if (y % 2 == 0) pattern += "#";
            else pattern += " ";
        }
        console.log(pattern);
        pattern = "";
    }
    else {
        for (let y = 0; y < size; y++) {
            if (y % 2 != 0) pattern += " ";
            else pattern += "#";
        }
        console.log(pattern);
        pattern = "";
    }
}
