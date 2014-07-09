
function Browser(options){
    var config;
    var self=this;
    var mutex=false;
    var init=false;
    var cache;
    var theme;
    function Constructor(options){
        setupConfig(options);
        ThemeManager=new Themes(config.themes);
        theme=ThemeManager;
        if(config.startView!==null)
            self.loadView({
                idView:config.startView,
                naviType: "none"
            });
        
        setupHandling();
        setupDomBrowser();
    }
    function setupDomBrowser(){
        if(config.parent==="body"){
            $("html").css("height","100%").css("width","100%");
            $("body").addClass("parentInit");
        }
        $(config.parent).html("<app></app>");
    }
    function setupConfig(options){
        var defaults = {
            parent: "body",
            themes: "default",
            startView: null
        };
        config = $.extend( {}, defaults, options );
        cache= new cacheSystem({
            parent:config.parent
        });
    }
    
    this.loadView=function(request){
            console.log(request);
            if(cache.isset(request.idView)){
                self.showView(cache.get(request.idView),getTransitionFromNaviType(request.naviType));
                console.log("I load "+request.idView+" from cache");
            }
            else downloadView(request);
        
    };
    this.getDomRequest=function(obj){
        return {
            idView:    $(obj).attr("page-navi"),
            naviType:  $(obj).attr("page-navi-type")
        };
    };
    this.showView=function(view,anim){
            if(!$(config.parent).children("app").length)
                $(config.parent).prepend("<app></app>");
            if(!init){
                anim="none";
                var display="none";
            }
            else display=true;
            view.downloadControllers({
                success:function(){
                    view.activeControllers();
                    new transition({
                            type:anim,
                            viewToLoad:view
                    });
                    if(!init){
                        init=true;
                        theme.loadThemes();
                    }
                    else theme.apply();
                },
                error:function(){
                    new transition({
                            type:anim,
                            viewToLoad:view
                    });
                    if(!init){
                        init=true;
                        theme.loadThemes();
                    }
                    else theme.apply();
                }
            });
            
    };
    
    var downloadView=function(request){
        console.log("Try to search the view in view/"+request.idView);
        $.ajax({
            url : "view/"+request.idView,
            success : function (data) {
                ConnectionComplete(request,data);
                console.log("Load of view/"+request.idView+" successfull");
            },
            error : function (r,s,e) {
                console.log("By convention put your view page in \"Views/\" folder. Now i try to search it in "+request.idView);
                $.ajax({
                    url : request.idView,
                    success : function (data) {
                        ConnectionComplete(request,data);
                        console.log("Load of "+request.idView+" successfull");
                    },
                    error : function (r,s,e) {
                        console.log("Error on load view");
                        mutex=false;
                    }
                });
            }
        });
    };
    function ConnectionComplete(request,dataSuccess){
        var viewDownloaded;
        if($(dataSuccess).find("view").length===0)
            viewDownloaded=new View(request.idView,$(dataSuccess));
        else viewDownloaded=new View(request.idView,$(dataSuccess).children('body').find("view"));
        cache.add(viewDownloaded);
        self.showView(viewDownloaded,getTransitionFromNaviType(request.naviType));
    }
    
    function getTransitionFromNaviType(NaviType){
        switch(NaviType){
            case "back": return "fully.right";break;
            case "next": return "fully.left";break;
            case "none": return "none";break;
            default: return "fully.left"; break;
        }
    }
    function setupHandling(){
        $( "html" ).delegate("*[page-navi]", "click", function(e) {
           e.stopPropagation();
           self.loadView(self.getDomRequest(this));
           
        });
    }
    Constructor(options);
};
