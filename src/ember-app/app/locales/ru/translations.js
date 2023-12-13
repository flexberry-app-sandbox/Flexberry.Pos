import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Pos',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Pos',
          title: 'Pos'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
