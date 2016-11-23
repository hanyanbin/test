var chart=document.getElementById('chart');
var mychart=echarts.init(chart);  //创建一个 ECharts 实例

var nameArr=[];    //获取名称的数组
var dataBrr=[];    //获取数据的数组
function getJson(){
	$.ajax({
        async : false, //这句必须加
        method : 'post',
        url : './data.json',
        dataType : "json",
        success : function(data) {
	        for( var i=0;i<data.length;i++){    
				nameArr.push(data[i].name);
				dataBrr.push(data[i].dataA);
			}
        }
    })
    return dataBrr;
    return nameArr;
}
getJson();

var option={
	title:{
		text:'数据采集'
	},
	xAxis:[{
		type:'category',
		data: ['周一','周二','周三','周四','周五','周六','周日']
	}],
	yAxis:[{
		type:'value'		
	}],
	series:[
		{
            name:"tex",
            type:'bar',
            data:dataBrr[0]
        },
        {
            name:"tex",
            type:'bar',
            data:dataBrr[1]
        },
        {
            name:"tex",
            type:'bar',
            data:dataBrr[2]
        },
        {
            name:"tex",
            type:'bar',
            data:dataBrr[3]
        },
        {
            name:"tex",
            type:'bar',
            data:dataBrr[4]
        },
        {
            name:"tex",
            type:'bar',
            data:dataBrr[5]
        },
        {
            name:"tex",
            type:'bar',
            data:dataBrr[6]
        }
	]		 
}
mychart.setOption(option);

