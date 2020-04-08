$(function() {



	// //右键禁用
	// document.oncontextmenu = function(){
	//     event.returnValue = false;
	// }
	
	
	/* //判断网站是否在白名单
	for (let i = 0; i < sjpdUrl.length; i++) {
		chrome.tabs.query({
			active: true,
			currentWindow: true,
		}, function(tabs) {
			$("#url").text(tabs[0].url).attr("title",tabs[0].url);
			if (tabs[0].url.includes(sjpdUrl[i])) { //includes判断数组是否包含一个指定的值或者用tabs[0].url.indexOf("baidu.com")>0
				console.log(1);
				$(".zhu").show();
				$(".popup-stop").hide();
				return;
			};
			$(".webList").val(tabs[0].url);
		});
	};
	
	//发送申请
	$("#open").click(function() {
		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, function(tabs) {
			console.log(tabs[0].url);
		});
	})
	
	// console.log(/^https?:\/\/\w+\.\w+.\w+/.test(url));
	$("#data3").click(function() {

	}) */
	
	
	
	let foldFlag = 0;
	$("#fold").click(function() {
		if (foldFlag == 0) {
			$(".bar1").animate({
				top: '0px'
			}, 200);
			$("#tab1").animate({
				top: '124px'
			}, 200);
			foldFlag = 1;
		} else {
			$(".bar1").animate({
				top: '-124px'
			}, 200);
			$("#tab1").animate({
				top: '0px'
			}, 200);
			foldFlag = 0;
		}

	})

	let starFlag = 0;
	$("#star").click(function() {
		if (starFlag == 0) {
			$("#star").attr("src", "img/starSelect.png");
			$("#starTips").show();
			$("#starTips").animate({
				top: '160px'
			}, function() {
				$("#starTips").hide();
			});
			$("#starTips").animate({
				top: "200px"
			}, 1);
			starFlag = 1;
		} else {
			$("#star").attr("src", "img/star.png");
			$("#starTips").text("已取消").show();
			$("#starTips").animate({
				top: '160px'
			}, function() {
				$("#starTips").text("已推荐").hide();
			});
			$("#starTips").animate({
				top: "200px"
			}, 1);
			starFlag = 0;
		}
	})

	//dock栏头像
	$("#bar").attr("src", $("#tx img").attr("src"));
	//

	//输入框获取焦点
	$("#text").focus(function() {
		if ($("#text").val() == "输入内容") {
			$("#text").val("");
		}
		$("#text").css({
			"line-height": "16px",
			"padding": "16px",
			"text-align": "start",
			"font-size": "12px"
		})
	})


	//创建时间
	var time = new Date();
	//弹幕发射
	$("#send").click(function() {
		if ($("#text").val() == "输入内容") {
			$("#text").val("");
		}
		//判断输入长度
		if ($("#text").val().length == 0 || /^\s+$/.test($("#text").val())) {
			$("#tips").css("display", "block");
			setTimeout(function() {
				$("#tips").css("display", "none");
			}, 1000);
			return;
		}
		//弹幕设置面板隐藏
		$(".dmset-show").css("display", "none");
		//弹幕数量统计显示
		$("#dn-num").fadeIn();
		//创建弹幕&设置弹幕样式
		var dmLi = $("<li></li>").attr("class", "dmLi");
		var dmTop = $("<div></div>").attr("class", "dmTop");
		dmLi.append(dmTop);
		if (/^https?:\/\/\w+\.\w+.\w+/.test($("#text").val())) {
			var dmUrl = $("<a></a>").attr("class", "dmUrl").attr("href", $("#text").val()).text("进入链接");
			dmTop.append(dmUrl);
		} else {
			var dmText = $("<p></p>").attr("class", "dmText").text($("#text").val());
			dmTop.append(dmText);
		}
		//把弹幕放进ul
		$("#tab1").append(dmLi);
		//滚轮保持底部
		$("ul").scrollTop($("ul")[0].scrollHeight);
		//弹幕数量统计
		$("#dmNum").text("留言数" + " " + $("#tab1 li").length);
		$("#text").val("");

		$(".dmRight1 img").click(function() {
			console.log("举报");
		});
		
		
	});
	
	
	
	//弹幕详细内容
	$("#tab1 li").click(function(){
		$("#shade").show();
		$(".detailTop").text($(this).find("p").text());
	})
	
	//遮罩关闭
	$("#shade").click(function(){
		$("#shade").hide();
	})

	//tab切换
	$(".input-center div").click(function() {
		$(this).css("background-color", "#333333");
		$(this).siblings().css("background-color", "#242424");
	})



	//折叠部分
	let flag = 0;
	$("#oneself").click(function() {
		if (flag == 0) {
			$(".my").slideDown(200);
			$(".input-top").hide();
			flag = 1;
		} else {
			$(".my").slideUp(200, function() {
				$(".input-top").show();
			});
			flag = 0;
		}
	});


});
