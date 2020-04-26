
var start = document.getElementById('startdefine');
if(start){
    var flag = true;
    console.log('请点击开始可视化');
    start.onclick = function(){
        if(flag){
            var config = {
                sdk_url:'./sensorsdata.full.js',
                name: 'sensors',
                server_url:'https://newsdktest.datasink.sensorsdata.cn/sa?project=weizhangxiang&token=5a394d2405c147ca',
                // server_url: 'http://liuxing2.debugbox.sensorsdata.cn/sa?project=chuqiangsheng',
                // heatmap:{
                //     scroll_notice_map:'not_collect',
                //     // element_selector:'not_use_id',
                // },
                is_track_single_page:true,
                // app_js_bridge:{
                //     white_list:[
                //     'https://newsdktest.datasink.sensorsdata.cn/sa?project=chuqiangsheng&token=5a394d2405c147ca',
                //     'http://10.120.51.215:8106/sa?project=default&token=schemaLimited-0AUNwDG0'],
                // }  
            };
            if(select_auto && select_auto.value){
                switch(select_auto.value){
                    case 'yes':
                        config.heatmap = {};
                        break;
                    case "no":
                        break;
                }
                
            }
            if(select_bridge && select_bridge.value){
                if(select_bridge.value == 'yes'){
                    config.app_js_bridge = {
                        white_list:[
                            'https://newsdktest.datasink.sensorsdata.cn/sa?project=chuqiangsheng&token=5a394d2405c147ca',
                            'http://10.120.51.215:8106/sa?project=default&token=schemaLimited-0AUNwDG0'
                        ]
                        
                    };
                }
            }
            if(select_server && select_server.value){
                if(select_server.value == 'no'){
                    config.server_url='http://test.com';
                    if(select_bridge.value == 'yes'){
                        config.app_js_bridge.white_list=[];
                    }
                }
            }
            if(server_input && server_input.value){
                if(select_bridge.value == 'yes'){
                    config.app_js_bridge.white_list.push(server_input.value);
                }
            }
            
            (function(para) {
                var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script',x = null,y = null;
                if(typeof(w['sensorsDataAnalytic201505']) !== 'undefined') {
                    return false;
                }
                w['sensorsDataAnalytic201505'] = n;//'sensors'
                w[n] = w[n] || function(a) {return function() {(w[n]._q = w[n]._q || []).push([a, arguments]);}};
                var ifs = ['track','quick','register','registerPage','registerOnce','trackSignup', 'trackAbtest', 'setProfile','setOnceProfile','appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify','login','logout','trackLink','clearAllRegister','getAppStatus'];
                for (var i = 0; i < ifs.length; i++) {
                w[n][ifs[i]] = w[n].call(null, ifs[i]);
                }
                if (!w[n]._t) {
                    x = d.createElement(s), y = d.getElementsByTagName(s)[0];
                    x.async = 1;
                    x.src = p;
                    x.setAttribute('charset','UTF-8');
                    w[n].para = para;
                    y.parentNode.insertBefore(x, y);
                }
            })(config);
                
            sensors.quick('autoTrack');
            flag = false;
        }else{
            alert('SDK 重复初始化，请刷新页面重新配置');
        }
       
    };



}else{
    
    (function(para) {
        var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script',x = null,y = null;
        if(typeof(w['sensorsDataAnalytic201505']) !== 'undefined') {
            return false;
        }
        w['sensorsDataAnalytic201505'] = n;//'sensors'
        w[n] = w[n] || function(a) {return function() {(w[n]._q = w[n]._q || []).push([a, arguments]);}};
        var ifs = ['track','quick','register','registerPage','registerOnce','trackSignup', 'trackAbtest', 'setProfile','setOnceProfile','appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify','login','logout','trackLink','clearAllRegister','getAppStatus'];
        for (var i = 0; i < ifs.length; i++) {
        w[n][ifs[i]] = w[n].call(null, ifs[i]);
        }
        if (!w[n]._t) {
            x = d.createElement(s), y = d.getElementsByTagName(s)[0];
            x.async = 1;
            x.src = p;
            x.setAttribute('charset','UTF-8');
            w[n].para = para;
            y.parentNode.insertBefore(x, y);
        }
    })({

        sdk_url:'./sensorsdata.full.js',
        // heatmap_url: './define/heatmap.full.js',
        name: 'sensors',
        is_track_device_id:true,
        source_channel:['bd_vid'],
        source_type:{
            utm:['ls']
        },
        server_url:'https://newsdktest.datasink.sensorsdata.cn/sa?project=weizhangxiang&token=5a394d2405c147ca',
        // server_url: 'http://liuxing2.debugbox.sensorsdata.cn/sa?project=chuqiangsheng',
        heatmap:{
            scroll_notice_map:'not_collect',
            // element_selector:'not_use_id',
        },
        is_track_single_page:true,
        app_js_bridge:{
            white_list:[
            'https://newsdktest.datasink.sensorsdata.cn/sa?project=chuqiangsheng&token=5a394d2405c147ca',
            'http://10.120.51.215:8106/sa?project=default&token=schemaLimited-0AUNwDG0'],
        }
    });
        
        sensors.quick('autoTrack');
}



 
            
            
      