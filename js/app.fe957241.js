(function(e){function t(t){for(var i,n,l=t[0],o=t[1],r=t[2],u=0,_=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&_.push(a[n][0]),a[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);d&&d(t);while(_.length)_.shift()();return c.push.apply(c,r||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],i=!0,l=1;l<s.length;l++){var o=s[l];0!==a[o]&&(i=!1)}i&&(c.splice(t--,1),e=n(n.s=s[0]))}return e}var i={},a={app:0},c=[];function n(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=i,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/simbirsoft_internship/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var r=0;r<l.length;r++)t(l[r]);var d=o;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"00dd":function(e,t,s){"use strict";s("ae12")},"121f":function(e,t,s){},"1cf1":function(e,t,s){"use strict";s("f822")},"24e5":function(e,t,s){},"2b58":function(e,t,s){"use strict";s("8c87")},"2e0f":function(e,t,s){"use strict";s("db1e")},"2fc4":function(e,t,s){},4120:function(e,t,s){},"42a0":function(e,t,s){"use strict";s("da55")},4495:function(e,t,s){e.exports=s.p+"img/slide_service.085022d6.jpg"},"547e":function(e,t,s){"use strict";s("6bbe")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrapper"},[s("vsidebar"),s("router-view")],1)},c=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sidebar"},[s("slide",{attrs:{width:"2000"}},[e._l(e.bmMenuList,(function(t,i){return s("a",{key:i,attrs:{id:"home",href:t.href}},[s("span",[e._v(e._s(t.title))])])})),s("div",[s("a",{staticClass:"socialicons",attrs:{href:"#"}},[s("vicon",{attrs:{"icon-id":"icon-telegram",width:"32",height:"32"}})],1),s("a",{staticClass:"socialicons",attrs:{href:"#"}},[s("vicon",{attrs:{"icon-id":"icon-facebook",width:"32",height:"32"}})],1),s("a",{staticClass:"socialicons",attrs:{href:"#"}},[s("vicon",{attrs:{"icon-id":"icon-instagram",width:"32",height:"32"}})],1)])],2),s("button",{staticClass:"sidebar__button"},[e._v("Eng")])],1)},l=[],o=s("db0f"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{attrs:{width:e.width,height:e.height}},[s("use",{attrs:{"xlink:href":e.iconPath}})])},d=[],u=(s("a9e3"),s("99af"),s("8a78")),_=s.n(u),p={name:"v-icon",props:{iconId:{type:String,required:!0},width:{type:[Number,String],default:32},height:{type:[Number,String],default:32}},computed:{iconPath:function(){return"".concat(_.a,"#").concat(this.iconId)}}},f=p,m=s("2877"),h=Object(m["a"])(f,r,d,!1,null,null,null),C=h.exports,b=(s("7133"),{name:"v-sidebar",components:{Slide:o["Slide"],Vicon:C},data:function(){return{bmMenuList:[{title:"Парковка",href:"#"},{title:"Страховка",href:"#"},{title:"Бензин",href:"#"},{title:"Обслуживание",href:"#"}]}}}),T=b,E=(s("c3bd"),Object(m["a"])(T,n,l,!1,null,null,null)),v=E.exports,S={components:{Vsidebar:v}},O=S,g=(s("5c0b"),Object(m["a"])(O,a,c,!1,null,null,null)),y=g.exports,R=s("8c4f"),D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-wrp"},[s("div",{staticClass:"left-wrp"},[s("vheader"),s("div",{staticClass:"about"},[s("h1",{staticClass:"about__title"},[e._v("Каршеринг")]),s("p",{staticClass:"about__title about__title-text"},[e._v("Need for drive")]),s("p",{staticClass:"about__text"},[e._v("Поминутная аренда авто твоего города")]),s("router-link",{attrs:{to:{name:"v-order"}}},[s("button",{staticClass:"about__button"},[e._v("Забронировать")])])],1),e._m(0)],1),s("div",{staticClass:"right-wrp"},[s("vslider")],1)])},I=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"footer"},[s("p",{staticClass:"footer__copyright"},[e._v("© 2016-2019 «Need for drive»")]),s("p",{staticClass:"footer__phone"},[e._v("8 (495) 234-22-44")])])}],L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"header"},[s("p",{staticClass:"header__logo header__logo-order"},[e._v("Need for drive")]),s("p",{staticClass:"header__map header__map-order"},[s("vicon",{staticClass:"header__icon",attrs:{"icon-id":"icon-map",width:"20",height:"20"}}),e._m(0)],1)])},k=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{staticClass:"header__city",attrs:{href:"#"}},[s("span",[e._v("Ульяновск")])])}],x={name:"v-header",components:{Vicon:C}},A=x,V=(s("f1a0"),Object(m["a"])(A,L,k,!1,null,null,null)),j=V.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("slider",{attrs:{height:"100%",animation:"normal"}},e._l(e.sliderList,(function(t,i){return s("slider-item",{key:i,style:t},[s("div",{staticClass:"slider-about"},[s("p",{staticClass:"slider-title"},[e._v(" "+e._s(t.title)+" ")]),s("p",{staticClass:"slider-text"},[e._v(" "+e._s(t.text)+" ")]),s("button",{staticClass:"slider-button"},[e._v("Подробнее")])])])})),1)},$=[],P=s("5530"),F=s("cd9a"),N={backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100%",height:"100%"},H={name:"v-slider",components:{Slider:F["a"],SliderItem:F["b"]},data:function(){return{sliderList:[Object(P["a"])(Object(P["a"])({},N),{},{backgroundImage:"url(".concat(s("e6e1"),")"),title:"Бесплатная парковка",text:"Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах."}),Object(P["a"])(Object(P["a"])({},N),{},{backgroundImage:"url(".concat(s("c652"),")"),title:"Страховка",text:"Полная страховка страховка автомобиля"}),Object(P["a"])(Object(P["a"])({},N),{},{backgroundImage:"url(".concat(s("635f"),")"),title:"Бензин",text:"Полный бак на любой заправке города за наш счёт"}),Object(P["a"])(Object(P["a"])({},N),{},{backgroundImage:"url(".concat(s("4495"),")"),title:"Обслуживание",text:"Автомобиль проходит еженедельное ТО"})]}}},M=H,B=(s("ec9e"),Object(m["a"])(M,w,$,!1,null,null,null)),G=B.exports,Y={name:"v-main",components:{Vheader:j,Vslider:G}},q=Y,K=(s("2e0f"),Object(m["a"])(q,D,I,!1,null,null,null)),U=K.exports,X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"order-wrp"},[s("vheader",{staticClass:"order-center"}),s("vtabs")],1)},J=[],z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tabs"},[s("div",{staticClass:"tabs__border"},[s("ul",{staticClass:"tab-list order-center"},[s("li",{staticClass:"tab__item"},e._l(e.filledUpData,(function(t){return s("button",{key:t.id,staticClass:"tab__item-btn",class:{tab__item_active:e.selectedTab===t.id},attrs:{disabled:t.isDisabled},on:{click:function(s){e.selectedTab=t.id}}},[e._v(" "+e._s(t.label)+" "),s("span",{staticClass:"tab__item-icon"},[s("vicon",{attrs:{"icon-id":"icon-arrow",width:"6",height:"8"}})],1)])})),0)])]),s("div",{staticClass:"order"},[s("div",{staticClass:"order__window"},[s(e.selectedTab,{tag:"component"})],1),s("VTotal",{attrs:{tabs:e.tabs,selectedId:e.selectedIndexTabs,selectedTab:e.selectedTab},on:{updateSelectedTab:e.updateSelectedTab}})],1)])},Q=[],W=s("2909"),Z=(s("b64b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"input-block"},[s("VDropdown",{attrs:{label:"Город",name:"city",placeholder:"Начните вводить город ...",itemList:e.CITYLIST,selectedItem:e.selectedCity},on:{"on-item-selected":e.setSelectedCity,"on-item-reset":e.resetSelectedCity}}),s("VDropdown",{attrs:{label:"Пункт выдачи",name:"point",placeholder:"Начните вводить пункт ...",itemList:e.FILTERED_POINTLIST,selectedItem:e.selectedPoint},on:{"on-item-selected":e.setSelectedPoint,"on-item-reset":e.resetSelectedPoint}})],1),s("p",{staticClass:"place__text"},[e._v("Выбрать на карте")]),e._m(0)])}),ee=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"place__pic"},[i("img",{attrs:{src:s("7b91"),alt:"карта"}})])}],te=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dropdown input-wrp"},[s("label",{staticClass:"input-block__label",attrs:{for:e.name}},[e._v(e._s(e.label))]),e.isItemSelected?s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.inputValue,expression:"inputValue",modifiers:{trim:!0}}],staticClass:"dropdown-input input-block__input",attrs:{type:"text",name:e.name,placeholder:e.placeholder},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}):s("input",{staticClass:"dropdown-input input-block__input",attrs:{type:"text",name:e.name},domProps:{value:e.selectedItem.name},on:{click:e.resetSelection}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.inputValue,expression:"inputValue"}],staticClass:"dropdown-list"},e._l(e.itemList,(function(t){return s("div",{directives:[{name:"show",rawName:"v-show",value:e.itemVisible(t),expression:"itemVisible(item)"}],key:t.id,staticClass:"dropdown-item",on:{click:function(s){return e.selectItem(t)}}},[e._v(" "+e._s(t.name)+" ")])})),0)])},se=[],ie=(s("b0c0"),s("caad"),s("2532"),{name:"v-dropdown",props:{itemList:{type:Array,required:!0},selectedItem:{type:Object,required:!0},placeholder:{type:String,required:!0},label:{type:String,required:!0},name:{type:String,required:!0}},data:function(){return{inputValue:""}},computed:{isItemSelected:function(){return 0===Object.keys(this.selectedItem).length}},methods:{resetSelection:function(){this.$emit("on-item-reset")},selectItem:function(e){this.inputValue="",this.$emit("on-item-selected",e)},itemVisible:function(e){var t=e.name.toLowerCase(),s=this.inputValue.toLowerCase();return t.includes(s)}}}),ae=ie,ce=(s("5b66"),Object(m["a"])(ae,te,se,!1,null,null,null)),ne=ce.exports,le=s("2f62"),oe={name:"order-place",components:{VDropdown:ne},created:function(){this.GET_CITYLIST_FROM_API(),this.GET_POINTLIST_FROM_API()},computed:Object(P["a"])(Object(P["a"])(Object(P["a"])(Object(P["a"])({},Object(le["c"])(["CITYLIST"])),Object(le["c"])(["POINTLIST"])),Object(le["c"])(["FILTERED_POINTLIST"])),Object(le["d"])({selectedCity:function(e){return e.selectedCity},selectedPoint:function(e){return e.selectedPoint}})),methods:Object(P["a"])(Object(P["a"])(Object(P["a"])({},Object(le["b"])(["GET_CITYLIST_FROM_API"])),Object(le["b"])(["GET_POINTLIST_FROM_API"])),{},{setSelectedCity:function(e){this.$store.commit("SET_SELECTEDCITY",e)},resetSelectedCity:function(){this.$store.commit("RESET_SELECTEDCITY"),this.$store.commit("RESET_SELECTEDPOINT"),this.$store.commit("RESET_SELECTEDCAR")},setSelectedPoint:function(e){this.$store.commit("SET_SELECTEDPOINT",e)},resetSelectedPoint:function(){this.$store.commit("RESET_SELECTEDPOINT"),this.$store.commit("RESET_SELECTEDCAR")}})},re=oe,de=(s("547e"),Object(m["a"])(re,Z,ee,!1,null,null,null)),ue=de.exports,_e=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"radio-list"},[s("VRadio",{attrs:{label:"Все модели"},on:{change:e.resetSelectedCategoryCar},model:{value:e.checkedCategoryCars,callback:function(t){e.checkedCategoryCars=t},expression:"checkedCategoryCars"}}),s("VRadio",{attrs:{label:"Эконом",value:"600598a3ad015e0bb699774c"},on:{change:e.setSelectedCategoryCar},model:{value:e.checkedCategoryCars,callback:function(t){e.checkedCategoryCars=t},expression:"checkedCategoryCars"}}),s("VRadio",{attrs:{label:"Премиум",value:"60b943492aed9a0b9b7ed335"},on:{change:e.setSelectedCategoryCar},model:{value:e.checkedCategoryCars,callback:function(t){e.checkedCategoryCars=t},expression:"checkedCategoryCars"}}),s("VRadio",{attrs:{label:"Спорт",value:"5fd91add935d4e0be16a3c4b"},on:{change:e.setSelectedCategoryCar},model:{value:e.checkedCategoryCars,callback:function(t){e.checkedCategoryCars=t},expression:"checkedCategoryCars"}})],1),s("ul",{staticClass:"cars-list"},e._l(e.filteredCars,(function(t){return s("li",{key:t.id,staticClass:"cars__item",class:{cars__item_active:e.selectedCar.id===t.id},on:{click:function(s){return e.setSelectedCar(t)}}},[s("p",{staticClass:"cars__model"},[e._v(e._s(t.name))]),s("p",{staticClass:"cars__price"},[e._v(e._s(t.priceMin)+" - "+e._s(t.priceMax)+" руб.")]),s("img",{staticClass:"cars__img",attrs:{src:t.thumbnail.path,alt:t.thumbnail.originalname}})])})),0)])},pe=[],fe=(s("4de4"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"radio-item"},[e._v(" "+e._s(e.label)+" "),s("input",{staticClass:"radio__input",attrs:{type:"radio"},domProps:{checked:e.isChecked,value:e.value},on:{change:function(t){return e.$emit("change",t.target.value)}}}),s("span",{staticClass:"checkmark"})])}),me=[],he={model:{prop:"modelValue",event:"change"},props:{label:{type:String,default:"",required:!0},modelValue:{default:""},value:{type:String,default:""}},computed:{isChecked:function(){return this.modelValue===this.value}}},Ce=he,be=(s("2b58"),Object(m["a"])(Ce,fe,me,!1,null,null,null)),Te=be.exports,Ee={name:"order-model",components:{VRadio:Te},data:function(){return{}},created:function(){this.GET_CARLIST_FROM_API()},computed:Object(P["a"])(Object(P["a"])(Object(P["a"])({},Object(le["d"])({selectedCar:function(e){return e.selectedCar},checkedCategoryCars:function(e){return e.checkedCategoryCars}})),Object(le["c"])(["CARLIST"])),{},{filteredCars:function(){var e=this;return this.checkedCategoryCars?this.CARLIST.filter((function(t){var s;if(null!==t&&void 0!==t&&null!==(s=t.categoryId)&&void 0!==s&&s.id)return t.categoryId.id.includes(e.checkedCategoryCars)})):this.CARLIST}}),methods:Object(P["a"])(Object(P["a"])({},Object(le["b"])(["GET_CARLIST_FROM_API"])),{},{setSelectedCar:function(e){this.$store.commit("SET_SELECTEDCAR",e)},setSelectedCategoryCar:function(e){this.$store.commit("SET_CHECKEDCATEGORYCAR",e)},resetSelectedCategoryCar:function(){this.$store.commit("RESET_CHECKEDCATEGORYCAR")}})},ve=Ee,Se=(s("bd2f"),Object(m["a"])(ve,_e,pe,!1,null,null,null)),Oe=Se.exports,ge=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",{staticClass:"additional__text"},[e._v("Цвета")]),s("div",{staticClass:"radio-list"},[s("VRadio",{attrs:{label:"Любой"},on:{change:e.resetSelectedColor},model:{value:e.selectedColor,callback:function(t){e.selectedColor=t},expression:"selectedColor"}}),e._l(e.getCarColors,(function(t){return s("VRadio",{key:t,attrs:{label:t,value:t},on:{change:e.setSelectedColor},model:{value:e.selectedColor,callback:function(t){e.selectedColor=t},expression:"selectedColor"}})}))],2),s("p",{staticClass:"additional__text"},[e._v("Дата аренды")]),s("div",{staticClass:"additional-input__wrp"},[s("p",[s("VSelect",{attrs:{options:e.dateFrom,selected:e.selectedFrom,pretext:"C"},on:{select:e.setSelectedDateFrom,reset:e.resetSelectedDateFrom}})],1),s("p",[s("VSelectCopy",{attrs:{options:e.dateTo,options2:e.timeTo,selected:e.selectedDate,selected2:e.selectedTime,pretext:"По"},on:{select:e.setSelectedDateTo,select2:e.setSelectedTimeTo,reset:e.resetSelectedTo}})],1)]),s("p",{staticClass:"additional__text"},[e._v("Тариф")]),s("div",{staticClass:"tarif-wrp"},[s("VRadio",{staticClass:"tarif__radiobutton",attrs:{label:"Поминутно, 7Р/мин",value:"Поминутно"},on:{change:e.setSelectedRate},model:{value:e.selectedRate,callback:function(t){e.selectedRate=t},expression:"selectedRate"}}),s("VRadio",{staticClass:"tarif__radiobutton",attrs:{label:"На сутки, 1999Р/сутки",value:"На сутки"},on:{change:e.setSelectedRate},model:{value:e.selectedRate,callback:function(t){e.selectedRate=t},expression:"selectedRate"}})],1),s("p",{staticClass:"additional__text"},[e._v("Доп услуги")]),s("div",{staticClass:"services-wrp"},[s("VCheckbox",{attrs:{label:"Полный бак, 500р",value:"Да"},on:{change:e.setSelectedTank},model:{value:e.selectedTank,callback:function(t){e.selectedTank=t},expression:"selectedTank"}}),s("VCheckbox",{attrs:{label:"Детское кресло, 200р",value:"Да"},on:{change:e.setSelectedBabyChair},model:{value:e.selectedBabyChair,callback:function(t){e.selectedBabyChair=t},expression:"selectedBabyChair"}}),s("VCheckbox",{attrs:{label:"Правый руль, 1600р",value:"Да"},on:{change:e.setSelectedRightHandDrive},model:{value:e.selectedRightHandDrive,callback:function(t){e.selectedRightHandDrive=t},expression:"selectedRightHandDrive"}})],1)])},ye=[],Re=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"select"},[s("div",{staticClass:"select__text pretext"},[e._v(e._s(e.pretext))]),s("div",[s("p",{staticClass:"select__title select__text",class:{placeholder:"Введите дату и время..."===e.selected}},[s("span",{on:{click:function(t){e.areOptionsVisible=!e.areOptionsVisible}}},[e._v(e._s(e.selected))]),"Введите дату и время..."!==e.selected?s("span",{on:{click:e.resetOption}},[s("vicon",{attrs:{"icon-id":"icon-cross",width:"8",height:"8"}})],1):e._e()]),e.areOptionsVisible?s("div",{staticClass:"select__options"},e._l(e.options,(function(t){return s("p",{key:t.id,staticClass:"select__text",on:{click:function(s){return e.selectOption(t)}}},[e._v(" "+e._s(t.value)+" ")])})),0):e._e()])])},De=[],Ie={name:"v-select",components:{Vicon:C},props:{options:{type:Array,default:function(){return[]}},selected:{type:String,default:""},pretext:{type:String,default:""}},data:function(){return{areOptionsVisible:!1}},methods:{selectOption:function(e){this.$emit("select",e),this.areOptionsVisible=!1},hideSelect:function(){this.areOptionsVisible=!1},resetOption:function(){this.$emit("reset")}},mounted:function(){document.addEventListener("click",this.hideSelect.bind(this),!0)},beforeDestroy:function(){document.removeEventListener("click",this.hideSelect)}},Le=Ie,ke=(s("1cf1"),Object(m["a"])(Le,Re,De,!1,null,null,null)),xe=ke.exports,Ae=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"select"},[s("div",[e._v(e._s(e.pretext))]),s("div",[s("p",{staticClass:"select__title text"},[s("span",{on:{click:function(t){e.areOptionsVisible=!e.areOptionsVisible}}},[e._v(e._s(e.selected)+" "+e._s(e.selected2))]),"Введите дату/время"!==e.selected?s("span",{on:{click:e.resetOption}},[s("vicon",{attrs:{"icon-id":"icon-cross",width:"8",height:"8"}})],1):e._e()]),e.areOptionsVisible?s("div",{staticClass:"select__options"},[s("div",e._l(e.options,(function(t){return s("p",{key:t.id,on:{click:function(s){return e.selectOption(t)}}},[e._v(" "+e._s(t.value)+" ")])})),0),s("div",e._l(e.options2,(function(t){return s("p",{key:t.id,on:{click:function(s){return e.selectOption2(t)}}},[e._v(" "+e._s(t.value)+" ")])})),0)]):e._e()])])},Ve=[],je={name:"v-select",components:{Vicon:C},props:{options:{type:Array,default:function(){return[]}},options2:{type:Array,default:function(){return[]}},selected:{type:String,default:""},selected2:{type:String,default:""},pretext:{type:String,default:""}},data:function(){return{areOptionsVisible:!1}},methods:{selectOption:function(e){this.$emit("select",e),this.areOptionsVisible=!0},selectOption2:function(e){this.$emit("select2",e),this.areOptionsVisible=!1},hideSelect:function(){this.areOptionsVisible=!1},resetOption:function(){this.$emit("reset")}},mounted:function(){document.addEventListener("click",this.hideSelect.bind(this),!0)},beforeDestroy:function(){document.removeEventListener("click",this.hideSelect)}},we=je,$e=(s("00dd"),Object(m["a"])(we,Ae,Ve,!1,null,"07786bc4",null)),Pe=$e.exports,Fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"checkbox-item"},[e._v(" "+e._s(e.label)+" "),s("input",{staticClass:"checkbox__input",attrs:{type:"checkbox"},domProps:{checked:e.isChecked,value:e.value},on:{change:e.updateInput}}),s("span",{staticClass:"checkmark-box"})])},Ne=[],He=(s("a434"),{model:{prop:"modelValue",event:"change"},props:{value:{type:String},modelValue:{default:""},label:{type:String,required:!0},trueValue:{default:!0},falseValue:{default:!1}},computed:{isChecked:function(){return this.modelValue instanceof Array?this.modelValue.includes(this.value):this.modelValue===this.trueValue}},methods:{updateInput:function(e){var t=e.target.checked;if(this.modelValue instanceof Array){var s=Object(W["a"])(this.modelValue);t?s.push(this.value):s.splice(s.indexOf(this.value),1),this.$emit("change",s)}else this.$emit("change",t?this.trueValue:this.falseValue)}}}),Me=He,Be=(s("fa07"),Object(m["a"])(Me,Fe,Ne,!1,null,"78d39e0c",null)),Ge=Be.exports,Ye={name:"order-additional",components:{VRadio:Te,VSelect:xe,VSelectCopy:Pe,VCheckbox:Ge},data:function(){return{selectedFrom:"Введите дату и время...",dateFrom:[{value:"01.12.2021 9:00",id:1},{value:"01.12.2021 10:00",id:2},{value:"01.12.2021 11:00",id:3}],selectedDate:"Введите дату/время",dateTo:[{value:"01.12.2021",id:1},{value:"02.12.2021",id:2},{value:"03.12.2021",id:3},{value:"04.12.2021",id:4},{value:"05.12.2021",id:5}],selectedTime:"",timeTo:[{value:"9:00",id:1},{value:"10:00",id:2},{value:"11:00",id:3},{value:"12:00",id:4},{value:"13:00",id:5},{value:"14:00",id:6},{value:"15:00",id:7},{value:"16:00",id:8},{value:"17:00",id:9}]}},computed:Object(P["a"])(Object(P["a"])({},Object(le["d"])({selectedCar:function(e){return e.selectedCar},selectedColor:function(e){return e.selectedColor},selectedDateFrom:function(e){return e.selectedDateFrom},selectedDateTo:function(e){return e.selectedDateTo},selectedTimeTo:function(e){return e.selectedTimeTo},selectedRate:function(e){return e.selectedRate},selectedTank:function(e){return e.selectedTank},selectedBabyChair:function(e){return e.selectedBabyChair},selectedRightHandDrive:function(e){return e.selectedRightHandDrive}})),{},{getCarColors:function(){var e;return null!==(e=this.selectedCar)&&void 0!==e&&e.colors,this.selectedCar.colors}}),methods:{setSelectedColor:function(e){this.$store.commit("SET_SELECTEDCOLOR",e)},resetSelectedColor:function(){this.$store.commit("RESET_SELECTEDCOLOR")},setSelectedDateFrom:function(e){this.selectedFrom=e.value,this.$store.commit("SET_SELECTEDDATEFROM",e.value)},resetSelectedDateFrom:function(){this.selectedFrom="Введите дату и время...",this.$store.commit("RESET_SELECTEDDATEFROM")},setSelectedDateTo:function(e){this.selectedDate=e.value,this.$store.commit("SET_SELECTEDDATETO",e.value)},resetSelectedDateTo:function(){this.selectedDate="Введите дату/время",this.$store.commit("RESET_SELECTEDDATETO")},setSelectedTimeTo:function(e){this.selectedTime=e.value,this.$store.commit("SET_SELECTEDTIMETO",e.value)},resetSelectedTimeTo:function(){this.selectedTime="",this.$store.commit("RESET_SELECTEDTIMETO")},resetSelectedTo:function(){this.selectedDate="Введите дату/время",this.$store.commit("RESET_SELECTEDDATETO"),this.selectedTime="",this.$store.commit("RESET_SELECTEDTIMETO")},setSelectedRate:function(e){this.$store.commit("SET_SELECTEDRATE",e)},resetSelectedRate:function(){this.$store.commit("RESET_SELECTEDRATE")},setSelectedTank:function(e){this.$store.commit("SET_SELECTEDTANK",e)},resetSelectedTank:function(){this.$store.commit("RESET_SELECTEDTANK")},setSelectedBabyChair:function(e){this.$store.commit("SET_SELECTEDBABYCHAIR",e)},resetSelectedBabyChair:function(){this.$store.commit("RESET_SELECTEDBABYCHAIR")},setSelectedRightHandDrive:function(e){this.$store.commit("SET_SELECTEDRIGHTHANDDRIVE",e)},resetSelectedRightHandDrive:function(){this.$store.commit("RESET_SELECTEDRIGHTHANDDRIVE")}}},qe=Ye,Ke=(s("deb1"),Object(m["a"])(qe,ge,ye,!1,null,null,null)),Ue=Ke.exports,Xe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Je=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",[e._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae reiciendis nostrum fugit in deleniti aut. ")])])}],ze={name:"order-summary"},Qe=ze,We=Object(m["a"])(Qe,Xe,Je,!1,null,null,null),Ze=We.exports,et=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"total"},[s("p",{staticClass:"total__title"},[e._v("Ваш заказ:")]),s("p",{staticClass:"total-wrp"},[s("span",{staticClass:"total__text"},[e._v("Пункт выдачи")]),s("span",{staticClass:"dots"}),s("span",{staticClass:"total__chosen-item"},[e._v(e._s(e.selectedCity.name))]),s("span",{staticClass:"total__chosen-item"},[e._v(e._s(e.selectedPoint.name))])]),"order-model"===this.selectedTab||"order-additional"===this.selectedTab?s("p",{staticClass:"total-wrp"},[s("span",{staticClass:"total__text"},[e._v("Модель")]),s("span",{staticClass:"dots"}),s("span",{staticClass:"total__chosen-item"},[e._v(e._s(e.selectedCar.name))])]):e._e(),"order-additional"===this.selectedTab?s("p",{staticClass:"total-wrp"},[s("span",{staticClass:"total__text"},[e._v("Цвет")]),s("span",{staticClass:"dots"}),s("span",{staticClass:"total__chosen-item"},[e._v(e._s(e.selectedColor))])]):e._e(),"order-additional"===this.selectedTab?s("p",{staticClass:"total-wrp"},[s("span",{staticClass:"total__text"},[e._v("Длительность аренды")]),s("span",{staticClass:"dots"}),s("span",{staticClass:"total__chosen-item"})]):e._e(),"order-additional"===this.selectedTab?s("p",{staticClass:"total-wrp"},[s("span",{staticClass:"total__text"},[e._v("Тариф")]),s("span",{staticClass:"dots"}),s("span",{staticClass:"total__chosen-item"},[e._v(e._s(e.selectedRate))])]):e._e(),"order-additional"===this.selectedTab?s("p",{staticClass:"total-wrp"},[s("span",{staticClass:"total__text"},[e._v("Полный бак")]),s("span",{staticClass:"dots"}),e.selectedTank?s("span",{staticClass:"total__chosen-item"},[e._v("Да")]):e._e()]):e._e(),"order-additional"===this.selectedTab?s("p",{staticClass:"total-wrp"},[s("span",{staticClass:"total__text"},[e._v("Детское кресло")]),s("span",{staticClass:"dots"}),e.selectedBabyChair?s("span",{staticClass:"total__chosen-item"},[e._v("Да")]):e._e()]):e._e(),"order-additional"===this.selectedTab?s("p",{staticClass:"total-wrp"},[s("span",{staticClass:"total__text"},[e._v("Правый руль")]),s("span",{staticClass:"dots"}),e.selectedRightHandDrive?s("span",{staticClass:"total__chosen-item"},[e._v("Да")]):e._e()]):e._e(),s("p",{staticClass:"total__price"},[e._v(" Цена: "),e.selectedCar.name?s("span",{staticClass:"total__price total__price-thin"},[e._v("от "+e._s(e.selectedCar.priceMin)+" до "+e._s(e.selectedCar.priceMax)+" руб.")]):e._e()]),"order-place"===this.selectedTab?s("button",{staticClass:"total__button",class:{total__button_active:e.selectedCity.id&&e.selectedPoint.id},attrs:{disabled:!e.selectedCity.id&&!e.selectedPoint.id},on:{click:e.changeSelectedTab}},[e._v(" Выбрать модель ")]):e._e(),"order-model"===this.selectedTab?s("button",{staticClass:"total__button",class:{total__button_active:e.selectedCar.name},attrs:{disabled:!e.selectedCar.name},on:{click:e.changeSelectedTabAdditional}},[e._v(" Дополнительно ")]):e._e(),"order-additional"===this.selectedTab?s("button",{staticClass:"total__button"},[e._v(" Итого ")]):e._e()])},tt=[],st={name:"v-total",props:{tabs:{type:Array,required:!0},selectedId:{type:Number,required:!0},selectedTab:{type:String,required:!0}},computed:Object(P["a"])({},Object(le["d"])({selectedCity:function(e){return e.selectedCity},selectedPoint:function(e){return e.selectedPoint},selectedCar:function(e){return e.selectedCar},selectedColor:function(e){return e.selectedColor},selectedRate:function(e){return e.selectedRate},selectedTank:function(e){return e.selectedTank},selectedBabyChair:function(e){return e.selectedBabyChair},selectedRightHandDrive:function(e){return e.selectedRightHandDrive}})),methods:{changeSelectedTab:function(){var e=this.tabs[this.selectedId+1].id;this.$emit("updateSelectedTab",e)},changeSelectedTabAdditional:function(){var e=this.tabs[this.selectedId+2].id;this.$emit("updateSelectedTab",e)}}},it=st,at=(s("42a0"),Object(m["a"])(it,et,tt,!1,null,null,null)),ct=at.exports,nt={name:"v-tabs",components:{Vicon:C,OrderPlace:ue,OrderModel:Oe,OrderAdditional:Ue,OrderSummary:Ze,VTotal:ct},data:function(){return{tabs:[{label:"Местоположение",id:"order-place",isDisabled:!0},{label:"Модель",id:"order-model",isDisabled:!0},{label:"Дополнительно",id:"order-additional",isDisabled:!0},{label:"Итого",id:"order-summary",isDisabled:!0}],selectedIndexTabs:0,selectedTab:"order-place"}},computed:Object(P["a"])(Object(P["a"])({},Object(le["d"])({selectedCity:function(e){return e.selectedCity},selectedPoint:function(e){return e.selectedPoint},selectedCar:function(e){return e.selectedCar}})),{},{filledUpData:function(){var e=Object(W["a"])(this.tabs);return Object.keys(this.selectedCity).length&&0!==Object.keys(this.selectedPoint).length?(e[this.selectedIndexTabs].isDisabled=!1,e[this.selectedIndexTabs+1].isDisabled=!1,e):e}}),methods:{updateSelectedTab:function(e){this.selectedTab=e}}},lt=nt,ot=(s("97a1"),Object(m["a"])(lt,z,Q,!1,null,null,null)),rt=ot.exports,dt={name:"v-order",components:{Vheader:j,Vtabs:rt}},ut=dt,_t=(s("9866"),Object(m["a"])(ut,X,J,!1,null,null,null)),pt=_t.exports;i["a"].use(R["a"]);var ft=[{path:"/",name:"v-main",component:U},{path:"/order",name:"v-order",component:pt}],mt=new R["a"]({mode:"history",base:"/simbirsoft_internship/",routes:ft}),ht=mt,Ct=s("bc3a"),bt=s.n(Ct);i["a"].use(le["a"]);var Tt=new le["a"].Store({state:{cityList:[],pointList:[],carList:[],selectedCity:{},selectedPoint:{},checkedCategoryCars:"",selectedCar:{},selectedColor:"",selectedDateFrom:"",selectedDateTo:"",selectedTimeTo:"",selectedRate:"",selectedTank:!1,selectedBabyChair:!1,selectedRightHandDrive:!1},mutations:{SET_CITYLIST_TO_STATE:function(e,t){e.cityList=t.data.data},SET_POINTLIST_TO_STATE:function(e,t){e.pointList=t.data.data},SET_CARLIST_TO_STATE:function(e,t){e.carList=t.data.data},SET_SELECTEDCITY:function(e,t){e.selectedCity=t},RESET_SELECTEDCITY:function(e){e.selectedCity={}},SET_SELECTEDPOINT:function(e,t){e.selectedPoint=t},RESET_SELECTEDPOINT:function(e){e.selectedPoint={}},SET_CHECKEDCATEGORYCAR:function(e,t){e.checkedCategoryCars=t},RESET_CHECKEDCATEGORYCAR:function(e){e.checkedCategoryCars=""},SET_SELECTEDCAR:function(e,t){e.selectedCar=t},RESET_SELECTEDCAR:function(e){e.selectedCar={}},SET_SELECTEDCOLOR:function(e,t){e.selectedColor=t},RESET_SELECTEDCOLOR:function(e){e.selectedColor=""},SET_SELECTEDDATEFROM:function(e,t){e.selectedDateFrom=t},RESET_SELECTEDDATEFROM:function(e){e.selectedDateFrom=""},SET_SELECTEDDATETO:function(e,t){e.selectedDateTo=t},RESET_SELECTEDDATETO:function(e){e.selectedDateTo=""},SET_SELECTEDTIMETO:function(e,t){e.selectedTimeTo=t},RESET_SELECTEDTIMETO:function(e){e.selectedTimeTo=""},SET_SELECTEDRATE:function(e,t){e.selectedRate=t},RESET_SELECTEDRATE:function(e){e.selectedRate=""},SET_SELECTEDTANK:function(e,t){e.selectedTank=t},RESET_SELECTEDTANK:function(e){e.selectedTank=!1},SET_SELECTEDBABYCHAIR:function(e,t){e.selectedBabyChair=t},RESET_SELECTEDBABYCHAIR:function(e){e.selectedBabyChair=!1},SET_SELECTEDRIGHTHANDDRIVE:function(e,t){e.selectedRightHandDrive=t},RESET_SELECTEDRIGHTHANDDRIVE:function(e){e.selectedRightHandDrive=!1}},actions:{GET_CITYLIST_FROM_API:function(e){var t=e.commit;bt()("https://api-factory.simbirsoft1.com/api/db/city",{method:"GET",headers:{"X-Api-Factory-Application-Id":"5e25c641099b810b946c5d5b"}}).then((function(e){return t("SET_CITYLIST_TO_STATE",e),e})).catch((function(e){return console.log(e),e}))},GET_POINTLIST_FROM_API:function(e){var t=e.commit;bt()("https://api-factory.simbirsoft1.com/api/db/point",{method:"GET",headers:{"X-Api-Factory-Application-Id":"5e25c641099b810b946c5d5b"}}).then((function(e){return t("SET_POINTLIST_TO_STATE",e),e})).catch((function(e){return console.log(e),e}))},GET_CARLIST_FROM_API:function(e){var t=e.commit;bt()("https://api-factory.simbirsoft1.com/api/db/car",{method:"GET",headers:{"X-Api-Factory-Application-Id":"5e25c641099b810b946c5d5b"}}).then((function(e){return t("SET_CARLIST_TO_STATE",e),e})).catch((function(e){return console.log(e),e}))}},getters:{CITYLIST:function(e){return e.cityList},POINTLIST:function(e){return e.pointList},FILTERED_POINTLIST:function(e){var t=[],s=e.pointList.length;if(e.selectedCity.id){for(var i=0;i<s;i++){var a,c;-1!=(null===(a=e.pointList[i])||void 0===a||null===(c=a.cityId)||void 0===c?void 0:c.id.indexOf(e.selectedCity.id))&&t.push(e.pointList[i])}return t}return t},CARLIST:function(e){return e.carList}},modules:{}});s("2fc4");i["a"].config.productionTip=!1,new i["a"]({router:ht,store:Tt,render:function(e){return e(y)}}).$mount("#app")},"5b66":function(e,t,s){"use strict";s("b7d5")},"5c0b":function(e,t,s){"use strict";s("9c0c")},"635f":function(e,t,s){e.exports=s.p+"img/slide_petrol.5dc85ddc.jpg"},"6bbe":function(e,t,s){},7133:function(e,t,s){},"7b91":function(e,t,s){e.exports=s.p+"img/map.65b12582.jpg"},"826c":function(e,t,s){},"8a78":function(e,t,s){e.exports=s.p+"img/sprite.22e32cea.svg"},"8c87":function(e,t,s){},"97a1":function(e,t,s){"use strict";s("4120")},9866:function(e,t,s){"use strict";s("121f")},"9c0c":function(e,t,s){},ae12:function(e,t,s){},b36a:function(e,t,s){},b7d5:function(e,t,s){},bd2f:function(e,t,s){"use strict";s("e540")},c338:function(e,t,s){},c3bd:function(e,t,s){"use strict";s("b36a")},c652:function(e,t,s){e.exports=s.p+"img/slide_insurance.b73b2bee.jpg"},da55:function(e,t,s){},db1e:function(e,t,s){},deb1:function(e,t,s){"use strict";s("826c")},e540:function(e,t,s){},e6e1:function(e,t,s){e.exports=s.p+"img/slide_parking.4e40ccb2.jpg"},ec9e:function(e,t,s){"use strict";s("c338")},f020:function(e,t,s){},f1a0:function(e,t,s){"use strict";s("f020")},f822:function(e,t,s){},fa07:function(e,t,s){"use strict";s("24e5")}});
//# sourceMappingURL=app.fe957241.js.map