function cacheSystem(options){
    var self=this;
    var config;
    var defaults = {
        cacheName: "cache",
        parent:    "body"
    };
    config = $.extend( {}, defaults, options );
    this.add=function(View){
        console.log(View);
        if(!$(config.cacheName).length)
            $(config.parent).append("<"+config.cacheName+"><page id=\""+View.getId()+"\">"+View.getViewHtml()+"</page></"+config.cacheName+">");    
        else
            if($(config.cacheName).children('page[id="'+View.getId()+'"]').length>0)
                $(config.cacheName).children('page[id="'+View.getId()+'"]').html(View.getViewHtml());
            else 
                $(config.cacheName).append("<page id=\""+View.getId()+"\">"+View.getViewHtml()+"</page>");
        $(config.cacheName).children('page[id="'+View.getId()+'"]').attr("lastUpdate",new Date().getTime());
    };
    this.get=function(idView){
        return new View(idView,$("html").find(config.cacheName).find('page[id="'+idView+'"]').children('view').html());
    };
    this.isset=function(idView){
        return $("html").find(config.cacheName).find('page[id="'+idView+'"]').children('view').val()!=null;
    };
}
