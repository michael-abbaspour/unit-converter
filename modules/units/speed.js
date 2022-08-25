/**
 * Module used to reference the data for the Speed unit types.
 * @type {Object}
 */
export const speedFormulaData = {
  kilometerPerHour: {
    milePerHour: {
      mathSymbol: '/',
      convertingNum: 1.60934
    },
    meterPerSecond: {
      mathSymbol: '/',
      convertingNum: 3.6
    },
    footPerSecond: {
      mathSymbol: '/',
      convertingNum: 1.09728
    }
  },
  milePerHour: {
    kilometerPerHour: {
      mathSymbol: '*',
      convertingNum: 1.60934
    },
    meterPerSecond: {
      mathSymbol: '/',
      convertingNum: 2.23694
    },
    footPerSecond: {
      mathSymbol: '*',
      convertingNum: 1.46667
    }
  },
  meterPerSecond: {
    kilometerPerHour: {
      mathSymbol: '*',
      convertingNum: 3.6
    },
    milePerHour: {
      mathSymbol: '/',
      convertingNum: 1.60934
    },
    footPerSecond: {
      mathSymbol: '*',
      convertingNum: 3.28084
    }
  },
  footPerSecond: {
    kilometerPerHour: {
      mathSymbol: '*',
      convertingNum: 1.09728
    },
    milePerHour: {
      mathSymbol: '/',
      convertingNum: 1.46667
    },
    meterPerSecond: {
      mathSymbol: '/',
      convertingNum: 3.28084
    }
  }
};
