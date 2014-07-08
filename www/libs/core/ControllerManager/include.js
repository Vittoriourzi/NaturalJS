/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var controllerManager=new ControllerManager();

function ControllerManager(){
    var self;
    var controllerInAction;
    var numProcessingControllers=0;
    var fileManager;
    this.add=function(controllerName,_callback){
        if(_callback==undefined||_callback==null)
            _callback=function(){};
        controllerInAction.push({
            "controllerName":controllerName
        });
        load(controllerName,_callback);
    };
    this.show=function(){
        for(var i=0;controllerInAction.length;i++){
            console.log(controllerInAction[i]);
        }
    };
    function load(controllerName,_callback){
        numProcessingControllers++;
        if(_callback==undefined||_callback==null)
            _callback=function(){};
        $.getScript("controller/"+controllerName, function( d, tS, j ) {
            numProcessingControllers--;
            if(numProcessingControllers==0)
                _callback();
        });
    }
    function Construct(){
        self=this;
        controllerInAction=new Array();
        fileManager=new FileManager();
    }
    Construct();
}