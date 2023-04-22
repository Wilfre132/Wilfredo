/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import a from"./helper.js";import{Low as t,JSONFile as e}from"lowdb";import{cloudDBAdapter as s,mongoDB as d,mongoDBV2 as r}from"./DB_Adapters/index.js";import b from"lodash";let databaseUrl=a.opts.db||"",databaseAdapter=/https?:\/\//.test(databaseUrl)?new s(databaseUrl):/mongodb(\+srv)?:\/\//i.test(databaseUrl)?a.opts.mongodbv2?new r(databaseUrl):new d(databaseUrl):new e(`${a.opts._[0]?a.opts._[0]+"_":""}database.json`),database=new t(databaseAdapter);async function loadDatabase(){return database._read&&await database._read,null!==database.data||(database._read=database.read().catch(console.error),await database._read,database.data={users:{},chats:{},stats:{},msgs:{},sticker:{},settings:{},...database.data||{}},database.chain=b.chain(database.data)),database.data}loadDatabase();export default database;export{databaseUrl,databaseAdapter,database,loadDatabase};

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/