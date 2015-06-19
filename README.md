# animate
此简单动画框架，是慕课网上课程为"js动画效果"的js代码，授课老师为vivian。
###此课程中的关键知识点：

####speed=speed>0?Math.ceil(speed):Math.floor(speed);

此处实现了速度正负值的选择：当速度为正值时，使用Math.ceil()函数，当速度为负值时，使用Math.floor()，避免了鼠标移进/移出，元素位置的偏移。

###获取元素的CSS属性函数：

+function getStyle(obj,attr){
+	if(obj.currentStyle){
+		return obj.currentStyle[attr];//兼容IE
+		console.log(obj.currentStyle[attr]);
+	}else{
+		return getComputedStyle(obj,false)[attr];//兼容FireFox
+		console.log(getComputedStyle(obj,false)[attr])
+	}
+}
	
另外，主函数传参，运用了json数据,可以实现多种CSS属性的同时动画。
