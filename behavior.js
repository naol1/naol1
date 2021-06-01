document.addEventListener("DOMContentLoaded", function(event) {

  var d = document,
  s = d.createElement('script');
	s.src = 'https://naol1.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);


  img = document.getElementById("ULA");
  function enlargeImg(){
    img.style.transform="scale(1.5)";
    img.style.transition = "transform 0.25s ease"
  }

  function resetImg(){

    img.style.transform="scale(1)";
    img.style.transition = "transform 0.2s ease";


  }
<div id="fb-root"></div>
  (function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



});
