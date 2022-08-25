/**
 * Module used to reference the data for the Temperature unit types.
 * @type {Object}
 */
export const temperatureFormulaData = {
  celsius: {
    fahrenheit: {
      mathSymbol: '*',
      convertingNum: 9 / 5,
      secondMathSymbol: '+',
      secondConvertingNum: 32
    },
    kelvin: {
      mathSymbol: '*',
      convertingNum: 1,
      secondMathSymbol: '+',
      secondConvertingNum: 273.15
    },
    rankine: {
      mathSymbol: '*',
      convertingNum: 1.8,
      secondMathSymbol: '+',
      secondConvertingNum: 491.67
    }
  },
  fahrenheit: {
    celsius: {
      mathSymbol: '-',
      convertingNum: 32,
      secondMathSymbol: '*',
      secondConvertingNum: 5 / 9
    },
    kelvin: {
      mathSymbol: '-',
      convertingNum: 32,
      secondMathSymbol: '*',
      secondConvertingNum: 5 / 9,
      thirdMathSymbol: '+',
      thirdConvertingNum: 273.15
    },
    rankine: {
      mathSymbol: '*',
      convertingNum: 1,
      secondMathSymbol: '+',
      secondConvertingNum: 459.67
    }
  },
  kelvin: {
    celsius: {
      mathSymbol: '*',
      convertingNum: 1,
      secondMathSymbol: '-',
      secondConvertingNum: 273.15
    },
    fahrenheit: {
      mathSymbol: '-',
      convertingNum: 273.15,
      secondMathSymbol: '*',
      secondConvertingNum: 1.8,
      thirdMathSymbol: '+',
      thirdConvertingNum: 32
    },
    rankine: {
      mathSymbol: '*',
      convertingNum: 1,
      secondMathSymbol: '*',
      secondConvertingNum: 1.8
    }
  },
  rankine: {
    celsius: {
      mathSymbol: '-',
      convertingNum: 491.67,
      secondMathSymbol: '*',
      secondConvertingNum: 5 / 9
    },
    fahrenheit: {
      mathSymbol: '*',
      convertingNum: 1,
      secondMathSymbol: '-',
      secondConvertingNum: 459.67
    },
    kelvin: {
      mathSymbol: '*',
      convertingNum: 1,
      secondMathSymbol: '*',
      secondConvertingNum: 5 / 9
    }
  }
};
