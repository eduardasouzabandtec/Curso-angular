var minhaVar = 'minha variavel';
function minhaFun(x, y) {
    return x + y;
}
var PI = 3.14;
var num = [2, 3, 4];
var achado = num.map(function (n) { return n; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
