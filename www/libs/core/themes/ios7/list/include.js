/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





function list(){
   var self=this;
   function Construct(){
       self.rendering();
   }
   this.rendering=function(){
       var text;
       var icon;
       var html;
        $("list record").each(function(index, obj) {
            text=$(obj).attr("text")!=null ? $(obj).attr("text"):'';
            icon=$(obj).attr("icon")!=null ? $(obj).attr("icon"):'';
            $(obj).attr("text");
            html="<label>"+text;
            if(icon!=='')
                html+="<actionarea><a class=\""+icon+"\"></a></actionarea>";
            html+="</label>";
            $(obj).html(html);
        });
   };
   Construct();
}