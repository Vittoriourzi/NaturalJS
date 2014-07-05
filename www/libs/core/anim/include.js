
function transition(args){
        var config= {
                onSuccess: function(){},
                type: "normal",
                ms: 1000,
                viewInScreen: args.viewInScreen,
                viewToLoad: args.viewToLoad,
                attach: "app"
            };
        config = $.extend( {}, config, args );
        function Construct(){
            page_transit();
        }
        function page_transit(){
            switch(config.type){
                case "none":
                     $(config.attach).html("<view class=\"running\">"+config.viewToLoad.getViewHtml()+"</view>");
                     config.onSuccess();
                break;
                case "ios7.left":
                     ios7Left();
                     
                break;
                case "fully.left":
                     slideleft();
                     
                break;
                case "fully.right":
                     slideright();
                break;
                default:
                     $(config.attach).html("<view class=\"running\">"+config.viewToLoad.getViewHtml()+"</view>");
                     config.onSuccess();
                break;
            }
        }
        Construct();
        function slideleft(){
            var eventOnEndAnimationOrTransition="webkitAnimationEnd oTransitionEnd MSTransitionEnd oanimationend transitionend msAnimationEnd animationend";
            $(config.attach).find("view.running").addClass("pageHideAndSlideLeft");
            $( "view.running.pageFromRightToCenter").one(eventOnEndAnimationOrTransition,
            function(e) {
                $(config.attach).find("view.running.pageHideAndSlideLeft").removeClass("running");
             });
            $(config.attach).prepend("<view class=\"preload\">"+config.viewToLoad.getViewHtml()+"</view>");
            $(config.attach).find("view.preload").addClass("pageFromRightToCenter");
            $( "view.preload.pageFromRightToCenter").one(eventOnEndAnimationOrTransition,
            function(e) {
                    $(config.attach).find("view.preload").removeClass("preload").addClass("running");
                    $(config.attach).find("view.pageFromRightToCenter").removeClass("pageFromRightToCenter");
                    $(config.attach).find("view.pageHideAndSlideLeft").remove();
                    config.onSuccess();
             });
        }
        function slideright(){
            var eventOnEndAnimationOrTransition="webkitAnimationEnd oTransitionEnd MSTransitionEnd oanimationend transitionend msAnimationEnd animationend";
            $(config.attach).find("view.running").addClass("pageHideAndSlideRight");
            $( "view.running.pageFromLeftToCenter").one(eventOnEndAnimationOrTransition,
            function(e) {
                $(config.attach).find("view.running.pageHideAndSlideRight").removeClass("running");
             });
            $(config.attach).prepend("<view class=\"preload\">"+config.viewToLoad.getViewHtml()+"</view>");
            $(config.attach).find("view.preload").addClass("pageFromLeftToCenter");
            $( "view.preload.pageFromLeftToCenter").one(eventOnEndAnimationOrTransition,
            function(e) {
                    $(config.attach).find("view.preload").removeClass("preload").addClass("running");
                    $(config.attach).find("view.pageFromLeftToCenter").removeClass("pageFromLeftToCenter");
                    $(config.attach).find("view.pageHideAndSlideRight").remove();
                    config.onSuccess();
             });
        }
        function ios7Left(){
            
            var eventOnEndAnimationOrTransition="webkitAnimationEnd oTransitionEnd MSTransitionEnd oanimationend transitionend msAnimationEnd animationend";
            $(config.attach).find("view").children("app-content").after("<div class=\"tempAnimDiv\"></div>");
            $(config.attach).find("view").children("app-content").detach().appendTo('.tempAnimDiv');
            $(config.attach).find("view").find(".tempAnimDiv").children("app-content").addClass("pageHideAndSlideLeft");
            $( "app-content.pageHideAndSlideLeft").one(eventOnEndAnimationOrTransition,
             function(e) {
                 $(this).removeClass("pageHideAndSlideLeft").addClass("pageOnLeft");
             });
             
            $(config.attach).find(".tempAnimDiv").append("<app-content class=\"preload pageFromRightToCenter\">"+config.viewToLoad.getContent()+"</app-content>");
            /*
            $(config.attach).prepend("<view class=\"preload\">"+config.viewToLoad+"</view>");
            $(config.attach).find("view.preload").addClass("pageFromRightToCenter");
            $( "view.preload.pageFromRightToCenter").one(eventOnEndAnimationOrTransition,
            function(e) {
                    $(config.attach).find("view.preload").removeClass("preload").addClass("running");
                    $(config.attach).find("view.pageFromRightToCenter").removeClass("pageFromRightToCenter");
                    $(config.attach).find("view.pageHideAndSlideLeft").remove();
                    config.onSuccess();
             });*/
        }
}