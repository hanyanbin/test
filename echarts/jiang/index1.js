  var chart = document.getElementById('chart');  
                var mycharts = echarts.init(chart);  
      
                mycharts.setOption({  
                    title: {  
                        text: '异步数据加载示例'  
                    },  
                    tooltip : {
								        trigger: 'axis',
								        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
								            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
								        }
								    },
								     grid: {
								        left: '10%',
								        right: '10%',
								        bottom: '3%',
								        containLabel: true
								    },
                     legend: {
								        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
								    }, 
                     xAxis : [
								        {
								            type : 'category',
								            data : ['周一','周二','周三','周四','周五','周六','周日']
								        }
								    ], 
                    yAxis:[
				        {
				            type : 'value'
				        }
				    ],
                    series: [{  
                        name: '销量',  
                        type: 'bar',  
                        data: [],
                         markPoint: {
						                data: [
						                    {type: 'max', name: '最大值'},
						                    {type: 'min', name: '最小值'}
						                ]
						            },
                    }]  
                });  
                  
                $.get('data.json').done(function (data) {  
                      
                   console.log(data);  
                   //  console.log(data.length);  
                   var name=[];
                   var dataBrr=[];                 
                    for( var i=0;i<data.length;i++){                    	
                    	 name.push(data[i].name);
                    	 dataBrr.push(data[i].dataA);
                    }   
                     console.log(dataBrr); 
                    // 填入数据  
                    mycharts.setOption({                         
                        series: [
                        	{
					            name:name[0],
					            type:'bar',
					            data:dataBrr[0],
					            
					        },
					        {
					           	name:name[1],	
					            type:'bar',
					            data:dataBrr[1]
					        },
					        {
					            name:name[2],
					            type:'bar',
					            
					            data:dataBrr[2]
					        },
					        {
					            name:name[3],
					            type:'bar',
					           
					            data:dataBrr[3]
					        },
					        {
					            name:name[4],
					            type:'bar',
					            
					            data:dataBrr[4],
					            markLine:{
					            		lineStyle:{
					            				normal:{
					            					type:'dashad'
					            				}
					            		},
					            		 data : [
					                    [{type : 'min'}, {type : 'max'}]
					                ]
					            }
					        },
					        {
					            name:name[5],
					            type:'line',
					            
					            data:dataBrr[5]
					        },
					        {
					            name:name[6],
					            type:'line',
					          
					            data:dataBrr[6]
					        }
                        ]
                    });  
                  
                });  
  
 
  