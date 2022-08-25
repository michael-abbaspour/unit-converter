/**
 * Module used to reference the data for the Length unit types.
 * @type {Object}
 */
export const lengthFormulaData = {
  millimeter: {
    centimeter: {
      mathSymbol: '/',
      convertingNum: 10
    },
    meter: {
      mathSymbol: '/',
      convertingNum: 1000
    },
    kilometer: {
      mathSymbol: '/',
      convertingNum: Math.pow(10, 6)
    },
    inch: {
      mathSymbol: '/',
      convertingNum: 25.4
    },
    foot: {
      mathSymbol: '/',
      convertingNum: 304.8
    },
    yard: {
      mathSymbol: '/',
      convertingNum: 914.4
    },
    mile: {
      mathSymbol: '/',
      convertingNum: 1.609 * Math.pow(10, 6)
    }
  },
  centimeter: {
    millimeter: {
      mathSymbol: '*',
      convertingNum: 10
    },
    meter: {
      mathSymbol: '/',
      convertingNum: 100
    },
    kilometer: {
      mathSymbol: '/',
      convertingNum: 100000
    },
    inch: {
      mathSymbol: '/',
      convertingNum: 2.54
    },
    foot: {
      mathSymbol: '/',
      convertingNum: 30.48
    },
    yard: {
      mathSymbol: '/',
      convertingNum: 91.44
    },
    mile: {
      mathSymbol: '/',
      convertingNum: 160934
    }
  },
  meter: {
    millimeter: {
      mathSymbol: '*',
      convertingNum: 1000
    },
    centimeter: {
      mathSymbol: '*',
      convertingNum: 100
    },
    kilometer: {
      mathSymbol: '/',
      convertingNum: 1000
    },
    inch: {
      mathSymbol: '*',
      convertingNum: 39.3701
    },
    foot: {
      mathSymbol: '*',
      convertingNum: 3.28084
    },
    yard: {
      mathSymbol: '*',
      convertingNum: 1.09361
    },
    mile: {
      mathSymbol: '/',
      convertingNum: 1609.34
    }
  },
  kilometer: {
    millimeter: {
      mathSymbol: '*',
      convertingNum: Math.pow(10, 6)
    },
    centimeter: {
      mathSymbol: '*',
      convertingNum: 100000
    },
    meter: {
      mathSymbol: '*',
      convertingNum: 1000
    },
    inch: {
      mathSymbol: '*',
      convertingNum: 39370.1
    },
    foot: {
      mathSymbol: '*',
      convertingNum: 3280.84
    },
    yard: {
      mathSymbol: '*',
      convertingNum: 1093.61
    },
    mile: {
      mathSymbol: '/',
      convertingNum: 1.60934
    }
  },
  inch: {
    millimeter: {
      mathSymbol: '*',
      convertingNum: 25.4
    },
    centimeter: {
      mathSymbol: '*',
      convertingNum: 2.54
    },
    meter: {
      mathSymbol: '/',
      convertingNum: 39.3701
    },
    kilometer: {
      mathSymbol: '/',
      convertingNum: 39370.1
    },
    foot: {
      mathSymbol: '/',
      convertingNum: 12
    },
    yard: {
      mathSymbol: '/',
      convertingNum: 36
    },
    mile: {
      mathSymbol: '/',
      convertingNum: 63360
    }
  },
  foot: {
    millimeter: {
      mathSymbol: '*',
      convertingNum: 304.8
    },
    centimeter: {
      mathSymbol: '*',
      convertingNum: 30.48
    },
    meter: {
      mathSymbol: '/',
      convertingNum: 3.28084
    },
    kilometer: {
      mathSymbol: '/',
      convertingNum: 3280.84
    },
    inch: {
      mathSymbol: '*',
      convertingNum: 12
    },
    yard: {
      mathSymbol: '/',
      convertingNum: 3
    },
    mile: {
      mathSymbol: '/',
      convertingNum: 5280
    }
  },
  yard: {
    millimeter: {
      mathSymbol: '*',
      convertingNum: 914.4
    },
    centimeter: {
      mathSymbol: '*',
      convertingNum: 91.44
    },
    meter: {
      mathSymbol: '/',
      convertingNum: 1.09361
    },
    kilometer: {
      mathSymbol: '/',
      convertingNum: 1093.61
    },
    inch: {
      mathSymbol: '*',
      convertingNum: 36
    },
    foot: {
      mathSymbol: '*',
      convertingNum: 3
    },
    mile: {
      mathSymbol: '/',
      convertingNum: 1760
    }
  },
  mile: {
    millimeter: {
      mathSymbol: '*',
      convertingNum: 1.609 * Math.pow(10, 6)
    },
    centimeter: {
      mathSymbol: '*',
      convertingNum: 160900
    },
    meter: {
      mathSymbol: '*',
      convertingNum: 1609.34
    },
    kilometer: {
      mathSymbol: '*',
      convertingNum: 1.60934
    },
    inch: {
      mathSymbol: '*',
      convertingNum: 63360
    },
    foot: {
      mathSymbol: '*',
      convertingNum: 5280
    },
    yard: {
      mathSymbol: '*',
      convertingNum: 1760
    }
  }
};
