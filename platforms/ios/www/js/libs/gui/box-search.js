/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function setupSearchBox(){
    $("search").each(function(index, obj) {
        var html='<div class="box"><input class="search-bar-input" type="text"';
        if(typeof $(this).attr("placeholder") !== 'undefined')
            html+=' placeholder="'+$(this).attr('placeholder')+'" ';
        if(typeof $(this).attr("id") !== 'undefined')
            html+=' id="'+$(this).attr('id')+' "';
        html+=' ></input><a id="abort">Annulla</a></div><div class="search-bar-abort-area"></div><div class="search-bar-results-box"><div class="content">boom panico</div></div>';
        $(obj).html(html);
        
    });
}
$( "view" ).delegate( "search input", "focus", function() {
    $("view").addClass("search-box-actived");
});
$( "view" ).delegate("search #abort", "click", function() {
    $("view").removeClass("search-box-actived");
});
$( "view" ).delegate("search .search-bar-abort-area", "click", function() {
    $("view").removeClass("search-box-actived");
});

setupSearchBox();