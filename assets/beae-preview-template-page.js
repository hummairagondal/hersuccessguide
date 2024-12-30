
if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }
          let js_MN42TA27 = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-zhy69ncjsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zhy69ncj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zhy69ncj');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zhy69ncj: ', ex)
      };
    

      try {
        let argid = 'beae-c6yuozr3block-video',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-c6yuozr3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-c6yuozr3');
        args.el = args.els[0];
        ((E) => { if(E.mode.value==="builder")return;E.source=="self hosted"&&E.el.querySelector(".beae_video")&&E.mute&&(E.el.querySelector(".beae_video").muted="muted");const I=E.el.querySelector(".beae-video_overlay-icon"),j=E.el.querySelector(".beae-close-video"),q=()=>{let P=I.closest(".beae-grid-block"),O=E.el.querySelector(".beae-x-video--wrapper");O&&O.classList.remove("playing"),P&&(P.style.zIndex=""),E.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),P&&P.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let W=E.el.querySelector(".beae_iframe");W.getAttribute("src").indexOf("&autoplay=1")>-1&&W.setAttribute("src",W.getAttribute("src").replace("&autoplay=1",""))};if(I&&(I.addEventListener("click",()=>{if(E.source=="self hosted"){let W=E.el.querySelector(".beae_video");W.autoplay=!0,W.load(),I.classList.remove("beae-overlay"),E.play_icon&&(E.el.querySelector(".beae-video-icon-play").style.display="none")}else{let W=E.el.querySelector(".beae_iframe"),ee=W.getAttribute("src")+"&autoplay=1";W.setAttribute("src",ee),I.classList.remove("beae-overlay"),E.play_icon&&(E.el.querySelector(".beae-video-icon-play").style.display="none")}let P=I.closest(".beae-grid-block"),O=E.el.querySelector(".beae-x-video--wrapper");O&&O.classList.add("playing"),P&&(P.style.zIndex=1e8),E.lightbox&&(window.BeaePopupLibrary.createPopup(E.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:E.id}),q())}),j&&j.addEventListener("click",q)),E.autoplay||E.loop){let P=null;E.source=="self hosted"?P=E.el.querySelector(".beae_video"):P=E.el.querySelector(".beae_iframe");let O={start:E.start_time,end:E.end_time,isloop:E.loop,autoplay:E.autoplay,idBlock:E.id,controls:E.player_controls?1:0};if(E.source=="youtube"){const W=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let ee=E.srcYoutube.match(W),D=ee&&ee[2].length===11?ee[2]:null;O.id=D,O.src=location.protocol+"//www.youtube.com/embed/"+D}switch(E.source){case"self hosted":setTimeout(()=>{window.BEAEVIDEO.handleLoopVideo&&window.BEAEVIDEO.handleLoopVideo(O,P)});break;case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(O,E.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(O,P)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-c6yuozr3: ', ex)
      };
    

      try {
        let argid = 'beae-fdfy0p2xbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fdfy0p2x',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fdfy0p2x');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(a){extOptions={},console.error(a)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let a=document.querySelector(selector+","+selector.replace("#","."));if(a)return a.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){console.log(window.createLoading," window.createLoading");const a=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(()=>{a.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox)return window.BeaePopupLibrary.createPopup(data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'"),{id:data.id,...extOptions}),e.preventDefault(),!1}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((o,t)=>{o.forEach(i=>{i.isIntersecting&&(t.unobserve(i.target),i.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fdfy0p2x: ', ex)
      };
    

      try {
        let argid = 'beae-m8jzw8zmsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-m8jzw8zm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-m8jzw8zm');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-m8jzw8zm: ', ex)
      };
    

      try {
        let argid = 'beae-0f82ces2block-video',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0f82ces2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0f82ces2');
        args.el = args.els[0];
        ((E) => { if(E.mode.value==="builder")return;E.source=="self hosted"&&E.el.querySelector(".beae_video")&&E.mute&&(E.el.querySelector(".beae_video").muted="muted");const I=E.el.querySelector(".beae-video_overlay-icon"),j=E.el.querySelector(".beae-close-video"),q=()=>{let P=I.closest(".beae-grid-block"),O=E.el.querySelector(".beae-x-video--wrapper");O&&O.classList.remove("playing"),P&&(P.style.zIndex=""),E.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),P&&P.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let W=E.el.querySelector(".beae_iframe");W.getAttribute("src").indexOf("&autoplay=1")>-1&&W.setAttribute("src",W.getAttribute("src").replace("&autoplay=1",""))};if(I&&(I.addEventListener("click",()=>{if(E.source=="self hosted"){let W=E.el.querySelector(".beae_video");W.autoplay=!0,W.load(),I.classList.remove("beae-overlay"),E.play_icon&&(E.el.querySelector(".beae-video-icon-play").style.display="none")}else{let W=E.el.querySelector(".beae_iframe"),ee=W.getAttribute("src")+"&autoplay=1";W.setAttribute("src",ee),I.classList.remove("beae-overlay"),E.play_icon&&(E.el.querySelector(".beae-video-icon-play").style.display="none")}let P=I.closest(".beae-grid-block"),O=E.el.querySelector(".beae-x-video--wrapper");O&&O.classList.add("playing"),P&&(P.style.zIndex=1e8),E.lightbox&&(window.BeaePopupLibrary.createPopup(E.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:E.id}),q())}),j&&j.addEventListener("click",q)),E.autoplay||E.loop){let P=null;E.source=="self hosted"?P=E.el.querySelector(".beae_video"):P=E.el.querySelector(".beae_iframe");let O={start:E.start_time,end:E.end_time,isloop:E.loop,autoplay:E.autoplay,idBlock:E.id,controls:E.player_controls?1:0};if(E.source=="youtube"){const W=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let ee=E.srcYoutube.match(W),D=ee&&ee[2].length===11?ee[2]:null;O.id=D,O.src=location.protocol+"//www.youtube.com/embed/"+D}switch(E.source){case"self hosted":setTimeout(()=>{window.BEAEVIDEO.handleLoopVideo&&window.BEAEVIDEO.handleLoopVideo(O,P)});break;case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(O,E.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(O,P)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0f82ces2: ', ex)
      };
    

      try {
        let argid = 'beae-1go39n7dbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1go39n7d',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1go39n7d');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(a){extOptions={},console.error(a)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let a=document.querySelector(selector+","+selector.replace("#","."));if(a)return a.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){console.log(window.createLoading," window.createLoading");const a=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(()=>{a.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox)return window.BeaePopupLibrary.createPopup(data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'"),{id:data.id,...extOptions}),e.preventDefault(),!1}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((o,t)=>{o.forEach(i=>{i.isIntersecting&&(t.unobserve(i.target),i.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1go39n7d: ', ex)
      };
    

      try {
        let argid = 'beae-dyfjnfy3section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dyfjnfy3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dyfjnfy3');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dyfjnfy3: ', ex)
      };
    

      try {
        let argid = 'beae-0hcvi1w7block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0hcvi1w7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0hcvi1w7');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0hcvi1w7: ', ex)
      };
    

      try {
        let argid = 'beae-r6lnlqqtsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r6lnlqqt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r6lnlqqt');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r6lnlqqt: ', ex)
      };
    

      try {
        let argid = 'beae-p2h4fo7xblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-p2h4fo7x',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-p2h4fo7x');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-p2h4fo7x: ', ex)
      };
    

      try {
        let argid = 'beae-0769a87wblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0769a87w',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0769a87w');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0769a87w: ', ex)
      };
    

      try {
        let argid = 'beae-raq2b3irblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-raq2b3ir',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-raq2b3ir');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-raq2b3ir: ', ex)
      };
    

      try {
        let argid = 'beae-e527svmasection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e527svma',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e527svma');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e527svma: ', ex)
      };
    

      try {
        let argid = 'beae-xkud1zv0block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xkud1zv0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xkud1zv0');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xkud1zv0: ', ex)
      };
    

      try {
        let argid = 'beae-yyjr8i39block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yyjr8i39',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yyjr8i39');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yyjr8i39: ', ex)
      };
    

      try {
        let argid = 'beae-2k9aodrablock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2k9aodra',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2k9aodra');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2k9aodra: ', ex)
      };
    

      try {
        let argid = 'beae-mtcm8xikblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-mtcm8xik',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-mtcm8xik');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-mtcm8xik: ', ex)
      };
    

      try {
        let argid = 'beae-i0oi8djbblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i0oi8djb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i0oi8djb');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i0oi8djb: ', ex)
      };
    

      try {
        let argid = 'beae-pmc9izfhblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-pmc9izfh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-pmc9izfh');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-pmc9izfh: ', ex)
      };
    

      try {
        let argid = 'beae-knfigrcwsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-knfigrcw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-knfigrcw');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-knfigrcw: ', ex)
      };
    

      try {
        let argid = 'beae-acqgqoe6block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-acqgqoe6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-acqgqoe6');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-acqgqoe6: ', ex)
      };
    

      try {
        let argid = 'beae-7m2jsw7lblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7m2jsw7l',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7m2jsw7l');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7m2jsw7l: ', ex)
      };
    

      try {
        let argid = 'beae-zwn3srchblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zwn3srch',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zwn3srch');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zwn3srch: ', ex)
      };
    

      try {
        let argid = 'beae-1b84cgajsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1b84cgaj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1b84cgaj');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1b84cgaj: ', ex)
      };
    

      try {
        let argid = 'beae-qgndks4zblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qgndks4z',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qgndks4z');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qgndks4z: ', ex)
      };
    

      try {
        let argid = 'beae-eam6zeb7button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-eam6zeb7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-eam6zeb7');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(a){extOptions={},console.error(a)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let a=document.querySelector(selector+","+selector.replace("#","."));if(a)return a.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){console.log(window.createLoading," window.createLoading");const a=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(()=>{a.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox)return window.BeaePopupLibrary.createPopup(data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'"),{id:data.id,...extOptions}),e.preventDefault(),!1}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((o,t)=>{o.forEach(i=>{i.isIntersecting&&(t.unobserve(i.target),i.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-eam6zeb7: ', ex)
      };
    

      try {
        let argid = 'beae-gym4win4section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gym4win4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gym4win4');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gym4win4: ', ex)
      };
    

      try {
        let argid = 'beae-kgq9rwf2button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kgq9rwf2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kgq9rwf2');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(a){extOptions={},console.error(a)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let a=document.querySelector(selector+","+selector.replace("#","."));if(a)return a.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){console.log(window.createLoading," window.createLoading");const a=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(()=>{a.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox)return window.BeaePopupLibrary.createPopup(data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'"),{id:data.id,...extOptions}),e.preventDefault(),!1}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((o,t)=>{o.forEach(i=>{i.isIntersecting&&(t.unobserve(i.target),i.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kgq9rwf2: ', ex)
      };
    

      try {
        let argid = 'beae-nvc8c6oosection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nvc8c6oo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nvc8c6oo');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nvc8c6oo: ', ex)
      };
    

      try {
        let argid = 'beae-qs4xtnnrblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qs4xtnnr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qs4xtnnr');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qs4xtnnr: ', ex)
      };
    

      try {
        let argid = 'beae-z92ptujyblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-z92ptujy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-z92ptujy');
        args.el = args.els[0];
        ((S) => { if(S.el){let L,N=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let M=function(T){let E=0,I,j,q;P(),N?S.el.onmouseover=function(H){O(H)}:T.onmousedown=function(H){O(H)},S.el.onmouseup=function(){W()},T.ontouchstart=function(H){O(H)},S.el.ontouchend=function(){W()};function P(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),T.style.left&&(j=parseInt(T.style.left))}function O(H){check=!1,H.preventDefault(),H.clientX?I=H.clientX:I=H.touches[0].clientX,E=1,S.el.onmousemove=function(Y){ee(Y)},S.el.ontouchmove=function(Y){ee(Y)}}function W(){E=0,isNaN(q)||(j=q),check=!0}function ee(H){if(E==0||N&&!(H.target==B||H.target==S.el.querySelector(".beae-image-secondary")))return!1;q=D(H),q<0&&(q=0),q>100&&(q=100),R(q)}function D(H){H=H.changedTouches?H.changedTouches[0]:H;let Y;return N?Y=Math.round(H.offsetX*100/L):Y=Math.round(j-(I-H.pageX)*100/L),Y}function R(H){T.style.left=H+"%",B.style.clipPath=`polygon(${H}% 0%, ${H}% 100%, 100% 100%, 100% 0)`}};V&&B&&M(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{L=B.offsetWidth})}).observe(B),M(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-z92ptujy: ', ex)
      };
    

      try {
        let argid = 'beae-rktps6fnbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rktps6fn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rktps6fn');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(a){extOptions={},console.error(a)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let a=document.querySelector(selector+","+selector.replace("#","."));if(a)return a.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){console.log(window.createLoading," window.createLoading");const a=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(()=>{a.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox)return window.BeaePopupLibrary.createPopup(data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'"),{id:data.id,...extOptions}),e.preventDefault(),!1}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((o,t)=>{o.forEach(i=>{i.isIntersecting&&(t.unobserve(i.target),i.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rktps6fn: ', ex)
      };
    

      try {
        let argid = 'beae-62se66kmsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-62se66km',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-62se66km');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-62se66km: ', ex)
      };
    

      try {
        let argid = 'beae-vum8lrzoblock-accordion',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vum8lrzo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vum8lrzo');
        args.el = args.els[0];
        ((s) => { const d=s.el.querySelectorAll(".beae-acc-item"),u=window.innerWidth<768;d.forEach((p,m)=>{const b=p.getAttribute("data-active"),_=p.querySelector(".beae-acc-item-header"),h=p.querySelector(".beae-acc-item-body");b&&b.includes("mobile")&&u||b&&b.includes("desktop")&&!u?p.classList.toggle("beae-acc-item-active"):h.style.height="0px",_.addEventListener("click",function(){p.classList.contains("beae-acc-item-active")?(h.style.height=h.scrollHeight+"px",setTimeout(()=>{p.classList.remove("beae-acc-item-active"),h.style.height="0px"},1)):(p.classList.toggle("beae-acc-item-active"),h.style.height=h.scrollHeight+"px",setTimeout(()=>{h.style={}},100)),s.alwaysOpen||Array.from(s.el.querySelectorAll(".beae-acc-item-active")).filter(function(y){return y.nodeType===1&&y!==p}).forEach(y=>{y.classList.remove("beae-acc-item-active");const g=y.querySelector(".beae-acc-item-body");g.style.height="0px"})})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vum8lrzo: ', ex)
      };
    }; if (window.BEAEBASE) {js_MN42TA27()} else {window.BEAEPAGEJS.push(js_MN42TA27)}window.addEventListener("load", () => {let brd = document.createElement("div"),id = Math.random().toString(36).substr(2, 5);brd.setAttribute(`data-${id}`, "");brd.setAttribute("style","position:fixed;bottom: 10px;left:14px;z-index:99999999999999;display:flex;align-items:center;gap:10px");brd.innerHTML = `<a href="https://apps.shopify.com/beae/?utm_source=customersite&utm_medium=page&utm_campaign=traffic" target="_blank" style="box-shadow:rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px, rgb(0 0 0 / 9%) 0px -3px 5px;background:#fafafa;border-radius: 6px;padding: 3px 8px;text-decoration: none;font-family: system-ui, arial;font-size: 12px;color: #292929;font-weight: 500;display: flex;align-items: center;letter-spacing: 0;white-space: nowrap;">Made in <img src="https://app.beae.com/dist/images/beae-next-logo-80.png" height="14" style="border-radius: 0px;margin-left:3px;height:14px !important" /></a> `;document.body.appendChild(brd);}); 