function desktop_notification(title ,body ,icon_str){

    document.addEventListener('DOMContentLoaded',function(){

        Notification.requestPermission(function(permission){
              var config = {
                      body:body,
                      icon:icon_str,
                      dir:'auto' 
                  };
             var notification = new Notification(title,config);
         });
    });
}


