var n = 21;
var m = 37;

if (n % 3 == 0 && n % 7 === 0) {
    console.log("3 ve 7 e bolunur");
}

var count = 0;
for (var i = n; i <= m; i++) {
    if (i % 2 !== 0) {
        count++;
    }
}
console.log(count);

var sum = 0;
for (var j = n; j <= m; j++) {
    if (j % 2 !== 0) {
        sum = sum + j;
    }
}
console.log(sum);

var bolen = 0;

for (var k = 1; k <= n; k++) {
    if (n % k === 0) {
        bolen++;
    }
}

if (bolen == 2) {
    console.log("eded sadedir");
} else {
    console.log("eded murekkebdir");
}
var arr = [4,22,7,32,5,8,19,12];
var sumeven = 0;
for (var x = 0; x < arr.length; x++) {
        if (arr[x] % 2 == 0) {
            sumeven += arr[x];
        }
    }
console.log(sumeven);
var sumodd = 0;
for (var y = 0; y < arr.length; y++) {
        if (arr[y] % 2 !== 0) {
            sumodd += arr[y];
        }
    }
console.log(sumodd);
