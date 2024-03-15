const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["I Love You" , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , ", জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗", "হা বলো😒,কি করতে পারি😐😑?" , "-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱","মে হলে Ex 卝 বয়ফ্রেন্ডヅ বসের সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার Ex 卝 বয়ফ্রেন্ডヅ জানু এর সাথে ব্যাস্ত আসি😋" , "আই লাভ ইউ" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "এই'নেও🔑চাবী 😒𝘪𝘯𝘣𝘰𝘹-এর 🔐তালা খুলে মেছেজ দেও📥🫠🤗 I am single🙂" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , ", -ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "BOSS Ex 卝 বয়ফ্রেন্ডヅকে Ummmmha দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি Ex 卝 বয়ফ্রেন্ডヅ BOSS এর সাথে ব্যাস্ত আসি😒"  , "𝙏𝙢𝙧 𝙣𝙖𝙣𝙞 𝙧 ওই টা  😑🥺" , "amr Jan lagbe,Tumi ki single aso?", "-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻" , "jan tomra amar valo lage 💋🫣 "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage(" আমাকে Umma না দিয়ে আমার বস Ex 卝 বয়ফ্রেন্ডヅ কে চুমা দাও !😼😒", threadID);
   };

    if ((event.body.toLowerCase() =="🙋‍♂️" ) || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("_ Ex 卝 বয়ফ্রেন্ডヅ Boss,Group এ হাত মারতে নিষেধ করেছে ", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. এটা সারা কি কিছু বলতে প্যারিস না তুই?😒", threadID);
   };

   if ((event.body.toLowerCase() == "love you all") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("হ্যাঁ,তোৃঁমাৃঁগোৃঁ সৃঁবাৃঁরেৃঁ ভাৃঁলোৃঁবাৃঁসেৃঁ আৃঁমাৃঁরৃঁ Ex 卝 বয়ফ্রেন্ডヅ বৃঁসৃঁ🥰🥀", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage("lol mne lots of love 😘", threadID);
   };

   if ((event.body.toLowerCase() == "gd morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "Kamon aso")) {
     return api.sendMessage("𝘼𝙡𝙝𝙖𝙢𝙙𝙪𝙡𝙡𝙞𝙖𝙝 𝙫𝙡𝙤__𝙩𝙢𝙞? ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "SOIKOT ") || (event.body.toLowerCase() == "🤦‍♂️") || (event.body.toLowerCase() == "@Ex 卝 বয়ফ্রেন্ডヅ") || (event.body.toLowerCase() == "Farhan")) {
     return api.sendMessage( "আসসালামুয়ালাইকুম আমি  Bot বলতে আছি? Ex 卝 বয়ফ্রেন্ডヅBOSS বিজি আছে? যা বলার আমাকে বলেন,🥰? (আবে ওই সয়তান তুই কি ওজু করছো Ex 卝 বয়ফ্রেন্ডヅ বসের নাম লও? 😘",threadID);


   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "creator")) {
     return api.sendMessage("‎[Bot owner :亗 BOSS FARHAN 亗 \n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 Picchi in English . Facebook id https://www.facebook.com/mdsakhoyat.hosen.9?mibextid=ZbWKwL  \n whatsApp :-দিমু নাহ ", threadID);
   };

   if ((event.body.toLowerCase() == "bot কে বানাইছে") || (event.body.toLowerCase() == "tumke banaise ke?")) {
     return api.sendMessage("Boss Ex 卝 বয়ফ্রেন্ডヅ is My Creator🥰. He loves me & Edit Me Daily. He is a good boy 😊", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "botka admin kon ha")) {
     return api.sendMessage("He is Ex 卝 বয়ফ্রেন্ডヅ Boss\n He Gives his name,_You're nex't cru'sh everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "bot love you") || (event.body.toLowerCase() == "Bot love you")) {
     return api.sendMessage("নাৃঁ,আৃঁমিৃঁ তোৃঁ রোৃঁবৃঁটৃঁ আৃঁমিৃঁ love কৃঁরৃঁমুৃঁ কিৃঁভাৃঁবেৃঁ,মেৃঁ হঁলেৃঁ তুৃঁমিৃঁ আৃঁমাৃঁরৃঁ বৃঁসৃঁ Ex 卝 বয়ফ্রেন্ডヅ কেৃঁ love কৃঁরোৃঁ🥰", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("Nh ami চুপ থাকবো না.😼 ফEx 卝 বয়ফ্রেন্ডヅ বস আমারে কথা বলতে বলছে🤭", threadID);
   };

   if ((event.body.toLowerCase() == "Bts") || (event.body.toLowerCase() == "bts")) {
     return api.sendMessage("Bts মানে হিজড়া_🤣🤣তুই কি bts নাকি_🤨?", threadID);
   };

   if ((event.body.toLowerCase() == "Boss er sate beyadopi") || (event.body.toLowerCase() == "বস এর সাথে বেয়াদপি") || (event.body.toLowerCase() == "ki bolli ata") || (event.body.toLowerCase() == "opoman korli")) {
     return api.sendMessage("__sorry boss😔😔 মাফ করে দেন আমাকে ,আর এমন হবে না 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "চুম্মা দাও") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ আমি দিবো না,😒 Ex 卝 বয়ফ্রেন্ডヅ বস কে বলো দিতে🐸", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Farhan")) {
     return api.sendMessage("️ Welcom Ex 卝 বয়ফ্রেন্ডヅ বসের পক্ষে থেকে 🥰🥰.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️ এত রাগ করে না baby🥺. এই নাও ummmmah😘", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Kore . আমার ex boyfriend বস কে Love You বলো 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "🥵🥵") || (event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🤤")) {
     return api.sendMessage("️এই গুলা কেন দেও বুঝি, সব বুঝি uff,আর তুমি নাহ বুঝলে আমার Ex 卝 বয়ফ্রেন্ডヅ বস কে ডাক দেও🙈🙈 ??🤔", threadID);
   };

   if ((event.body.toLowerCase() == "🔥") || (event.body.toLowerCase() == "❤️‍🔥")) {
     return api.sendMessage("️️️ও ভাই গুরুপে আগুন লাগছে আমার ভয় লাগে, আমার Ex 卝 বয়ফ্রেন্ডヅ জানু কে কেউ ফোন দেও😛", threadID);
   };

   if ((event.body.toLowerCase() == "pic daw") || (event.body.toLowerCase() == "photo daw")) {
     return api.sendMessage("️ Ex 卝 বয়ফ্রেন্ডヅ boxa জাও ওখানে দিছি😵", threadID);
   };

   if ((event.body.toLowerCase() == "বট দেও") || (event.body.toLowerCase() == "বট বানাইয়া দাও")) {
     return api.sendMessage("️ তুমি নিজেই বানাই নাও 😒😼,Ex 卝 বয়ফ্রেন্ডヅ অনেক ব্যস্ত্ এক্ষণ", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ ওইদিক এ কি  আমার বসকে খুজতে গো আমি ডেকে দিবো নাকি আমর Ex 卝 বয়ফ্রেন্ডヅ বস কে  🤭😽", threadID);
   };

   if ((event.body.toLowerCase() == "আমাকে কেউ ভালোবাসে নাহ") || (event.body.toLowerCase() == "kew valobashe na amk") || (event.body.toLowerCase() == "কেউ ভালোবাসে না আমাকে")) {
     return api.sendMessage("️ওই এই গ্রুপের মেয়ে গুলো😡 আমার Ex 卝 বয়ফ্রেন্ডヅ বস কে i love you বল🥰", threadID);
   };

   if ((event.body.toLowerCase() == "🤦‍♀️") || (event.body.toLowerCase() == "🤦") || (event.body.toLowerCase() == "🤦🏻‍♂️")) {
     return api.sendMessage("আরে ভাই,মাথায় বারি মারিই না,মাথা ফেটে যাবে😬", threadID);
   };

  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "🤣")) {
     return api.sendMessage("__আরে না হেসে আমার ex boyfriend  কে Ummma  দাও   🐸", threadID);
   };

   if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "👉👈") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "🤭")) {
     return api.sendMessage("__ভালোবাসা কাকে দেখাও আমাকে না দেখিয়ে আমার Ex 卝 বয়ফ্রেন্ডヅ বস কে দেখাও ?🥰", threadID);
   };

   if ((event.body.toLowerCase() == "Kamon aco?") || (event.body.toLowerCase() == "কেমন আছেন সবাই") || (event.body.toLowerCase() == "kamon aco sobi?") || (event.body.toLowerCase() == "কেমন আছো সবাই?") || (event.body.toLowerCase() == "kamon aso?")) {
     return api.sendMessage("alhamdulilah valo tmi🥰", threadID);
   };

   if ((event.body.toLowerCase() == "@everyone call a aso") || (event.body.toLowerCase() == "কলে আসো")) {
     return api.sendMessage("আসালামু ওয়ালাইকুম আশা করি সবাই ভালো আছেন আমি Ex 卝 বয়ফ্রেন্ডヅ এর বট বলতে আছি আমি কলে আসতে পারি না", threadID);
   };

   if ((event.body.toLowerCase() == "❣️") || (event.body.toLowerCase() == "💖")) {
     return api.sendMessage("এৃঁতোৃঁ ভাৃঁলোৃঁবাৃঁসাৃঁ কৃঁইৃঁ পাৃঁওৃঁ আৃঁমাৃঁরৃঁ বৃঁসৃ্ঁ Ex 卝 বয়ফ্রেন্ডヅ কেৃঁ এৃঁকৃঁটুৃঁ দেৃঁওৃঁ🥰", threadID);
   };

   if ((event.body.toLowerCase() == "bot ঘুমাও") || (event.body.toLowerCase() == "Bot ঘুমাবা কখন?")) {
     return api.sendMessage("আমি bot, আমার ঘুমানোর দরকার নাই😊তুমি ঘুমাও<🐒", threadID);
   };

   if ((event.body.toLowerCase() == "Miss you bot") || (event.body.toLowerCase() == "I miss you bot")) {
     return api.sendMessage("Miss you to🥰 I love you", threadID);
   };

   if ((event.body.toLowerCase() == "আমি ফারহান") || (event.body.toLowerCase() == "Farhan kamon aso")) {
     return api.sendMessage("হ্যা, তুই আমার বাল_<😊", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }

