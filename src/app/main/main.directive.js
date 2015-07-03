(function() {
  'use strict';

angular
    .module('tshMoney')
    .directive('poundRating', poundRating)
    .directive('poundSpinner', poundSpinner)

    function poundRating() {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star">' +            
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
            max: '='
        },
        link: function (scope, elem, attrs) {
            scope.stars = [];
            for (var i = 0; i < scope.max; i++) {
                scope.stars.push({
                    filled: i < scope.ratingValue
                });
                }
            }
        }
    }

    function poundSpinner() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, c) {
                var value ;
                element.spinner({
                    spin: function (event, ui) {
                        if(ui.value <= 5 && ui.value > 0)
                        {
                        c.$setViewValue(ui.value);
                        }
                        else return false ;
                    },
                    max: 5,
                    min: 1,
                    numberFormat: "n"
                })
                .focus(function () {
                    value = element.val();
                })
                .blur(function () {
                    var value1 = element.val();
                    if (value1 < 1 || value1 > 5 ) {
                    element.val(value);
                    }
                    if(isNaN(value1))
                    {
                    element.val(value);
                    } 
            });
        }
    }

    }
})();