'use strict';

angular.module('feedback-module', [])
.directive('feedback', function () {

	return {
		restrict: 'E',
		scope: {
			title: '@',
			size: '@',
			type: '@'
		},
		transclude: true,
		template: 'ng-include="contentUrl()"',

		link: function(scope, element, attrs) {

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