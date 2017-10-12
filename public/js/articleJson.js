$(function(){
	/*注：文章列表新增一篇文章及在articleObj对象头部加上一条数据即可*/
	var articleObj=[
					{"title":"99%的想从事金融行业的人在思考成功，只有1%的人做了这件事","time":"2017年10月10日","cont":"当全民学习的时代已经到来，你还认为三天一次的减肥，一周一次的鸡汤会让你成功吗？当巴菲特成为股神，却依然能坚持每天读书两小时，而你能做到静下心来完整的读完一本书吗？让学习成为一种习惯，你的优势自然也就显现出来。"},
					{"title":"市场先生与灰姑娘的故事","time":"2017年10月4日","cont":"首先我们分析的伟大投资人就是巴菲特，下面小编就为大家摘选一些课程中讲到的巴菲特在给股东的信中的部分名言，看看这些名言的背后都蕴含着那些投资哲学吧！"},
					{"title":"巴菲特投资的核心竞争力有哪些？","time":"2017年9月30日","cont":"巴菲特是人类历史上最伟大的投资家，他靠投资股票，身价已经达到了世界前三，与比尔·盖茨、印度钢铁巨头拉克米·米塔尔、电信大亨卡洛斯·斯利姆·埃卢轮流坐庄，一直是世界上最有钱的人。"},
					{"title":"被称为“传奇”的老虎基金有哪些投资策略？","time":"2017年9月28日","cont":"在职业说的课程中，也会单独拿出一周来分析老虎基金。今天，小编想先为大分享一些老虎基金的投资策略以及其成功的总结，希望能对大家在投资策略的思考上有所帮助。"},
					{"title":"在纽约花旗银行工作，你需要具备哪些能力？","time":"2017年9月26日","cont":"在美国就业，目前最热门的几个职业方向是科技方向、咨询公司还有金融方向。要在这些行业工作，你都需要什么样的能力呢？"},
					{"title":"十分钟告诉你所有需要的估值方法","time":"2017年9月24日","cont":"阿里巴巴集团可以说是中国上市公司中最复杂的企业之一，其生态链非常的庞大，那如何为阿里巴巴这样的公司估值呢？"},
					{"title":"那些在报表中看不到的杠杆和风险——从菜鸟物流讲起","time":"2017年9月22日","cont":"调研公司的时候，我们除了要考虑行业、赛道、竞争等因素，还不能忽略那些在各种报表中看不到的杠杆和风险。"},
					{"title":"唯品会、探探、快手的投资人是如何调研公司的？","time":"2017年9月21日","cont":"在职业说第三讲课程中，我们邀请了风险投资公司DCM的董事合伙人曾振宇先生作为我们的嘉宾，为大家分享如何进行行业调研以及对不同行业的投资分析等问题"},
					{"title":"为什么阿里巴巴是大数据公司？","time":"2017年9月18日","cont":"实际上，阿里巴巴现在已经不仅仅是一个电商公司，它更是一个数据公司。为什么？"},
					{"title":"解读阿里巴巴的前世今生","time":"2017年9月17日","cont":"今年是阿里巴巴成立的18周年，结合这个热点，今天要给大家总结分析一下阿里巴巴的成长历史。"},
					{"title":"这支基金用一年的时间取得了70%的收益，是这样做的","time":"2017年9月15日","cont":"投资理财是青年精英普遍关注的话题，如何躲避风险，获得更高的收益，这里面有诸多学问。在职业说的课程中，我们邀请到了私募基金——秃鹫一期的经理人：王代新，作为我们的嘉宾，跟我们分享和交流投资的观点。"},
					{"title":"听说，在职业说你能学到这些......","time":"2017年9月13日","cont":"金秋九月，职业说的课程也已经拉开了帷幕。究竟职业说在讲什么？相信这是很多人都在关心的问题，今天小编就带领大家走进职业说的课堂，看看我们的导师究竟讲了什么吧~"},
					{"title":"从滴滴看TAM估值方法","time":"2017年9月10日","cont":"TAM在估值中是非常重要的。TAM的英文全称为“Total Addressable Market”，翻译成汉语就是“潜在市场范围”。"},
					{"title":"共享单车受限，滴滴还能走多远？","time":"2017年9月9日","cont":"昨天北京市政府出台新政：暂停共享单车新增投放。很多人在看到这个消息的时候会思考：“共享经济到底能走多远？共享经济与政府到底是怎样的关系？”"},
					{"title":"伟大的公司是如何套利的？","time":"2017年9月7日","cont":"投资实际上就是抓住一个套利的市场，而伟大的公司都有持续套利的能力。"},
					{"title":"投资中最不该做的事之定势思维","time":"2017年9月6日","cont":"很多时候做投资和做交易的人士，都有一个“障”，那就是自己思维的牢笼。而最伟大的投资人或者最伟大的企业家，他们的思维往往都是十分灵活的。"},
					{"title":"为什么不完美的公司是最好的投资？","time":"2017年9月1日","cont":"今天要跟大家分享的是在投资中一个特别重要的经验就是“不要买那些所谓‘完美’的公司，同样的也不要因为一个公司有问题就不买。”"},
					{"title":"职业说经典书籍赏析（四）：《一个投机者的告白》10-13章","time":"2017年8月31日","cont":"今天继续为大家分享本书10-13章读书笔记，也是本书的最后一次分享，赶快看起来吧！"},
					{"title":"用碎片化时间高效学习，向严肃学习者致敬 | 职业说首期开班在即！","time":"2017年8月30日","cont":"投资是一个自我修炼的过程，如同减肥健身一样，需要持续锻炼。我们只招收愿意付出努力，希望做前1%的优秀金融人才的学员。"},
					{"title":"职业说首期线下交流会回顾|生活中的趋势对投资有什么启示？","time":"2017年8月29日","cont":"8月26日下午，职业说举行了第一场线下交流会，由职业说的创始人许轶老师和姜山先生共同主持。"},
					{"title":"机会还是陷阱？暴跌之后的中概股","time":"2017年8月26日","cont":"本周三两只中概股季报后暴跌，是买入的机会还是一蹶不振的开始？ 如何看未来？"},
					{"title":"职业说经典书籍赏析（三）：《一个投机者的告白》6-9章","time":"2017年8月24日","cont":"今天继续为大家分享本书6-9章读书笔记，赶快看起来吧！"},
					{"title":"职业说经典书籍赏析（二）：《一个投机者的告白》3-5章","time":"2017年8月23日","cont":"在今天的推文中，我们将继续分享这本经典著作的3~5章内容摘要，希望大家在读书的时候带着问题思考，看这位一生富裕，优雅，从容的老先生是如何在纷繁多变的金钱游戏中稳操胜券的。"},
					{"title":"职业说线下交流会|与名师面对面交流，提前感受“精英式”学习氛围！","time":"2017年8月21日","cont":"为了让大家在正式开课之前更好的了解彼此，增强network并交流想法，职业说在本周六将举办预热线下交流会"},
					{"title":"职业说经典书籍赏析（一）：《一个投机者的告白》1-2章","time":"2017年8月19日","cont":"对于初学者来说，格雷厄姆的《证券分析》实在太枯燥了。里面说的债券知识很多人并不能理解，书里提及的几只股票很多现在也相对过时了。另外我们考虑到刚入门的金融书籍不宜太枯燥。而《一个投机者的告白》是一本能一口气读完的书，里面没有枯燥的技术分析，整本书简单易读，甚至可以说是轻松幽默。作者安德烈·科斯托拉尼在书中直言不讳说自己是一个“投机者”。"},
					{"title":"职业说首期课程报名火热，限时两人一起报名95折优惠！","time":"2017年8月17日","cont":"职业说第一期邀请函发出后，第一时间我们收到了很多同学的报名请求。感谢大家的踊跃加入！"},
					{"title":"致未来精英的一封信——来自职业说的邀请函","time":"2017年8月9日","cont":"职业说是一个为精英开设的，高端职业知识线上学习平台。首期课程将围绕金融展开。从船运公司的兴衰到外汇知识，从人工智能到大数据，职业说的导师培养学生解决问题的思维模式，在行业大咖的解惑与帮助下，少走弯路，登上职业的顶峰。"}
					]
	/*注：文章列表新增一篇文章及在urlArr数组头部加上该文章的微信链接*/
	var urlArr=[
		"http://mp.weixin.qq.com/s/cjVKoKEKicsxTRnm-yRqvQ",
		"http://mp.weixin.qq.com/s/NbU4TiZ80_RW7BAVcArmEA",
		"http://mp.weixin.qq.com/s/HVU6hMXjpVvcTtLb1lWN6w",
		"http://mp.weixin.qq.com/s/ZUBCCBfzYkkF4ADf2yt1ZQ",
		"http://mp.weixin.qq.com/s/iRGvZ81AgCU8hZOti939BQ",
		"http://mp.weixin.qq.com/s/NcbPfmwmB9dhRxd3WizXMg",
		"http://mp.weixin.qq.com/s/Ui96iodgSFWe6ne-p48o5A",
		"http://mp.weixin.qq.com/s/6dwdilMw7xI-nij4ikbHAw",
		"https://mp.weixin.qq.com/s/pp0Mlmx5QlofoNw-XV3MFA",
		"https://mp.weixin.qq.com/s/3aV5sp3GJzvc1_GT-ot48Q",
		"http://mp.weixin.qq.com/s/j0A3n86KlJ2DRSgUfrrcWQ",
		"http://mp.weixin.qq.com/s/7r1hZrSjiHptcwhXkbLqKA",
		"http://mp.weixin.qq.com/s/rwRvQzzeFsZktKuI81ZZ2A",
		"http://mp.weixin.qq.com/s/NhgV80TYMGpauGTfnxNygw",
		"http://mp.weixin.qq.com/s/8O7rbGZB4Bo3TnaCZc4H9w",
		"http://mp.weixin.qq.com/s/myGbCWuqe0mSN-mra-_2AQ",
		"https://mp.weixin.qq.com/s/a5lcV9a-SGz2ghYylqdjbw",
		"http://mp.weixin.qq.com/s/reJ1q8GEFgNACBX70xdRiw",
		"http://mp.weixin.qq.com/s/Ga7T3Xr-VQ77iqKcduxy8w",
		"http://mp.weixin.qq.com/s/LdEYeBCfgPe6kbm0Y5b98A",
		"http://mp.weixin.qq.com/s/e0tLHXUYGYvrHyza1NygOA",
		"http://mp.weixin.qq.com/s/tQOIqFcuYLblSEC9S_Mx5A",
		"http://mp.weixin.qq.com/s/DiDIwKE83aNdf-xSAWhJsw",
		"http://mp.weixin.qq.com/s/bOE5vHsEP5FD_N_zHnsgZw",
		"http://mp.weixin.qq.com/s/thL4TOHjaTU0x5okYVBrIg",
		"http://mp.weixin.qq.com/s/WqNmb7J45rbL0siPQ584Kw",
		"http://mp.weixin.qq.com/s/KkQhVKlEi0y2-QzMhFf5MQ"
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
		var listNum=($(this).index())+(parseInt($(".displayPage").html()-1)*4)
		console.log(urlArr[listNum])
		//文章列表点击进去进入相应的url(注：每篇文章在articleObj与urlArr的位置应该一样)
		window.open(""+urlArr[listNum]+"");
	})
	},1000)
})
