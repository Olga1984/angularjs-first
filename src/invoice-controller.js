(function(angular) {
    'use strict';
    angular.module('invoice3', ['invoiceservice'])
        .controller('InvoiceController', ['currencyConverter', function InvoiceController(currencyConverter) {
            this.qty = 1;
            this.cost = 2;
            this.inCurr = 'EUR';
            this.currencies = currencyConverter.currencies;
            
            this.total = function (outCur) {
                return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCur);
            };

            this.pay = function () {
                alert('paid');
            };
           }])
})(window.angular);