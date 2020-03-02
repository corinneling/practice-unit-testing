import setInitialAriaValue from '../helpers/set-aria';
import { accordionToggleHandler } from './helpers';

const buttons = document.querySelectorAll('.accordion__button');
const contentSections = document.querySelectorAll('.accordion__content');

setInitialAriaValue(buttons, 'aria-expanded', 'false');
setInitialAriaValue(contentSections, 'aria-hidden', 'true');
accordionToggleHandler(buttons);
