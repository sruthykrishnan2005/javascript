(this["webpackJsonpcroma-pdp-app"]=this["webpackJsonpcroma-pdp-app"]||[]).push([[39],{1009:function(e,t,a){"use strict";a.r(t),a.d(t,"Footer",(function(){return F})),a.d(t,"mapStateToProps",(function(){return j})),a.d(t,"mapDispatchToProps",(function(){return L}));var n=a(0),o=a.n(n),r=a(78),l=a(8),c=a(16),i=a(13);var s=e=>{const t=Object(l.a)(),a=Object(c.a)(),n=Object(i.a)();let o="",r="",s=a&&(a.previousPagename?a.previousPagename:"");const m=a&&(a.currentPagename?a.currentPagename:"");let u="",d="",p="";if(p="tcp"===localStorage.getItem("isTCPBody")?"yes":"No",t?(o="registered user",d=t):(o="guest user",d=""),r=localStorage.getItem("3hrPincode")?JSON.parse(localStorage.getItem("3hrPincode")):"",u=localStorage.getItem("preferredStore")?JSON.parse(localStorage.getItem("preferredStore")):"","undefined"!==typeof window){window.digitalData={page:{pageName:m,channel:"croma:"+m,prevPageName:s,pinCode:r,loginStatus:o,customerID:d,storeName:u,emailID:n.user_email,mobNo:n.user_mobile,tcpCustomer:p},event:{linkName:`${m} : ${e}`,linkType:"footer_clicked",linkPosition:"footer"}};try{"undefined"!==typeof window._satellite&&window._satellite&&window._satellite.track("otherClick")}catch(g){}}},m=a(21);var u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"N/A",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"N/A";const a=Object(m.c)(),{pagetype:n,source_page_url:o,previous_page_url:r,destination_page_url:l,login_trigger:c,customer_hash:i,platform:s}=a;window.dataLayer.push({event:"all_pages_14_footer_navigation_interaction",pagetype:n,source_page_url:o,previous_page_url:r,destination_page_url:l,click_text:e,interaction_type:"Click",header_element:"N/A",sequence:"N/A",total_elements:t,section:n,platform:s,login_trigger:i?c:"N/A",login_status:!!i,user_id:i})};const d=a(17).Link;var p=function(e){let{item:t,sectionFor:a}=e;const[r,l]=Object(n.useState)(!1),c=/\/c/,i=/\?q=/;Object(n.useEffect)(()=>{l("true"===localStorage.getItem("isCSC"))},[]);const m=(e,t)=>{let a="";a="usefulLinksData"==e?"Useful Links:"+t:"Products:"+t,u(a)};try{return o.a.createElement("li",{className:"link-item","data-testid":"section-list-item"},(null===t||void 0===t?void 0:t.linkName)&&(null===t||void 0===t?void 0:t.linkName.toUpperCase().includes("UNBOXED"))?o.a.createElement("a",{href:`${t.url}${r&&"productsData"===a&&c.test(null===t||void 0===t?void 0:t.url)?i.test(null===t||void 0===t?void 0:t.url)?"&isCSCCustomer=true":"?isCSCCustomer=true":""}`,target:"_blank",className:"link",onClick:()=>{s(t.linkName),m(a,t.linkName)}},t.linkName):o.a.createElement(d,{to:`${t.url}${r&&"productsData"===a&&c.test(null===t||void 0===t?void 0:t.url)?i.test(null===t||void 0===t?void 0:t.url)?"&isCSCCustomer=true":"?isCSCCustomer=true":""}`,className:"link",onClick:()=>{s(t.linkName),m(a,t.linkName)}},t.linkName))}catch(p){return console.log(p),o.a.createElement(o.a.Fragment,null," ")}};var g=function(e){let{data:t,isCSC:a,sectionFor:n}=e;try{return o.a.createElement("ul",{className:"link-list","data-testid":"section-list"},t&&Array.isArray(t)&&t.map((e,t)=>{if(!a||"Store Locator"!==e.linkName)return o.a.createElement(p,{item:e,key:t,sectionFor:n})}))}catch(r){return console.log(r),o.a.createElement(o.a.Fragment,null," ")}};var f=function(e){let{title:t,panel:a,data:n,expanded:r,handlerFooterAccord:l,isCSC:c,sectionFor:i}=e;try{return o.a.createElement("li",{className:"block-item "+(r===a?"active":""),"data-testid":"Section"},o.a.createElement("div",{className:"quicklinks"},o.a.createElement("p",{className:"title",onClick:l(a)},t," ",o.a.createElement("i",{className:"icon icon-chevron"})),n&&o.a.createElement(g,{data:n,isCSC:c,sectionFor:i})))}catch(s){return console.log(s),o.a.createElement(o.a.Fragment,null," ")}},S=a(2),y=a(88),h=a.n(y);var k=(e,t,a)=>{const n=Object(c.a)();let o="",r="",l="",s=a?h.a.encrypt(a,S.a.AES_ENCRYPTION_SECRET_KEY).toString():"";const m=Object(i.a)(),u=n&&(n.previousPagename?n.previousPagename:""),d=n&&(n.currentPagename?n.currentPagename:"");o=localStorage.getItem("3hrPincode")?JSON.parse(localStorage.getItem("3hrPincode")):"",l="tcp"===localStorage.getItem("isTCPBody")?"yes":"No",r=localStorage.getItem("preferredStore")?JSON.parse(localStorage.getItem("preferredStore")):"",e=e||"",t=t||"","undefined"!==typeof window&&(window.digitalData={page:{pageName:d,channel:"croma:"+d,prevPageName:u,pinCode:o,storeName:r,emailID:m.user_email,mobNo:m.user_mobile,subscriberID:s,tcpCustomer:l},event:{linkName:e,linkType:"clicked",linkPosition:t}});try{"undefined"!=typeof window._satellite&&window._satellite&&window._satellite.track("otherClick")}catch(p){}};var C=e=>{const t=Object(m.c)(),{pagetype:a,source_page_url:n,previous_page_url:o,destination_page_url:r,platform:l}=t;window.dataLayer.push({event:"connect_with_us",pagetype:a,source_page_url:n,previous_page_url:o,destination_page_url:r,connect_with_us_email_id:e,platform:l})};var N=function(){const[e,t]=Object(n.useState)(""),[a,r]=Object(n.useState)("Enter Email ID");try{return o.a.createElement("div",{className:"form-group","data-testid":"email"},o.a.createElement("div",{className:"add-on reverse"},o.a.createElement("button",{type:"button",className:"input-group-addon"},o.a.createElement("i",{className:"icon icon-back",onClick:()=>function(){if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)){u("Connect with us:Submit"),C(e);const a=new URLSearchParams;a.append("email",e);const n={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a};fetch(S.a.emailUrl+"action/subscribeSubmit.php",n).then(async a=>{try{const o=await a.text();o&&(o.toLowerCase().includes("thank you")?(fetch(S.a.apiUrl+"newsletter/allchannels/v1/emailsubscription",n).then(async e=>{try{await e.text()}catch(t){}}),r(" Thank You"),k("subscribe","footer",e),t("")):o.toLowerCase().includes("subscribed")?(r(" Already subscribed"),t("")):(r(""+o),t("")))}catch(o){r(" Please try again"),t("")}})}else r("Invalid Email Address"),t("")}()})),o.a.createElement("input",{type:"text",className:"formControl",placeholder:a,value:e,onChange:e=>function(e){r("Enter Email ID"),t(e)}(e.target.value),onKeyDown:e=>{let t=e.key;0==e.target.value.length&&8!=t&&13!=t&&16!=t&&9!=t&&20!=t&&46!=t&&u("Connect with us:Enter email ID")}})))}catch(l){return console.log(l),o.a.createElement(o.a.Fragment,null," ")}};var v=function(e){let{item:t}=e;try{return o.a.createElement("li",{className:"social-item","data-testid":"sociallink-list-item"},o.a.createElement("div",{onClick:()=>u("Connect with us:"+(null===t||void 0===t?void 0:t.linkName))},o.a.createElement("a",{href:t.url,target:"_blank",className:`icon icon-${t.iconName} icon-${t.iconName}-imagekit`})))}catch(a){return console.log(a),o.a.createElement(o.a.Fragment,null," ")}};var E=function(e){let{data:t}=e;try{return o.a.createElement("ul",{className:"social","data-testid":"socialLink-list"},t&&Array.isArray(t)&&t.map((e,t)=>o.a.createElement(v,{item:e,key:t})))}catch(a){return console.log(a),o.a.createElement(o.a.Fragment,null," ")}},_=a(1);var w=function(e){let{CopyRightData:t,socialIconsData:a}=e;try{return o.a.createElement("li",{className:"block-item","data-testid":"connect"},o.a.createElement("div",{className:"quicklinks"},o.a.createElement("p",{className:"title"},_.a.Connectwithus),o.a.createElement("div",{className:"footer-action"},o.a.createElement(N,null)),a&&o.a.createElement(E,{data:a}),o.a.createElement("span",{className:"copywrite"},t&&t.name)))}catch(n){return console.log(n),o.a.createElement(o.a.Fragment,null," ")}},b=a(29),A=a(397),I=a(82),P=(a(916),a(309));const D=o.a.memo(f),O=o.a.memo(w);function F(e){let{footerData:t,loadFooterData:a}=e;const[l,c]=o.a.useState(!1),[i,s]=o.a.useState(!1),[m,u]=o.a.useState(!1),d=Object(r.useLocation)();Object(n.useEffect)(()=>{t||a(),s("undefined"!==typeof Storage&&"true"===localStorage.getItem("isCSC"))},[]);let p=[],g=[],f=[],S=[];if(t){let e=t.contentSlots&&t.contentSlots.contentSlot&&Array.isArray(t.contentSlots.contentSlot)&&t.contentSlots.contentSlot.find(e=>"UsefulLinksSlot"===e.slotId);e=e&&e.components&&e.components.component&&Array.isArray(e.components.component)&&e.components.component[0]&&e.components.component[0].navigationNode.entries;let a=t.contentSlots&&t.contentSlots.contentSlot&&Array.isArray(t.contentSlots.contentSlot)&&t.contentSlots.contentSlot.find(e=>"ProductsSlot"===e.slotId);a=a&&a.components&&a.components.component&&Array.isArray(a.components.component)&&a.components.component[0]&&a.components.component[0].navigationNode.entries,p=e,g=a;const n=t.contentSlots&&t.contentSlots.contentSlot&&Array.isArray(t.contentSlots.contentSlot)&&t.contentSlots.contentSlot.find(e=>"ConnectWithUsSlot"===e.slotId),o=n&&n.components&&n.components.component&&Array.isArray(n.components.component)&&n.components.component;if(o&&Array.isArray(o)){const e=o.map(e=>e.uid);if(e.includes("PWAFooterSocialMediaComponent")){f=o.find(e=>"PWAFooterSocialMediaComponent"===e.uid).navigationNode.entries}if(e.includes("PWAFooterCopyRightComponent")){S=o.find(e=>"PWAFooterCopyRightComponent"===e.uid)}}}const y=Object(n.useCallback)(e=>t=>{l===e?c(!1):(c(e),setTimeout((function(){document.getElementById("Useful Links").scrollIntoView()}),50))},[l]);Object(n.useLayoutEffect)(()=>{"undefined"!==typeof window&&(window.onpopstate=e=>{const t=window.localStorage.getItem("clickedPanelId");null!==t&&setTimeout((function(){document.getElementById(t).scrollIntoView()}),1e3)})}),Object(n.useEffect)(()=>{Object(P.a)()?u(!0):u(!1)},[d]);try{return o.a.createElement(o.a.Fragment,null,"undefined"!==typeof window&&"tcp"!==localStorage.getItem("isTCPBody")?o.a.createElement("div",{className:"bs-footer "+(m?"hide-TD-scenario":""),style:{clear:"both"},"data-testid":"footer",id:_.a.usefulLinks,onClick:()=>Object(I.a)(_.a.usefulLinks)},o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"footer-list"},!i&&f&&S&&o.a.createElement(O,{socialIconsData:f,CopyRightData:S}),p&&o.a.createElement(D,{sectionFor:"usefulLinksData",isCSC:i,title:_.a.usefulLinks,panel:_.a.panel1,data:p,expanded:l,handlerFooterAccord:y}),g&&o.a.createElement(D,{sectionFor:"productsData",isCSC:i,title:_.a.products,panel:_.a.panel2,data:g,expanded:l,handlerFooterAccord:y})))):"")}catch(h){return console.log(h),o.a.createElement(o.a.Fragment,null," ")}}const j=e=>({footerData:e.footerReducer&&e.footerReducer.footerData}),L=e=>({loadFooterData:()=>{e(Object(A.a)())}});t.default=Object(b.b)(j,L)(F)},916:function(e,t,a){}}]);