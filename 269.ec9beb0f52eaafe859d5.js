(self.webpackChunkhenri_potier_store=self.webpackChunkhenri_potier_store||[]).push([[269],{6269:(t,e,n)=>{"use strict";n.r(e),n.d(e,{BooksModule:()=>dt});var s=n(1116),i=n(8619),o=n(9764),r=n(8318),a=n(8470),l=n(9996),h=n(2056);function u(t,e){return new r.y(n=>{const s=t.length;if(0===s)return void n.complete();const i=new Array(s);let r=0,a=0;for(let l=0;l<s;l++){const h=(0,o.D)(t[l]);let u=!1;n.add(h.subscribe({next:t=>{u||(u=!0,a++),i[l]=t},error:t=>n.error(t),complete:()=>{r++,r!==s&&u||(a===s&&n.next(e?e.reduce((t,e,n)=>(t[e]=i[n],t),{}):i),n.complete())}}))}})}let c=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}setProperty(t,e){this._renderer.setProperty(this._elementRef.nativeElement,t,e)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.Qsj),i.Y36(i.SBq))},t.\u0275dir=i.lG2({type:t}),t})(),d=(()=>{class t extends c{}return t.\u0275fac=function(){let e;return function(n){return(e||(e=i.n5z(t)))(n||t)}}(),t.\u0275dir=i.lG2({type:t,features:[i.qOj]}),t})();const p=new i.OlP("NgValueAccessor"),_={provide:p,useExisting:(0,i.Gpc)(()=>f),multi:!0},g=new i.OlP("CompositionEventMode");let f=(()=>{class t extends c{constructor(t,e,n){super(t,e),this._compositionMode=n,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=(0,s.q)()?(0,s.q)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this.setProperty("value",null==t?"":t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(g,8))},t.\u0275dir=i.lG2({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&i.NdJ("input",function(t){return e._handleInput(t.target.value)})("blur",function(){return e.onTouched()})("compositionstart",function(){return e._compositionStart()})("compositionend",function(t){return e._compositionEnd(t.target.value)})},features:[i._Bn([_]),i.qOj]}),t})();const y=new i.OlP("NgValidators"),m=new i.OlP("NgAsyncValidators");function C(t){return null!=t}function V(t){const e=(0,i.QGY)(t)?(0,o.D)(t):t;return(0,i.CqO)(e),e}function b(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function v(t,e){return e.map(e=>e(t))}function A(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}function k(t){return null!=t?function(t){if(!t)return null;const e=t.filter(C);return 0==e.length?null:function(t){return b(v(t,e))}}(A(t)):null}function E(t){return null!=t?function(t){if(!t)return null;const e=t.filter(C);return 0==e.length?null:function(t){return function(...t){if(1===t.length){const e=t[0];if((0,a.k)(e))return u(e,null);if((0,h.K)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return u(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return u(t=1===t.length&&(0,a.k)(t[0])?t[0]:t,null).pipe((0,l.U)(t=>e(...t)))}return u(t,null)}(v(t,e).map(V)).pipe((0,l.U)(b))}}(A(t)):null}function O(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}let w=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=k(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=E(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.lG2({type:t}),t})(),T=(()=>{class t extends w{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(){let e;return function(n){return(e||(e=i.n5z(t)))(n||t)}}(),t.\u0275dir=i.lG2({type:t,features:[i.qOj]}),t})();class S extends w{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}let D=(()=>{class t extends class{constructor(t){this._cd=t}is(t){var e,n;return!!(null===(n=null===(e=this._cd)||void 0===e?void 0:e.control)||void 0===n?void 0:n[t])}}{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(S,2))},t.\u0275dir=i.lG2({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&i.ekj("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[i.qOj]}),t})();function x(t,e){t.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function P(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function M(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const j="VALID",Z="INVALID",q="PENDING",U="DISABLED";function F(t){return(Y(t)?t.validators:t)||null}function B(t){return Array.isArray(t)?k(t):t||null}function N(t,e){return(Y(e)?e.asyncValidators:t)||null}function I(t){return Array.isArray(t)?E(t):t||null}function Y(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class J{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=B(this._rawValidators),this._composedAsyncValidatorFn=I(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===j}get invalid(){return this.status===Z}get pending(){return this.status==q}get disabled(){return this.status===U}get enabled(){return this.status!==U}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=B(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=I(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=q,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=U,this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=j,this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),this.status!==j&&this.status!==q||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?U:j}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=q,this._hasOwnPendingAsyncValidator=!0;const e=V(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let s=t;return e.forEach(t=>{s=s instanceof G?s.controls.hasOwnProperty(t)?s.controls[t]:null:s instanceof Q&&s.at(t)||null}),s}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?U:this.errors?Z:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(q)?q:this._anyControlsHaveStatus(Z)?Z:j}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Y(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class L extends J{constructor(t=null,e,n){super(F(e),N(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){M(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){M(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class G extends J{constructor(t,e,n){super(F(e),N(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,s)=>{n.reset(t[s],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof L?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,s)=>{n=e(n,t,s)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class Q extends J{constructor(t,e,n){super(F(e),N(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,n={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,s)=>{n.reset(t[s],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof L?t.value:t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const R={provide:S,useExisting:(0,i.Gpc)(()=>z)},$=(()=>Promise.resolve(null))();let z=(()=>{class t extends S{constructor(t,e,n,s){super(),this.control=new L,this._registered=!1,this.update=new i.vpe,this._parent=t,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=function(t,e){if(!e)return null;let n,s,i;return Array.isArray(e),e.forEach(t=>{t.constructor===f?n=t:Object.getPrototypeOf(t.constructor)===d?s=t:i=t}),i||s||n||null}(0,s)}ngOnChanges(t){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in t&&this._updateDisabled(t),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?[...this._parent.path,this.name]:[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){var t,e;(function(t,e){const n=function(t){return t._rawValidators}(t);null!==e.validator?t.setValidators(O(n,e.validator)):"function"==typeof n&&t.setValidators([n]);const s=function(t){return t._rawAsyncValidators}(t);null!==e.asyncValidator?t.setAsyncValidators(O(s,e.asyncValidator)):"function"==typeof s&&t.setAsyncValidators([s]);const i=()=>t.updateValueAndValidity();x(e._rawValidators,i),x(e._rawAsyncValidators,i)})(t=this.control,e=this),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&P(t,e)})}(t,e),function(t,e){const n=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&P(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function(t,e){if(e.valueAccessor.setDisabledState){const n=t=>{e.valueAccessor.setDisabledState(t)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(t,e),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){$.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1})})}_updateDisabled(t){const e=t.isDisabled.currentValue,n=""===e||e&&"false"!==e;$.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable()})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(T,9),i.Y36(y,10),i.Y36(m,10),i.Y36(p,10))},t.\u0275dir=i.lG2({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[i._Bn([R]),i.qOj,i.TTD]}),t})(),H=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({}),t})(),X=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[H]]}),t})(),K=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[X]}),t})();var W=n(5471),tt=n(5983),et=n(4736),nt=n(8577);function st(t,e){if(1&t&&(i.TgZ(0,"p",12),i._uU(1),i.qZA()),2&t){const t=e.$implicit;i.xp6(1),i.hij(" ",t," ")}}let it=(()=>{class t{constructor(){this.addToCart=new i.vpe}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-book-list-item"]],inputs:{book:"book"},outputs:{addToCart:"addToCart"},decls:18,vars:7,consts:[[1,"book-item","card","my-4"],[1,"row","g-0"],[1,"book-item__cover","book-cover","padding--md","col-md-2","text-center"],[1,"book-cover__image","img-fluid","p-2",3,"src"],[1,"book-item__info","book-info","card-body","col-md-8"],[1,"book-info__title","card-title"],[1,"book-info__summary","overflow-auto"],["class","card-text",4,"ngFor","ngForOf"],[1,"book-item__action","book-action","padding--md","col-md-2","border-start","p-3"],[1,"book-action__price","mb-4","fs-5"],[1,"book-action__add","d-grid"],[1,"btn","btn-primary",3,"click"],[1,"card-text"]],template:function(t,e){1&t&&(i.TgZ(0,"article",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i._UZ(3,"img",3),i.qZA(),i.TgZ(4,"div",4),i.TgZ(5,"h5",5),i._uU(6),i.qZA(),i.TgZ(7,"div",6),i.YNc(8,st,2,1,"p",7),i.qZA(),i.qZA(),i.TgZ(9,"div",8),i.TgZ(10,"div",9),i._uU(11," prix: "),i.TgZ(12,"strong"),i._uU(13),i.ALo(14,"currency"),i.qZA(),i.qZA(),i.TgZ(15,"div",10),i.TgZ(16,"button",11),i.NdJ("click",function(){return e.addToCart.emit(e.book)}),i._uU(17,"Ajouter au Panier"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(3),i.Q6J("src",null==e.book?null:e.book.cover,i.LSH),i.xp6(3),i.Oqu(null==e.book?null:e.book.title),i.xp6(2),i.Q6J("ngForOf",null==e.book?null:e.book.synopsis),i.xp6(5),i.Oqu(i.xi3(14,4,null==e.book?null:e.book.price,"EUR")))},directives:[s.sg],pipes:[s.H9],styles:[".book-item[_ngcontent-%COMP%]{min-height:200px}.book-info__summary[_ngcontent-%COMP%]{text-align:justify}"],changeDetection:0}),t})();function ot(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"app-book-list-item",1),i.NdJ("addToCart",function(){const e=i.CHM(t).$implicit;return i.oxw().addToCart.emit(e)}),i.qZA()}2&t&&i.Q6J("book",e.$implicit)}let rt=(()=>{class t{constructor(){this.books=[],this.addToCart=new i.vpe,this.console=console}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-book-list"]],inputs:{books:"books"},outputs:{addToCart:"addToCart"},decls:1,vars:1,consts:[["class","book-list__list-item margin--horizontal--lg",3,"book","addToCart",4,"ngFor","ngForOf"],[1,"book-list__list-item","margin--horizontal--lg",3,"book","addToCart"]],template:function(t,e){1&t&&i.YNc(0,ot,1,1,"app-book-list-item",0),2&t&&i.Q6J("ngForOf",e.books)},directives:[s.sg,it],styles:[".book-list__list-item[_ngcontent-%COMP%]{display:block}"],changeDetection:0}),t})(),at=(()=>{class t{transform(t,e){const n=e.toLocaleLowerCase();return t.filter(t=>t.title.toLocaleLowerCase().includes(n)||t.synopsis.some(t=>t.toLocaleLowerCase().includes(n)))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Yjl({name:"searchBooks",type:t,pure:!0}),t})();function lt(t,e){if(1&t){const t=i.EpF();i.ynx(0),i.TgZ(1,"app-book-list",5),i.NdJ("addToCart",function(e){return i.CHM(t),i.oxw().onAddToCart(e)}),i.ALo(2,"searchBooks"),i.qZA(),i.BQk()}if(2&t){const t=e.ngIf,n=i.oxw();i.xp6(1),i.Q6J("books",i.xi3(2,1,t,n._searchText))}}function ht(t,e){1&t&&(i.TgZ(0,"div",6),i.TgZ(1,"div",7),i.TgZ(2,"span",8),i._uU(3,"Loading..."),i.qZA(),i.qZA(),i.qZA())}const ut=[{path:"",component:(()=>{class t{constructor(t,e){this._store=t,this._booksService=e,this._searchText="",this._books$=this._booksService.getAllBooks()}onAddToCart(t){this._store.dispatch((0,tt.X)(t))}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(et.yh),i.Y36(nt.y))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-books-search"]],decls:8,vars:5,consts:[[1,"input-group","my-4","bg-white"],["type","search","placeholder","Rechercher un livre...",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-outline-secondary"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],[3,"books","addToCart"],[1,"text-center"],["role","status",1,"spinner-border"],[1,"visually-hidden"]],template:function(t,e){if(1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"input",1),i.NdJ("ngModelChange",function(t){return e._searchText=t}),i.qZA(),i.TgZ(2,"button",2),i._uU(3,"Recherche"),i.qZA(),i.qZA(),i.YNc(4,lt,3,4,"ng-container",3),i.ALo(5,"async"),i.YNc(6,ht,4,0,"ng-template",null,4,i.W1O)),2&t){const t=i.MAs(7);i.xp6(1),i.Q6J("ngModel",e._searchText),i.xp6(3),i.Q6J("ngIf",i.lcZ(5,3,e._books$))("ngIfElse",t)}},directives:[f,D,z,s.O5,rt],pipes:[s.Ov,at],styles:[""],changeDetection:0}),t})(),pathMatch:"full"}];let ct=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[W.Bz.forChild(ut)],W.Bz]}),t})(),dt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[s.ez,K,ct]]}),t})()}}]);