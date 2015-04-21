// 兼容浏览器: 加入事件

function AttachEvent(target, eventName, handler, argsObject) {
    var eventHandler = handler;
    if (argsObject) {
        eventHander = function(e) {
            handler.call(argsObject, e);
        }
    }
    eventName = eventName.replace('on', '');
    if (window.attachEvent) //IE   
        target.attachEvent("on" + eventName, eventHandler);
    else //FF   
        target.addEventListener(eventName, eventHandler, false);
}
// 兼容浏览器: 删除事件

function DetachEvent(target, eventName, handler, argsObject) {
    var eventHandler = handler;
    if (argsObject) {
        eventHander = function(e) {
            handler.call(argsObject, e);
        }
    }
    eventName = eventName.replace('on', '');
    if (window.attachEvent) //IE   
        target.detachEvent("on" + eventName, eventHandler);
    else //FF   
        target.removeEventListener(eventName, eventHandler, false);
}
// 去字符串空格
String.prototype.Trim = function() {
    //return this.replace(/[(^\s+)(\s+$)]/g,"");//會把字符串中間的空白符也去掉    
    //return this.replace(/^\s+|\s+$/g,""); //    
    return this.replace(/^\s+/g, "").replace(/\s+$/g, "");
}