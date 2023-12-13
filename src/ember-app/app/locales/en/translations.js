import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPosЕдиницыИзмерLForm from './forms/i-i-s-pos-единицы-измер-l';
import IISPosЗаказПостLForm from './forms/i-i-s-pos-заказ-пост-l';
import IISPosКонтрагентыLForm from './forms/i-i-s-pos-контрагенты-l';
import IISPosНоменклатураLForm from './forms/i-i-s-pos-номенклатура-l';
import IISPosОрганизацииLForm from './forms/i-i-s-pos-организации-l';
import IISPosОтчетОЗакLForm from './forms/i-i-s-pos-отчет-о-зак-l';
import IISPosПланЗакупокLForm from './forms/i-i-s-pos-план-закупок-l';
import IISPosСкладыLForm from './forms/i-i-s-pos-склады-l';
import IISPosЕдиницыИзмерEForm from './forms/i-i-s-pos-единицы-измер-e';
import IISPosЗаказПостEForm from './forms/i-i-s-pos-заказ-пост-e';
import IISPosКонтрагентыEForm from './forms/i-i-s-pos-контрагенты-e';
import IISPosНоменклатураEForm from './forms/i-i-s-pos-номенклатура-e';
import IISPosОрганизацииEForm from './forms/i-i-s-pos-организации-e';
import IISPosОтчетОЗакEForm from './forms/i-i-s-pos-отчет-о-зак-e';
import IISPosПланЗакупокEForm from './forms/i-i-s-pos-план-закупок-e';
import IISPosСкладыEForm from './forms/i-i-s-pos-склады-e';
import IISPosЕдиницыИзмерModel from './models/i-i-s-pos-единицы-измер';
import IISPosЗаказПостModel from './models/i-i-s-pos-заказ-пост';
import IISPosКонтрагентыModel from './models/i-i-s-pos-контрагенты';
import IISPosНоменклатураModel from './models/i-i-s-pos-номенклатура';
import IISPosОрганизацииModel from './models/i-i-s-pos-организации';
import IISPosОтчетОЗакModel from './models/i-i-s-pos-отчет-о-зак';
import IISPosПланЗакупокModel from './models/i-i-s-pos-план-закупок';
import IISPosПланModel from './models/i-i-s-pos-план';
import IISPosСкладыModel from './models/i-i-s-pos-склады';
import IISPosТЧЗаказModel from './models/i-i-s-pos-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-pos-единицы-измер': IISPosЕдиницыИзмерModel,
    'i-i-s-pos-заказ-пост': IISPosЗаказПостModel,
    'i-i-s-pos-контрагенты': IISPosКонтрагентыModel,
    'i-i-s-pos-номенклатура': IISPosНоменклатураModel,
    'i-i-s-pos-организации': IISPosОрганизацииModel,
    'i-i-s-pos-отчет-о-зак': IISPosОтчетОЗакModel,
    'i-i-s-pos-план-закупок': IISPosПланЗакупокModel,
    'i-i-s-pos-план': IISPosПланModel,
    'i-i-s-pos-склады': IISPosСкладыModel,
    'i-i-s-pos-т-ч-заказ': IISPosТЧЗаказModel
  },

  'application-name': 'Pos',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Pos',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Pos',
          title: 'Pos'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        pos: {
          caption: 'Pos',
          title: 'Pos',
          'i-i-s-pos-единицы-измер-l': {
            caption: 'Единицы измер',
            title: ''
          },
          'i-i-s-pos-склады-l': {
            caption: 'Склады',
            title: ''
          },
          'i-i-s-pos-план-закупок-l': {
            caption: 'План закупок',
            title: ''
          },
          'i-i-s-pos-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-pos-отчет-о-зак-l': {
            caption: 'Отчет о зак',
            title: ''
          },
          'i-i-s-pos-заказ-пост-l': {
            caption: 'Заказ пост',
            title: ''
          },
          'i-i-s-pos-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-pos-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-pos-единицы-измер-l': IISPosЕдиницыИзмерLForm,
    'i-i-s-pos-заказ-пост-l': IISPosЗаказПостLForm,
    'i-i-s-pos-контрагенты-l': IISPosКонтрагентыLForm,
    'i-i-s-pos-номенклатура-l': IISPosНоменклатураLForm,
    'i-i-s-pos-организации-l': IISPosОрганизацииLForm,
    'i-i-s-pos-отчет-о-зак-l': IISPosОтчетОЗакLForm,
    'i-i-s-pos-план-закупок-l': IISPosПланЗакупокLForm,
    'i-i-s-pos-склады-l': IISPosСкладыLForm,
    'i-i-s-pos-единицы-измер-e': IISPosЕдиницыИзмерEForm,
    'i-i-s-pos-заказ-пост-e': IISPosЗаказПостEForm,
    'i-i-s-pos-контрагенты-e': IISPosКонтрагентыEForm,
    'i-i-s-pos-номенклатура-e': IISPosНоменклатураEForm,
    'i-i-s-pos-организации-e': IISPosОрганизацииEForm,
    'i-i-s-pos-отчет-о-зак-e': IISPosОтчетОЗакEForm,
    'i-i-s-pos-план-закупок-e': IISPosПланЗакупокEForm,
    'i-i-s-pos-склады-e': IISPosСкладыEForm
  },

});

export default translations;
