(this["webpackJsonpmaterial-ui"]=this["webpackJsonpmaterial-ui"]||[]).push([[0],{40:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a(0),c=a.n(n),i=a(10),l=a.n(i),r=(a(57),a(12)),o=a(37),u=a(101),b=a(103),_=a(104),j=a(102),d=a(108),p=a(109),m=a(106),h=a(99),O=(a(58),Object(h.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)}}})));function x(e){var t=e.isSimple,a=e.isRussian,n=O(),i=c.a.useState(!1),l=Object(r.a)(i,2),h=l[0],x=l[1],f=c.a.useRef(null),g=function(e){f.current&&f.current.contains(e.target)||x(!1)};function v(e){"Tab"===e.key&&(e.preventDefault(),x(!1))}var N=c.a.useRef(h);return c.a.useEffect((function(){!0===N.current&&!1===h&&f.current.focus(),N.current=h}),[h]),Object(s.jsx)("div",{className:"".concat(n.root," NavMaterial__wrapper"),children:Object(s.jsxs)("div",{children:[Object(s.jsx)(u.a,{ref:f,className:"nav__button".concat(t?" nav__button_simple":""),"aria-controls":h?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){x((function(e){return!e}))},children:a?"\u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b":"Other projects"}),Object(s.jsx)(d.a,{open:h,anchorEl:f.current,role:void 0,transition:!0,disablePortal:!0,children:function(e){var t=e.TransitionProps,n=e.placement;return Object(s.jsx)(_.a,Object(o.a)(Object(o.a)({},t),{},{style:{transformOrigin:"bottom"===n?"center top":"center bottom"},children:Object(s.jsx)(j.a,{children:Object(s.jsx)(b.a,{onClickAway:g,children:Object(s.jsxs)(m.a,{autoFocusItem:h,id:"menu-list-grow",onKeyDown:v,className:"MenuList",children:[Object(s.jsx)(p.a,{onClick:g,children:Object(s.jsx)("a",{href:"https://alpavlov.students.nomoreparties.space/",target:"_blank",rel:"noreferrer",className:"MenuItem",children:"News Explorer"})}),Object(s.jsx)(p.a,{onClick:g,children:Object(s.jsx)("a",{href:"https://sh4n-oldone.github.io/russian-travel/",target:"_blank",rel:"noreferrer",className:"MenuItem",children:a?"\u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u043f\u043e \u0420\u043e\u0441\u0441\u0438\u0438":"Russia on rails"})})]})})})}))}})]})})}var f=a(107),g=a(105);a(63);function v(e){var t=e.switchBackground,a=e.isSimple,n=e.switchLanguage,c=e.isRussian;return Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)(x,{isSimple:a,isRussian:c}),Object(s.jsx)("h1",{className:"header__title".concat(a?" header__title_simple":""),children:"Pavlov's testground"}),Object(s.jsxs)("div",{className:"switches__wrapper",children:[Object(s.jsx)(f.a,{className:"header__button".concat(a?" header__button_simple":""),value:"start",control:Object(s.jsx)(g.a,{onChange:t,color:"default"}),label:a?c?"\u041f\u0440\u0438\u043a\u043e\u043b\u044c\u043d\u0435\u0435":"More fun":c?"\u0421\u0435\u0440\u044c\u0451\u0437\u043d\u0435\u0435":"More serious",labelPlacement:"end"}),Object(s.jsx)(f.a,{className:"header__button".concat(a?" header__button_simple":""),value:"start",control:Object(s.jsx)(g.a,{onChange:n,color:"default"}),label:c?"English!":"\u041d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c!",labelPlacement:"end"})]})]})}var N=a(43),w=a.n(N),y=a(44),S=a.n(y),k=a(45),C=a.n(k);a(64);function R(e){var t=e.isSimple;return Object(s.jsxs)("div",{className:"nav-footer".concat(t?" nav-footer_simple":""),children:[Object(s.jsx)("a",{href:"tel: +79254277254",rel:"noopener noreferrer",target:"_blank",children:Object(s.jsx)(w.a,{style:t?{color:"white"}:{color:"orange"}})}),Object(s.jsx)("a",{href:"mailto: dotheimpossible@protonmail.com",rel:"noopener noreferrer",target:"_blank",children:Object(s.jsx)(S.a,{style:t?{color:"white"}:{color:"orange"}})}),Object(s.jsx)("a",{href:"https://github.com/Sh4n-Oldone",rel:"noopener noreferrer",target:"_blank",children:Object(s.jsx)(C.a,{style:t?{color:"white"}:{color:"orange"}})})]})}a(66);function E(e){var t=e.isSimple,a=e.isRussian;return Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsxs)("p",{className:"footer__copyright".concat(t?" footer__copyright_simple":""),children:["\xa9 2021 ",a?"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u041f\u0430\u0432\u043b\u043e\u0432":"Alex Pavlov"]}),Object(s.jsx)(R,{isSimple:t})]})}a(40);function I(e){var t=e.isSimple,a=Object(n.useState)(-13),c=Object(r.a)(a,2),i=c[0],l=c[1],o=Object(n.useState)(18),u=Object(r.a)(o,2),b=u[0],_=u[1],j=Object(n.useState)(33),d=Object(r.a)(j,2),p=d[0],m=d[1],O=Object(n.useState)(5),x=Object(r.a)(O,2),f=x[0],v=x[1],N=Object(n.useState)({r:0,g:0,b:0}),w=Object(r.a)(N,2),y=w[0],S=w[1],k=Object(n.useState)(.8),C=Object(r.a)(k,2),R=C[0],E=C[1],I=Object(n.useState)(!1),L=Object(r.a)(I,2),M=L[0],P=L[1],z="".concat(M?"inset":""," \n                        ").concat(i,"px \n                        ").concat(b,"px \n                        ").concat(p,"px \n                        ").concat(f,"px rgba(\n                          ").concat(y.r,", \n                          ").concat(y.g,", \n                          ").concat(y.b,", \n                        ").concat(R,")"),B=Object(h.a)((function(e){return{shadows:{"box-shadow":z}}}))();return Object(n.useEffect)((function(){S(!0===t?{r:255,g:255,b:255}:{r:0,g:0,b:0})}),[t]),Object(s.jsxs)("section",{className:"shadows-box\n      ".concat(t?" shadows-box__simple":"","\n      ").concat(""),children:[Object(s.jsxs)("div",{className:"shadows-box__sliders".concat(t?" shadows-box__sliders_simple":""),children:[Object(s.jsxs)("div",{className:"input-slider__wrapper",children:[Object(s.jsx)("p",{className:"input-slider__name",children:"Horizontal length"}),Object(s.jsx)("input",{type:"range",name:"horizontalLength",min:"-200",max:"200",value:"number"===typeof i?i:0,onChange:function(e){l(""===e.target.value?"":Number(e.target.value))},className:"input-slider"}),Object(s.jsx)("label",{className:"input-slider__label".concat(t?" input-slider__label_simple":""),children:i})]}),Object(s.jsxs)("div",{className:"input-slider__wrapper",children:[Object(s.jsx)("p",{className:"input-slider__name",children:"Vertical length"}),Object(s.jsx)("input",{type:"range",name:"horizontalLength",min:"-200",max:"200",value:"number"===typeof b?b:0,onChange:function(e){_(""===e.target.value?"":Number(e.target.value))},className:"input-slider"}),Object(s.jsx)("label",{className:"input-slider__label".concat(t?" input-slider__label_simple":""),children:b})]}),Object(s.jsxs)("div",{className:"input-slider__wrapper",children:[Object(s.jsx)("p",{className:"input-slider__name",children:"Blur radius"}),Object(s.jsx)("input",{type:"range",name:"horizontalLength",min:"0",max:"300",value:"number"===typeof p?p:0,onChange:function(e){m(""===e.target.value?"":Number(e.target.value))},className:"input-slider"}),Object(s.jsx)("label",{className:"input-slider__label".concat(t?" input-slider__label_simple":""),children:p})]}),Object(s.jsxs)("div",{className:"input-slider__wrapper",children:[Object(s.jsx)("p",{className:"input-slider__name",children:"Spread radius"}),Object(s.jsx)("input",{type:"range",name:"horizontalLength",min:"-200",max:"200",value:"number"===typeof f?f:0,onChange:function(e){v(""===e.target.value?"":Number(e.target.value))},className:"input-slider"}),Object(s.jsx)("label",{className:"input-slider__label".concat(t?" input-slider__label_simple":""),children:f})]}),Object(s.jsxs)("div",{className:"input-slider__wrapper",children:[Object(s.jsx)("p",{className:"input-slider__name",children:"Opacity"}),Object(s.jsx)("input",{type:"range",name:"horizontalLength",min:"0",max:"1",step:"0.01",value:"number"===typeof R?R:0,onChange:function(e){E(""===e.target.value?"":Number(e.target.value))},className:"input-slider"}),Object(s.jsx)("label",{className:"input-slider__label".concat(t?" input-slider__label_simple":""),children:R})]}),Object(s.jsxs)("div",{className:"input-slider__wrapper input-slider__center",children:[Object(s.jsx)("p",{className:"input-slider__name input-slider__name_center",children:"Shadow color"}),Object(s.jsx)("input",{type:"color",name:"ShadowColor",onChange:function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.target.value);S(t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:{r:0,g:0,b:0})},className:"input-slider input-slider_shadow-color"})]}),Object(s.jsxs)("div",{className:"input-slider__wrapper input-slider__center",children:[Object(s.jsx)("p",{className:"input-slider__name input-slider__name_center",children:"Inset"}),Object(s.jsx)(g.a,{onChange:function(){P(!M)},color:"primary"})]}),Object(s.jsx)("div",{className:"input-slider__wrapper",children:Object(s.jsxs)("p",{className:"input-slider__name",children:["box-shadow: ",z]})})]}),Object(s.jsx)("div",{className:"shadows-box__result".concat(t?" shadows-box__result_simple":""),children:Object(s.jsx)("div",{className:"shadows-box__result_box ".concat(B.shadows).concat(t?" shadows-box__result_box_simple":"")})})]})}a(67),a(68);var L=a.p+"static/media/sun.40900a29.svg",M=a.p+"static/media/me.46e6173b.png";function P(e){var t=e.isSimple,a=e.isRussian,c=Object(n.useState)(!0),i=Object(r.a)(c,2),l=i[0],o=i[1],u=Object(n.useState)(!1),b=Object(r.a)(u,2),_=b[0],j=b[1],d=Object(n.useState)(!1),p=Object(r.a)(d,2),m=p[0],h=p[1],O=Object(n.useState)(!1),x=Object(r.a)(O,2),f=x[0],g=x[1];return Object(s.jsx)("section",{className:"about",children:Object(s.jsxs)("div",{className:"about__wrapper".concat(t?" about__wrapper_simple":""),children:[Object(s.jsxs)("div",{className:"about__left-block".concat(t?" about__left-block_simple":""),children:[Object(s.jsx)("button",{className:"button-style__reset about__button about__button_default".concat(t?" about__button_simple":""),type:"button",onClick:function(){o(!0),j(!1),h(!1),g(!1)},children:a?"\u041a\u0440\u0430\u0442\u043a\u043e":"Briefly"}),Object(s.jsx)("button",{className:"button-style__reset about__button about__button_author".concat(t?" about__button_simple":""),type:"button",onClick:function(){o(!1),j(!0),h(!1),g(!1)},children:a?"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435":"About me"}),Object(s.jsx)("button",{className:"button-style__reset about__button about__button_skills".concat(t?" about__button_simple":""),type:"button",onClick:function(){o(!1),j(!1),h(!0),g(!1)},children:a?"\u041e \u043d\u0430\u0432\u044b\u043a\u0430\u0445":"My skills"}),Object(s.jsx)("button",{className:"button-style__reset about__button about__button_job".concat(t?" about__button_simple":""),type:"button",onClick:function(){o(!1),j(!1),h(!1),g(!0)},children:a?"\u041e \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b":"Personal interests"})]}),Object(s.jsxs)("div",{className:"about__right-block".concat(t?" about__right-block_simple":""),children:[Object(s.jsxs)("div",{className:"about__default".concat(l?"":" about__default_hidden"),children:[Object(s.jsx)("p",{className:"about__text".concat(t?" about__text_simple":""),children:"\u041d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u043e\u0441\u043d\u043e\u0432\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u044f \u0441\u043e\u0431\u0438\u0440\u0430\u043b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e CRA, \u043f\u043e \u0432\u0441\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0438\u0437 material-ui \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u0441\u044f \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044f\u043c\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438."}),Object(s.jsx)("p",{className:"about__text".concat(t?" about__text_simple":""),children:"\u0422\u0430\u043a \u0436\u0435 \u044f \u0432\u044b\u0431\u0440\u0430\u043b \u0434\u043b\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 sass (\u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 scss, \u0438\u0437-\u0437\u0430 \u043b\u0438\u0447\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430) \u0438 \u0441\u0442\u0430\u0440\u0430\u043b\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0435\u0451 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430 - \u0432\u044b\u043d\u0435\u0441 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c."})]}),Object(s.jsxs)("div",{className:"about__author".concat(_?"":" about__author_hidden"),children:[Object(s.jsxs)("div",{className:"about__author_image-wrapper",children:[Object(s.jsx)("img",{className:"about__author_image-background-image",src:L,alt:"sun emoji on background"}),Object(s.jsx)("img",{className:"about__author_image-photo",src:M,alt:"author"})]}),Object(s.jsx)("p",{className:"about__text".concat(t?" about__text_simple":""),children:"Consectetur nostrud proident ipsum pariatur sit consectetur. Quis laborum   elit labore est nulla consequat aliquip id id veniam. Excepteur sunt laboris  excepteur ullamco labore. Duis exercitation culpa do aliqua commodo ut   voluptate dolore. Esse id magna amet velit nulla amet tempor ullamco  deserunt laborum. Veniam mollit ut est culpa consectetur irure. Ex commodo   culpa ea proident sit elit labore ipsum amet commodo nulla cillum."})]}),Object(s.jsx)("div",{className:"about__skills".concat(m?"":" about__skills_hidden")}),Object(s.jsx)("div",{className:"about__job".concat(f?"":" about__job_hidden")})]})]})})}a(69);function z(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),l=Object(r.a)(i,2),o=l[0],u=l[1];return Object(s.jsx)("div",{className:"app".concat(a?" app_simple":""),children:Object(s.jsxs)("div",{className:"page",children:[Object(s.jsx)(v,{switchBackground:function(){c(!a)},switchLanguage:function(){u(!o)},isSimple:a,isRussian:o}),Object(s.jsx)(I,{isSimple:a}),Object(s.jsx)(P,{isSimple:a,isRussian:o}),Object(s.jsx)(E,{isSimple:a,isRussian:o})]})})}l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(z,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.67379f68.chunk.js.map