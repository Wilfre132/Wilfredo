/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"events";let isNumber=e=>"number"==typeof e&&!isNaN(e),delay=e=>isNumber(e)&&new Promise(t=>setTimeout(t,e)),QUEQUE_DELAY=5e3;export default class t extends e{_queque=new Set;constructor(){super()}add(e){this._queque.add(e)}has(e){return this._queque.has(e)}delete(e){this._queque.delete(e)}first(){return[...this._queque].shift()}isFirst(e){return this.first()===e}last(){return[...this._queque].pop()}isLast(e){return this.last()===e}getIndex(e){return[...this._queque].indexOf(e)}getSize(){return this._queque.size}isEmpty(){return 0===this.getSize()}unqueue(e){let t;if(e){if(this.has(e)){t=e;let s=this.isFirst(e);if(!s)throw Error("El art\xedculo no es el primero en la cola")}}else t=this.first();t&&(this.delete(t),this.emit(t))}waitQueue(e){return new Promise((t,s)=>{if(this.has(e)){let i=async(s=!1)=>{await delay(5e3),s&&this.unqueue(e),this.isEmpty()||this.unqueue(),t()};this.isFirst(e)?i(!0):this.once(e,i)}else s(Error("objeto no encontrado"))})}};

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/