const IN = ["[", "{", "("];
const OUT = ["]", "}", ")"];

function isValid(s: string): boolean {
    const stack: string[] = [];

    const stackLastValue = () => stack[stack.length - 1];

    const isMatching = (value: string) => {
        if (stackLastValue() === "[" && value === "]") return true;
        if (stackLastValue() === "{" && value === "}") return true;
        if (stackLastValue() === "(" && value === ")") return true;
        return false;
    }

    s.split("").forEach((char) => {
        if(IN.includes(char)) stack.push(char);
        if(OUT.includes(char)) {
            if(isMatching(char)) stack.pop();
            else stack.push(char);
        }
    });

    return stack.length === 0;
};