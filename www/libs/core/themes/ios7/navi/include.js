/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function navi(){
    var self=this;
    function Construct(){
        self.rendering();
    }
    this.rendering=function(){
        var argsNavi=[];
        $("navi").each(function(index, obj) {
            argsNavi['leftContent']=$(obj).attr("leftContent");
            argsNavi['leftType']=$(obj).attr("leftType");
            argsNavi['leftIcon']=$(obj).attr("leftIcon");
            argsNavi['leftPageNavi']=$(obj).attr("leftPageNavi");
            argsNavi['leftPageNaviType']=$(obj).attr("leftPageNaviType");
            
            argsNavi['centerContent']=$(obj).attr("centerContent");
            argsNavi['centerType']=$(obj).attr("centerType");
            
            argsNavi['rightContent']=$(obj).attr("rightContent");
            argsNavi['rigthType']=$(obj).attr("rigthType");
            argsNavi['rightIcon']=$(obj).attr("rightIcon");
            argsNavi['rightPageNavi']=$(obj).attr("rightPageNavi");
            argsNavi['rightPageNaviType']=$(obj).attr("rightPageNaviType");
            $(obj).html(getLeftButtonNaviContent(argsNavi)
                    +getCenterNaviContent(argsNavi)
                    +getRightButtonNaviContent(argsNavi));
        });
    };
    function getLeftButtonNaviContent(args){
        var html='<div class="area-button-navi" ';
        if(args['leftPageNavi']!=null)
            html+="page-navi=\""+args['leftPageNavi']+"\"";
        if(args['leftPageNaviType']!=null)
            html+="page-navi-type=\""+args['leftPageNaviType']+"\"";
        html+='><h1>';
        if(args['leftContent']!=null||args['leftIcon']!=null){
            if(args['leftIcon']!=null)
                html+=getIconNaviButton(args['leftIcon']);
            if(args['leftContent']!=null)
                html+=args['leftContent'];
        }
        html+='</h1></div>';
        return html;
    }
    function getRightButtonNaviContent(args){
        var html='<div class="area-button-navi" ';
        if(args['rightPageNavi']!=null)
            html+="page-navi=\""+args['rightPageNavi']+"\"";
        if(args['rightPageNaviType']!=null)
            html+="page-navi-type=\""+args['rightPageNaviType']+"\"";
        html+='><h1>';
        if(args['rightContent']!=null||args['rightIcon']!=null){
            if(args['rightIcon']!=null)
                html+=getIconNaviButton(args['rightIcon']);
            if(args['rightContent']!=null)
                html+=args['rightContent'];
        }
        html+='</h1></div>';
        return html;
    }
    function getCenterNaviContent(args){
        return args['centerContent']!=null ? '<div class="area-info-navi"><h1>'+args['centerContent']+'</h1></div>':"";
    }
    
    function getIconNaviButton(icon){
        return icon!=null ? "<icon class=\""+icon+"\"></icon>": '';
    }
    Construct();
}
