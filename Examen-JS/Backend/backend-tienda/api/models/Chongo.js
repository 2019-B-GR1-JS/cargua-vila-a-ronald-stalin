/**
 * Chongo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string'
    },
    direccion: {
      type: 'string'
    },
    fechaApertura: {
      type: 'string'
    },
    estrellas: {
      type: 'string'
    },
    horarioApertura: {
      type: 'string'
    },
    prostitutaDelChongo: {
      collection: 'prostituta',
      via: 'idChongo'
    }
  },

};

