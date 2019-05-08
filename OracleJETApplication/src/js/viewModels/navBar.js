define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojknockout','ojs/ojnavigationlist',
],
 function(oj, ko, $) {
  
    function IncidentsViewModel() {
      var self = this;

      $(function(){
          let elementos=$(".navlistcontainer").find("a");
          
         let counter=1;
            for(let a of elementos){
                let elementCounter=0;
                elementCounter+=counter++;
                console.log("#item"+elementCounter)
                a.addEventListener("click",function(){
                    $("#item"+elementCounter).css({"border-color":"blue","width":"100px","height":"30px","display":"block"});
                    console.log("listener")
                    console.log($("#item"+elementCounter))
                })
            }
      }) 
      

      self.connected = function() {
      };

      self.disconnected = function() {
      };

      self.transitionCompleted = function() {
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new IncidentsViewModel();
  }
);
