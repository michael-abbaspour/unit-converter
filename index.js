import {
  populateMeasurementTypes,
  updateConversionSelectChoices,
  firstConversionSelectChange,
  secondConversionSelectChange
} from './modules/select.js';
import {
  firstTextInputEvent,
  secondTextInputEvent
} from './modules/convert.js';

populateMeasurementTypes();
updateConversionSelectChoices();
firstConversionSelectChange();
secondConversionSelectChange();

firstTextInputEvent();
secondTextInputEvent();
