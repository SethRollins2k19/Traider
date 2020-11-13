function classNameArrayToString(classNames: Array<string>): string {
    const total = classNames.reduce((acc, value): string => {
        acc += ` ${value}`;
        return acc;
    });

    return total;
}




export {
    classNameArrayToString
}