ThemeManager.loadThemes=function(){
    this.install("check-box","js");
    this.install("check-box","css");
    this.install("list","js");
    this.install("list","css");
    this.install("navi","js");
    this.install("navi","css");
    this.install("search-box","js");
    this.install("search-box","css");
    this.install("switch-tap","js");
    this.install("switch-tap","css");
    this.install("layout","css");
};
ThemeManager.apply=function(){  
    new switchTap();
    new searchBox();
    new checkBox();
    new navi();
    new list();
};
