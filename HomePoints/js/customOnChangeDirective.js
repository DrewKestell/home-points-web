homepointsApp.directive('validFile', function(){
  return {
    require:'ngModel',
    link:function(scope,el,attrs,ngModel){
      el.bind('change',function(){
        scope.$apply(function(){
          ngModel.$setViewValue(el.val());
          ngModel.$render();
        });       
      });
      
      var validFileFunc = scope.$eval(attrs.validFile);
      el.bind('change', validFileFunc)
    }
  }
});