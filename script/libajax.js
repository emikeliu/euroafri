function ajax(config) {
    function __isundefined(obj)
    {
        return typeof(obj)=="undefined";
    }
    var ajax = new XMLHttpRequest();
    if (config.method=='get') {
        if (config.data) {
            config.url+='?';
            config.url+=config.data;
        }else{

        }
        ajax.open(config.method,config.url);
        ajax.send();
    }else{
        ajax.open(config.method,config.url);
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        if (config.data) {
            ajax.send(config.data);
        }else{
            ajax.send();
        }
    }
    ajax.onreadystatechange = function () {
        if (ajax.readyState==4&&ajax.status==200) {
            config.success(ajax.responseText);
            
        }
    }

}