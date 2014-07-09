/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var ThemeManager=new Themes("default");
function Themes(nameTheme){
    var self=this;
    var defaultTheme="ios7";
    var currentTheme;
    var currentProcessNumber=0;
    var themeLoaded=0;
    function Construct(nameTheme){
        if(nameTheme=="default")
            nameTheme=defaultTheme;
        currentTheme=nameTheme;
        $.getScript( getPathTheme()+'install.js');

    }
    
    function getPathTheme(){
        return 'libs/core/themes/'+currentTheme+'/';
    }
    this.install=function(itemName,filetype){
        loadFile(itemName,filetype);
    };
    
    function loadFile(filename, filetype){
        var d=document;
        if (filetype==="js"){ 
            currentProcessNumber++;
            $.getScript(getPathTheme()+filename+"/include.js", function( data, textStatus, jqxhr ) {
                currentProcessNumber--;
                if(currentProcessNumber==0){
                    self.apply();
                }
            });

        }
        else{
            if (filetype==="css"){
                var f=d.createElement("link");
                f.setAttribute("rel", "stylesheet");
                f.setAttribute("type", "text/css");
                f.setAttribute("href", getPathTheme()+filename+"/include.css");
            }
        }
        if (typeof f!=="undefined")
            d.getElementsByTagName("head")[0].appendChild(f);
    }

    this.loadThemes=function(){};
    this.apply=function(){};
    Construct(nameTheme);
};