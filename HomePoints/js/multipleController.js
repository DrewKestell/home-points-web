homepointsApp.controller('MultipleController', function ($scope) {

	var initialCircles = [],
			rawData = [],    
      fileReader = new FileReader();

  $scope.results1class = [];
  $scope.results2class = [];
  $scope.results3class = [];

	$scope.uploadInitialCircles = function() {
    fileReader.readAsText(event.target.files[0]);

    fileReader.onload = function(e) {
      circles = e.target.result.split("\n");

      for (var i = 0; i < circles.length; i++) {
        initialCircles.push(circles[i].split(","));
      }
      $scope.multipleForm.initialCircles.$setValidity("required", true);
    }
  };

  $scope.uploadRawData = function() {
    fileReader.readAsText(event.target.files[0]);

    fileReader.onload = function(e) {
      var rawDataArray = e.target.result.split("\n");

      for (var i = 0; i < rawDataArray.length; i++) {
        rawData.push(rawDataArray[i].split(","));
      }

      $scope.multipleForm.rawData.$setValidity("required", true);
      $scope.results1 = "Raw dataset contains " + rawData.length + " coordinate pairs.";
      $scope.results1class.push("results-success");
      $scope.$apply();
    }
  };

  $scope.submit = function() {
    var cleanDataCsv = "",
        cleanData = [];

    for(var j = 0; j < (initialCircles.length); j++) {
      for(var i = 0; i < (rawData.length); i++) {
        var distance = (Math.pow((((Math.pow((initialCircles[j][0] - rawData[i][0]), 2)) * 4761) + ((Math.pow((initialCircles[j][1] - rawData[i][1]), 2)) * 4000)), 0.5));

        if(distance < initialCircles[j][2]) {
          cleanData.push([rawData[i][0], rawData[i][1]]);
        };
      }
    }

    for(var j = 0; j < cleanData.length; j++) {
        cleanDataCsv += cleanData[j][0] + "," + cleanData[j][1] + "\n";
    }

    var link = window.document.createElement("a");
    link.setAttribute("href", "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(cleanDataCsv));
    link.setAttribute("download", "upload_data.csv");
    link.click();

    $scope.results2 = "Processing complete. " + (rawData.length - cleanData.length) + " coordinate pairs were outside of the specified radius."
    $scope.results2class.push("results-success");

    $scope.results3 = "Cleaned dataset contains " + cleanData.length + " coordinate pairs."
    $scope.results3class.push("results-success");
  };

  $scope.clear = function() { 
    document.getElementById("rawData").value = "";
    document.getElementById("initialCircles").value = "";
    
    $scope.results1 = "";
    $scope.results2 = "";
    $scope.results3 = "";
    
    $scope.singleForm.$setPristine();
    $scope.singleForm.$setUntouched();
    $scope.multipleForm.initialCircles.$setValidity("required", false);
    $scope.multipleForm.rawData.$setValidity("required", false);
  };

});
