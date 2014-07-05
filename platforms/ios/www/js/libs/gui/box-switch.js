/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function setupSwitchTap(){
   var html="";
   var active="";
   var percentageWidth=0;
   var newWidth=0;
    $("switch-tap").each(function(index, obj) {
        html="<ul>";
        active="";
        $.each(this.attributes, function(index) {
                if(this.name[0]==="o" && this.name[1]==="p" && this.name[2]==="t")
                   html+="<li id=\""+this.value.toLowerCase()+"\">"+this.value+"</li>";
                else
                    if(this.name==="active")
                        active=this.value;
        }); 
        html+="</ul>";
        $(obj).html(html);
        $(obj).find("li#"+active.toLowerCase()).addClass("active");
    });
}

$( "view" ).delegate( "switch-tap li", "tap", function() {
    $(this).parent("ul").find("li").removeClass("active");
    $(this).addClass("active");
});
setupSwitchTap();