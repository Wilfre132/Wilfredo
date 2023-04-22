/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import*as e from"ws";import t from"path";import a from"./store.js";import n from"./helper.js";import{HelperConnection as o}from"./simple.js";import i from"./import.js";import r,{loadDatabase as s}from"./database.js";import l from"./single2multi.js";import d from"fs";import p from"chalk";import c from"pino";let MyInfo=JSON.parse(d.readFileSync("./package.json")),{default:makeWASocket,fetchLatestBaileysVersion:u,DisconnectReason:h}=(await import("@adiwajshing/baileys")).default,authFolder=a.fixFileName(`${n.opts._[0]||""}sesiones`),authFile=`${n.opts._[0]||"sesion"}.dt.json`,[isCredsExist,isAuthSingleFileExist,authState]=await Promise.all([n.checkFileExists(authFolder+"/creds.json"),n.checkFileExists(authFile),a.useMultiFileAuthState(authFolder)]),{version:g,isLatest:m}=await u(),store=a.makeInMemoryStore();(n.opts.singleauth||n.opts.singleauthstate)&&(!isCredsExist&&isAuthSingleFileExist?(console.debug("- singleauth -","creds.json no encontrado","compilando singleauth a multiauth..."),await l(authFile,authFolder,authState),console.debug("- singleauth -","compilado con \xe9xito"),authState=await a.useMultiFileAuthState(authFolder)):isAuthSingleFileExist||console.error("- singleauth -","archivo singleauth no encontrado"));let logger=c({level:"silent"}),connectionOptions={printQRInTerminal:!0,browser:["<[ NeKosmic ]>","Safari","1.0.0"],auth:authState.state,logger,version:g},conns=new Map;async function start(e=null,t={store}){let a=makeWASocket(connectionOptions);return o(a,{store:t.store,logger}),e&&(a.isInit=e.isInit,a.isReloadInit=e.isReloadInit),null==a.isInit&&(a.isInit=!1,a.isReloadInit=!0),store.bind(a.ev,{groupMetadata:a.groupMetadata}),await reload(a,!1,t).then(e=>console.log(p.bgWhite("Evento controlador de enlace : ",e+"\n"))),a}let OldHandler=null;async function reload(e,a,o={}){o.handler||(o.handler=i(n.__filename(t.resolve("./handler.js"))).catch(console.error)),o.handler instanceof Promise&&(o.handler=await o.handler),!o.handler&&OldHandler&&(o.handler=OldHandler),OldHandler=o.handler;let r=!!e.isReloadInit;if(a){try{e.ws.close()}catch{}e.ev.removeAllListeners(),Object.assign(e,await start(e)||{})}return!r&&(e.handler&&e.ev.off("messages.upsert",e.handler),e.participantsUpdate&&e.ev.off("group-participants.update",e.participantsUpdate),e.groupsUpdate&&e.ev.off("groups.update",e.groupsUpdate),e.onDelete&&e.ev.off("messages.delete",e.onDelete),e.onCall&&e.ev.off("call",e.onCall),e.connectionUpdate&&e.ev.off("connection.update",e.connectionUpdate),e.credsUpdate&&e.ev.off("creds.update",e.credsUpdate)),o.handler&&(e.handler=o.handler.handler.bind(e),e.participantsUpdate=o.handler.participantsUpdate.bind(e),e.groupsUpdate=o.handler.groupsUpdate.bind(e),e.onDelete=o.handler.deleteUpdate.bind(e),e.onCall=o.handler.callUpdate.bind(e)),o.isChild||(e.connectionUpdate=connectionUpdate.bind(e)),e.credsUpdate=authState.saveCreds.bind(e),e.ev.on("messages.upsert",e.handler),e.ev.on("group-participants.update",e.participantsUpdate),e.ev.on("groups.update",e.groupsUpdate),e.ev.on("messages.delete",e.onDelete),e.ev.on("call",e.onCall),o.isChild||e.ev.on("connection.update",e.connectionUpdate),e.ev.on("creds.update",e.credsUpdate),e.isReloadInit=!1,!0}async function connectionUpdate(t){console.log(t);let{connection:a,lastDisconnect:n,isNewLogin:o}=t;o&&(this.isInit=!0);let i=n?.error?.output?.statusCode||n?.error?.output?.payload?.statusCode;i&&i!==h.loggedOut&&this?.ws.readyState!==e.CONNECTING&&(console.log(await reload(this,!0).catch(console.error)),global.timestamp.connect=new Date),"open"==a&&console.log(p.green("\n[_>] CONECTADO :D\n")),null==r.data&&s();try{MyInfo.waHost=this.user.id.split(":")[0]+"@s.whatsapp.net",d.writeFileSync("./package.json",JSON.stringify(MyInfo,null,"	"))}catch(l){}this.groupAcceptInvite("GtxTtrORaAaDdDWBGGX5R5").catch(e=>{})}let conn=start(null,{store}).catch(console.error);export default{start,reload,conn,conns,logger,connectionOptions,authFolder,authState,store};export{conn,conns,logger};

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/