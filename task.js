function concatStrings(value, separator) {
    let result = ""
    let innerSeparator = separator
    let counter = 0

    return function innerConcat(innerValue) {
        if (typeof innerValue === "string") {
            if (typeof innerSeparator === "string" && counter++ > 0) {
                result += innerSeparator
            }
            result += innerValue
            return innerConcat
        } else {
            return result
        }
    }(value)
}

class Calculator {
    constructor(number1, number2) {
        isValid(number1) && isValid(number2)
        this.numberX = number1;
        this.numberY = number2;
    }

    setX = function (value) {
        if (isValid(value)) {
            this.numberX = value
        }
    }.bind(this)

    setY = function (value) {
        if (isValid(value)) {
            this.numberY = value
        }
    }.bind(this)

    logSum = function () {
        console.log(this.numberX + this.numberY)
    }.bind(this)

    logMul = function () {
        console.log(this.numberX * this.numberY)
    }.bind(this)

    logSub = function () {
        console.log(this.numberX - this.numberY)
    }.bind(this)
    logDiv = function () {
        if (this.numberY === 0) throw new Error(" 0 ")
        console.log(this.numberX / this.numberY)
    }.bind(this)
}

function isValid(value) {
    if (typeof value !== "number") throw new Error("not valid")
    if (!isNaN(value) && value <= Number.MAX_SAFE_INTEGER && value >= Number.MIN_SAFE_INTEGER) return true
    throw new Error("not valid")
}
