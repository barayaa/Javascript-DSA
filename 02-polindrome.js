function reverse1(str) {
    let reversed = ''
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed
    }
    console.log(reversed);
    if (str === reversed) {
        return true
    }
    return false
}