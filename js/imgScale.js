(function($){
	function bindFunc(opt){
		this.$mod = $(opt.mod);	
		this.className = opt.className;	
		this.scale = opt.scale;
		this.width = $("." + opt.className).innerWidth();//页面DIV宽度
		this.height = $("." + opt.className).innerHeight();//页面DIV高度
		this.divWidth = opt.divWidth;//放大框宽度
		this.divHeight = opt.divHeight;//放大框高度
		this.position = opt.position;
		this.init();
	}
	bindFunc.prototype = {
		init: function(){
			var self = this;
			self.bindEvents();
		},
		bindEvents: function(){
			var self = this;
			self.$mod.find("." + self.className).mouseover(function(e) {
				var imgObj = $(this);
				var obj = e;
				var div = document.createElement("div");
				div.className = "img-hover-scale";
				var img = document.createElement("img");
				img.src = $(imgObj).attr("src");
				img.className = "imgScale";
				var positionData = self.postionDefine(imgObj);
				$(div).css({
					"left": positionData.left + "px",
					"top": positionData.top + "px",
					"position": "absolute",
					"width":  self.divWidth + "px",
					"height": self.divHeight + "px",
					"z-index": "999999",
					"overflow": "hidden"
				})
				$("body").append(div);
				$(div).append(img);

				self.dealPosition({"imgObj": imgObj, "obj":obj});

			}).mouseout(function(){
				$(".img-hover-scale").remove();
			}).mousemove(function(e){
				var obj = e;
				var imgObj = $(this);
				self.dealPosition({"imgObj": imgObj, "obj":obj});
			})	
		},
		dealPosition: function(data){
			var self = this;
			var imgObj = data.imgObj;
			var left = data.obj.clientX;
			var top = data.obj.clientY;
			left = left - $(imgObj).offset().left;
			top = top - $(imgObj).offset().top;
			var imgFactWidth = $(imgObj).width();//图片本身宽度
		    var imgFactHeight = $(imgObj).height();//图片本身高度
		    var widthRatio = left/imgFactWidth;//点在页面的比例
		    var heightRatio = top/imgFactHeight;

			var gapWidth = imgFactWidth*(self.scale)-self.divWidth;//图片尺寸的宽度差
			var gapHeight = imgFactHeight*(self.scale)-self.divHeight;//图片尺寸的高度差
			var scaleWidth = imgFactWidth*(self.scale);
			var scaleHeight = imgFactHeight*(self.scale);

			var imgLeft = scaleWidth*widthRatio > self.divWidth/2 ? (scaleWidth*(1-widthRatio) > self.divWidth/2 ? scaleWidth*widthRatio - self.divWidth/2 : scaleWidth - self.divWidth) : 0;
			var imgTop = scaleHeight*heightRatio > self.divHeight/2 ? (scaleHeight*(1-heightRatio) > self.divHeight/2 ? (scaleHeight*heightRatio -self.divHeight/2) : scaleHeight-self.divHeight) : 0;
			$(".imgScale").css({
				"width": imgFactWidth*(self.scale) + "px",
				"height": imgFactHeight*(self.scale) + "px",
				"position":"absolute",
				"left": -imgLeft + "px",
				"top": -imgTop + "px"
			}) 
		},
		postionDefine: function(obj){
			var self = this;
			var position = {};
			switch (self.position)
			{
				case "top":
					position.left = $(obj).offset().left;
					position.top = $(obj).offset().top - $(obj).innerHeight();
					break;
				case "left":
					position.left = $(obj).offset().left - $(obj).innerWidth();
					position.top = $(obj).offset().top;
					break;
				case "right":
					position.left = $(obj).offset().left + $(obj).innerWidth();
					position.top = $(obj).offset().top;
					break;
				case "bottom":
					position.left = $(obj).offset().left;
					position.top = $(obj).offset().top + $(obj).innerHeight();
					break;
			}
			return position;

		}
	};
	function imgZoom(opts,mod){
		this.className = opts.className;
		this.$mod = $(mod);
		this.scale = opts.scale;
		this.divWidth = opts.divWidth;
		this.divHeight = opts.divHeight;
		this.position = opts.position;
		this.init(opts);
	}

	imgZoom.prototype = {
		init: function(opts){
			var self = this;
			self.bindEvents();
		},
		bindEvents: function(){
			var self = this;
			self.clickFunc = new bindFunc({"mod":self.$mod,"className": self.className, "scale": self.scale, "divWidth":self.divWidth,"divHeight":self.divHeight, "position": self.position});
		}
	}

	$.fn.imgHoverZoom = function(opts){
		new imgZoom(opts,$(this));
	}
})(jQuery);