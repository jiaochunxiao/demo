## animate
此简单动画框架，是慕课网上课程为"js动画效果"的js代码，授课老师为vivian。
###此课程中的关键知识点：

####speed=speed>0?Math.ceil(speed):Math.floor(speed);

此处实现了速度正负值的选择：当速度为正值时，使用Math.ceil()函数，当速度为负值时，使用Math.floor()，避免了鼠标移进/移出，元素位置的偏移。

###获取元素的CSS属性函数：


function getStyle(obj,attr){
	
	if(obj.currentStyle){
	
		return obj.currentStyle[attr];//兼容IE

		console.log(obj.currentStyle[attr]);

	}else{

		return getComputedStyle(obj,false)[attr];//兼容FireFox

		console.log(getComputedStyle(obj,false)[attr])

	}

}

	
另外，主函数传参，运用了json数据,可以实现多种CSS属性的同时动画。

## 图片中心放大

[线上demo](http://jiaochunxiao.github.io/demo/html/imgScale.html)

## 图片悬浮遮罩

[线上demo](http://jiaochunxiao.github.io/demo/html/imageMask.html)

## slide-around
参考自[yy709593266](https://github.com/yy709593266/slide-around)，待优化

[线上demo](http://jiaochunxiao.github.io/demo/html/slide-around.html)

## H5调起手机摄像头

```
<input type="file" accept="video/*" id="take-video" capture="camcorder"/>
```
capture属性可取值有 camera、camcorder、microphone，分别表示捕获系统的照相机、摄像机、麦克风。
```
const input = document.getElementById('take-video');
const container = document.getElementById('video-show');
input.onchange = function (event) {
    const files = event.target.files;
    if (files && files.length > 0) {
        let file = files[0];
        if (file.size > 50 * 1024 * 1024) {
            alert('视频大于50M，请重新上传');
            return;
        }
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('loadend', function() {
            const localVideo = document.getElementById('local-video');
            if (localVideo) {
                localVideo.src = reader.result;
            }
            else {
                const video = document.createElement('video');
                video.src = reader.result;
                video.id = 'local-video';
                video.setAttribute('controls', 'controls');
                container.appendChild(video);
            }
            
        })
    }
    else {
        alert('请重新上传视频');
    }
}
```
[线上demo](https://jiaochunxiao.github.io/demo/html/camera.html)

## PC调起摄像头录像

主要利用了navigator.mediaDevices.getUserMedia及MediaRecorder。
```
```
[线上demo](https://jiaochunxiao.github.io/demo/html/mediadevice.html)

## 滚动锚点

[线上demo](https://jiaochunxiao.github.io/demo/html/anchorscroll.html)



