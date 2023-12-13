import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.pos.caption'),
          title: i18n.t('forms.application.sitemap.pos.title'),
          children: [{
            link: 'i-i-s-pos-единицы-измер-l',
            caption: i18n.t('forms.application.sitemap.pos.i-i-s-pos-единицы-измер-l.caption'),
            title: i18n.t('forms.application.sitemap.pos.i-i-s-pos-единицы-измер-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-pos-склады-l',
            caption: i18n.t('forms.application.sitemap.pos.i-i-s-pos-склады-l.caption'),
            title: i18n.t('forms.application.sitemap.pos.i-i-s-pos-склады-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-pos-план-закупок-l',
            caption: i18n.t('forms.application.sitemap.pos.i-i-s-pos-план-закупок-l.caption'),
            title: i18n.t('forms.application.sitemap.pos.i-i-s-pos-план-закупок-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-pos-организации-l',
            caption: i18n.t('forms.application.sitemap.pos.i-i-s-pos-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.pos.i-i-s-pos-организации-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-pos-отчет-о-зак-l',
            caption: i18n.t('forms.application.sitemap.pos.i-i-s-pos-отчет-о-зак-l.caption'),
            title: i18n.t('forms.application.sitemap.pos.i-i-s-pos-отчет-о-зак-l.title'),
            children: null
          }, {
            link: 'i-i-s-pos-заказ-пост-l',
            caption: i18n.t('forms.application.sitemap.pos.i-i-s-pos-заказ-пост-l.caption'),
            title: i18n.t('forms.application.sitemap.pos.i-i-s-pos-заказ-пост-l.title'),
            children: null
          }, {
            link: 'i-i-s-pos-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.pos.i-i-s-pos-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.pos.i-i-s-pos-номенклатура-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-pos-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.pos.i-i-s-pos-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.pos.i-i-s-pos-контрагенты-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})