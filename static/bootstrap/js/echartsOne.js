var myChart;
var tuChart;
function echartStr(names,brower){
    // 基于准备好的dom，初始化echarts实例
    if (myChart != null && myChart != "" && myChart != undefined) {  
        myChart.dispose();  
    } 
    myChart = echarts.init(document.getElementById('main'));

            // 指定图表的配置项和数据
            var option = {
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: names
                },
                color: ['#0278E7', '#00C6FF', '#F19610', '#8A00E1', '#34D160'],
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '80%',
                        center: ['50%', '50%'],
                        data: brower,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        label: {
                        normal: {
                            show: false,
                        }
                    },
                    }
                ]
            };
    // 使用刚指定的配置项和数据显示饼图。
    myChart.setOption(option);
    
};

function bingtu(that){
    var brower = [],
        names = [];
    let usedStorage = 0;
    var aaa = $(that).data('aaa');
    console.log("aaa",aaa)
    $.ajax({
        type: 'get',
        url: 'http://47.100.10.123:10080/local/get_local_machine',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        data:'',
        success: function (json) {
          
          var i=0;
          let proven=0;
          var res =0;
          for(i; json.data.length>i;i++){
              
            proven=json.data[i].proven
            res = proven.indexOf("G")
            if ( res >= 1 ){
                usedStorage += parseFloat(proven)/1024
            } else{
                usedStorage += parseFloat(proven)
            }             
          }    
          //console.log("usedStorage",usedStorage)         
          usedStorage=usedStorage      
        }
    })
    $.ajax({
        type: 'get',
        url: 'http://47.100.10.123:10080/lotus/lotus_message',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        data:'',
        success: function (json) {
            var i = 0;
            var temp = 0;
            temp = json.networkStorage;
            //console.log("temp", temp);  
            names.push(
                {
                    name:'全网算力'
                },
                {
                    name:'耘存算力'
                }
            );    //挨个取出类别并填入类别数组 
            brower.push(
                {
                    name:'全网算力',
                    value: temp
                },{
                    name:'耘存算力',
                    value: usedStorage
                }
            );  
             echartStr1(names,brower);
            },
            error: function (errorMsg) {
                //请求失败时执行该函数
                alert("图表请求数据失败!");
            }
    });
}


function echartStr1(names,brower){
    if (tuChart != null && tuChart != "" && tuChart != undefined) {  
        tuChart.dispose();  
    } 
    tuChart = echarts.init(document.getElementById('bingtu'));
    
            // 指定图表的配置项和数据
            var option1 = {
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: names
                },
                color: ['#0278E7', '#00C6FF', '#F19610', '#8A00E1', '#34D160'],
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '80%',
                        center: ['50%', '50%'],
                        data: brower,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        label: {
                        normal: {
                            show: false,
                        }
                    },
                    }
                ]
            };
    // 使用刚指定的配置项和数据显示饼图。
    tuChart.setOption(option1);
    
};

//第二饼图数据
function qxfl(that){
    var brower = [],
    
        names = [];
    var index = $(that).data('index');
    $.ajax({
        type: 'get',
        url: 'http://47.100.10.123:10080/user/get_allmachine_on',//请求数据的地址
        //url: 'js/echartOne.json',
        dataType: "json",        //返回数据形式为json
        data:'',
        success: function (json) {
            var i=0;
            let localFree=0;
            let remoteFree=0;
            let localTotal=0;
            let remoteTotal=0;
            
            for (i; json.data.length>i; i++){
                //localFree
                localFree= localFree+json.data[i].localFree;   
                //localTotal
                localTotal=localTotal+json.data[i].localTotal;  
                //remoteTotal
                remoteTotal=remoteTotal+json.data[i].remoteTotal;   
                //remoteFree
                remoteFree=remoteFree+json.data[i].remoteFree;   
            }
            // console.log("localFree",localFree);  
            // console.log("localTotal",localTotal); 
            // console.log("remoteTotal",remoteTotal);
            // console.log("remoteFree",remoteFree);
            //本地机器空间数量
            this.localFree=[
                {
                value: localFree
                }
            ]
            //远程机器空闲数量
            this.remoteFree=[
                {
                value: remoteFree
                }
            ]
            //远程机器数量
            this.remoteTotal=[
                {
                value: remoteTotal
                }
            ]
            //本地机器数量
            this.localTotal=[
                {
                value: localTotal
                }
            ]  
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            //'result.list' + index 请求json的其中一个
            //eval() 将对应的字符串解析成JS代码并运行
            // $.each(json.data, function (index){
                //而这里是第二章饼图的这里多了三个names name:'空闲中'  name:'工作中' name:'离线'
                names.push(
                    {
                        name:'空闲中'
                    },
                    {
                        name:'工作中'
                    },
                    {
                        name:'离线'
                    }
                );    //挨个取出类别并填入类别数组 
                brower.push(
                    {
                        name:'空闲中',
                        value: localFree+remoteFree
                    },
                    {
                        name: '工作中',
                        value: localTotal+remoteTotal-localFree+remoteFree
                        
                    },
                    {
                        value: 10,
                        name: '离线'
                    }
                );
            // });
             echartStr(names,brower);
            },
            error: function (errorMsg) {
                //请求失败时执行该函数
                alert("图表请求数据失败!");
            }
    });
}
//	//供方责任退货数据
//	function gfzrth(){
//		brower = [];
//		names = [];
//		$.ajax({
//	        type: 'get',
//	        url: 'js/echartOne.json',//请求数据的地址
//	        dataType: "json",        //返回数据形式为json
//	        success: function (result) {
//	            //请求成功时执行该函数内容，result即为服务器返回的json对象
//	            $.each(result.list2, function (index,item) {
//	                names.push(item.name);    //挨个取出类别并填入类别数组 
//	                brower.push({
//	                    name: item.name,
//	                    value: item.value
//	                });
//	            });
//	            myChart.setOption({        //加载数据图表                
//	                legend: {                    
//	                    data: names
//	                },
//	                series: [{                    
//	                    data: brower
//	                }]
//	            });
//	        },
//	        error: function (errorMsg) {
//	            //请求失败时执行该函数
//	            alert("图表请求数据失败!");
//	        }
//	    });
//	}


