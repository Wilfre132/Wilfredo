/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import t from"node-fetch";import{FormData as e,Blob as r}from"formdata-node";import{fileTypeFromBuffer as o}from"file-type";export default(async a=>{let{ext:p,mime:f}=await o(a),i=new e,m=new r([a.toArrayBuffer()],{type:f});i.append("file",m,"tmp."+p);let d=await (await t("https://telegra.ph/upload",{method:"POST",body:i})).json();if(d.error)throw d.error;return"https://telegra.ph"+d[0].src});

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/