function addBinary1(a: string, b: string): string {
    let result = "";
    let aIndex = a.length - 1;
    let bIndex = b.length - 1;
    let carry = 0;

    while(aIndex >= 0 || bIndex >= 0 || carry > 0) {
        const bitA = aIndex >= 0 ? +a[aIndex] : 0;
        const bitB = bIndex >= 0 ? +b[bIndex] : 0;

        const sum = carry + bitA + bitB;
        
        result = (sum % 2).toString() + result;
        carry = Math.floor(sum / 2);

        aIndex -= 1;
        bIndex -= 1;
    }

    return result;
};

function addBinary2(a: string, b: string): string {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
}