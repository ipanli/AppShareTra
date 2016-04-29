/**
 * AppShare Transformation
 * By Julian
 * 2016年04月29日10:34:24
 */

;
function AppShareTra(url) {
    
    var infos = {
        'https://segmentfault.com/':'sf.gg',
        'https://baidu.com/':'baidu',
        'https://panli.com/':'pl'
    }
    
    if(infos[url]){
        console.log(infos[url]);
    }else{
        console.log('未找到');
    }
    
}