"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ezra } = require("../Raheem-cm/18");
ezra({ nomCom: "altest", reaction: "💐", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '🅼🆈 🅽🅰🅼🅴 🅸🆂 *RAHEEM-XMD* ғᴇʀʀᴀʀɪ 🚗 \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *ғʀᴇᴅɪᴇᴢʀᴀ255*';
    let varmess = z + d;
    var img = 'https://files.catbox.moe/gahcu9.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="😁"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Hi my name is *RAHEEM-XMD* \n\n '+' I'm a Multi-device Whatsapp bot '
      let d =' developed by *Raheem255*'
      let varmess=z+d
      var img='https://files.catbox.moe/gahcu9.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
