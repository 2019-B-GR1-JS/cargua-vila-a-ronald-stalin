var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'componentes';
        this.arregloObjetos = [
            {
                id: 1,
                "nombre": "Adrian",
                apellido: 'Eguez',
                sueldo: 12.12,
                casado: false,
                comida: "https://www.ecuavisa.com/sites/default/files/fotos/2019/01/03/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg",
                carro: null,
                ojos: undefined
            },
            {
                id: 2,
                "nombre": "Ramiro",
                apellido: 'PEREZ',
                sueldo: 22.99,
                casado: true,
                comida: "https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg",
                carro: null,
                ojos: undefined
            },
            {
                id: 3,
                "nombre": "Carolina",
                apellido: 'Vivanco',
                sueldo: 74.01,
                casado: false,
                comida: "https://images.clarin.com/2019/08/30/de-la-invencion-de-la___hLWb7dc-8_1256x620__1.jpg",
                carro: null,
                ojos: undefined
            }
        ];
    }
    AppComponent.prototype.imprimirSueldo = function (sueldo) {
        console.log(sueldo);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
