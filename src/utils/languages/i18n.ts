import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import tr from './locales/tr';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  tr,
};

export default I18n;
