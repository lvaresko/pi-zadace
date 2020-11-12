let zagrade = function(s) {
    let stog = [];
    let parovi = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') stog.push(s[i]);
        else {
            let zadnji = stog.pop();
            if (s[i] !== parovi[zadnji]) return false;
        }
    }
    if (stog.length !== 0)return false;

    return true;
};

console.log(zagrade("[()]()()")); // → true
console.log(zagrade("{[((()))]}")); // → true
console.log(zagrade("({)}")); // → false

