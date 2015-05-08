'use strict';

angular.module('feedback-module', [])
.directive('feedback', function () {

	return {
		restrict: 'E',
        template: '<div ng-include="contentUrl()"></div>',
		scope: {
			title: '@',
			size: '@',
			type: '@',
			templateUrl: '@'

		},
		transclude: true,
		
		link: function(scope, element, attrs) {
			console.log(scope);
			scope.remove = false;
			scope.contentUrl = function(){
				return scope.templateUrl;
			};

			scope.hide = function(){
				scope.remove = true;
			};

		}

	};

});