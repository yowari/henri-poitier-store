(self.webpackChunkhenri_potier_store=self.webpackChunkhenri_potier_store||[]).push([[857],{9857:(t,e,r)=>{"use strict";r.r(e),r.d(e,{ShoppingCartModule:()=>U});var n=r(1116),s=r(5471),o=r(1305),c=r(4689),i=r(9996),f=r(8888),a=r(8619),p=r(4736);let u=(()=>{class t{getBestOffer(t,e){const r=e.map(e=>this.calculateDiscount(t,e));let n=0;for(let s=0;s<r.length;s++)r[s]>r[n]&&(n=s);return{offer:e[n],discount:r[n]}}calculateDiscount(t,e){switch(e.type){case"minus":return e.value;case"percentage":return t*(e.value/100);case"slice":return Math.floor(t/e.sliceValue)*e.value;default:throw new Error("Unrecognized offer type")}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=r(2693);let h=(()=>{class t{constructor(t){this._http=t,this.baseUrl="https://henri-potier.techx.fr"}getCommercialOffers(t){return this._http.get(`${this.baseUrl}/books/${t.join(",")}/commercialOffers`)}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(l.eN))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function g(t,e){if(1&t&&(a.TgZ(0,"tr"),a.TgZ(1,"td"),a._uU(2),a.qZA(),a.TgZ(3,"td",4),a._uU(4),a.ALo(5,"currency"),a.qZA(),a.qZA()),2&t){const t=e.$implicit;a.xp6(2),a.Oqu(t.book.title),a.xp6(2),a.AsE("",t.quantity," x ",a.xi3(5,3,t.book.price,"EUR"),"")}}function m(t,e){if(1&t&&(a.ynx(0),a._uU(1),a.ALo(2,"percent"),a.BQk()),2&t){const t=a.oxw(2);a.xp6(1),a.hij(" Offre -",a.lcZ(2,1,t.bestOffer.offer.value/100)," ")}}function x(t,e){if(1&t&&(a.ynx(0),a._uU(1),a.ALo(2,"currency"),a.BQk()),2&t){const t=a.oxw(2);a.xp6(1),a.hij(" Offre -",a.xi3(2,1,t.bestOffer.offer.value,"EUR")," ")}}function Z(t,e){if(1&t&&(a.ynx(0),a._uU(1),a.ALo(2,"currency"),a.ALo(3,"currency"),a.BQk()),2&t){const t=a.oxw(2);a.xp6(1),a.AsE(" Offre -",a.xi3(2,2,t.bestOffer.offer.value,"EUR")," chaque ",a.xi3(3,5,t.bestOffer.offer.sliceValue,"EUR")," ")}}function d(t,e){if(1&t&&(a.TgZ(0,"tr",6),a.TgZ(1,"td",7),a.YNc(2,m,3,3,"ng-container",8),a.YNc(3,x,3,4,"ng-container",8),a.YNc(4,Z,4,8,"ng-container",8),a.qZA(),a.TgZ(5,"td",4),a._uU(6),a.ALo(7,"currency"),a.qZA(),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("ngSwitch",t.bestOffer.offer.type),a.xp6(1),a.Q6J("ngSwitchCase","percentage"),a.xp6(1),a.Q6J("ngSwitchCase","minus"),a.xp6(1),a.Q6J("ngSwitchCase","slice"),a.xp6(2),a.hij("-",a.xi3(7,5,t.bestOffer.discount,"EUR"),"")}}function _(t,e){if(1&t&&(a.TgZ(0,"span",9),a._uU(1),a.ALo(2,"currency"),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Oqu(a.xi3(2,1,t.total,"EUR"))}}let y=(()=>{class t{constructor(){this.items=[],this.total=0}get finalPrice(){return this.bestOffer&&this.total?this.total-this.bestOffer.discount:this.total}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-shopping-cart-summary"]],inputs:{items:"items",total:"total",bestOffer:"bestOffer"},decls:14,vars:7,consts:[[1,"table"],[4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],["scope","row"],[1,"text-end"],["class","text-decoration-line-through",4,"ngIf"],[1,"text-danger"],["scope","row",3,"ngSwitch"],[4,"ngSwitchCase"],[1,"text-decoration-line-through"]],template:function(t,e){1&t&&(a.TgZ(0,"table",0),a.TgZ(1,"tbody"),a.YNc(2,g,6,6,"tr",1),a.qZA(),a.TgZ(3,"tfoot"),a.YNc(4,d,8,8,"tr",2),a.TgZ(5,"tr"),a.TgZ(6,"td",3),a._uU(7,"Total"),a.qZA(),a.TgZ(8,"td",4),a.YNc(9,_,3,4,"span",5),a._uU(10,"\xa0 "),a.TgZ(11,"span"),a._uU(12),a.ALo(13,"currency"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(2),a.Q6J("ngForOf",e.items),a.xp6(2),a.Q6J("ngIf",e.bestOffer),a.xp6(5),a.Q6J("ngIf",e.bestOffer),a.xp6(3),a.Oqu(a.xi3(13,4,e.finalPrice,"EUR")))},directives:[n.sg,n.O5,n.RF,n.n9],pipes:[n.H9,n.Zx],styles:[""],changeDetection:0}),t})();function A(t,e){if(1&t&&(a.ynx(0),a._UZ(1,"app-shopping-cart-summary",7),a.ALo(2,"async"),a.ALo(3,"async"),a.BQk()),2&t){const t=a.oxw().ngIf,e=a.oxw();a.xp6(1),a.Q6J("items",t)("total",a.lcZ(2,3,e._totalPrice$))("bestOffer",a.lcZ(3,5,e._bestOffer$))}}function O(t,e){1&t&&a._uU(0," Votre panier est vide ")}function b(t,e){if(1&t&&(a.ynx(0),a.YNc(1,A,4,7,"ng-container",5),a.YNc(2,O,1,0,"ng-template",null,6,a.W1O),a.BQk()),2&t){const t=e.ngIf,r=a.MAs(3);a.xp6(1),a.Q6J("ngIf",t.length>0)("ngIfElse",r)}}const w=[{path:"",component:(()=>{class t{constructor(t,e,r){this._store=t,this._shoppingCartService=e,this._commercialOffersService=r,this._shoppingCartItems$=this._store.select(f.D8),this._itemsCount$=this._store.select(f.ot),this._totalPrice$=this._store.select(f.m_);const n=this._shoppingCartItems$.pipe((0,c.w)(t=>this._commercialOffersService.getCommercialOffers(t.map(t=>t.book.isbn))));this._bestOffer$=(0,o.aj)([this._totalPrice$,n]).pipe((0,i.U)(([t,{offers:e}])=>this._shoppingCartService.getBestOffer(t,e)))}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(p.yh),a.Y36(u),a.Y36(h))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-shopping-cart"]],decls:8,vars:6,consts:[[1,"row","my-4"],[1,"card","col-md-8"],[1,"card-body"],[1,"card-title"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["emptyCartTemplate",""],[3,"items","total","bestOffer"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"h4",3),a._uU(4),a.ALo(5,"async"),a.qZA(),a.YNc(6,b,4,2,"ng-container",4),a.ALo(7,"async"),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(4),a.hij("Panier (",a.lcZ(5,2,e._itemsCount$)," Livres)"),a.xp6(2),a.Q6J("ngIf",a.lcZ(7,4,e._shoppingCartItems$)))},directives:[n.O5,y],pipes:[n.Ov],styles:[""],changeDetection:0}),t})(),pathMatch:"full"}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[s.Bz.forChild(w)],s.Bz]}),t})(),U=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.ez,v]]}),t})()}}]);