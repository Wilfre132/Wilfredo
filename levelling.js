/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

export const growth=Math.pow(Math.PI/Math.E,1.618)*Math.E*.75;export function xpRange(e,r=global.multiplier||1){if(e<0)throw TypeError("\n[!] El nivel no puede ser un valor negativo -.-\n");let n=0===(e=Math.floor(e))?0:Math.round(Math.pow(e,growth)*r)+1,t=Math.round(Math.pow(++e,growth)*r);return{min:n,max:t,xp:t-n}}export function findLevel(e,r=global.multiplier||1){if(e===1/0)return 1/0;if(isNaN(e))return NaN;if(e<=0)return -1;let n=0;do n++;while(xpRange(n,r).min<=e);return--n}export function canLevelUp(e,r,n=global.multiplier||1){return!(e<0)&&(r===1/0||!isNaN(r)&&!(r<=0)&&e<findLevel(r,n))}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/