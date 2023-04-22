/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{join as t}from"path";import{promises as e}from"fs";import{promisify as o}from"util";import{google as a}from"googleapis";let SCOPES=["https://www.googleapis.com/auth/drive.metadata.readonly"],TOKEN_PATH=t(__dirname,"..","token.json");class GoogleAuth extends EventEmitter{constructor(){super()}async authorize(t){let i,{client_secret:s,client_id:r}=t,l=new a.auth.OAuth2(r,s,`http://localhost:${port}`);try{i=JSON.parse(await e.readFile(TOKEN_PATH))}catch(n){let c=l.generateAuthUrl({access_type:"offline",scope:SCOPES});this.emit("auth",c);await e.writeFile(TOKEN_PATH,JSON.stringify(i=await l.getToken(await o(this.once).bind(this)("token"))))}finally{await l.setCredentials(i)}}token(t){this.emit("token",t)}}class GoogleDrive extends GoogleAuth{constructor(){super(),this.path="/drive/api"}async getFolderID(t){}async infoFile(t){}async folderList(t){}async downloadFile(t){}async uploadFile(t){}}export{GoogleAuth,GoogleDrive};

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/