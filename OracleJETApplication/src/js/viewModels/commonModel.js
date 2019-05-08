define(['ojs/ojcore', 'knockout', 'jquery', 'factories/countryFactory',
    'ojs/ojtable', 'ojs/ojcollectiontabledatasource'],
        function (oj, ko, $, CountryFactory) {

            function AboutViewModel() {
                var self = this;
                self.countryCollection = CountryFactory.createCountryCollection();
                console.log(self.countryCollection)
                self.datasource = ko.observable();
                self.datasource(new oj.CollectionTableDataSource(self.countryCollection));  
      self.connected = function() {
      };
      self.disconnected = function() {
      };
      self.transitionCompleted = function() {
      };
    }
    return new AboutViewModel();
  }
);
