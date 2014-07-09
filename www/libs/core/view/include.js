/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function View($id,$html){
    var html;
    var id;
    var numOfControllersActive=0;
    function Construct($id,$html){
       html={   "dom":$html,
                header:$($html).find("app-header").html(),
                content:$($html).find("app-content").html(),
                footer:$($html).find("app-content").html()
            };
       id=$id;
    }
    this.getHeader=function(){
        return html.header;
    };
    this.getContent=function(){
        return html.content;
    };
    this.getFooter=function(){
        return html.footer;
    };
    this.getViewHtml=function(){
        return $(html.dom).html();
    };
    this.getId=function(){
        return id;
    };
    this.activeControllers=function(){
        html.dom[0].innerHTML = html.dom[0].innerHTML.replace(/(<@=([^&@>]*)@>)/g, function(m) { 
            return eval(m.match(new RegExp("(<@=([^&@>]*)@>)"))[2]);
          }
        );
        html.dom[0].innerHTML = html.dom[0].innerHTML.replace(/(&lt;@=([^&@>]*)@&gt;)/g, function(m) { 
            return eval(m.match(new RegExp("(&lt;@=([^&@>]*)@&gt;)"))[2]);
          }
        );
    };
    this.downloadControllers=function(_callback){
        if($(html.dom).find("controllers").find("controller").length>0){
            $(html.dom).find("controllers").find("controller").each(function(index, obj){
                  controllerManager.add($(obj).text().replace(/ /g,''),_callback.success);
            });
            $(html.dom).find("controllers").remove();
        }else _callback.error();
    };
    Construct($id,$html);
}