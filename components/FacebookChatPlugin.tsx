import { useEffect } from "react";

const FacebookChatPlugin = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
     window.fbAsyncInit = function() {
       FB.init({
         xfbml          : true,
         version        : 'v18.0'
       });
     };

     (function(d, s, id) {
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) return;
       js = d.createElement(s); js.id = id;
       js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
       fjs.parentNode.insertBefore(js, fjs);
     })(document, 'script', 'facebook-jssdk');
   `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default FacebookChatPlugin;
