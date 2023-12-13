import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-pos-единицы-измер', 'Unit | Model | i-i-s-pos-единицы-измер', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-pos-единицы-измер',
    'model:i-i-s-pos-заказ-пост',
    'model:i-i-s-pos-контрагенты',
    'model:i-i-s-pos-номенклатура',
    'model:i-i-s-pos-организации',
    'model:i-i-s-pos-отчет-о-зак',
    'model:i-i-s-pos-план-закупок',
    'model:i-i-s-pos-план',
    'model:i-i-s-pos-склады',
    'model:i-i-s-pos-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
