var app = angular.module('CalculatorApp',[]);
app.controller('CalculatorCtrl',function () {
    this.firstNumber= "";
    this.secondNumber= "";
    this.operator = '';
    this.changeOperator = function (opr) {
        this.operator = opr;
    }
});
