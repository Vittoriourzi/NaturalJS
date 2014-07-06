/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function searchBox(){
    var self=this;
    function Construct(){
        self.rendering();
        self.handling();
    }
    this.rendering=function(){
        $("search").each(function(index, obj) {
            var html='<div class="box"><div class="ion-ios7-search"></div><input class="search-bar-input" type="text"';
            if(typeof $(this).attr("placeholder") !== 'undefined')
                html+=' placeholder="'+$(this).attr('placeholder')+'" ';
            if(typeof $(this).attr("id") !== 'undefined')
                html+=' id="'+$(this).attr('id')+' "';
            html+=' ></input><div class="ion-ios7-close"></div><a id="abort">Annulla</a></div>';
            html+='<div class="search-bar-abort-area"></div>';
            $(obj).html(html);
            if($(obj).parent().children().first().get(0).tagName==="SEARCH")
                $(obj).addClass("firstElementOfDom");

         });
    };
    this.handling=function(){
        $( "search input" ).on( "focus", function() {
            $("view").addClass("search-box-actived");
        });
        $( "search #abort" ).on( "click", function() {
            $("view").removeClass("search-box-actived");
        });
        $( "search .search-bar-abort-area" ).on( "click", function() {
            $("view").removeClass("search-box-actived");
        });
        $( "search input" ).on( "keyup", function() {
            if($(this).val().length>0)
                $(this).parents("search").addClass("inWriting");
            else 
                $(this).parents("search").removeClass("inWriting");
        });
        $( "search .ion-ios7-close" ).on( "click", function() {
            $(this).parents("search").removeClass("inWriting");
            $(this).parents("search").find("input").val(null);
        });
    };
    Construct();
}
