/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import t from"node-fetch";import{FormData as e,Blob as r}from"formdata-node";import{fileTypeFromBuffer as a}from"file-type";let fileIO=async f=>{let{ext:i,mime:o}=await a(f)||{},l=new e,n=new r([f.toArrayBuffer()],{type:o});l.append("file",n,"tmp."+i);let p=await (await t("https://file.io/?expires=1d",{method:"POST",body:l})).json();if(!p.success)throw p;return p.link},RESTfulAPI=async a=>{let f=new e,i=a;for(let o of(Array.isArray(a)||(i=[a]),i)){let l=new r([o.toArrayBuffer()]);f.append("file",l)}let n=await (await t("https://storage.restfulapi.my.id/upload",{method:"POST",body:f})).text();try{if(n=JSON.parse(n),!Array.isArray(a))return n.files[0].url;return n.files.map(t=>t.url)}catch(p){throw n}};export default async function(t){let e=!1;for(let r of[RESTfulAPI,fileIO])try{return await r(t)}catch(a){e=a}if(e)throw e};

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/