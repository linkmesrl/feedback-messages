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
	    templateUrl: 'app/templates/directives/feedback-messages.html',
	    link: function(scope, element, attrs) {
    		
    		scope.remove = false;

    		scope.hide = function(){
				scope.remove = true;
    		}

	    }

	  };
  		    
  });