function getCookie(e){var t,o=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(o))?unescape(t[2]):null}var apiPrefix="/api/passport",gotoUrl="//sensorsdata.cn";$(function(){function e(){var e=$(window).scrollTop()>64;e!==t&&(t=e,t?$("body").addClass("fixed"):$("body").removeClass("fixed"))}var t;if($(document).on("scroll",function(){e()}),e(),$("header .btnToggle").off("click.btnToggle").on("click.btnToggle",function(){$("body").hasClass("header-menu-active")?$("body").removeClass("header-menu-active"):$("body").addClass("header-menu-active")}),/MicroMessenger/i.test(navigator.userAgent)){var o=document.querySelector("footer .mp");o&&(o.href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI5MjM3OTA0MA==&scene=110#wechat_redirect")}}),$(function(){function e(){if("en"===getCookie("salang")){var e='<div class="cookieTip" id="cookieTip"><span style="text-align:left;padding-right: 20px;">This site uses cookies to store information on your computer. Some are essential to make our site work; others help us improve the user experience. By using the site, you consent to the placement of these cookies.</span><span id="dismissCookie" class="dismiss">AGREE&DISMISS</span></div>',t=document.createElement("div");t.style.position="relative",t.style.minHeight="75px",t.classList.add("cookieWrap"),t.innerHTML=e,document.querySelector("header").prepend(t),document.getElementById("dismissCookie").addEventListener("click",function(){document.getElementById("cookieTip").parentElement.remove(),window.localStorage.setItem("cookie","visited"),a?($("main .banner").css("padding-top","84px"),$("header").height("auto"),$("main section.banner").height("700px"),-1!=location.href.indexOf("about/aboutus")&&$("main section.banner").height("400px")):($("main .banner").css("padding-top","0px"),$("header").height("73px"))})}}var t;$(".btnLogout").click(function(){$.post(apiPrefix+"/user/logout",function(e){200===e.status&&($(".btnLogout").attr({title:""}).hide(),location.reload())},"json")});var o={};try{o.site_url=sa.store._sessionState.session_page_url||"",o.from_url=sa.store._state.props.$utm_source||sa.store._state.props._latest_ch||"",o.utm_campaign=sa.store._state.props.$utm_campaign||"",o.utm_medium=sa.store._state.props.$utm_medium||"",o.utm_term=sa.store._state.props.$utm_term||"",o.utm_content=sa.store._state.props.$utm_content||""}catch(n){o.site_url=""}try{o.distinct_id=sa.store._state.distinct_id,o.referrerUrl=sa.store._state.props.$latest_referrer,o.referrHostUrl=sa.store._state.props.$latest_referrer_host}catch(n){o.distinct_id="Unknown",o.referrerUrl="Unknown",o.referrHostUrl="Unknown"}var a=window.matchMedia("(max-width:1000px)").matches;"en"===getCookie("salang")&&(window.localStorage.getItem("cookie")?a&&($("main section.banner").height("750px"),-1!=location.href.indexOf("product/focus")?$("main section.banner").height("500px"):-1!=location.href.indexOf("about/aboutus")?$("main section.banner").height("400px"):-1!=location.href.indexOf("/index")&&$("main section.banner").height("600px")):(e(),a?($("main .banner").css("padding-top","204px"),$("main section.banner article").css("paddingTop","50px"),-1!=location.href.indexOf("about/aboutus")&&$("main section.banner").height("400px")):($("main .banner").css("padding-top","75px"),$("header").height("146px"),-1!=location.href.indexOf("about/aboutus")&&$("main section.banner").height("400px"))));var s=["/","/auto","/_home/","/_home/auto","/index-en.html","/index.html","/_home/index.html","/product/analysis-en.html","/_home/product/analysis-en.html","/product/analysis.html","/_home/product/analysis.html","/about/aboutus-en.html","/about/aboutus.html","/_home/about/aboutus.html","/_home/about/aboutus.html","/demo/demo.html","/demo/demo-en.html","/_home/demo/demo-en.html","/_home/demo/demo.html"];if("en"===getCookie("salang")&&-1===s.indexOf(location.pathname)){var i=location.pathname,r="";i.endsWith("/userTag.html")||i.endsWith("/userTag-en.html")?r="sp":i.endsWith("/focus.html")||i.endsWith("/focus-en.html")?r="sf":i.endsWith("/recommend.html")||i.endsWith("/recommend-en.html")?r="sr":(i.endsWith("/journey.html")||i.endsWith("/journey-en.html"))&&(r="sj"),$('[getDemoBtn="sademoShop"]').attr("href",gotoUrl+"/form/"+r+"Order-en.html").text("Request Demo"),$('.buttons[sa-track-module="顶部导航栏"] [getDemoBtn="sademoShop"]').attr("sa-track-btnName","Request Demo")}$.post(apiPrefix+"/whoami",o,function(e){200===e.status?(t=e.data.profile,"en"===getCookie("salang")&&e.data.profile&&(sa.quick("isReady",function(){e.data.profile.phone&&sa.login(e.data.profile.phone)}),-1!==s.indexOf(location.pathname)?$('[getDemoBtn="sademoShop"]').attr("href","//sensorsdata.cn/doEbizDemoEnLogin"):$('[getDemoBtn="sademoShop"]').attr("href",gotoUrl+"/form/"+r+"Order-en.html?status=loginSuccess")),$(".btnLogout").attr({title:t.user_name}).show()):$(".btnLogout").hide()},"json")}),$(function(){function e(){o.textContent="\n    @media screen and (max-width: 1000px) {\n      .header-menu-active header nav .nav-menu {\n        height: "+($(window).height()-$("body>header").height())+"px\n      }\n    }\n    "}var t=document.createElement("style"),o=document.createTextNode("");$(window).resize(e),e(),t.appendChild(o),document.querySelector("head").appendChild(t),$("a").on("mousedown",function(){this.className.replace(/\barea_([\w_\-]+)/,function(e,t){sessionStorage.module_position=t})})}),$(".switchLanguage").on("mouseenter",function(){$(".switchLanguageWrap").css({display:"block"})}),$(".switchLanguage").on("mouseleave",function(){$(".switchLanguageWrap").css({display:"none"})});