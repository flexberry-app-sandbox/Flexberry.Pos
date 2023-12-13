import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-pos-единицы-измер-l');
  this.route('i-i-s-pos-единицы-измер-e',
  { path: 'i-i-s-pos-единицы-измер-e/:id' });
  this.route('i-i-s-pos-единицы-измер-e.new',
  { path: 'i-i-s-pos-единицы-измер-e/new' });
  this.route('i-i-s-pos-заказ-пост-l');
  this.route('i-i-s-pos-заказ-пост-e',
  { path: 'i-i-s-pos-заказ-пост-e/:id' });
  this.route('i-i-s-pos-заказ-пост-e.new',
  { path: 'i-i-s-pos-заказ-пост-e/new' });
  this.route('i-i-s-pos-контрагенты-l');
  this.route('i-i-s-pos-контрагенты-e',
  { path: 'i-i-s-pos-контрагенты-e/:id' });
  this.route('i-i-s-pos-контрагенты-e.new',
  { path: 'i-i-s-pos-контрагенты-e/new' });
  this.route('i-i-s-pos-номенклатура-l');
  this.route('i-i-s-pos-номенклатура-e',
  { path: 'i-i-s-pos-номенклатура-e/:id' });
  this.route('i-i-s-pos-номенклатура-e.new',
  { path: 'i-i-s-pos-номенклатура-e/new' });
  this.route('i-i-s-pos-организации-l');
  this.route('i-i-s-pos-организации-e',
  { path: 'i-i-s-pos-организации-e/:id' });
  this.route('i-i-s-pos-организации-e.new',
  { path: 'i-i-s-pos-организации-e/new' });
  this.route('i-i-s-pos-отчет-о-зак-l');
  this.route('i-i-s-pos-отчет-о-зак-e',
  { path: 'i-i-s-pos-отчет-о-зак-e/:id' });
  this.route('i-i-s-pos-отчет-о-зак-e.new',
  { path: 'i-i-s-pos-отчет-о-зак-e/new' });
  this.route('i-i-s-pos-план-закупок-l');
  this.route('i-i-s-pos-план-закупок-e',
  { path: 'i-i-s-pos-план-закупок-e/:id' });
  this.route('i-i-s-pos-план-закупок-e.new',
  { path: 'i-i-s-pos-план-закупок-e/new' });
  this.route('i-i-s-pos-склады-l');
  this.route('i-i-s-pos-склады-e',
  { path: 'i-i-s-pos-склады-e/:id' });
  this.route('i-i-s-pos-склады-e.new',
  { path: 'i-i-s-pos-склады-e/new' });
});

export default Router;
