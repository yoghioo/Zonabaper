var xdmStore=window.xdmStore||{};!function(e,t){function i(e){console&&console.log?console.log(e):(window.loggedMessages&&(window.loggedMessages=[]),window.loggedMessages.push(e))}function n(){return window.SHAREAHOLIC_PLUGIN_VERSION}function a(){e.ajax({method:"GET",dataType:"jsonp",url:E+"/notifications"}).done(m).fail(r)}function r(){i("failed to retrieve notifications from the server"),m([])}function o(){e("body").fontSpy({font:"FontAwesome",callback:function(e){e&&v.load_css({href:"//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css",id:"notifications_font_css"})}}),v.load_css({href:x+"/notifications.css",id:"header_notifications_css",success:s,failure:function(){i("Cannot load the notifications.css...")}})}function s(){if(k||n()){var t=e(".logged-in.js-logged-in .hiring"),i=e(".new-design .user-nav.js-logged-out .hiring"),r=e(w),o=r.clone();t.before(r.clone()),i.after(r.clone()),o.addClass("mobile"),e(".mobile-menu-link").after(o)}else{var s=e(w),l=e(".wrap .unit.size3of5, .wrap .unit.size4of5").eq(0);l.length?(s.addClass("wordpress-v7"),l.before(s)):(l=e("#sexy-bookmarks"),l&&(s.addClass("wordpress-v6"),l.prepend(s)))}a()}function l(e,t){var i,n,a,r,o=!1,s=new Date;for(U=[],n=0,i=e.length;i>n;n++)a=e[n],a.startAt&&(a.startAt=new Date(a.startAt)),a.endAt&&(a.endAt=new Date(a.endAt)),a.startAt&&a.startAt.getTime()>s.getTime()||a.endAt&&a.endAt.getTime()<s.getTime()||(t&&(r=t.filter(function(e){return e.id===a.id})[0]),r?a.read=r.read===!0:o=!0,U.push(a));o&&f(),U.sort(function(e,t){var i,n;return i=new Date(e.startAt),n=new Date(t.startAt),e.priority>t.priority?1:e.priority<t.priority?-1:i>n?1:n>i?-1:0}),c(U,o)}function c(t,n){var a=e(".shareaholic-notifications"),r=(e(".shareaholic-notifications-count"),e(".shareaholic-notifications-container"));y=e(".shareaholic-notifications-list"),d(!1),g(n),(0===t.length||0===y.children().length)&&y.append(S),a.click(function(t){t.stopPropagation(),r.addClass("open"),a.removeClass("new-notifications"),b.setItem("shareaholic-notifications-open","true",function(e){e&&i("Undable to store if notifications have been looked at or not. Error: "+e)}),_gaq.push(["notificationsTracker._trackEvent","notifications","opened"]);var n=function(){r.removeClass("open"),e(this).off("click",n),a.off("click",o)},o=function(t){var i=e(t.target);(i.hasClass("shareaholic-notifications")||i.hasClass("shareaholic-notifications-count"))&&r.toggleClass("open")};e(document).click(n),a.click(o)}),a.not(".mobile").show(),p(),e(".shareaholic-notifications-read-more").click(function(){r.toggleClass("expanded"),y.toggleClass("expanded"),"Read More..."===e(this).text()?e(this).text("Read Less..."):e(this).text("Read More...")}),e(".shareaholic-notifications-read-old").click(function(){C?(u(),e(this).text("Show Read..."),C=!1):(h(),e(this).text("Hide Read..."),C=!0)})}function h(){d(!0)}function u(){d(!1),(0===U.length||0===y.children().length)&&y.append(S)}function d(t){var i,n,a,r;if(y.empty(),t)for(i=0,n=U.length;n>i;i++)r=U[i].content.length>j?U[i].content.substr(0,j-12).trim()+"... ":U[i].content,U[i].target?(r+='<span class="shareaholic-notification-link"> Read More</span>',a=e('<a target="_blank" href="'+U[i].target+'"><li class="shareaholic-notification shareaholic-'+U[i].id+'"><a class="shareaholic-notifications-content-link" target="_blank" href="'+U[i].target+'"><div class="shareaholic-notification-text">'+r+"</div></a></li>")):a=e('<li class="shareaholic-notification shareaholic-'+U[i].id+'"><div class="shareaholic-notification-text">'+r+"</div></li>"),y.append(a);else for(i=0,n=U.length;n>i;i++)U[i].read||(r=U[i].content.length>j?U[i].content.substr(0,j-12)+"... ":U[i].content,U[i].target?(r+='<span class="shareaholic-notification-link"> Read More</span>',a=e('<li class="shareaholic-notification shareaholic-'+U[i].id+'"><span class="fa fa-close shareaholic-notification-dismiss"></span><a class="shareaholic-notifications-content-link" target="_blank" href="'+U[i].target+'"><div  class="shareaholic-notification-text">'+r+"</div></a></li>")):a=e('<li class="shareaholic-notification shareaholic-'+U[i].id+'"><span class="fa fa-close shareaholic-notification-dismiss"></span><div class="shareaholic-notification-text">'+r+"</div></li>"),a.find(".shareaholic-notification-dismiss").click(function(e){return function(){y.find(".shareaholic-"+e).remove(),_(e)}}(U[i].id)),y.append(a))}function p(){T&&e(".shareaholic-notification").length>3&&e(".shareaholic-notifications-list").css("padding-right","5px")}function _(e){U.forEach(function(t){t.id===e&&(t.read=!0)}),f(e),p(),0===y.children().length&&y.append(S)}function m(e){b.getItem("shareaholic-notifications",function(t,n){t&&i("could not get stored notifications"),l(e,JSON.parse(n))})}function f(e){if(e)b.getItem("shareaholic-notifications",function(t,n){t&&i("could not update notification");var a=JSON.parse(n).map(function(t){return t.id===e&&(t.read=!0),t});b.setItem("shareaholic-notifications",JSON.stringify(a),function(e){e&&i("something went wrong updating notifications")})});else{var t=U.map(function(e){return{id:e.id}});b.setItem("shareaholic-notifications",JSON.stringify(t),function(e){e&&i("something went wrong saving notifications")})}}function g(t){t?(e(".shareaholic-notifications").addClass("new-notifications"),b.setItem("shareaholic-notifications-open","false")):b.getItem("shareaholic-notifications-open",function(t,n){if(t)return void i("Unabled to fetch if notifications have previously been read. Error: "+t);var a=JSON.parse(n);a||e(".shareaholic-notifications").addClass("new-notifications")})}if(!e)return void i("JQuery needs to be defined for header-notifications");!function(e){function t(t,i){function n(){var e=h.outerWidth();u!==e?r():c.timeOut<0?a():o()}function a(){s.removeClass(c.onLoad),s.addClass(c.onFail),c.callback(new Error("FontSpy timeout")),h.remove()}function r(){c.callback(),s.removeClass(c.onLoad),h.remove()}function o(){s.addClass(c.onLoad),setTimeout(n,c.delay),c.timeOut=c.timeOut-c.delay}var s=e(t),l=(s.css("font-family"),{font:"",onLoad:"",onFail:"",testFont:"Comic Sans MS",testString:"QW@HhsXJ",delay:50,timeOut:2500,callback:e.noop}),c=e.extend(l,i),h=e("<span>"+c.testString+"</span>").css("position","absolute").css("top","-9999px").css("left","-9999px").css("visibility","hidden").css("fontFamily",c.testFont).css("fontSize","250px");e("body").append(h);var u=h.outerWidth();h.css("fontFamily",c.font+","+c.testFont),n()}e.fn.fontSpy=function(i){return this.each(function(){if(void 0==e(this).data("fontSpy")){var n=new t(this,i);e(this).data("fontSpy",n)}})}}(e);var v={};if(v.load_css=function(t){var i,n,a,r,o=navigator.userAgent;return null==t&&(t={}),t=e.extend({href:null,id:null,success:function(){},failure:function(){}},t),n=document.getElementById(t.id),n?n.onload?(r=n.onload,n.onload=function(){return r(),t.success()}):t.success():(i=document.createElement("link"),i.rel="stylesheet",i.type="text/css",i.href=t.href,i.async="true",i.id=t.id,i.onload=function(){return i.onload=null,t.success()},i.onerror=t.failure,a=document.getElementsByTagName("head")[0],a.appendChild(i),v.is_webkit(o)&&v.webkit_version(o)&&v.webkit_version(o)<=535?v.poll_css(i,t.success):void 0)},v.is_webkit=function(e){return/WebKit/.test(e)},v.webkit_version=function(e){var t=/WebKit\/([0-9]+)/.exec(e);return t?parseInt(t[1]):t},v.poll_css=function(e,t){var i;try{e.sheet.cssRules}catch(n){if(i=n,"NS_ERROR_DOM_SECURITY_ERR"!==i.name)return void setTimeout(function(){return v.poll_css(e,t)},50)}return t()},!window.shrNotifications){window.shrNotifications=window.shrNotifications||{};var b,y,w='<div class="shareaholic-notifications"><div class="shareaholic-notifications-count fa fa-bell-o fa-lg"></div><div class="shareaholic-notifications-container"><div class="shareaholic-image"></div><ul class="shareaholic-notifications-list"></ul><div class="shareaholic-notifications-footer"><div class="shareaholic-notifications-footer-button shareaholic-notifications-read-more">Read More...</div> | <div class="shareaholic-notifications-footer-button shareaholic-notifications-read-old">Show Read...</div></div></div></div>',S=e('<div class="shareaholic-notifications-none">You have no unread notifications!</div>'),k=-1===window.location.pathname.indexOf("wp-admin"),U=[],x=e("[data-sorassetbase]:first").data("sorassetbase"),E=e("[data-shr-notificationbase]").attr("data-shr-notificationbase"),T=-1!==navigator.appVersion.indexOf("Win"),C=!1,j=140;e(function(){window._gaq||(window._gaq=[],function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()),_gaq.push(function(){_gat._createTracker("UA-12964573-16","notificationsTracker")});var n=x;0===n.indexOf("//")&&(n="https:"+n),t.getStore?t.getStore({remote:n+"/lib/xdmStore/remote.html"},function(e,t){return e?void i("Could not connect to cross-domain store"):(b=t,void o())}):e.getScript(n+"/lib/xdmStore/xdmStore.js",function(e,a){return"success"!==a?void i("could not contact shareaholic server"):(t=window.xdmStore,void t.getStore({remote:n+"/lib/xdmStore/remote.html"},function(e,t){return e?void i("Could not connect to cross-domain store"):(b=t,void o())}))})})}}("undefined"!=typeof jQuery?jQuery:null,xdmStore);
