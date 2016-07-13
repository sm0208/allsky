var imgRefresh = { 
	init: function (a, b) { 
		if (!a) 
			return; 

		if (b)
			this.timeInterval = b; 

		ImgRefreshTimer = window.setInterval(function () { 
			imgRefresh.refresh(a) 
		}, this.timeInterval) 
		}, refresh: function (a) { 
			var b = document.getElementById(a);
			var c = b.getAttribute('src');
			var d = c.split("?=")[0] + "?=" + Math.random();
			b.setAttribute('src', d) 
		}, stop: function () { 
			window.clearInterval(ImgRefreshTimer) 
		}, timeInterval: '60000' 
	}; 
var ImgRefreshTimer;
