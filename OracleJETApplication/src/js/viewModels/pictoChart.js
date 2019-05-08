define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojpictochart'],  
 function(oj, ko, $) {  
    
    function PictoChartModel() {
      this.pictoChartItems = ko.observableArray([
        {name: 'Have Sleep Problems', shape: 'human', count:7, color: '#ed6647'},
        {name: 'Sleep Well', shape: 'human', count: 3}
      ]);
    }
    return new PictoChartModel();
  }  
);  
