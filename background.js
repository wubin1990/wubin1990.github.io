var popNotice = function() {
        if (Notification.permission == "granted") {
            var notification = new Notification("Hi，XX：", {
                body: 'XXXX?',
            });
            
            notification.onclick = function() {
                text.innerHTML = 'xx' + new Date().toTimeString().split(' ')[0] + '加你为好友！';
                notification.close();    
            };
        }    
    };
if (Notification.permission == "granted") {
            popNotice();
        } else if (Notification.permission != "denied") {
            Notification.requestPermission(function (permission) {
              if (permission == "granted") {
            var notification = new Notification("Hi，帅哥：", {
                body: '可以加你为好友吗？',
                icon: '//image.zhangxinxu.com/image/study/s/s128/mm1.jpg'
            });
            
            notification.onclick = function() {
                text.innerHTML = 'Xx' + new Date().toTimeString().split(' ')[0] + '加你为好友！';
                notification.close();    
            };
        } 
            });
        }