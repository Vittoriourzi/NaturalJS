/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function View($id,$html){
    var html;
    var id;
    var htmlContent;
    var htmlFooter;
    var htmlHeader;
    function Construct($id,$html){
       html=$html;
       id=$id;
       htmlContent=$(html).find("app-content").html();
       htmlFooter=$(html).find("app-footer").html();
       htmlHeader=$(html).find("app-header").html();
    }
    this.getHeader=function(){
        return htmlHeader;
    };
    this.getContent=function(){
        return htmlContent;
    };
    this.getFooter=function(){
        return htmlFooter;
    };
    this.getViewHtml=function(){
        return $(html).html();
    };
    this.getId=function(){
        return id;
    };
    Construct($id,$html);
}