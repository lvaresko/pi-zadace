function istiZnakovi(str) {
    let s = str.match(/([a-zA-Z])\1*/g)||[]; //kreiram array uzastopno istih znakova ['b', 'aaa', 'cc', 'd']
    s = s.flatMap( function(itm) { //flatMap mapira funkciju na svaki el. pa ravna ("flattens") rez. u jedan array
        return [itm.length]; 
    });
    return Math.max(...s); 
}

console.log(istiZnakovi("baaaccd")) // → 3
console.log(istiZnakovi("ba2dll")) // → 2