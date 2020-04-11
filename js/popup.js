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


	//折叠
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

	//星
	let starFlag = 0;
	$("#star").click(function() {
		if (starFlag == 0) {
			$("#star").attr("src", "img/starSelect.png");
			$("#tips").text("已推荐");
			$("#tips").css("display", "block");
			$("#tips").animate({
				height: '32px'
			}, 200);
			setTimeout(function() {
				$("#tips").animate({
					height: '0px'
				}, 200);
			}, 1000);
			starFlag = 1;
		} else {
			$("#star").attr("src", "img/star.png");
			$("#tips").text("已取消");
			$("#tips").css("display", "block");
			$("#tips").animate({
				height: '32px'
			}, 200);
			setTimeout(function() {
				$("#tips").animate({
					height: '0px'
				}, 200);
			}, 1000);
			starFlag = 0;
		};
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
		};
		//判断输入长度
		if ($("#text").val().length == 0 || /^\s+$/.test($("#text").val())) {
			$("#tips").text("内容不能为空").show();
			$("#tips").animate({
				height: '32px'
			}, 200);
			var timer = setTimeout(function() {
				$("#tips").animate({
					height: '0px'
				}, 200);
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
	$("#tab1 li").click(function() {
		let dmImg = $(this).children().prop("tagName");
		if (dmImg == "IMG") {
			$("#shade").show();
			$(this).children().css({
				"position": "fixed",
				"z-index": "100"
			});
			$(this).children().animate({
				width: "100%",
				left: "0",
				top: "0"
			}, 200);
		} else {
			$("#shade").show();
			$(".detail").animate({
				height: '243px'
			}, 200).show();
			$(".detailTop").text($(this).find("p").text());
		}

	})

	//遮罩关闭(阻止子元素继承父元素点击事件)
	$("#shade").click(function(e) {
		if (e.target != this) return;
		else {
			$("#shade").hide();
			$(".detail").css("height", "0")
			$(".dmImg").css({
				"position": "relative",
				"z-index": "-1",
				width: "",
				left: "",
				top: ""
			});
		}

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
