
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/news","pages/home/home","pages/paper/paper"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"糗事百科","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#ADADAD","selectedColor":"#FEE42A","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tabbar/首页%20(1).png","selectedIconPath":"static/tabbar/首页.png","text":"糗事"},{"pagePath":"pages/news/news","iconPath":"static/tabbar/资讯.png","selectedIconPath":"static/tabbar/资讯%20(1).png","text":"动态"},{"pagePath":"pages/paper/paper","iconPath":"static/tabbar/聊天.png","selectedIconPath":"static/tabbar/聊天%20(1).png","text":"小纸条"},{"pagePath":"pages/home/home","iconPath":"static/tabbar/我的.png","selectedIconPath":"static/tabbar/我的%20(1).png","text":"我的"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"appDemo","compilerVersion":"2.6.0","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"uni-app","scrollIndicator":"none","bounce":"none","titleNView":{"searchInput":{"autoFocus":false,"align":"center","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"搜索糗事","disabled":true,"placeholderColor":"#CCCCCC"},"buttons":[{"color":"#FF9619","colorPressed":"#BBBBBB","float":"left","fontSize":"44upx","fontSrc":"/static/fonts/icon.ttf","text":""},{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"44upx","fontSrc":"/static/fonts/icon.ttf","text":""}]}}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/paper/paper","meta":{"isQuit":true,"isTabBar":true},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});