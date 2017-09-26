$(function(){
	/*注：文章列表新增一篇文章及在articleObj对象末尾加上一条数据即可*/
	var articleObj=[
					{"title":"为什么阿里巴巴是大数据公司01？","time":"2017年7月20日","cont":"实际上，阿里巴巴现在已经不仅仅是一个电商公司，它更是一个数据公司。为什么？"},
					{"title":"为什么阿里巴巴是大数据公司02？","time":"2017年7月20日","cont":"实际上，阿里巴巴现在已经不仅仅是一个电商公司，它更是一个数据公司。为什么？"},
					{"title":"为什么阿里巴巴是大数据公司03？","time":"2017年7月20日","cont":"实际上，阿里巴巴现在已经不仅仅是一个电商公司，它更是一个数据公司。为什么？"},
					{"title":"为什么阿里巴巴是大数据公司04？","time":"2017年7月20日","cont":"实际上，阿里巴巴现在已经不仅仅是一个电商公司，它更是一个数据公司。为什么？"},
					{"title":"为什么阿里巴巴是大数据公司05？","time":"2017年7月20日","cont":"实际上，阿里巴巴现在已经不仅仅是一个电商公司，它更是一个数据公司。为什么？"},
					{"title":"为什么阿里巴巴是大数据公司06？","time":"2017年7月20日","cont":"实际上，阿里巴巴现在已经不仅仅是一个电商公司，它更是一个数据公司。为什么？"},
					{"title":"为什么阿里巴巴是大数据公司07？","time":"2017年7月20日","cont":"实际上，阿里巴巴现在已经不仅仅是一个电商公司，它更是一个数据公司。为什么？"},
					{"title":"为什么阿里巴巴是大数据公司08？","time":"2017年7月20日","cont":"实际上，阿里巴巴现在已经不仅仅是一个电商公司，它更是一个数据公司。为什么？"},
					{"title":"为什么阿里巴巴是大数据公司09？","time":"2017年7月20日","cont":"实际上，阿里巴巴现在已经不仅仅是一个电商公司，它更是一个数据公司。为什么？"},
					{"title":"为什么阿里巴巴是大数据公司10？","time":"2017年7月20日","cont":"实际上，阿里巴巴现在已经不仅仅是一个电商公司，它更是一个数据公司。为什么？"},
					{"title":"为什么阿里巴巴是大数据公司11？","time":"2017年7月20日","cont":"实际上，阿里巴巴现在已经不仅仅是一个电商公司，它更是一个数据公司。为什么？"},
					{"title":"为什么阿里巴巴是大数据公司12？","time":"2017年7月20日","cont":"实际上，阿里巴巴现在已经不仅仅是一个电商公司，它更是一个数据公司。为什么？"},
					{"title":"为什么阿里巴巴是大数据公司13？","time":"2017年7月20日","cont":"实际上，阿里巴巴现在已经不仅仅是一个电商公司，它更是一个数据公司。为什么？"},
					{"title":"为什么阿里巴巴是大数据公司14？","time":"2017年7月20日","cont":"实际上，阿里巴巴现在已经不仅仅是一个电商公司，它更是一个数据公司。为什么？"},
					{"title":"这支基金用一年的时间取得了70%的收益，是这样做的","time":"2017年7月20日","cont":"投资理财是青年精英普遍关注的话题，如何躲避风险，获得更高的收益，这里面有诸多学问。在职业说的课程中，我们邀请到了私募基金——秃鹫一期的经理人如何躲避风险，获得更高的收益，这里面有诸多学问。在职业说的课程中，我们邀请到了私募基金——秃鹫一期的经理人：王代新，作为我们的嘉宾，跟我们分享和交流投资的观点"}
					]
	var pageNum=Math.ceil($(articleObj).length/4);
	var displayNum=parseInt($(".displayPage").html());
	$(".totalPages").html(pageNum);
	function page(a,b){
		$(".titleList").html("")
		$(articleObj).each(function(index,ele){
		if(a<=index&&index<b){
			$(".titleList").append('<div class="col-xs-12 col-md-12 listItem"><div class="row">'+
			'<b class="col-md-10 col-sm-9 col-xs-12">'+ele.title+'</b>'+
			'<span class="col-md-2 col-sm-3 col-xs-12">'+ele.time+'</span></div>'+
			'<div lass="row"><p class="col-md-10 col-sm-12 col-xs-12>">'+ele.cont+'</p><span class="col-md-2 col-sm-12 col-xs-12"></span></div></div>')
		}
		
	})
	}
	page(0,4)
	//首页点击
	$(".firstPage").click(function(){
		page(0,4);
		displayNum=1;
		$(".displayPage").html(1);
	})
	//尾页点击
	$(".lastPage").click(function(){
		$(".displayPage").html(pageNum);
		displayNum=pageNum;
		var a=(pageNum-1)*4;
		var b=pageNum*4;
		page(a,b)
	})
	//向左箭头点击
	$(".leftBtn").click(function(){
		if(displayNum>1){
			displayNum--;
			$(".displayPage").html(displayNum);
			var a=(displayNum-1)*4;
			var b=displayNum*4;
			page(a,b)
		}else{
			return
		}
		
	})
	//向右箭头点击
	$(".rightBtn").click(function(){
		if(displayNum<pageNum){
			displayNum++;
			$(".displayPage").html(displayNum);
			var a=(displayNum-1)*4;
			var b=displayNum*4;
			page(a,b)
		}else{
			return
		}
	})
	//点击文章列表进入相应列表链接
	setInterval(function(){
		$(".titleList .listItem").each(function(){
			var strL=$(this).find("p").html().length;
			if(strL>130){
				var str=$(this).find("p").html().substr(0,130)+"......"
				$(this).find("p").html(str)
			}
		})
		$(".titleList .listItem").click(function(){
		var listNum=($(this).index()+1)+(parseInt($(".displayPage").html()-1)*4)
		console.log(listNum)
		//文章列表页点进去子页面文章详情页面命名应该为articleDetails加上该文章在列表页属于第几条数（例：articleDetails1）
		window.location.href="articleDetails"+listNum+""
	})
	},1000)
})
