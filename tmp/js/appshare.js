/**
 * AppShare Transformation
 * By Julian
 * 2016年04月29日10:34:24
 */

;
function AppShare(url) {
    
    var infos = {
        'https://segmentfault.com':'sf.gg',
        'https://baidu.com':'baidu.com',
        'http://panli.com':'pl.com'
    }
    
    if(infos[url]){
        return infos[url]
    }else{  
        return false;
    }
    
}