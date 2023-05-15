import { PRODUCT_NAME } from './config/types';

export function init($plugin, store) {
  const {
    // virtualType, configureType,
    basicType,
    spoofedType
  } = $plugin.DSL(store, 'explorer');

  spoofedType({
    label:             'DEMO',
    type:              PRODUCT_NAME,
    product:           PRODUCT_NAME,
    collectionMethods: [],
    schemas:           [
      {
        id:                PRODUCT_NAME,
        type:              'schema',
        collectionMethods: ['GET', 'POST'],
        resourceFields:    {},
      }
    ],
  });

  basicType([PRODUCT_NAME], 'cluster');
}
