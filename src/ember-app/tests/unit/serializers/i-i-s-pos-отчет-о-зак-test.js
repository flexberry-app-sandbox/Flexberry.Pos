import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-pos-отчет-о-зак', 'Unit | Serializer | i-i-s-pos-отчет-о-зак', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-pos-отчет-о-зак',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-pos-сост-оплаты',
    'transform:i-i-s-pos-сост-поставок',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
