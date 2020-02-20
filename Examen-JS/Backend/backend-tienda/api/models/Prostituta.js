/**
 * Prostituta.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    numero: {
      type: 'number'
    },
    nombre: {
      type: 'string'
    },
    promocionUno: {
      type: 'string'
    },
    promocionDos: {
      type: 'string'
    },
    fechaNacimiento: {
      type: 'string'
    },
    nivel: {
      type: 'number'
    },
    precio: {
      type: 'number'
    },
    idChongo: {
      model: 'chongo',
      required: true
    }
  },

};

