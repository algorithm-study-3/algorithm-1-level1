function backspaceCompare(s: string, t: string): boolean {
    const process = (str: string) => {
        const stack: string[] = [];
        str.split("").forEach((char) => {
            if (char === "#") {
                stack.pop();
            } else {
                stack.push(char);
            }
        })
        return stack;
    }

    const stack1 = process(s);
    const stack2 = process(t);

    return stack1.join("") === stack2.join("");
};