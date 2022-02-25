let a = '123';
let b = 'abc';
let a1 = Array.from(a);
let b1 = Array.from(b)
let c = [];

for (let i = 0, n = 0, m = 0; i < (a.length + b.length); i++) {
    if (i % 2 == 0) {
        c[i] = a1[n++];
    } else {
        c[i] = b1[m++];
    }
}
console.log(c.join(''));