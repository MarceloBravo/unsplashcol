(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/image_not_found.5d8165d6.png"},function(e,t,a){e.exports=a.p+"static/media/Plus.8fa267ad.svg"},,,,function(e,t,a){e.exports=a.p+"static/media/Search.daebfb4c.svg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/hero-image.762578de.png"},,function(e,t,a){e.exports=a.p+"static/media/Logo.035628bf.svg"},function(e,t,a){e.exports=a.p+"static/media/gradiend-bg.a66a36f1.svg"},function(e,t,a){e.exports=a.p+"static/media/down arrow.510a1d5e.svg"},function(e,t,a){e.exports=a.p+"static/media/Remove.4900ed01.svg"},function(e,t,a){e.exports=a(55)},,,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(22),c=a.n(r),o=(a(35),a(5)),s=a(9),i=a(3);var m=e=>{let{element:t,auth:a}=e;return a?n.a.createElement(i.a,{to:"/home"}):t},d=a(57),u=a(8);const p=Object(u.b)({name:"searchSlice",initialState:{result:[],criteria:""},reducers:{setResult:(e,t)=>{e.result=t.payload.result,e.criteria=t.payload.criteria},clearResult:e=>{e.result=[],e.criteria=""}}}),{setResult:h,clearResult:g}=p.actions;var E=p.reducer;const b=Object(u.b)({name:"messageSlice",initialState:[],reducers:{setMessage:(e,t)=>{const a=t.payload.title,l=t.payload.message,n=t.payload.code,r=t.payload.detail,c=t.payload.type;e.unshift({id:(new Date).getSeconds(),title:a,message:l,code:n,detail:r,type:c})},removeMessage:(e,t)=>{t.payload.id?e=e.filter(e=>e.id!==t.payload.id):e.shift()},clearMessage:e=>{[]}}}),{setMessage:v,removeMessage:f,clearMessage:y}=b.actions;var N=b.reducer;const S=Object(u.b)({name:"CollectionSlice",initialState:{inCollection:[],notInCollection:[],allCollections:[],refresh:!1},reducers:{setAllCollections:(e,t)=>{e.allCollections=t.payload.data},setInCollection:(e,t)=>{e.inCollection=t.payload.inCollection},setRefresh:(e,t)=>{e.refresh=t.payload.refresh},setNotInCollection:(e,t)=>{e.notInCollection=t.payload.notInCollection},resetCollections:e=>{e.inCollection=[],e.notInCollection=[]}}}),{setInCollection:C,setNotInCollection:w,resetCollections:O,setAllCollections:j,setReload:A,setRefresh:I}=S.actions;var x=S.reducer;const _="Nqs5uEQt-WK6dDH3PdU_wyDkn4Lq1IfxzNIQiL6up4M",k="mxCLrQITsENlZrtxuvG09ri8hXGZvpWILVD8VXYlDoQ",D=Object(u.b)({name:"SelectedCollectionSlice",initialState:{id:null,title:"",cantPhotos:0,photos:[]},reducers:{setCollectionPhotos:(e,t)=>{e.photos=t.payload.photos},setData:(e,t)=>{e.id=t.payload.id,e.cantPhotos=t.payload.cantPhotos,e.title=t.payload.title},clearData:e=>{e.id=null,e.cantPhotos=0,e.photos=[]}}}),{setCollectionPhotos:R,setData:T,clearData:M}=D.actions;var $=D.reducer;const z=Object(u.b)({name:"SelectedImageSlice",initialState:{image:null},reducers:{setImage:(e,t)=>{e.image=t.payload.image},clearImage:e=>{e.image=null}}}),{setImage:L,clearImage:P}=z.actions;var B=z.reducer;const F=Object(u.b)({name:"spinnerSlice",initialState:{visible:!1,label1:null,label2:null},reducers:{setShowSpinner:(e,t)=>{var a,l,n,r;e.visible=!0,e.label1=null!==(a=null===(l=t.payload)||void 0===l?void 0:l.label1)&&void 0!==a?a:null,e.label2=null!==(n=null===(r=t.payload)||void 0===r?void 0:r.label2)&&void 0!==n?n:null},hideSpinner:e=>{e.visible=!1,e.label1=null,e.label2=null}}}),{setShowSpinner:U,hideSpinner:J}=F.actions;var V=F.reducer;const K=e=>async t=>{try{const l=await d.a.get("https://api.unsplash.com/search/photos",{params:{query:e,per_page:20,page:1},headers:{Authorization:`Client-ID ${_}`}});0===l.data.results.length&&t(v({title:"Error",message:"No se encontraron im\xe1genes relacionadas con ''"+e+"''. Intenta con otra b\xfasqueda.",type:"danger"})),t(h({result:l.data.results,criteria:e}))}catch(a){403===a.status?t(v({title:"Error",message:"Se ha excedido el m\xe1ximo de peticiones. Intentalo m\xe1s tarde.",type:"danger"})):t(v({title:"Error",message:"Error al buscar im\xe1genes"+a.message,type:"danger"}))}},q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return async t=>{try{const l=await d.a.get("https://api.unsplash.com/users/marcelo_b/collections",{params:{per_page:30,page:1},headers:{Authorization:`Bearer ${k}`}}),n=l.data.filter(t=>null===t.preview_photos||void 0===t.preview_photos.find(t=>t.id===e)),r=l.data.filter(t=>null!==t.preview_photos&&void 0!==t.preview_photos.find(t=>t.id===e));t(w({notInCollection:n})),t(C({inCollection:r}))}catch(a){403===a.status?t(v({title:"Error",message:"Se ha excedido el m\xe1ximo de peticiones. Intentalo m\xe1s tarde.",type:"danger"})):t(v({title:"Error",message:"Error al obtener las colecciones:"+a.message,type:"danger"}))}}};var G=a(23),H=a.n(G);var Q=a(17),W=a.n(Q);a(41);var Y=()=>{const{searchValue:e,divStyle:t,handlerSearchChange:a,handlerSearchImage:r}=(()=>{const e={backgroundImage:"url("+H.a+")"},[t,a]=Object(l.useState)(""),n=Object(o.c)(e=>e.searchSlice),r=Object(o.b)(),c=Object(i.p)();return Object(l.useEffect)(()=>{n.result.length>0&&c("/search_result")},[n]),{searchValue:t,divStyle:e,handlerSearchChange:e=>{a(e.target.value)},handlerSearchImage:e=>{13===e.keyCode&&r(K(t))}}})();return n.a.createElement("div",{className:"div-background",style:t},n.a.createElement("div",{className:"row form"},n.a.createElement("div",null,n.a.createElement("h1",{form:"input-search"},"Search")),n.a.createElement("div",{className:"div-home-containers"},n.a.createElement("label",{form:"input-search"},"Search high-resolution images Unsplash")),n.a.createElement("div",{className:"div-home-containers input-container"},n.a.createElement("input",{id:"input-search",type:"input",className:"form-control",value:e,onChange:e=>a(e),onKeyDown:r,placeholder:"Enter your keywords..."}),n.a.createElement("img",{src:W.a,alt:"Buscar",className:"search-icon"}))))},X=a(25),Z=a.n(X);a(42);var ee=()=>{const{isActive:e,goToHome:t}=(()=>{const e=Object(o.b)(),t=Object(i.n)(),a=Object(i.p)();return{isActive:e=>t.pathname===e?"active":"",goToHome:()=>{e(g()),a("/")}}})();return n.a.createElement("nav",{className:"navbar navbar-expand-lg bg-body-tertiary"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(s.b,{className:"navbar-brand",to:"/"},n.a.createElement("img",{src:Z.a,alt:"logo"})),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},n.a.createElement("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link "+(e("/")||e("/search_result")),"aria-current":"page",to:"/",onClick:e=>t()},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link "+e("/collections"),to:"/collections"},"Collections"))))))};a(43);var te=e=>{const t=Object(o.c)(e=>e.SelectedImageSlice.image),[a,r]=Object(l.useState)(!1),c=Object(i.p)(),s=Object(o.b)(),m=e.img;Object(l.useEffect)(()=>{t&&a&&(c("/image_detail"),r(!1))},[t]);const u=e=>{r(!0),s((e=>async t=>{try{const l=await d.a.get(`https://api.unsplash.com/photos/${e}`,{params:{id:e},headers:{Authorization:`Client-ID ${_}`}});l.data?t(L({image:l.data})):t(v({title:"Error",message:"No se encontr\xf3 la im\xe1gen.",type:"danger"}))}catch(a){403===a.status?t(v({title:"Error",message:"Se ha excedido el m\xe1ximo de peticiones. Intentalo m\xe1s tarde.",type:"danger"})):t(v({title:"Error",message:"Error al buscar im\xe1genes"+a.message,type:"danger"}))}})(e))};return n.a.createElement("div",{className:"card img-card",onClick:e=>u(m.id)},n.a.createElement("img",{src:m.urls.regular,alt:m.description,className:"card-img-top"}))};a(44);var ae=e=>{let{data:t,clear:a=!1}=e;const{images:r}=((e,t)=>{const[a,n]=Object(l.useState)(window.innerWidth),[r,c]=Object(l.useState)(parseInt(a/288)),[o,s]=Object(l.useState)([]),[i,m]=Object(l.useState)([]),[d,u]=Object(l.useState)([]);return Object(l.useEffect)(()=>{const e=()=>n(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),Object(l.useEffect)(()=>{c(parseInt(a/288))},[a]),Object(l.useEffect)(()=>{m([]),s([]),u(null!==e&&void 0!==e?e:[])},[e]),Object(l.useEffect)(()=>{if(d.length>0&&e){const t=Math.ceil(e.length/r),a=d.slice(0,t);s([...o,a]),d.length>t&&u(d.slice(t))}},[d]),Object(l.useEffect)(()=>{o.reduce((e,t)=>e+t.length,0)===e.length&&m(o)},[o]),Object(l.useEffect)(()=>{t&&m([])},[t]),{images:i}})(t,a);return n.a.createElement(n.a.Fragment,null,r&&r.length>0&&n.a.createElement("div",{className:"container-results"},r.map((e,t)=>n.a.createElement("div",{key:t,className:"col"},e.map((e,t)=>n.a.createElement(te,{key:t,img:e}))))))},le=a(26),ne=a.n(le);a(45);var re=()=>{const{divStyle:e,state:t,images:a,criteria:r,handlerInputSearchChange:c,handlerInputCriteriaKeyDown:s}=(()=>{const e={backgroundImage:"url("+ne.a+")"},t=Object(o.c)(e=>e.searchSlice),[a,n]=Object(l.useState)([]),[r,c]=Object(l.useState)(""),s=Object(o.b)();return Object(l.useEffect)(()=>{c(t.criteria)},[t]),{divStyle:e,state:t,images:a,criteria:r,handlerInputSearchChange:e=>{c(e.target.value)},handlerInputCriteriaKeyDown:e=>{13===e.keyCode&&(n([]),s(K(r)))}}})();return n.a.createElement("div",{className:"container-page"},n.a.createElement("div",{style:e,className:"top-gradient"}),n.a.createElement("div",{className:"form-search"},n.a.createElement("div",{className:"search-in-result-page"},n.a.createElement("input",{type:"text",className:"form-control input-search",value:r,placeholder:"Enter your keywords...",name:"inputSearch",onChange:e=>c(e),onKeyDown:s}),n.a.createElement("img",{src:W.a,alt:"Buscar",className:"search-icon"}))),n.a.createElement(ae,{data:t.result,clear:0===a.length}))},ce=a(12),oe=a.n(ce);a(46);var se=n.a.memo(e=>{let{item:t,info:a,rowId:l,isActive:r,handlerSetActive:c,handlerAction:o,textAction:s,iconAction:i}=e;return n.a.createElement("div",{className:"row custom-row "+(r?"active":""),onClick:()=>c(l)},n.a.createElement("div",{className:"col img-col"},n.a.createElement("div",{className:"div-small-image"},n.a.createElement("img",{src:t.cover_photo?t.cover_photo.urls.small:oe.a,alt:t.title}))),n.a.createElement("div",{className:"col info-col"},n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"info-col-title"},t.title)),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"info-col-info"},a))),n.a.createElement("div",{className:"col col-remove",onClick:()=>o(t.id)},n.a.createElement("img",{className:"remove-class",src:i,alt:s})," ",s))});const ie=(e,t)=>{const a=Object(o.c)(e=>e.CollectionSlice.notInCollection),n=Object(o.c)(e=>e.spinnerSlice.visible),[r,c]=Object(l.useState)(""),[s,i]=Object(l.useState)(null),[m,u]=Object(l.useState)(null),[p,h]=Object(l.useState)(null),g=Object(o.b)();Object(l.useEffect)(()=>{t&&g(q(t,!1))},[t]),Object(l.useEffect)(()=>{if(n){const e=setTimeout(()=>{g(J()),g(q(t))},5e3);return()=>clearTimeout(e)}},[n]),Object(l.useEffect)(()=>{null!==p&&JSON.stringify(p)===JSON.stringify(a)?g(U({label1:"Estamos actualizando el listado de colecciones.",label2:"Esto est\xe1 tardando m\xe1s de los esperado, pero ya falta poco..."})):(h(null),u(a.filter(e=>e.title.includes(r))))},[a,r]);return{value:r,idActiveRow:s,dataCollection:m,handlerChangeValue:e=>{c(e.target.value)},handlerSetActive:e=>{i(e)},handlerGridAction:l=>{h([...a]),g(((e,t)=>async a=>{try{await d.a.post(`https://api.unsplash.com/collections/${e}/add`,{photo_id:t},{headers:{Authorization:`Bearer ${k}`}}),a(v({title:"Atenci\xf3n",message:"La imagen ha sido agregada de la colecci\xf3n exitosamente.",type:"success"})),a(I({refresh:!0})),a(U({label1:"Estamos actualizando el listado de colecciones.",label2:"Esto podr\xeda tardar unos segundos..."}))}catch(l){403===l.status?a(v({title:"Error",message:"Se ha excedido el m\xe1ximo de peticiones. Intentalo m\xe1s tarde.",type:"danger"})):a(v({title:"Error",message:"Error al agregar la im\xe1gen a la colecci\xf3n:"+l.message,type:"danger"}))}})(l,t)),e()},handlerNewCollection:()=>{""!==r?(h([...a]),g(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return async l=>{try{await d.a.post("https://api.unsplash.com/collections",{title:e,description:t,private:a},{headers:{Authorization:`Bearer ${k}`,"Content-Type":"application/json","Cache-Control":"no-cache"}}),l(v({title:"Atenci\xf3n",message:"Colecci\xf3n creada exitosamente",type:"success"})),l(I({refresh:!0})),l(U({label1:"Estamos actualizando el listado de colecciones.",label2:"Esto podr\xeda tardar unos segundos..."}))}catch(n){403===n.status?l(v({title:"Error",message:"Se ha excedido el m\xe1ximo de peticiones. Intentalo m\xe1s tarde.",type:"danger"})):l(v({title:"Error",message:"Error al crear la colecci\xf3n:"+n.message,type:"danger"}))}}}(r))):g(v({title:"Error",message:"Debe ingresar el nombre de la colecci\xf3n.",type:"danger"}))}}};var me=a(13),de=a.n(me);a(47);var ue=e=>{let{show:t,closeModal:a,imageId:l}=e;const{value:r,idActiveRow:c,dataCollection:o,handlerChangeValue:s,handlerSetActive:i,handlerGridAction:m,handlerNewCollection:d}=ie(a,l);return n.a.createElement(n.a.Fragment,null,t&&n.a.createElement("div",{className:"modal-container"},n.a.createElement("div",{className:"modal-background",onClick:a}),n.a.createElement("div",{className:"modal-form"},n.a.createElement("h4",null,"Add to Collections"),n.a.createElement("div",{className:"row"},n.a.createElement("input",{type:"text",className:"form-control",value:r,onChange:e=>s(e),placeholder:"collection name to search for"})),n.a.createElement("div",{className:"row info-add-collection"},n.a.createElement("div",{className:"p-info-count-matches col"},o&&n.a.createElement("p",null,"  ",o.length," matches ")),n.a.createElement("div",{className:"col btn-new-collection"},o&&0===o.length&&n.a.createElement("label",{onClick:()=>d()},n.a.createElement("img",{src:de.a,alt:"Nueva colecci\xf3n"}),"Create Collection"))),n.a.createElement("div",{className:"list-collection-modal-container"},n.a.createElement("div",{className:"list-collection-modal"},o&&o.map((e,t)=>n.a.createElement(se,{key:t,item:e,rowId:t,info:e.total_photos+" photos",isActive:c===t,handlerSetActive:i,handlerAction:m,textAction:"Add to Collection",iconAction:de.a})))))))};const pe=()=>{const[e,t]=Object(l.useState)(null),a=Object(o.c)(e=>e.spinnerSlice.visible),[n,r]=Object(l.useState)(!1),[c,s]=Object(l.useState)(null),m=Object(o.c)(e=>e.SelectedImageSlice.image),u=Object(o.c)(e=>e.CollectionSlice.inCollection),p=Object(o.b)(),h=Object(i.p)();Object(l.useEffect)(()=>{m?p(q(m.id)):h("/"),p(g())},[m]),Object(l.useEffect)(()=>{if(a){const e=setTimeout(()=>{p(J()),p(q(m.id))},5e3);return()=>clearTimeout(e)}},[a]),Object(l.useEffect)(()=>{null!==c&&JSON.stringify(c)===JSON.stringify(u)&&p(U({label1:"Estamos actualizando el listado de colecciones.",label2:"Esto est\xe1 tardando m\xe1s de los esperado, pero ya falta poco..."}))},[u]);return{idActiveRow:e,showModalAddToCollection:n,image:m,collections:u,getMonthAndYear:()=>{const e=new Date(m.created_at);return e.toLocaleString("es-ES",{month:"long"})+" "+e.getDate()+", "+e.getFullYear()},handlerSetActive:e=>{t(e)},handlerDownload:()=>{const e=m.description?m.description:"unsplash-image";p(((e,t)=>async a=>{try{const n=`https://api.unsplash.com/photos/${e}/download`,r=(await d.a.get(n,{headers:{Authorization:`Client-ID ${_}`}})).data.url,c=await d.a.get(r,{responseType:"blob"}),o=new Blob([c.data],{type:"image/jpeg"}),s=document.createElement("a");s.href=URL.createObjectURL(o),s.download=`${t}.jpg`,document.body.appendChild(s),s.click(),document.body.removeChild(s),a(v({title:"Atenci\xf3n",message:"Imagen descargada correctamente desde Unsplash.",type:"success"}))}catch(l){403===l.status?a(v({title:"Error",message:"Se ha excedido el m\xe1ximo de peticiones. Intentalo m\xe1s tarde.",type:"danger"})):a(v({title:"Error",message:"Error al descargar la im\xe1gen:"+l.message,type:"danger"}))}})(m.id,e))},handlerRemoveAction:e=>{s([...u]),p(((e,t)=>async a=>{try{await d.a.delete(`https://api.unsplash.com/collections/${e}/remove`,{headers:{Authorization:`Bearer ${k}`},data:{photo_id:t}}),a(v({title:"Atenci\xf3n",message:"La imagen ha sido eliminada de la colecci\xf3n.",type:"success"})),a(I({refresh:!0})),a(U({label1:"Estamos actualizando el listado de colecciones.",label2:"Esto podr\xeda tardar unos segundos..."}))}catch(l){403===l.status?a(v({title:"Error",message:"Se ha excedido el m\xe1ximo de peticiones. Intentalo m\xe1s tarde.",type:"danger"})):a(v({title:"Error",message:"Error al intentar eliminar la im\xe1gen de la colecci\xf3n:"+l.message,type:"danger"}))}})(e,m.id))},handlerAddToCollection:()=>{r(!n)},handlerCloseModal:()=>{r(!1)}}};var he=a(27),ge=a.n(he),Ee=a(28),be=a.n(Ee);a(48);var ve=()=>{const{idActiveRow:e,showModalAddToCollection:t,image:a,collections:l,getMonthAndYear:r,handlerSetActive:c,handlerDownload:o,handlerRemoveAction:s,handlerAddToCollection:i,handlerCloseModal:m}=pe();return n.a.createElement(n.a.Fragment,null,a&&n.a.createElement(ue,{show:t,closeModal:m,imageId:a.id}),a&&n.a.createElement("div",{className:"row container-details-image"},n.a.createElement("div",{className:"col"},a&&n.a.createElement("img",{className:"detail-fullimage",src:a.urls.full,alt:a.alt_description})),n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"row"},n.a.createElement("div",null,n.a.createElement("img",{className:"user-avatar",src:a.user.profile_image.small,alt:"Avatar usuario"}),n.a.createElement("span",{className:"user-name-span"},a.user.name)),n.a.createElement("div",{className:"div-user-info"},n.a.createElement("p",{className:"info published-on"},"Published on ",r())),n.a.createElement("div",{className:"row"},n.a.createElement("button",{className:"btn btn-link-light my-grey-button",onClick:()=>i()},n.a.createElement("img",{src:de.a,alt:"+"})," Add to Collection"),n.a.createElement("button",{className:"btn btn-link-light my-grey-button",onClick:e=>o()},n.a.createElement("img",{src:ge.a,alt:"|"}),"Download"))),n.a.createElement("div",{className:"container collections-container"},n.a.createElement("h4",null,"Collections"),n.a.createElement("div",{className:"list-collection"},l&&l.map((t,a)=>n.a.createElement(se,{key:a,item:t,rowId:a,info:t.total_photos+" photos",isActive:e===a,handlerSetActive:c,handlerAction:s,textAction:"Remove from Collection",iconAction:be.a})))))))};a(49);var fe=e=>{let{data:t}=e;const{capitalCase:a,handlerClickCard:l}=(e=>{const t=Object(i.p)(),a=Object(o.b)();return{capitalCase:e=>e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase(),handlerClickCard:()=>{a(T({id:e.id,title:e.title,cantPhotos:e.total_photos})),t("/collection_photos/"+e.id)}}})(t);return n.a.createElement("div",{className:"col collection-card",onClick:()=>l()},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col img-left "+(t.total_photos<=1?"una-foto":2===t.total_photos?"dos-fotos":"tres-fotos")},n.a.createElement("img",{className:t.total_photos<=1?"una-foto":2===t.total_photos?"dos-fotos":"tres-fotos",src:t.preview_photos?t.preview_photos[0].urls.small:oe.a,alt:t.title})),2===t.total_photos&&n.a.createElement("div",{className:"col img-right-1"},n.a.createElement("img",{className:t.total_photos>2?"tres-fotos":"",src:t.preview_photos?t.preview_photos[1].urls.small:oe.a,alt:t.title})),t.total_photos>=3&&n.a.createElement("div",{className:"col img-right-2"},n.a.createElement("div",{className:"row"},n.a.createElement("img",{className:"img-1",src:t.preview_photos?t.preview_photos[1].urls.small:oe.a,alt:t.title})),n.a.createElement("div",{className:"row"},n.a.createElement("img",{className:"img-2",src:t.preview_photos?t.preview_photos[2].urls.small:oe.a,alt:t.title})))),n.a.createElement("label",{className:"row lbl-nombre"},a(t.title)),n.a.createElement("label",{className:"row lbl-info"},t.total_photos," photos"))};a(50);var ye=()=>{const e=Object(o.c)(e=>e.CollectionSlice.allCollections),t=Object(o.b)();return Object(l.useEffect)(()=>{t(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return async t=>{try{const l=await d.a.get("https://api.unsplash.com/users/marcelo_b/collections",{params:{per_page:9,page:e},headers:{Authorization:`Bearer ${k}`}});t(j({data:l.data}))}catch(a){403===a.status?t(v({title:"Error",message:"Se ha excedido el m\xe1ximo de peticiones. Intentalo m\xe1s tarde.",type:"danger"})):t(v({title:"Error",message:"Error al obtener las colecciones:"+a.message,type:"danger"}))}}}())},[]),n.a.createElement("div",{className:"row container-page collection-container-page"},n.a.createElement("div",{className:"title-container"},n.a.createElement("div",null),n.a.createElement("div",{className:"title"},n.a.createElement("h1",{className:"texto-gradiente"},"Collections"),n.a.createElement("label",null,"Explore the world through collections of beatifull",n.a.createElement("br",null),"photos free to use under the ",n.a.createElement("span",{className:"bold-underline"},"Unsplash License"),".")),n.a.createElement("div",null)),e&&e.map((e,t)=>n.a.createElement(fe,{key:t,data:e})))};var Ne=()=>{const{id:e}=Object(i.r)(),{title:t,cantPhotos:a,photos:r}=Object(o.c)(e=>e.SelectedCollectionSlice),c=Object(o.b)();return Object(l.useEffect)(()=>{c(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return async a=>{try{const n=await d.a.get(`https://api.unsplash.com/collections/${e}/photos`,{params:{per_page:20,page:t},headers:{Authorization:`Bearer ${k}`}});a(R({photos:n.data}))}catch(l){403===l.status?a(v({title:"Error",message:"Se ha excedido el m\xe1ximo de peticiones. Intentalo m\xe1s tarde.",type:"danger"})):a(v({title:"Error",message:"Error al obtener las fotos de la colecci\xf3n:"+l.message,type:"danger"}))}}}(e))},[e]),n.a.createElement("div",{className:"collection-container-page"},n.a.createElement("div",{className:"title-container"},n.a.createElement("div",{className:"title"},n.a.createElement("h1",{className:"texto-gradiente"},t),n.a.createElement("label",null,a," photos"))),r&&n.a.createElement(ae,{data:r}))};a(51);var Se=e=>{let{id:t,title:a,message:r,type:c="success"}=e;const{showAlert:s,progress:i,alertRef:m,darkenColor:d,closeAlert:u}=(()=>{const[e,t]=Object(l.useState)(),[a,n]=Object(l.useState)(100),r=Object(l.useRef)(null),c=Object(o.b)();Object(l.useEffect)(()=>{const e=setInterval(()=>{n(e=>e>0?e-1:0)},100);t(!0);const a=setTimeout(()=>s(),1e4);return()=>{clearTimeout(a),clearInterval(e)}},[]);const s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t(!1),c(f({id:e}))};return{showAlert:e,progress:a,alertRef:r,darkenColor:()=>{if(r.current){const e=.2,t=getComputedStyle(r.current).backgroundColor,a=t.match(/\d+/g);if(!a)return t;const[l,n,c]=a.map(t=>Math.max(0,Math.min(255,Math.floor(t*(1-e)))));return`rgb(${l}, ${n}, ${c})`}return""},closeAlert:s}})();return s&&n.a.createElement("div",{className:"alert alert-"+c+" alert-dismissible fade show alert-compomnent",ref:m},n.a.createElement("strong",null,a+":")," ",r,n.a.createElement("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:()=>u(t)}),n.a.createElement("div",{className:"rest-time",style:{width:i+"%",background:d()}}))};a(52);var Ce=()=>{const e=Object(o.c)(e=>e.messageSlice);return n.a.createElement("div",{className:"error-container"},e&&e.map((e,t)=>n.a.createElement(Se,{key:t,id:e.id,title:e.title,message:e.message,type:e.type})))};a(53);var we=()=>{const{visible:e,label1:t,label2:a}=Object(o.c)(e=>e.spinnerSlice);return e&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"spinner-background"}),n.a.createElement("div",{className:"spinner-container"},n.a.createElement("div",{className:"spinner-border"}),(t||a)&&n.a.createElement("div",{className:"spinner-label-container"},t&&n.a.createElement("label",{className:"spinner-label-1"},t),a&&n.a.createElement("label",{className:"spinner-label-2"},a))))};var Oe=()=>{const[e,t]=Object(l.useState)(!1);return n.a.createElement(s.a,null,n.a.createElement(Ce,null),n.a.createElement(we,null),n.a.createElement(ee,null),n.a.createElement("div",{className:"navbar-space"}),n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:"/",element:n.a.createElement(m,{element:n.a.createElement(Y,null),auth:e})}),n.a.createElement(i.b,{exact:!0,path:"/home",element:n.a.createElement(m,{element:n.a.createElement(Y,null),auth:e})}),n.a.createElement(i.b,{exact:!0,path:"/search_result",element:n.a.createElement(m,{element:n.a.createElement(re,null),auth:e})}),n.a.createElement(i.b,{exact:!0,path:"/image_detail",element:n.a.createElement(m,{element:n.a.createElement(ve,null),auth:e})}),n.a.createElement(i.b,{exact:!0,path:"/collections",element:n.a.createElement(m,{element:n.a.createElement(ye,null),auth:e})}),n.a.createElement(i.b,{exact:!0,path:"/collection_photos/:id",element:n.a.createElement(m,{element:n.a.createElement(Ne,null),auth:e})})))},je=Object(u.a)({reducer:{searchSlice:E,messageSlice:N,SelectedImageSlice:B,CollectionSlice:x,SelectedCollectionSlice:$,spinnerSlice:V}});a(54);var Ae=class extends l.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t}),console.error("ErrorBoundary atrap\xf3 un error:",e,t)}render(){var e;return this.state.hasError?n.a.createElement("div",null,n.a.createElement("h1",null,"Algo sali\xf3 mal."),n.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),n.a.createElement("br",null),null===(e=this.state.errorInfo)||void 0===e?void 0:e.componentStack)):this.props.children}};var Ie=function(){return n.a.createElement(o.a,{store:je},n.a.createElement(Ae,null,n.a.createElement(Oe,null)))};var xe=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,58)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=t;a(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(Ie,null)),xe()}],[[29,1,2]]]);
//# sourceMappingURL=main.d4a26d5e.chunk.js.map