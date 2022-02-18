/**
 *
 * @param {Number} first
 * @param {Number} second
 * @param {String} symbol
 * @returns calculation result in Number format
 */
export function calculate(first, second, symbol) {
    let result;
    switch (symbol) {
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "*":
            result = first * second;
            break;
        case "/":
            result = first / second;
            break;
        default:
            result = 0;
    }

    // display handling for the result
    if (result.toString().length > 12) {
        return result.toPrecision(12);
    }
    return result.toString();
}

/**
 *
 * @param {String} number
 * @param {String} figure
 * @returns updated number
 */
export function addComma(numStr, symb) {
    if (numStr.includes('.')) {
        // when comma already exists
        return numStr;
    }
    return numStr + symb;
}

/**
 *
 * @param {String} number
 * @param {Number} figure
 * @returns updated number
 */
export function addFigure(numStr, figure) {
    if (numStr === '0') {
        return figure.toString();
    }
    return numStr + figure.toString();
}

/**
 *
 * @param {Object} state
 * @returns string value for calculator display
 */
export function printText(state) {
    if (!state) {
        return '0'
    }
    let text = state?.firstNum;
    if (state?.secondNum && state?.operator) {
        text = `${state?.firstNum}\n${state?.operator}\n${state?.secondNum}`
    } else if (state?.operator) {
        text = `${state?.firstNum}\n${state?.operator}\n`
    }
    return text.replaceAll(".", ",");
}

/**
 *
 * @param {Object} state
 * @param {String | Number} symbol
 * @returns updated state object
 */
export function doOperations(state, symbol) {
    // ERROR CHECK
    if (isNaN(state.firstNum) || !isFinite(state.firstNum)) {
        state.firstNum = '0';
    }

    // CASE OF COMMA BUTTON
    if (symbol === ".") {
        // when just the first number
        if (!state.operator) {
            state.firstNum = addComma(state.firstNum, symbol);
            return state;
        } else if (state.secondNum) {
            // case for the second number
            state.secondNum = addComma(state.secondNum, symbol);
            return state;
        }
        return state;
    }

    // CASE OF OPERATOR AND SECOND NUMBER EXIST
    if (state.operator && state.secondNum) {
        // if symbol is operation
        if (isNaN(symbol)) {
            // calculate the result of two numbers
            state.firstNum = calculate(
                Number(state.firstNum),
                Number(state.secondNum),
                state.operator
            );
            state.secondNum = null;
            // change the operator
            state.operator = symbol === "=" ? null : symbol;
            return state;
        }
        // symbol is a number; add number to the end of secondNum
        state.secondNum = addFigure(state.secondNum, symbol)
        return state;
    }

    // CASE OF OPERATOR EXIST
    if (state.operator) {
        if (isNaN(symbol)) {
            // change the operator
            state.operator = symbol === "=" ? null : symbol;
            return state;
        }
        // symbol is a number
        state.secondNum = symbol.toString();
        return state;
    }

    // CASE OF JUST FIRST NUMBER EXIST
    if (isNaN(symbol)) {
        // change the operator
        state.operator = symbol === "=" ? null : symbol;
        return state;
    }
    // symbol is a number
    state.firstNum = addFigure(state.firstNum, symbol);
    return state;
}

/**
 *
 * @param {Object} state
 * @returns initial state object for calc.
 */
export function clearState(state) {
    state.firstNum = '0';
    state.secondNum = null;
    state.operator = null;
    return state;
}