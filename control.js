'use strict';

var __createBinding = this && this.__createBinding || (Object.create ? function (_0x2955f4, _0x382a32, _0x487d3b, _0x572396) {
  if (_0x572396 === undefined) {
    _0x572396 = _0x487d3b;
  }
  var _0x1cd167 = Object.getOwnPropertyDescriptor(_0x382a32, _0x487d3b);
  if (!_0x1cd167 || ('get' in _0x1cd167 ? !_0x382a32.__esModule : _0x1cd167.writable || _0x1cd167.configurable)) {
    _0x1cd167 = {
      'enumerable': true,
      'get': function () {
        return _0x382a32[_0x487d3b];
      }
    };
  }
  Object.defineProperty(_0x2955f4, _0x572396, _0x1cd167);
} : function (_0x3499b5, _0x10ff39, _0x3b7dee, _0x45d5e1) {
  if (_0x45d5e1 === undefined) {
    _0x45d5e1 = _0x3b7dee;
  }
  _0x3499b5[_0x45d5e1] = _0x10ff39[_0x3b7dee];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (_0x3158cf, _0x18a0d2) {
  Object.defineProperty(_0x3158cf, "default", {
    'enumerable': true,
    'value': _0x18a0d2
  });
} : function (_0x1b9f9e, _0x3ae280) {
  _0x1b9f9e["default"] = _0x3ae280;
});
var __importStar = this && this.__importStar || function (_0xba88a9) {
  if (_0xba88a9 && _0xba88a9.__esModule) {
    return _0xba88a9;
  }
  var _0x585d26 = {};
  if (_0xba88a9 != null) {
    for (var _0x5cfd14 in _0xba88a9) if (_0x5cfd14 !== "default" && Object.prototype.hasOwnProperty.call(_0xba88a9, _0x5cfd14)) {
      __createBinding(_0x585d26, _0xba88a9, _0x5cfd14);
    }
  }
  __setModuleDefault(_0x585d26, _0xba88a9);
  return _0x585d26;
};
var __importDefault = this && this.__importDefault || function (_0xbbeb99) {
  return _0xbbeb99 && _0xbbeb99.__esModule ? _0xbbeb99 : {
    'default': _0xbbeb99
  };
};
Object.defineProperty(exports, "__esModule", {
  'value': true
});
const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
const logger_1 = __importDefault(require("@whiskeysockets/baileys/lib/Utils/logger"));
const logger = logger_1["default"].child({});
logger.level = "silent";
const pino = require("pino");
const boom_1 = require("@hapi/boom");
const conf = require('./set');
let fs = require("fs-extra");
let path = require("path");
const FileType = require("file-type");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  verifierEtatJid,
  recupererActionJid
} = require("./Raheemdatabase/antilien");
const {
  atbverifierEtatJid,
  atbrecupererActionJid
} = require("./Raheemdatabase/antibot");
let evt = require(__dirname + "/fredi/ezra");
const {
  isUserBanned,
  addUserToBanList,
  removeUserFromBanList
} = require("./Raheemdatabase/banUser");
const {
  addGroupToBanList,
  isGroupBanned,
  removeGroupFromBanList
} = require("./Raheemdatabase/banGroup");
const {
  isGroupOnlyAdmin,
  addGroupToOnlyAdminList,
  removeGroupFromOnlyAdminList
} = require('./Raheemdatabase/onlyAdmin');
let {
  reagir
} = require(__dirname + "/Raheem/app");
var session = conf.session.replace(/LUCKY-MD;;;=>/g, '');
const prefixe = conf.PREFIXE;
async function authentification() {
  try {
    if (!fs.existsSync(__dirname + "/scan/creds.json")) {
      console.log("connexion en cour ...");
      await fs.writeFileSync(__dirname + "/scan/creds.json", atob(session), "utf8");
    } else if (fs.existsSync(__dirname + "/scan/creds.json") && session != "zokk") {
      await fs.writeFileSync(__dirname + "/scan/creds.json", atob(session), "utf8");
    }
  } catch (_0x155004) {
    console.log("Session Invalid " + _0x155004);
    return;
  }
}
authentification();
0x0;
const store = baileys_1.makeInMemoryStore({
  'logger': pino().child({
    'level': 'silent',
    'stream': "store"
  })
});
setTimeout(() => {
  authentification();
  async function _0x14b61b() {
    0x0;
    const {
      version: _0x5c25f9,
      isLatest: _0x46562f
    } = await baileys_1.fetchLatestBaileysVersion();
    0x0;
    const {
      state: _0x3766c7,
      saveCreds: _0x517fc2
    } = await baileys_1.useMultiFileAuthState(__dirname + "/scan");
    0x0;
    const _0x441a85 = {
      'version': _0x5c25f9,
      'logger': pino({
        'level': "silent"
      }),
      'browser': ["RAHEEM-XMD", "safari", "1.0.0"],
      'printQRInTerminal': true,
      'fireInitQueries': false,
      'shouldSyncHistoryMessage': true,
      'downloadHistory': true,
      'syncFullHistory': true,
      'generateHighQualityLinkPreview': true,
      'markOnlineOnConnect': false,
      'keepAliveIntervalMs': 0x7530,
      'auth': {
        'creds': _0x3766c7.creds,
        'keys': baileys_1.makeCacheableSignalKeyStore(_0x3766c7.keys, logger)
      },
      'getMessage': async _0x1a37b8 => {
        if (store) {
          const _0x841dc0 = await store.loadMessage(_0x1a37b8.remoteJid, _0x1a37b8.id, undefined);
          return _0x841dc0.message || undefined;
        }
        return {
          'conversation': "An Error Occurred, Repeat Command!"
        };
      }
    };
    0x0;
    const _0x4b69c7 = baileys_1["default"](_0x441a85);
    store.bind(_0x4b69c7.ev);
    function _0x140f44() {
      const _0x310482 = {
        'timeZone': "Africa/Dar Es Salam",
        'year': "numeric",
        'month': '2-digit',
        'day': "2-digit",
        'hour': '2-digit',
        'minute': "2-digit",
        'second': "2-digit",
        'hour12': false
      };
      const _0xa530bf = new Intl.DateTimeFormat("en-KE", _0x310482).format(new Date());
      return _0xa530bf;
    }
    setInterval(async () => {
      if (conf.AUTO_BIO === 'yes') {
        const _0x348645 = _0x140f44();
        const _0x242678 = "RAHEEM-XMD is running 🚗\n" + _0x348645;
        await _0x4b69c7.updateProfileStatus(_0x242678);
        console.log("Updated Bio: " + _0x242678);
      }
    }, 0xea60);
    _0x4b69c7.ev.on("call", async _0x3627e9 => {
      if (conf.ANTI_CALL === 'yes') {
        const _0x1e10b7 = _0x3627e9[0x0].id;
        const _0x7da004 = _0x3627e9[0x0].from;
        await _0x4b69c7.rejectCall(_0x1e10b7, _0x7da004);
        await _0x4b69c7.sendMessage(_0x7da004, {
          'text': "Hello😊,am RAHEEM-XMD a personal assistant,please try again later"
        });
      }
    });
    const _0x592410 = _0x29cd4b => new Promise(_0x28c6f8 => setTimeout(_0x28c6f8, _0x29cd4b));
    let _0xa24003 = 0x0;
    const _0x5939a2 = {
      'hello': ['👋', '🙂', '😊', "🙋‍♂️", '🙋‍♀️'],
      'hi': ['👋', '🙂', '😁', '🙋‍♂️', '🙋‍♀️'],
      "good morning": ['🌅', '🌞', '☀️', '🌻', '🌼'],
      "good night": ['🌙', '🌜', '⭐', '🌛', '💫'],
      'bye': ['👋', '😢', "👋🏻", '🥲', "🚶‍♂️", "🚶‍♀️"],
      "see you": ['👋', '😊', "👋🏻", '✌️', "🚶‍♂️"],
      'bro': ["🤜🤛", '👊', '💥', '🥊', '👑'],
      'sister': ['👭', '💁‍♀️', '🌸', '💖', "🙋‍♀️"],
      'buddy': ['🤗', '👯‍♂️', '👯‍♀️', '🤜🤛', '🤝'],
      'niaje': ['👋', '😄', '💥', '🔥', '🕺', '💃'],
      'Raheem': ['😎', '💯', '🔥', '🚀', '👑'],
      'Raheem': ['🔥', '💥', '👑', '💯', '😎'],
      'thanks': ['🙏', '😊', '💖', '❤️', '💐'],
      "thank you": ['🙏', '😊', '🙌', '💖', '💝'],
      'love': ['❤️', '💖', '💘', '😍', '😘', '💍', '💑'],
      "miss you": ['😢', '💔', '😔', '😭', '💖'],
      'sorry': ['😔', '🙏', '😓', '💔', '🥺'],
      'apologies': ['😔', '💔', '🙏', '😞', "🙇‍♂️", '🙇‍♀️'],
      'congratulations': ['🎉', '🎊', '🏆', '🎁', '👏'],
      "well done": ['👏', '💪', '🎉', "🎖️", '👍'],
      "good job": ['👏', '💯', '👍', '🌟', '🎉'],
      'happy': ['😁', '😊', '🎉', '🎊', '💃', '🕺'],
      'sad': ['😢', '😭', '😞', '💔', '😓'],
      'angry': ['😡', '🤬', '😤', '💢', '😾'],
      'excited': ['🤩', '🎉', '😆', '🤗', '🥳'],
      'surprised': ['😲', '😳', '😯', '😮', '😲'],
      'help': ['🆘', '❓', '🙏', '💡', "👨‍💻", '👩‍💻'],
      'how': ['❓', '🤔', '😕', '😳', '🧐'],
      'what': ['❓', '🤷‍♂️', "🤷‍♀️", '😕', '😲'],
      'where': ['❓', '🌍', "🗺️", '🏙️', '🌎'],
      'party': ['🎉', '🥳', '🍾', '🍻', '🎤', '💃', '🕺'],
      'fun': ['🤣', '😂', '🥳', '🎉', '🎮', '🎲'],
      'hangout': ['🍕', '🍔', '🍻', '🎮', '🍿', '😆'],
      'good': ['👍', '👌', '😊', '💯', '🌟'],
      'awesome': ['🔥', '🚀', '🤩', '👏', '💥'],
      'cool': ['😎', '👌', '🎮', '🎸', '💥'],
      'boring': ['😴', '🥱', '🙄', '😑', '🤐'],
      'tired': ['😴', '🥱', '😌', '💤', '🛌'],
      'bot': ['🤖', '💻', '⚙️', '🧠', '🔧'],
      'robot': ['🤖', '⚙️', '💻', '🔋', '🤓'],
      "cool bot": ['🤖', '😎', '🤘', '💥', '🎮'],
      "love you": ['❤️', '💖', '😘', '💋', '💑'],
      "thank you bot": ['🙏', '🤖', '😊', '💖', '💐'],
      "good night bot": ['🌙', '🌛', '⭐', '💤', '😴'],
      'laughter': ['😂', '🤣', '😆', '😄', '🤪'],
      'crying': ['😢', '😭', '😿', '😓', '💔'],
      'john': ['👑', '🔥', '💥', '😎', '💯'],
      'mike': ['💪', '🏆', '🔥', '💥', '🚀'],
      'lisa': ['💖', '👑', '🌸', '😍', '🌺'],
      'emily': ['💖', '💃', '👑', '🎉', '🎀'],
      'happy': ['😁', '😄', '😊', '🙌', '🎉', '🥳', '💃', '🕺', '🔥'],
      'excited': ['🤩', '🎉', '🥳', '🎊', '😆', '🤗', '💥', '🚀'],
      'love': ['❤️', '💖', '💘', '💝', '😍', '😘', '💍', '💑', '🌹'],
      'grateful': ['🙏', '💐', '🥰', '❤️', '😊'],
      'thankful': ['🙏', '💖', '💐', '🤗', '😇'],
      'sad': ['😢', '😭', '😞', '💔', '😔', '😓', '😖'],
      'angry': ['😡', '😠', '🤬', '💢', '👊', '💥', '⚡'],
      'frustrated': ['😤', '😩', '🤯', '😑', '🌀'],
      'bored': ['😴', '🥱', '🙄', '😑', '😒'],
      'surprised': ['😲', '😳', '😮', '😯', '😲', '🙀'],
      'shocked': ['😱', '😳', '😯', '💥', '🤯'],
      'wow': ['😲', '😱', '🤩', '🤯', '💥', '🚀'],
      'crying': ['😭', '😢', '💔', '😞', '😓'],
      "miss you": ['😭', '💔', '😔', '😢', '❤️'],
      'lonely': ['😔', '😭', '😢', '💔', '🙁'],
      'help': ['🆘', '❓', '🤔', "🙋‍♂️", "🙋‍♀️", '💡'],
      "need assistance": ['🆘', '💁‍♂️', "💁‍♀️", '❓', '🙏'],
      'sorry': ['😔', '🙏', '💔', '😓', '🥺', "🙇‍♂️", "🙇‍♀️"],
      'apology': ['😔', '😞', '🙏', '💔', "🙇‍♂️", '🙇‍♀️'],
      "good job": ['👏', '💯', '🎉', '🌟', '👍', '👏'],
      "well done": ['👏', '🎉', "🎖️", '💪', '🔥', '🏆'],
      "you can do it": ['💪', '🔥', '💯', '🚀', '🌟'],
      'congratulations': ['🎉', '🏆', '🎊', '🎁', '👏', '🍾'],
      'cheers': ['🥂', '🍻', '🍾', '🍷', '🥳', '🎉'],
      'goodbye': ['👋', '😢', '💔', "👋🏻", "🚶‍♂️", "🚶‍♀️"],
      'bye': ['👋', '👋🏻', '🥲', "🚶‍♂️", '🚶‍♀️'],
      "see you": ['👋', '👋🏻', '🤗', '✌️', '🙋‍♂️', "🙋‍♀️"],
      'hello': ['👋', '🙂', '😊', "🙋‍♂️", "🙋‍♀️"],
      'hi': ['👋', '🙂', '😁', "🙋‍♂️", "🙋‍♀️"],
      'party': ['🎉', '🥳', '🎤', '💃', '🕺', '🍻', '🎶'],
      'fun': ['🎮', '🎲', '🤣', '🎉', '🃏'],
      'play': ['🎮', '🏀', '⚽', '🎾', '🎱', '🎲', '🏆'],
      'work': ['💻', "🖥️", '💼', '📅', '📝'],
      'school': ['📚', '🏫', '🎒', "👨‍🏫", "👩‍🏫"],
      'study': ['📖', '📝', '💡', '📚', '🎓'],
      'summer': ['🌞', "🏖️", '🌴', '🍉', '🌻'],
      'winter': ['❄️', '☃️', '🎿', '🔥', '⛄'],
      'autumn': ['🍁', '🍂', '🎃', '🍂', '🍁'],
      'spring': ['🌸', '🌼', '🌷', '🌱', '🌺'],
      'birthday': ['🎂', '🎉', '🎁', '🎈', '🎊'],
      'anniversary': ['💍', '🎉', '🎁', '🎈', '💑'],
      'robot': ['🤖', '⚙️', '🔧', '🤖', '🧠'],
      'bot': ['🤖', '🧠', '⚙️', '💻', '🖥️'],
      'thanks': ['🙏', '💖', '😊', '❤️', '💐'],
      "good luck": ['🍀', '🍀', '💯', '🍀', '🎯'],
      'john': ['👑', '🔥', '💥', '😎', '💯'],
      'mike': ['💪', '🏆', '🔥', '💥', '🚀'],
      'lisa': ['💖', '👑', '🌸', '😍', '🌺'],
      'emily': ['💖', '💃', '👑', '🎉', '🎀'],
      'food': ['🍕', '🍔', '🍟', '🍲', '🍣', '🍩'],
      'drink': ['🍺', '🍷', '🥂', '🍾', '🥤'],
      'coffee': ['☕', '🥤', '🍵', '🥶'],
      'tea': ['🍵', '🫖', '🍂', '🍃'],
      'excited': ['🤩', '🎉', '🥳', '💥', '🚀', '😆', '😜'],
      'nervous': ['😬', '😰', '🤞', '🧠', '👐'],
      'confused': ['🤔', '😕', '🧐', '😵', '🤷‍♂️', "🤷‍♀️"],
      'embarrassed': ['😳', '😳', '🙈', '😳', '😬', '😅'],
      'hopeful': ['🤞', '🌠', '🙏', '🌈', '💫'],
      'shy': ['😊', '😳', '🙈', '🫣', '🫶'],
      'family': ['👨‍👩‍👧‍👦', '👩‍👧', "👩‍👧‍👦", "👨‍👩‍👧", '💏', "👨‍👨‍👧‍👦", "👩‍👩‍👧‍👦"],
      'friends': ["👯‍♂️", "👯‍♀️", '🤗', '🫶', '💫', '🤝'],
      'relationship': ['💑', '❤️', '💍', '🥰', '💏', '💌'],
      'couple': ['👩‍❤️‍👨', "👨‍❤️‍👨", "👩‍❤️‍👩", '💍', '💑', '💏'],
      "best friend": ['🤗', '💖', "👯‍♀️", '👯‍♂️', '🙌'],
      "love you": ['❤️', '😘', '💖', '💘', '💓', '💗'],
      'vacation': ['🏖️', '🌴', '✈️', '🌊', '🛳️', "🏞️", "🏕️"],
      'beach': ["🏖️", '🌊', '🏄‍♀️', '🩴', "🏖️", '🌴', '🦀'],
      "road trip": ['🚗', '🚙', "🛣️", '🌄', '🌟'],
      'mountain': ["🏞️", '⛰️', '🏔️', '🌄', "🏕️", '🌲'],
      'city': ["🏙️", '🌆', '🗽', '🌇', '🚖', "🏙️"],
      'exploration': ['🌍', '🧭', '🌎', '🌍', '🧳', '📍', '⛵'],
      'morning': ['🌅', '☀️', '🌞', '🌄', '🌻', "🕶️"],
      'afternoon': ['🌞', '🌤️', '⛅', '🌻', '🌇'],
      'night': ['🌙', '🌛', '🌜', '⭐', '🌚', '💫'],
      'evening': ['🌙', '🌛', '🌇', '🌓', '💫'],
      'goodnight': ['🌙', '😴', '💤', '🌜', '🛌', '🌛', '✨'],
      'productivity': ['💻', '📊', '📝', '💼', '📅', '📈'],
      'office': ["🖥️", '💼', "🗂️", '📅', '🖋️'],
      'workout': ["🏋️‍♀️", '💪', '🏃‍♂️', "🏃‍♀️", "🤸‍♀️", '🚴‍♀️', "🏋️‍♂️"],
      "study hard": ['📚', '📝', '📖', '💡', '💼'],
      'focus': ['🔍', '🎯', '💻', '🧠', '🤓'],
      'food': ['🍕', '🍔', '🍟', '🍖', '🍖', '🥗', '🍣', '🍲'],
      'drink': ['🍹', '🥤', '🍷', '🍾', '🍸', '🍺', '🥂', '☕'],
      'coffee': ['☕', '🧃', '🍵', '🥤', '🍫'],
      'cake': ['🍰', '🎂', '🍩', '🍪', '🍫', '🧁'],
      "ice cream": ['🍦', '🍧', '🍨', '🍪'],
      'cat': ['🐱', '😺', '🐈', '🐾'],
      'dog': ['🐶', '🐕', '🐩', '🐕‍🦺', '🐾'],
      'bird': ['🐦', '🦉', '🦅', '🐦'],
      'fish': ['🐟', '🐠', '🐡', '🐡', '🐙'],
      'rabbit': ['🐰', '🐇', '🐹', '🐾'],
      'lion': ['🦁', '🐯', '🐅', '🐆'],
      'bear': ['🐻', '🐨', '🐼', "🐻‍❄️"],
      'elephant': ['🐘', '🐘'],
      'sun': ['☀️', '🌞', '🌄', '🌅', '🌞'],
      'rain': ["🌧️", '☔', '🌈', "🌦️", "🌧️"],
      'snow': ['❄️', '⛄', "🌨️", '🌬️', '❄️'],
      'wind': ['💨', "🌬️", "🌪️", '🌬️'],
      'earth': ['🌍', '🌏', '🌎', '🌍', '🌱', '🌳'],
      'phone': ['📱', '☎️', '📞', '📲', '📡'],
      'computer': ['💻', "🖥️", '⌨️', "🖱️", "🖥️"],
      'internet': ['🌐', '💻', '📶', '📡', '🔌'],
      'software': ['💻', '🖥️', "🧑‍💻", "🖱️", '💡'],
      'star': ['⭐', '🌟', '✨', '🌠', '💫'],
      'light': ['💡', '🔦', '✨', '🌟', '🔆'],
      'money': ['💵', '💰', '💸', '💳', '💶'],
      'victory': ['✌️', '🏆', '🎉', "🎖️", '🎊'],
      'gift': ['🎁', '🎀', '🎉', '🎁'],
      'fire': ['🔥', '💥', '🌋', '🔥', '💣'],
      'music': ['🎵', '🎶', '🎧', '🎤', '🎸', '🎹'],
      'sports': ['⚽', '🏀', '🏈', '🎾', "🏋️‍♂️", '🏃‍♀️', '🏆', '🥇'],
      'games': ['🎮', "🕹️", '🎲', '🎯', '🧩'],
      'art': ['🎨', "🖌️", "🖼️", '🎭', '🖍️'],
      'photography': ['📷', '📸', '📸', "🖼️", '🎥'],
      'reading': ['📚', '📖', '📚', '📰'],
      'craft': ['🧵', '🪡', '✂️', '🪢', '🧶'],
      'hello': ['👋', '🙂', '😊'],
      'hey': ['👋', '🙂', '😊'],
      'hi': ['👋', '🙂', '😊'],
      'bye': ['👋', '😢', '👋'],
      'goodbye': ['👋', '😢', "🙋‍♂️"],
      'thanks': ['🙏', '😊', '🌹'],
      "thank you": ['🙏', '😊', '🌸'],
      'welcome': ['😊', '😄', '🌷'],
      'congrats': ['🎉', '👏', '🥳'],
      'congratulations': ['🎉', '👏', '🥳'],
      "good job": ['👏', '👍', '🙌'],
      'great': ['👍', '💪', '😄'],
      'cool': ['😎', '🤙', '🔥'],
      'ok': ['👌', '👍', '✅'],
      'love': ['❤️', '💕', '💖'],
      'like': ['👍', '❤️', '👌'],
      'happy': ['😊', '😁', '🙂'],
      'joy': ['😁', '😆', '😂'],
      'laugh': ['😂', '🤣', '😁'],
      'sad': ['😢', '😭', '☹️'],
      'cry': ['😭', '😢', '😿'],
      'angry': ['😡', '😠', '💢'],
      'mad': ['😠', '😡', '😤'],
      'shocked': ['😲', '😱', '😮'],
      'scared': ['😱', '😨', '😧'],
      'sleep': ['😴', '💤', '😌'],
      'bored': ['😐', '😑', '🙄'],
      'excited': ['🤩', '🥳', '🎉'],
      'party': ['🥳', '🎉', '🍾'],
      'kiss': ['😘', '💋', '😍'],
      'hug': ['🤗', '❤️', '💕'],
      'peace': ['✌️', "🕊️", '✌️'],
      'pizza': ['🍕', '🥖', '🍟'],
      'coffee': ['☕', '🥤', '🍵'],
      'water': ['💧', '💦', '🌊'],
      'wine': ['🍷', '🍸', '🍾'],
      'hello': ['👋', '🙂', '😊', '😃', '😄'],
      'hey': ['👋', '😊', '🙋', '😄', '😁'],
      'hi': ['👋', '😀', '😁', '😃', '🙂'],
      'bye': ['👋', '😢', '🙋‍♂️', '😞', '😔'],
      'goodbye': ['👋', '😢', "🙋‍♀️", '😔', '😭'],
      'thanks': ['🙏', '😊', '🌹', '🤲', '🤗'],
      "thank you": ['🙏', '💐', '🤲', '🥰', '😌'],
      'welcome': ['😊', '😄', '🌸', '🙂', '💖'],
      'congrats': ['🎉', '👏', '🥳', '💐', '🎊'],
      'congratulations': ['🎉', '👏', '🥳', '🎊', '🍾'],
      "good job": ['👏', '👍', '🙌', '💪', '🤩'],
      'great': ['👍', '💪', '😄', '🔥', '✨'],
      'cool': ['😎', '🤙', '🔥', '👌', '🆒'],
      'ok': ['👌', '👍', '✅', '😌', '🤞'],
      'love': ['❤️', '💕', '💖', '💗', '😍'],
      'like': ['👍', '❤️', '👌', '😌', '💓'],
      'happy': ['😊', '😁', '🙂', '😃', '😄'],
      'joy': ['😁', '😆', '😂', '😊', '🤗'],
      'laugh': ['😂', '🤣', '😁', '😹', '😄'],
      'sad': ['😢', '😭', '☹️', '😞', '😔'],
      'cry': ['😭', '😢', '😿', '💧', '😩'],
      'angry': ['😡', '😠', '💢', '😤', '🤬'],
      'mad': ['😠', '😡', '😤', '💢', '😒'],
      'shocked': ['😲', '😱', '😮', '😯', '😧'],
      'scared': ['😱', '😨', '😧', '😰', '😳'],
      'sleep': ['😴', '💤', '😌', '😪', '🛌'],
      'bored': ['😐', '😑', '🙄', '😒', '🤦'],
      'excited': ['🤩', '🥳', '🎉', '😄', '✨'],
      'party': ['🥳', '🎉', '🎊', '🍾', '🎈'],
      'kiss': ['😘', '💋', '😍', '💖', '💏'],
      'hug': ['🤗', '❤️', '💕', '💞', '😊'],
      'peace': ['✌️', "🕊️", '🤞', '💫', '☮️'],
      'pizza': ['🍕', '🥖', '🍟', '🍔', '🍝'],
      'burger': ['🍔', '🍟', '🥓', '🥪', '🌭'],
      'fries': ['🍟', '🍔', '🥤', '🍿', '🧂'],
      'coffee': ['☕', '🥤', '🍵', '🫖', '🥄'],
      'tea': ['🍵', '☕', '🫖', '🥄', '🍪'],
      'cake': ['🍰', '🎂', '🧁', '🍩', '🍫'],
      'donut': ['🍩', '🍪', '🍰', '🧁', '🍫'],
      "ice cream": ['🍦', '🍨', '🍧', '🍧', '🍫'],
      'cookie': ['🍪', '🍩', '🍰', '🧁', '🍫'],
      'chocolate': ['🍫', '🍬', '🍰', '🍦', '🍭'],
      'popcorn': ['🍿', '🥤', '🍫', '🎬', '🍩'],
      'soda': ['🥤', '🍾', '🍹', '🍷', '🍸'],
      'water': ['💧', '💦', '🌊', '🚰', '🥤'],
      'wine': ['🍷', '🍾', '🥂', '🍹', '🍸'],
      'beer': ['🍺', '🍻', '🥂', '🍹', '🍾'],
      'cheers': ['🥂', '🍻', '🍾', '🎉', '🎊'],
      'sun': ['🌞', '☀️', '🌅', '🌄', '🌻'],
      'moon': ['🌜', '🌙', '🌚', '🌝', '🌛'],
      'star': ['🌟', '⭐', '✨', '💫', '🌠'],
      'cloud': ['☁️', "🌥️", "🌤️", '⛅', "🌧️"],
      'rain': ["🌧️", '☔', '💧', '💦', '🌂'],
      'thunder': ['⚡', '⛈️', "🌩️", "🌪️", '⚠️'],
      'fire': ['🔥', '⚡', '🌋', '🔥', '💥'],
      'flower': ['🌸', '🌺', '🌷', '💐', '🌹'],
      'tree': ['🌳', '🌲', '🌴', '🎄', '🌱'],
      'leaves': ['🍃', '🍂', '🍁', '🌿', '🌾'],
      'snow': ['❄️', '⛄', "🌨️", '🌬️', '☃️'],
      'wind': ['💨', "🌬️", '🍃', '⛅', "🌪️"],
      'rainbow': ['🌈', '🌤️', '☀️', '✨', '💧'],
      'ocean': ['🌊', '💦', '🚤', '⛵', "🏄‍♂️"],
      'dog': ['🐶', '🐕', '🐾', '🐩', '🦮'],
      'cat': ['🐱', '😺', '😸', '🐾', '🦁'],
      'lion': ['🦁', '🐯', '🐱', '🐾', '🐅'],
      'tiger': ['🐯', '🐅', '🦁', '🐆', '🐾'],
      'bear': ['🐻', '🐨', '🐼', '🧸', '🐾'],
      'rabbit': ['🐰', '🐇', '🐾', '🐹', '🐭'],
      'panda': ['🐼', '🐻', '🐾', '🐨', '🍃'],
      'monkey': ['🐒', '🐵', '🙊', '🙉', '🙈'],
      'fox': ['🦊', '🐺', '🐾', '🐶', '🦮'],
      'bird': ['🐦', '🐧', '🦅', '🦢', '🦜'],
      'fish': ['🐟', '🐠', '🐡', '🐬', '🐳'],
      'whale': ['🐋', '🐳', '🌊', '🐟', '🐠'],
      'dolphin': ['🐬', '🐟', '🐠', '🐳', '🌊'],
      'unicorn': ['🦄', '✨', '🌈', '🌸', '💫'],
      'bee': ['🐝', '🍯', '🌻', '💐', '🐞'],
      'butterfly': ['🦋', '🌸', '💐', '🌷', '🌼'],
      'phoenix': ['🦅', '🔥', '✨', '🌄', '🔥'],
      'wolf': ['🐺', '🌕', '🐾', '🌲', '🌌'],
      'mouse': ['🐭', '🐁', '🧀', '🐾', '🐀'],
      'cow': ['🐮', '🐄', '🐂', '🌾', '🍀'],
      'pig': ['🐷', '🐽', '🐖', '🐾', '🐗'],
      'horse': ['🐴', '🏇', '🐎', '🌄', "🏞️"],
      'sheep': ['🐑', '🐏', '🌾', '🐾', '🐐'],
      'soccer': ['⚽', '🥅', "🏟️", '🎉', '👏'],
      'basketball': ['🏀', "⛹️‍♂️", '🏆', '🎉', '🥇'],
      'tennis': ['🎾', '🏸', '🥇', '🏅', '💪'],
      'baseball': ['⚾', "🏟️", '🏆', '🎉', '👏'],
      'football': ['🏈', '🎉', "🏟️", '🏆', '🥅'],
      'golf': ['⛳', "🏌️‍♂️", "🏌️‍♀️", '🎉', '🏆'],
      'bowling': ['🎳', '🏅', '🎉', '🏆', '👏'],
      'running': ["🏃‍♂️", "🏃‍♀️", '👟', '🏅', '🔥'],
      'swimming': ["🏊‍♂️", "🏊‍♀️", '🌊', '🏆', '👏'],
      'cycling': ['🚴‍♂️', '🚴‍♀️', '🏅', '🔥', "🏞️"],
      'yoga': ['🧘', '🌸', '💪', '✨', '😌'],
      'dancing': ['💃', '🕺', '🎶', '🥳', '🎉'],
      'singing': ['🎤', '🎶', "🎙️", '🎉', '🎵'],
      'guitar': ['🎸', '🎶', '🎼', '🎵', '🎉'],
      'piano': ['🎹', '🎶', '🎼', '🎵', '🎉'],
      'money': ['💸', '💰', '💵', '💳', '🤑'],
      'fire': ['🔥', '💥', '⚡', '🎇', '✨'],
      'rocket': ['🚀', '🌌', '🛸', "🛰️", '✨'],
      'bomb': ['💣', '🔥', '⚡', '😱', '💥'],
      'computer': ['💻', '🖥️', '📱', '⌨️', "🖱️"],
      'phone': ['📱', '📲', '☎️', '📞', '📳'],
      'camera': ['📷', '📸', '🎥', '📹', "🎞️"],
      'book': ['📚', '📖', '✏️', '📘', '📕'],
      'light': ['💡', '✨', '🔦', '🌟', '🌞'],
      'music': ['🎶', '🎵', '🎼', '🎸', '🎧'],
      'star': ['🌟', '⭐', '✨', '🌠', '💫'],
      'gift': ['🎁', '💝', '🎉', '🎊', '🎈'],
      'car': ['🚗', '🚘', '🚙', '🚕', "🛣️"],
      'train': ['🚆', '🚄', '🚅', '🚞', '🚂'],
      'plane': ['✈️', '🛫', '🛬', "🛩️", '🚁'],
      'boat': ['⛵', '🛥️', '🚤', '🚢', '🌊'],
      'city': ["🏙️", '🌆', '🌇', '🏢', '🌃'],
      'beach': ["🏖️", '🌴', '🌊', '☀️', "🏄‍♂️"],
      'mountain': ["🏔️", '⛰️', '🗻', '🌄', '🌞'],
      'forest': ['🌲', '🌳', '🍃', "🏞️", '🐾'],
      'desert': ["🏜️", '🌵', '🐪', '🌞', "🏖️"],
      'hotel': ['🏨', '🏩', "🛏️", "🛎️", '🏢'],
      'restaurant': ["🍽️", '🍴', '🥂', '🍷', '🍾'],
      'brave': ["🦸‍♂️", "🦸‍♀️", '💪', '🔥', '👊'],
      'shy': ['😳', '☺️', '🙈', '😊', '😌'],
      'surprised': ['😲', '😮', '😧', '😯', '🤯'],
      'bored': ['😐', '😑', '😶', '🙄', '😒'],
      'sleepy': ['😴', '💤', '😪', '😌', '🛌'],
      'determined': ['💪', '🔥', '😤', '👊', '🏆'],
      'birthday': ['🎂', '🎉', '🎈', '🎊', '🍰'],
      'christmas': ['🎄', '🎅', '🤶', '🎁', '⛄'],
      "new year": ['🎉', '🎊', '🎇', '🍾', '✨'],
      'easter': ['🐰', '🐣', '🌷', '🥚', '🌸'],
      'halloween': ['🎃', '👻', "🕸️", '🕷️', '👹'],
      'valentine': ['💘', '❤️', '💌', '💕', '🌹'],
      'wedding': ['💍', '👰', '🤵', '🎩', '💒']
    };
    const _0x770637 = ['😎', '🔥', '💥', '💯', '✨', '🌟', '🌈', '⚡', '💎', '🌀', '👑', '🎉', '🎊', '🦄', '👽', '🛸', '🚀', '🦋', '💫', '🍀', '🎶', '🎧', '🎸', '🎤', '🏆', '🏅', '🌍', '🌎', '🌏', '🎮', '🎲', '💪', "🏋️", '🥇', '👟', '🏃', '🚴', '🚶', '🏄', '⛷️', "🕶️", '🧳', '🍿', '🍿', '🥂', '🍻', '🍷', '🍸', '🥃', '🍾', '🎯', '⏳', '🎁', '🎈', '🎨', '🌻', '🌸', '🌺', '🌹', '🌼', '🌞', '🌝', '🌜', '🌙', '🌚', '🍀', '🌱', '🍃', '🍂', '🌾', '🐉', '🐍', '🦓', '🦄', '🦋', '🦧', '🦘', '🦨', '🦡', '🐉', '🐅', '🐆', '🐓', '🐢', '🐊', '🐠', '🐟', '🐡', '🦑', '🐙', '🦀', '🐬', '🦕', '🦖', '🐾', '🐕', '🐈', '🐇', '🐾', '🐁', '🐀', "🐿️"];
    const _0x1fea1e = _0x441879 => {
      const _0x24d378 = _0x441879.split(/\s+/);
      for (const _0x3b1b78 of _0x24d378) {
        const _0x547442 = _0x1d6068(_0x3b1b78.toLowerCase());
        if (_0x547442) {
          return _0x547442;
        }
      }
      return _0x770637[Math.floor(Math.random() * _0x770637.length)];
    };
    const _0x1d6068 = _0x5c1a64 => {
      const _0x302832 = _0x5939a2[_0x5c1a64.toLowerCase()];
      if (_0x302832 && _0x302832.length > 0x0) {
        return _0x302832[Math.floor(Math.random() * _0x302832.length)];
      }
      return null;
    };
    if (conf.AUTO_REACT_STATUS === "yes") {
      console.log("AUTO_REACT_STATUS is enabled. Listening for status updates...");
      _0x4b69c7.ev.on('messages.upsert', async _0x5babcf => {
        const {
          messages: _0x2f6496
        } = _0x5babcf;
        for (const _0x541b68 of _0x2f6496) {
          if (_0x541b68.key && _0x541b68.key.remoteJid === "status@broadcast") {
            console.log("Detected status update from:", _0x541b68.key.remoteJid);
            const _0x406700 = Date.now();
            if (_0x406700 - _0xa24003 < 0x1388) {
              console.log("Throttling reactions to prevent overflow.");
              continue;
            }
            const _0x4b77d0 = _0x4b69c7.user && _0x4b69c7.user.id ? _0x4b69c7.user.id.split(':')[0x0] + "@s.whatsapp.net" : null;
            if (!_0x4b77d0) {
              console.log("Bot's user ID not available. Skipping reaction.");
              continue;
            }
            const _0x47990a = _0x541b68?.["message"]?.["conversation"] || '';
            const _0x3f8711 = _0x1fea1e(_0x47990a) || _0x770637[Math.floor(Math.random() * _0x770637.length)];
            if (_0x3f8711) {
              await _0x4b69c7.sendMessage(_0x541b68.key.remoteJid, {
                'react': {
                  'key': _0x541b68.key,
                  'text': _0x3f8711
                }
              }, {
                'statusJidList': [_0x541b68.key.participant, _0x4b77d0]
              });
              _0xa24003 = Date.now();
              console.log("Successfully reacted with '" + _0x3f8711 + "' to status update by " + _0x541b68.key.remoteJid);
            }
            await _0x592410(0x7d0);
          }
        }
      });
    }
    if (conf.AUTO_REACT === 'yes') {
      console.log("AUTO_REACT is enabled. Listening for regular messages...");
      _0x4b69c7.ev.on('messages.upsert', async _0x81710a => {
        const {
          messages: _0x40355c
        } = _0x81710a;
        for (const _0x5319c0 of _0x40355c) {
          if (_0x5319c0.key && _0x5319c0.key.remoteJid) {
            const _0x57b662 = Date.now();
            if (_0x57b662 - _0xa24003 < 0x1388) {
              console.log("Throttling reactions to prevent overflow.");
              continue;
            }
            const _0x38965a = _0x5319c0?.['message']?.["conversation"] || '';
            const _0x39ee56 = _0x1fea1e(_0x38965a) || _0x770637[Math.floor(Math.random() * _0x770637.length)];
            if (_0x39ee56) {
              await _0x4b69c7.sendMessage(_0x5319c0.key.remoteJid, {
                'react': {
                  'text': _0x39ee56,
                  'key': _0x5319c0.key
                }
              }).then(() => {
                _0xa24003 = Date.now();
                console.log("Successfully reacted with '" + _0x39ee56 + "' to message by " + _0x5319c0.key.remoteJid);
              })["catch"](_0x3d244f => {
                console.error("Failed to send reaction:", _0x3d244f);
              });
            }
            await _0x592410(0x7d0);
          }
        }
      });
    }
    async function _0x546fb0(_0x50bd78, _0x21a338) {
      try {
        const _0x31e130 = _0x50bd78.split('@')[0x0];
        let _0x5c23a6 = 0x1;
        let _0x434568 = _0x21a338 + " " + _0x5c23a6;
        while (Object.values(store.contacts).some(_0x21cf3b => _0x21cf3b.name === _0x434568)) {
          _0x5c23a6++;
          _0x434568 = _0x21a338 + " " + _0x5c23a6;
        }
        const _0x12543f = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x434568 + "\nTEL;type=CELL;type=VOICE;waid=" + _0x31e130 + ':+' + _0x31e130 + "\nEND:VCARD\n";
        const _0x1eca42 = './' + _0x434568 + '.vcf';
        fs.writeFileSync(_0x1eca42, _0x12543f);
        await _0x4b69c7.sendMessage(conf.NUMERO_OWNER + "@s.whatsapp.net", {
          'document': {
            'url': _0x1eca42
          },
          'mimetype': "text/vcard",
          'fileName': _0x434568 + '.vcf',
          'caption': "Contact saved as " + _0x434568 + ". Please import this vCard to add the number to your contacts.\nN LUCKY MD👊"
        });
        console.log("vCard created and sent for: " + _0x434568 + " (" + _0x50bd78 + ')');
        fs.unlinkSync(_0x1eca42);
        return _0x434568;
      } catch (_0x42bdbd) {
        console.error("Error creating or sending vCard for " + name + ':', _0x42bdbd.message);
      }
    }
    _0x4b69c7.ev.on('messages.upsert', async _0x4579ba => {
      if (conf.AUTO_SAVE_CONTACTS !== "yes") {
        return;
      }
      const {
        messages: _0x1596f0
      } = _0x4579ba;
      const _0x4ae22b = _0x1596f0[0x0];
      if (!_0x4ae22b.message) {
        return;
      }
      const _0x530dd6 = _0x4ae22b.key.remoteJid;
      if (_0x530dd6.endsWith("@s.whatsapp.net") && (!store.contacts[_0x530dd6] || !store.contacts[_0x530dd6].name)) {
        const _0x47191b = await _0x546fb0(_0x530dd6, "RAHEEM-XMD");
        store.contacts[_0x530dd6] = {
          'name': _0x47191b
        };
        await _0x4b69c7.sendMessage(_0x530dd6, {
          'text': "Ssup Your name has been saved as \"" + _0x47191b + "\" in my account.\n\nRAHEEM-XMD"
        });
        console.log("Contact " + _0x47191b + " has been saved and notified.");
      }
    });
    let _0x3ac9bf = "Hello,its RAHEEM-XMD on board. My owner is currently unavailable. Please leave a message, and we will get back to you as soon as possible.";
    let _0x161a43 = new Set();
    _0x4b69c7.ev.on("messages.upsert", async _0x4c717f => {
      const {
        messages: _0x2a5307
      } = _0x4c717f;
      const _0x15e988 = _0x2a5307[0x0];
      if (!_0x15e988.message) {
        return;
      }
      const _0x844265 = _0x15e988.message.conversation || _0x15e988.message.extendedTextMessage?.["text"];
      const _0x1fd524 = _0x15e988.key.remoteJid;
      if (_0x844265 && _0x844265.match(/^[^\w\s]/) && _0x15e988.key.fromMe) {
        const _0x272de8 = _0x844265[0x0];
        const _0x929a8c = _0x844265.slice(0x1).split(" ")[0x0];
        const _0x1094af = _0x844265.slice(_0x272de8.length + _0x929a8c.length).trim();
        if (_0x929a8c === 'setautoreply' && _0x1094af) {
          _0x3ac9bf = _0x1094af;
          await _0x4b69c7.sendMessage(_0x1fd524, {
            'text': "Auto-reply message has been updated to:\n\"" + _0x3ac9bf + "\""
          });
          return;
        }
      }
      if (conf.AUTO_REPLY === 'yes' && !_0x161a43.has(_0x1fd524) && !_0x15e988.key.fromMe && !_0x1fd524.includes("@g.us")) {
        await _0x4b69c7.sendMessage(_0x1fd524, {
          'text': _0x3ac9bf
        });
        _0x161a43.add(_0x1fd524);
      }
    });
    const _0x4032c0 = {
      'heya': 'audios/hey.wav',
      'hi': "audios/hey.wav",
      'hey': "audios/hey.wav",
      'he': "audios/hey.wav",
      'hello': "audios/hello.wav",
      'mambo': "audios/hey.wav",
      'niaje': 'audios/hey.wav',
      'morning': "audios/goodmorning.wav",
      'goodmorning': 'audios/goodmorning.wav',
      "wake up": "audios/goodmorning.wav",
      'night': "audios/goodnight.wav",
      'goodnight': "audios/goodnight.wav",
      'sleep': "audios/goodnight.wav",
      'man': "audios/mkuu.wav",
      'owoh': "audios/mkuu.wav",
      'yoo': "audios/mkuu.wav",
      'wazii': "audios/mkuu.wav",
      'bot': "audios/fred.mp3",
      'Raheem': "audios/fred.mp3",
      "Raheem xmd": 'audios/fred.mp3',
      'Raheem': "audios/fred.mp3",
      'Raheem': "audios/fred.mp3",
      'md': 'audios/fred.mp3',
      "whatsapp bot": "audios/fred.mp3",
      "RAHEEM-XMD": "audios/fred.mp3",
      'evening': "audios/goodevening.wav",
      'goodevening': 'audios/goodevening.wav',
      'darling': "audios/darling.wav",
      'beb': "audios/darling.wav",
      'mpenzi': "audios/darling.wav",
      'afternoon': "audios/goodafternoon.wav",
      'jioni': "audios/goodafternoon.wav",
      'kaka': "audios/kaka.wav",
      'bro': 'audios/morio.mp3',
      'ndugu': "audios/kaka.wav",
      'morio': 'audios/morio.mp3',
      'mzee': "audios/morio.mp3",
      'kijana': 'audios/mkuu.wav',
      'mkuu': "audios/mkuu.wav",
      'ozah': 'audios/mkuu.wav',
      'ozaah': 'audios/mkuu.wav',
      'oyaah': "audios/mkuu.wav",
      'oyah': "audios/mkuu.wav"
    };
    const _0x3793e7 = _0x55d4e9 => {
      const _0x36f8a6 = _0x55d4e9.split(/\s+/);
      for (const _0xbb9de0 of _0x36f8a6) {
        const _0x2849a6 = _0x4032c0[_0xbb9de0.toLowerCase()];
        if (_0x2849a6) {
          return _0x2849a6;
        }
      }
      return null;
    };
    if (conf.AUDIO_REPLY === 'yes') {
      console.log("AUTO_REPLY_AUDIO is enabled. Listening for messages...");
      _0x4b69c7.ev.on("messages.upsert", async _0x25c6e5 => {
        try {
          const {
            messages: _0x3b86c6
          } = _0x25c6e5;
          for (const _0x52a3d3 of _0x3b86c6) {
            if (!_0x52a3d3.key || !_0x52a3d3.key.remoteJid) {
              continue;
            }
            const _0x2f45e4 = _0x52a3d3?.["message"]?.["conversation"] || '';
            const _0x12125f = _0x3793e7(_0x2f45e4);
            if (_0x12125f) {
              try {
                await fs.access(_0x12125f);
                console.log("Replying with audio: " + _0x12125f);
                await _0x4b69c7.sendMessage(_0x52a3d3.key.remoteJid, {
                  'audio': {
                    'url': _0x12125f
                  },
                  'mimetype': "audio/mp4",
                  'ptt': true
                });
                console.log("Audio reply sent: " + _0x12125f);
              } catch (_0x21c9a3) {
                console.error("Error sending audio reply: " + _0x21c9a3.message);
              }
            } else {
              console.log("No matching keyword detected. Skipping message.");
            }
            await new Promise(_0x58be3b => setTimeout(_0x58be3b, 0xbb8));
          }
        } catch (_0xcc7dfb) {
          console.error("Error in message processing:", _0xcc7dfb.message);
        }
      });
    }
    _0x4b69c7.ev.on("messages.upsert", async _0x519604 => {
      const {
        messages: _0x246e7d
      } = _0x519604;
      const _0x5e7598 = _0x246e7d[0x0];
      if (!_0x5e7598.message) {
        return;
      }
      const _0x4db2f0 = _0x32eebd => {
        if (!_0x32eebd) {
          return _0x32eebd;
        }
        if (/:\d+@/gi.test(_0x32eebd)) {
          0x0;
          let _0xb734bb = baileys_1.jidDecode(_0x32eebd) || {};
          return _0xb734bb.user && _0xb734bb.server && _0xb734bb.user + '@' + _0xb734bb.server || _0x32eebd;
        } else {
          return _0x32eebd;
        }
      };
      0x0;
      var _0x13a40c = baileys_1.getContentType(_0x5e7598.message);
      var _0x594972 = _0x13a40c == "conversation" ? _0x5e7598.message.conversation : _0x13a40c == "imageMessage" ? _0x5e7598.message.imageMessage?.['caption'] : _0x13a40c == "videoMessage" ? _0x5e7598.message.videoMessage?.["caption"] : _0x13a40c == "extendedTextMessage" ? _0x5e7598.message?.["extendedTextMessage"]?.["text"] : _0x13a40c == "buttonsResponseMessage" ? _0x5e7598?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] : _0x13a40c == "listResponseMessage" ? _0x5e7598.message?.["listResponseMessage"]?.['singleSelectReply']?.["selectedRowId"] : _0x13a40c == "messageContextInfo" ? _0x5e7598?.["message"]?.['buttonsResponseMessage']?.["selectedButtonId"] || _0x5e7598.message?.["listResponseMessage"]?.["singleSelectReply"]?.['selectedRowId'] || _0x5e7598.text : '';
      var _0x3fdc8f = _0x5e7598.key.remoteJid;
      var _0xabd3b2 = _0x4db2f0(_0x4b69c7.user.id);
      var _0x34a972 = _0xabd3b2.split('@')[0x0];
      const _0x40d365 = _0x3fdc8f?.['endsWith']("@g.us");
      var _0x53dcf2 = _0x40d365 ? await _0x4b69c7.groupMetadata(_0x3fdc8f) : '';
      var _0x2f65f0 = _0x40d365 ? _0x53dcf2.subject : '';
      var _0xdddd7b = _0x5e7598.message.extendedTextMessage?.["contextInfo"]?.['quotedMessage'];
      var _0x1ef5dc = _0x4db2f0(_0x5e7598.message?.['extendedTextMessage']?.["contextInfo"]?.['participant']);
      var _0x32610b = _0x40d365 ? _0x5e7598.key.participant ? _0x5e7598.key.participant : _0x5e7598.participant : _0x3fdc8f;
      if (_0x5e7598.key.fromMe) {
        _0x32610b = _0xabd3b2;
      }
      var _0x5608f8 = _0x40d365 ? _0x5e7598.key.participant : '';
      const {
        getAllSudoNumbers: _0x410c4f
      } = require('./Raheemdatabase/sudo');
      const _0x808c80 = _0x5e7598.pushName;
      const _0x5066ef = await _0x410c4f();
      const _0x378941 = [_0x34a972, 255763111390', "255611109830", "255760003443", 255763111390', conf.NUMERO_OWNER].map(_0x17c93b => _0x17c93b.replace(/[^0-9]/g) + "@s.whatsapp.net");
      const _0x13ce88 = _0x378941.concat(_0x5066ef);
      const _0x4cac79 = _0x13ce88.includes(_0x32610b);
      var _0x3cfe8f = [255763111390', "255611109830", "255760003443", 255763111390'].map(_0x3fd2d4 => _0x3fd2d4.replace(/[^0-9]/g) + '@s.whatsapp.net').includes(_0x32610b);
      function _0x5f1bb4(_0x2af54b)
        _0x4b69c7.sendMessage(_0x3fdc8f, {
          'text': _0x2af54b
        }, {
          'quoted': _0x5e7598
        });
      }
      console.log("\tCONSOLE MESSAGES");
      console.log("=========== NEW CONVERSATION ===========");
      if (_0x40d365) {
        console.log("MESSAGE FROM GROUP : " + _0x2f65f0);
      }
      console.log("MESSAGE SENT BY : [" + _0x808c80 + " : " + _0x32610b.split("@s.whatsapp.net")[0x0] + " ]");
      console.log("MESSAGE TYPE : " + _0x13a40c);
      console.log("==================TEXT==================");
      console.log(_0x594972);
      function _0x3209bf(_0x4517f3) {
        let _0x346dbd = [];
        for (_0x519604 of _0x4517f3) {
          if (_0x519604.admin == null) {
            continue;
          }
          _0x346dbd.push(_0x519604.id);
        }
        return _0x346dbd;
      }
      var _0x35ac44 = conf.ETAT;
      if (_0x35ac44 == 0x1) {
        await _0x4b69c7.sendPresenceUpdate("available", _0x3fdc8f);
      } else {
        if (_0x35ac44 == 0x2) {
          await _0x4b69c7.sendPresenceUpdate("composing", _0x3fdc8f);
        } else if (_0x35ac44 == 0x3) {
          await _0x4b69c7.sendPresenceUpdate("recording", _0x3fdc8f);
        } else {
          await _0x4b69c7.sendPresenceUpdate("unavailable", _0x3fdc8f);
        }
      }
      const _0x16c031 = _0x40d365 ? await _0x53dcf2.participants : '';
      let _0x1b84ea = _0x40d365 ? _0x3209bf(_0x16c031) : '';
      const _0x192187 = _0x40d365 ? _0x1b84ea.includes(_0x32610b) : false;
      var _0xcc8d3d = _0x40d365 ? _0x1b84ea.includes(_0xabd3b2) : false;
      const _0x434ee1 = _0x594972 ? _0x594972.trim().split(/ +/).slice(0x1) : null;
      const _0x17c360 = _0x594972 ? _0x594972.startsWith(prefixe) : false;
      const _0xb55bf9 = _0x17c360 ? _0x594972.slice(0x1).trim().split(/ +/).shift().toLowerCase() : false;
      const _0x190786 = conf.URL.split(',');
      function _0x2b9f11() {
        const _0xa61af6 = Math.floor(Math.random() * _0x190786.length);
        const _0x567da7 = _0x190786[_0xa61af6];
        return _0x567da7;
      }
      var _0x18755f = {
        'superUser': _0x4cac79,
        'dev': _0x3cfe8f,
        'verifGroupe': _0x40d365,
        'mbre': _0x16c031,
        'membreGroupe': _0x5608f8,
        'verifAdmin': _0x192187,
        'infosGroupe': _0x53dcf2,
        'nomGroupe': _0x2f65f0,
        'auteurMessage': _0x32610b,
        'nomAuteurMessage': _0x808c80,
        'idBot': _0xabd3b2,
        'verifZokouAdmin': _0xcc8d3d,
        'prefixe': prefixe,
        'arg': _0x434ee1,
        'repondre': _0x5f1bb4,
        'mtype': _0x13a40c,
        'groupeAdmin': _0x3209bf,
        'msgRepondu': _0xdddd7b,
        'auteurMsgRepondu': _0x1ef5dc,
        'ms': _0x5e7598,
        'mybotpic': _0x2b9f11
      };
      if (conf.AUTO_READ === "yes") {
        _0x4b69c7.ev.on("messages.upsert", async _0x22d66f => {
          const {
            messages: _0x307e48
          } = _0x22d66f;
          for (const _0x14e046 of _0x307e48) {
            if (!_0x14e046.key.fromMe) {
              await _0x4b69c7.readMessages([_0x14e046.key]);
            }
          }
        });
      }
      if (!_0x4cac79 && _0x3fdc8f === _0x32610b && conf.AUTO_BLOCK === 'yes') {
        _0x4b69c7.sendMessage(_0x32610b, {
          'text': "🚫am blocking you because you have violated ${conf.OWNER_NAME} policies🚫!"
        });
        await _0x4b69c7.updateBlockStatus(_0x32610b, "block");
      }
      if (_0x594972 && _0x594972.startsWith('<')) {
        if (!_0x4cac79) {
          return _0x5f1bb4("Only for my ${conf.DEV} or ${conf.OWNER_NAME} to use this command 🚫");
        }
        try {
          let _0x429181 = await eval(_0x594972.slice(0x1));
          if (typeof _0x429181 !== "string") {
            _0x429181 = require("util").inspect(_0x429181);
          }
          await _0x5f1bb4(_0x429181);
        } catch (_0x30de9b) {
          await _0x5f1bb4(String(_0x30de9b));
        }
      }
      if (_0x594972 && _0x594972.startsWith('>')) {
        if (!_0x4cac79) {
          await _0x4b69c7.sendMessage(_0x3fdc8f, {
            'text': "This command is only for the owner or Raheem to execute 🚫",
            'contextInfo': {
              'externalAdReply': {
                'title': conf.BOT,
                'body': conf.OWNER_NAME,
                'sourceUrl': conf.GURL,
                'thumbnailUrl': conf.URL,
                'mediaType': 0x1,
                'showAdAttribution': true,
                'renderLargerThumbnail': false
              }
            }
          });
          return;
        }
        try {
          let _0x52a9fe = await eval(_0x594972.slice(0x1));
          if (typeof _0x52a9fe !== 'string') {
            _0x52a9fe = require("util").inspect(_0x52a9fe);
          }
          await _0x5f1bb4(_0x52a9fe);
        } catch (_0x44453a) {
          await _0x5f1bb4(String(_0x44453a));
        }
      }
      if (_0x5e7598.key && _0x5e7598.key.remoteJid === "status@broadcast" && conf.AUTO_STATUS_REPLY === "yes") {
        const _0x2470e4 = _0x5e7598.key.participant;
        const _0xc1bc4d = '' + conf.AUTO_STATUS_TEXT;
        await _0x4b69c7.sendMessage(_0x2470e4, {
          'text': _0xc1bc4d,
          'react': {
            'text': '🤦',
            'key': _0x5e7598.key
          }
        }, {
          'quoted': _0x5e7598
        });
      }
      if (_0x5e7598.key && _0x5e7598.key.remoteJid === "status@broadcast" && conf.AUTO_READ_STATUS === "yes") {
        await _0x4b69c7.readMessages([_0x5e7598.key]);
      }
      if (_0x5e7598.key && _0x5e7598.key.remoteJid === "status@broadcast" && conf.AUTO_DOWNLOAD_STATUS === "yes") {
        if (_0x5e7598.message.extendedTextMessage) {
          var _0x21fb67 = _0x5e7598.message.extendedTextMessage.text;
          await _0x4b69c7.sendMessage(_0xabd3b2, {
            'text': _0x21fb67
          }, {
            'quoted': _0x5e7598
          });
        } else {
          if (_0x5e7598.message.imageMessage) {
            var _0x25ea6c = _0x5e7598.message.imageMessage.caption;
            var _0x44f843 = await _0x4b69c7.downloadAndSaveMediaMessage(_0x5e7598.message.imageMessage);
            await _0x4b69c7.sendMessage(_0xabd3b2, {
              'image': {
                'url': _0x44f843
              },
              'caption': _0x25ea6c
            }, {
              'quoted': _0x5e7598
            });
          } else {
            if (_0x5e7598.message.videoMessage) {
              var _0x25ea6c = _0x5e7598.message.videoMessage.caption;
              var _0x140d1b = await _0x4b69c7.downloadAndSaveMediaMessage(_0x5e7598.message.videoMessage);
              await _0x4b69c7.sendMessage(_0xabd3b2, {
                'video': {
                  'url': _0x140d1b
                },
                'caption': _0x25ea6c
              }, {
                'quoted': _0x5e7598
              });
            }
          }
        }
      }
      if (!_0x3cfe8f && _0x3fdc8f == "120363158701337904@g.us") {
        return;
      }
      if (_0x594972 && _0x32610b.endsWith('s.whatsapp.net')) {
        const {
          ajouterOuMettreAJourUserData: _0x23b55d
        } = require('./Raheemdatabase/level');
        try {
          await _0x23b55d(_0x32610b);
        } catch (_0x45a57d) {
          console.error(_0x45a57d);
        }
      }
      try {
        if (_0x5e7598.message[_0x13a40c].contextInfo.mentionedJid && (_0x5e7598.message[_0x13a40c].contextInfo.mentionedJid.includes(_0xabd3b2) || _0x5e7598.message[_0x13a40c].contextInfo.mentionedJid.includes(conf.NUMERO_OWNER + "@s.whatsapp.net"))) {
          if (_0x3fdc8f == '120363158701337904@g.us') {
            return;
          }
          ;
          if (_0x4cac79) {
            console.log("hummm");
            return;
          }
          let _0xe5474e = require("./Raheemdatabase/mention");
          let _0x44f9f2 = await _0xe5474e.recupererToutesLesValeurs();
          let _0x2a7448 = _0x44f9f2[0x0];
          if (_0x2a7448.status === 'non') {
            console.log("mention pas actifs");
            return;
          }
          let _0x2ece49;
          if (_0x2a7448.type.toLocaleLowerCase() === "image") {
            _0x2ece49 = {
              'image': {
                'url': _0x2a7448.url
              },
              'caption': _0x2a7448.message
            };
          } else {
            if (_0x2a7448.type.toLocaleLowerCase() === "video") {
              _0x2ece49 = {
                'video': {
                  'url': _0x2a7448.url
                },
                'caption': _0x2a7448.message
              };
            } else {
              if (_0x2a7448.type.toLocaleLowerCase() === 'sticker') {
                let _0x23892 = new Sticker(_0x2a7448.url, {
                  'pack': conf.NOM_OWNER,
                  'type': StickerTypes.FULL,
                  'categories': ['🤩', '🎉'],
                  'id': "12345",
                  'quality': 0x46,
                  'background': "transparent"
                });
                const _0x352587 = await _0x23892.toBuffer();
                _0x2ece49 = {
                  'sticker': _0x352587
                };
              } else if (_0x2a7448.type.toLocaleLowerCase() === "audio") {
                _0x2ece49 = {
                  'audio': {
                    'url': _0x2a7448.url
                  },
                  'mimetype': 'audio/mp4'
                };
              }
            }
          }
          _0x4b69c7.sendMessage(_0x3fdc8f, _0x2ece49, {
            'quoted': _0x5e7598
          });
        }
      } catch (_0x2255eb) {}
      try {
        const _0x389b51 = await verifierEtatJid(_0x3fdc8f);
        if (_0x594972.includes("https://") && _0x40d365 && _0x389b51) {
          console.log("lien detecté");
          var _0x58db5d = _0x40d365 ? _0x1b84ea.includes(_0xabd3b2) : false;
          if (_0x4cac79 || _0x192187 || !_0x58db5d) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x2af328 = {
            'remoteJid': _0x3fdc8f,
            'fromMe': false,
            'id': _0x5e7598.key.id,
            'participant': _0x32610b
          };
          var _0x1a97a8 = "lien detected, \n";
          var _0xe8a3ae = new Sticker('https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif', {
            'pack': 'Cyberion',
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': "#000000"
          });
          await _0xe8a3ae.toFile("st1.webp");
          var _0x4cecc4 = await recupererActionJid(_0x3fdc8f);
          if (_0x4cecc4 === "remove") {
            _0x1a97a8 += "message deleted \n @" + _0x32610b.split('@')[0x0] + " removed from group.";
            await _0x4b69c7.sendMessage(_0x3fdc8f, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x4b69c7.sendMessage(_0x3fdc8f, {
              'text': _0x1a97a8,
              'mentions': [_0x32610b]
            }, {
              'quoted': _0x5e7598
            });
            try {
              await _0x4b69c7.groupParticipantsUpdate(_0x3fdc8f, [_0x32610b], "remove");
            } catch (_0x368cb1) {
              console.log("antiien ") + _0x368cb1;
            }
            await _0x4b69c7.sendMessage(_0x3fdc8f, {
              'delete': _0x2af328
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x4cecc4 === 'delete') {
              _0x1a97a8 += "message deleted \n @" + _0x32610b.split('@')[0x0] + " avoid sending link.";
              await _0x4b69c7.sendMessage(_0x3fdc8f, {
                'text': _0x1a97a8,
                'mentions': [_0x32610b]
              }, {
                'quoted': _0x5e7598
              });
              await _0x4b69c7.sendMessage(_0x3fdc8f, {
                'delete': _0x2af328
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x4cecc4 === "warn") {
                const {
                  getWarnCountByJID: _0x562e90,
                  ajouterUtilisateurAvecWarnCount: _0x59151f
                } = require("./Raheemdatabase/warn");
                let _0x41c04e = await _0x562e90(_0x32610b);
                let _0x5d5a8a = conf.WARN_COUNT;
                if (_0x41c04e >= _0x5d5a8a) {
                  var _0x2db9d5 = "link detected , you will be remove because of reaching warn-limit";
                  await _0x4b69c7.sendMessage(_0x3fdc8f, {
                    'text': _0x2db9d5,
                    'mentions': [_0x32610b]
                  }, {
                    'quoted': _0x5e7598
                  });
                  await _0x4b69c7.groupParticipantsUpdate(_0x3fdc8f, [_0x32610b], "remove");
                  await _0x4b69c7.sendMessage(_0x3fdc8f, {
                    'delete': _0x2af328
                  });
                } else {
                  var _0x4d203e = _0x5d5a8a - _0x41c04e;
                  var _0x85aeeb = "Link detected , your warn_count was upgrade ;\n rest : " + _0x4d203e + " ";
                  await _0x59151f(_0x32610b);
                  await _0x4b69c7.sendMessage(_0x3fdc8f, {
                    'text': _0x85aeeb,
                    'mentions': [_0x32610b]
                  }, {
                    'quoted': _0x5e7598
                  });
                  await _0x4b69c7.sendMessage(_0x3fdc8f, {
                    'delete': _0x2af328
                  });
                }
              }
            }
          }
        }
      } catch (_0x5ae71c) {
        console.log("Raheemdatabase err " + _0x5ae71c);
      }
      try {
        const _0x30f461 = _0x5e7598.key?.['id']?.["startsWith"]("BAES") && _0x5e7598.key?.['id']?.["length"] === 0x10;
        const _0x12faa5 = _0x5e7598.key?.['id']?.["startsWith"]("BAE5") && _0x5e7598.key?.['id']?.["length"] === 0x10;
        if (_0x30f461 || _0x12faa5) {
          if (_0x13a40c === 'reactionMessage') {
            console.log("Je ne reagis pas au reactions");
            return;
          }
          ;
          const _0x19e30f = await atbverifierEtatJid(_0x3fdc8f);
          if (!_0x19e30f) {
            return;
          }
          ;
          if (_0x192187 || _0x32610b === _0xabd3b2) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x4f537d = {
            'remoteJid': _0x3fdc8f,
            'fromMe': false,
            'id': _0x5e7598.key.id,
            'participant': _0x32610b
          };
          var _0x1a97a8 = "bot detected, \n";
          var _0xe8a3ae = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': 'Raheem',
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': "#000000"
          });
          await _0xe8a3ae.toFile("st1.webp");
          var _0x4cecc4 = await atbrecupererActionJid(_0x3fdc8f);
          if (_0x4cecc4 === "remove") {
            _0x1a97a8 += "message deleted \n @" + _0x32610b.split('@')[0x0] + " removed from group.";
            await _0x4b69c7.sendMessage(_0x3fdc8f, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x4b69c7.sendMessage(_0x3fdc8f, {
              'text': _0x1a97a8,
              'mentions': [_0x32610b]
            }, {
              'quoted': _0x5e7598
            });
            try {
              await _0x4b69c7.groupParticipantsUpdate(_0x3fdc8f, [_0x32610b], "remove");
            } catch (_0x1a2de6) {
              console.log("antibot ") + _0x1a2de6;
            }
            await _0x4b69c7.sendMessage(_0x3fdc8f, {
              'delete': _0x4f537d
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x4cecc4 === "delete") {
              _0x1a97a8 += "message delete \n @" + _0x32610b.split('@')[0x0] + " Avoid sending link.";
              await _0x4b69c7.sendMessage(_0x3fdc8f, {
                'text': _0x1a97a8,
                'mentions': [_0x32610b]
              }, {
                'quoted': _0x5e7598
              });
              await _0x4b69c7.sendMessage(_0x3fdc8f, {
                'delete': _0x4f537d
              });
              await fs.unlink('st1.webp');
            } else {
              if (_0x4cecc4 === "warn") {
                const {
                  getWarnCountByJID: _0x5d5eda,
                  ajouterUtilisateurAvecWarnCount: _0x108e85
                } = require("./Raheemdatabase/warn");
                let _0xd69b8a = await _0x5d5eda(_0x32610b);
                let _0x3e1cd9 = conf.WARN_COUNT;
                if (_0xd69b8a >= _0x3e1cd9) {
                  var _0x2db9d5 = "bot detected ;you will be remove because of reaching warn-limit";
                  await _0x4b69c7.sendMessage(_0x3fdc8f, {
                    'text': _0x2db9d5,
                    'mentions': [_0x32610b]
                  }, {
                    'quoted': _0x5e7598
                  });
                  await _0x4b69c7.groupParticipantsUpdate(_0x3fdc8f, [_0x32610b], 'remove');
                  await _0x4b69c7.sendMessage(_0x3fdc8f, {
                    'delete': _0x4f537d
                  });
                } else {
                  var _0x4d203e = _0x3e1cd9 - _0xd69b8a;
                  var _0x85aeeb = "bot detected , your warn_count was upgrade ;\n rest : " + _0x4d203e + " ";
                  await _0x108e85(_0x32610b);
                  await _0x4b69c7.sendMessage(_0x3fdc8f, {
                    'text': _0x85aeeb,
                    'mentions': [_0x32610b]
                  }, {
                    'quoted': _0x5e7598
                  });
                  await _0x4b69c7.sendMessage(_0x3fdc8f, {
                    'delete': _0x4f537d
                  });
                }
              }
            }
          }
        }
      } catch (_0x59bb51) {
        console.log(".... " + _0x59bb51);
      }
      if (_0x17c360) {
        const _0x4c59d9 = evt.cm.find(_0x32faa5 => _0x32faa5.nomCom === _0xb55bf9);
        if (_0x4c59d9) {
          try {
            if (conf.MODE.toLocaleLowerCase() != "yes" && !_0x4cac79) {
              return;
            }
            if (!_0x4cac79 && _0x3fdc8f === _0x32610b && conf.PM_PERMIT === "yes") {
              _0x5f1bb4("You don't have acces to commands here");
              return;
            }
            if (!_0x4cac79 && _0x40d365) {
              let _0x34c8f2 = await isGroupBanned(_0x3fdc8f);
              if (_0x34c8f2) {
                return;
              }
            }
            if (!_0x192187 && _0x40d365) {
              let _0x5c7644 = await isGroupOnlyAdmin(_0x3fdc8f);
              if (_0x5c7644) {
                return;
              }
            }
            if (!_0x4cac79) {
              let _0x22a101 = await isUserBanned(_0x32610b);
              if (_0x22a101) {
                _0x5f1bb4("You are banned from bot commands");
                return;
              }
            }
            reagir(_0x3fdc8f, _0x4b69c7, _0x5e7598, _0x4c59d9.reaction);
            _0x4c59d9.fonction(_0x3fdc8f, _0x4b69c7, _0x18755f);
          } catch (_0x449b72) {
            console.log("😡😡 " + _0x449b72);
            _0x4b69c7.sendMessage(_0x3fdc8f, {
              'text': "😡😡 " + _0x449b72
            }, {
              'quoted': _0x5e7598
            });
          }
        }
      }
    });
    const {
      recupevents: _0x47fdde
    } = require("./Raheemdatabase/welcome");
    _0x4b69c7.ev.on("group-participants.update", async _0x259a61 => {
      console.log(_0x259a61);
      let _0x4109f0;
      try {
        _0x4109f0 = await _0x4b69c7.profilePictureUrl(_0x259a61.id, 'image');
      } catch {
        _0x4109f0 = 'https://files.catbox.moe/gahcu9.jpg';
      }
      try {
        const _0x3a4c77 = await _0x4b69c7.groupMetadata(_0x259a61.id);
        if (_0x259a61.action == 'add' && (await _0x47fdde(_0x259a61.id, 'welcome')) == 'on') {
          let _0x46bb25 = "👋 Hello\n";
          let _0x42c8a2 = _0x259a61.participants;
          for (let _0xdad798 of _0x42c8a2) {
            _0x46bb25 += " *@" + _0xdad798.split('@')[0x0] + "* Welcome to Our Official Group,";
          }
          _0x46bb25 += "You might want to read the group Description to avoid getting removed...";
          _0x4b69c7.sendMessage(_0x259a61.id, {
            'image': {
              'url': _0x4109f0
            },
            'caption': _0x46bb25,
            'mentions': _0x42c8a2
          });
        } else {
          if (_0x259a61.action == "remove" && (await _0x47fdde(_0x259a61.id, "goodbye")) == 'on') {
            let _0xc57b77 = "one or somes member(s) left group;\n";
            let _0x59a0cf = _0x259a61.participants;
            for (let _0x176b53 of _0x59a0cf) {
              _0xc57b77 += '@' + _0x176b53.split('@')[0x0] + "\n";
            }
            _0x4b69c7.sendMessage(_0x259a61.id, {
              'text': _0xc57b77,
              'mentions': _0x59a0cf
            });
          } else {
            if (_0x259a61.action == "promote" && (await _0x47fdde(_0x259a61.id, "antipromote")) == 'on') {
              if (_0x259a61.author == _0x3a4c77.owner || _0x259a61.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x259a61.author == decodeJid(_0x4b69c7.user.id) || _0x259a61.author == _0x259a61.participants[0x0]) {
                console.log("Cas de superUser je fais rien");
                return;
              }
              ;
              await _0x4b69c7.groupParticipantsUpdate(_0x259a61.id, [_0x259a61.author, _0x259a61.participants[0x0]], "demote");
              _0x4b69c7.sendMessage(_0x259a61.id, {
                'text': '@' + _0x259a61.author.split('@')[0x0] + " has violated the anti-promotion rule, therefore both " + _0x259a61.author.split('@')[0x0] + " and @" + _0x259a61.participants[0x0].split('@')[0x0] + " have been removed from administrative rights.",
                'mentions': [_0x259a61.author, _0x259a61.participants[0x0]]
              });
            } else {
              if (_0x259a61.action == "demote" && (await _0x47fdde(_0x259a61.id, "antidemote")) == 'on') {
                if (_0x259a61.author == _0x3a4c77.owner || _0x259a61.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x259a61.author == decodeJid(_0x4b69c7.user.id) || _0x259a61.author == _0x259a61.participants[0x0]) {
                  console.log("Cas de superUser je fais rien");
                  return;
                }
                ;
                await _0x4b69c7.groupParticipantsUpdate(_0x259a61.id, [_0x259a61.author], "demote");
                await _0x4b69c7.groupParticipantsUpdate(_0x259a61.id, [_0x259a61.participants[0x0]], "promote");
                _0x4b69c7.sendMessage(_0x259a61.id, {
                  'text': '@' + _0x259a61.author.split('@')[0x0] + " has violated the anti-demotion rule by removing @" + _0x259a61.participants[0x0].split('@')[0x0] + ". Consequently, he has been stripped of administrative rights.",
                  'mentions': [_0x259a61.author, _0x259a61.participants[0x0]]
                });
              }
            }
          }
        }
      } catch (_0xc5cbfc) {
        console.error(_0xc5cbfc);
      }
    });
    async function _0x54594b() {
      const _0x33974e = require('node-cron');
      const {
        getCron: _0x1139b9
      } = require("./Raheemdatabase/cron");
      let _0xa4ee3a = await _0x1139b9();
      console.log(_0xa4ee3a);
      if (_0xa4ee3a.length > 0x0) {
        for (let _0x5e3ba6 = 0x0; _0x5e3ba6 < _0xa4ee3a.length; _0x5e3ba6++) {
          if (_0xa4ee3a[_0x5e3ba6].mute_at != null) {
            let _0x5282e9 = _0xa4ee3a[_0x5e3ba6].mute_at.split(':');
            console.log("etablissement d'un automute pour " + _0xa4ee3a[_0x5e3ba6].group_id + " a " + _0x5282e9[0x0] + " H " + _0x5282e9[0x1]);
            _0x33974e.schedule(_0x5282e9[0x1] + " " + _0x5282e9[0x0] + " * * *", async () => {
              await _0x4b69c7.groupSettingUpdate(_0xa4ee3a[_0x5e3ba6].group_id, "announcement");
              _0x4b69c7.sendMessage(_0xa4ee3a[_0x5e3ba6].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Hello, it's time to close the group; sayonara."
              });
            }, {
              'timezone': "Africa/Dar Es Salam"
            });
          }
          if (_0xa4ee3a[_0x5e3ba6].unmute_at != null) {
            let _0x3323cd = _0xa4ee3a[_0x5e3ba6].unmute_at.split(':');
            console.log("etablissement d'un autounmute pour " + _0x3323cd[0x0] + " H " + _0x3323cd[0x1] + " ");
            _0x33974e.schedule(_0x3323cd[0x1] + " " + _0x3323cd[0x0] + " * * *", async () => {
              await _0x4b69c7.groupSettingUpdate(_0xa4ee3a[_0x5e3ba6].group_id, "not_announcement");
              _0x4b69c7.sendMessage(_0xa4ee3a[_0x5e3ba6].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Good morning; It's time to open the group."
              });
            }, {
              'timezone': "Africa/Dar Es Salam"
            });
          }
        }
      } else {
        console.log("Les crons n'ont pas été activés");
      }
      return;
    }
    _0x4b69c7.ev.on("connection.update", async _0x678266 => {
      const {
        lastDisconnect: _0x23854d,
        connection: _0x4346d5
      } = _0x678266;
      if (_0x4346d5 === 'connecting') {
        console.log("ℹ️ lucky is connecting...");
      } else {
        if (_0x4346d5 === "open") {
          console.log("✅ RAHEEM-XMD Connected to WhatsApp! ☺️");
          console.log('--');
          0x0;
          await baileys_1.delay(0xc8);
          console.log("------");
          0x0;
          await baileys_1.delay(0x12c);
          console.log("------------------/-----");
          console.log("RAHEEM-XMD is Online 🕸\n\n");
          console.log("Loading RAHEEM-XMD Commands ...\n");
          fs.readdirSync(__dirname + "/Raheemxmd").forEach(_0x2e2d33 => {
            if (path.extname(_0x2e2d33).toLowerCase() == ".js") {
              try {
                require(__dirname + "/Raheemxmd/" + _0x2e2d33);
                console.log(_0x2e2d33 + " Installed Successfully✔️");
              } catch (_0xbd4f03) {
                console.log(_0x2e2d33 + " could not be installed due to : " + _0xbd4f03);
              }
              0x0;
              baileys_1.delay(0x12c);
            }
          });
          0x0;
          baileys_1.delay(0x2bc);
          var _0x233182;
          if (conf.MODE.toLocaleLowerCase() === "yes") {
            _0x233182 = "public";
          } else if (conf.MODE.toLocaleLowerCase() === 'no') {
            _0x233182 = "private";
          } else {
            _0x233182 = "undefined";
          }
          console.log("Commands Installation Completed ✅");
          await _0x54594b();
          if (conf.DP.toLowerCase() === 'yes') {
            let _0x268df7 = " ⁠⁠⁠⁠\n\n   _BOT🦚CONNECTED_\n\n║ Prefix: [ " + prefixe + " ]\n║ Mode: " + _0x233182 + "\n║ Model: Lucky_Md\n║ Bot Name: Lucky-Md-Bot \n║ Owner: FrediEzra\n╚═════ ❖ •✦\n-_-<-<-<-<-<-<-<--<-<-<-<-<-<\n\n*🪀Follow my channel for updates and free hacks🙃*\n \n> https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f\n\n*Heroku App Configuration*\n \n*🐥Client name*\n> " + herokuAppName + "\n\n*🦋Visit your bot web*\n> " + herokuAppLink + "\n\n*🦁Client Number*\n> " + botOwner + "\n\n-_-_-<€<€-<-<-<-<-<-<-<-<-<-<-<\n                \n                 ";
            await _0x4b69c7.sendMessage(_0x4b69c7.user.id, {
              'text': _0x268df7
            });
          }
        } else {
          if (_0x4346d5 == "close") {
            let _0x3ec897 = new boom_1.Boom(_0x23854d?.["error"])?.['output']["statusCode"];
            if (_0x3ec897 === baileys_1.DisconnectReason.badSession) {
              console.log("Session id error, rescan again...");
            } else {
              if (_0x3ec897 === baileys_1.DisconnectReason.connectionClosed) {
                console.log("!!! connexion fermée, reconnexion en cours ...");
                _0x14b61b();
              } else {
                if (_0x3ec897 === baileys_1.DisconnectReason.connectionLost) {
                  console.log("connection error 😞 ,,, trying to reconnect... ");
                  _0x14b61b();
                } else {
                  if (_0x3ec897 === baileys_1.DisconnectReason?.["connectionReplaced"]) {
                    console.log("connexion réplacée ,,, une sesssion est déjà ouverte veuillez la fermer svp !!!");
                  } else {
                    if (_0x3ec897 === baileys_1.DisconnectReason.loggedOut) {
                      console.log("vous êtes déconnecté,,, veuillez rescanner le code qr svp");
                    } else {
                      if (_0x3ec897 === baileys_1.DisconnectReason.restartRequired) {
                        console.log("redémarrage en cours ▶️");
                        _0x14b61b();
                      } else {
                        console.log("redemarrage sur le coup de l'erreur  ", _0x3ec897);
                        const {
                          exec: _0x53d318
                        } = require("child_process");
                        _0x53d318("pm2 restart all");
                      }
                    }
                  }
                }
              }
            }
            console.log("hum " + _0x4346d5);
            _0x14b61b();
          }
        }
      }
    });
    _0x4b69c7.ev.on("creds.update", _0x517fc2);
    _0x4b69c7.downloadAndSaveMediaMessage = async (_0x37ee74, _0x4dc5d6 = '', _0xc4ef2b = true) => {
      let _0x547cc7 = _0x37ee74.msg ? _0x37ee74.msg : _0x37ee74;
      let _0x46e677 = (_0x37ee74.msg || _0x37ee74).mimetype || '';
      let _0x1752f6 = _0x37ee74.mtype ? _0x37ee74.mtype.replace(/Message/gi, '') : _0x46e677.split('/')[0x0];
      0x0;
      const _0x1e8c9e = await baileys_1.downloadContentFromMessage(_0x547cc7, _0x1752f6);
      let _0x242e8a = Buffer.from([]);
      for await (const _0x3931f0 of _0x1e8c9e) {
        _0x242e8a = Buffer.concat([_0x242e8a, _0x3931f0]);
      }
      let _0x327067 = await FileType.fromBuffer(_0x242e8a);
      let _0x43dab7 = './' + _0x4dc5d6 + '.' + _0x327067.ext;
      await fs.writeFileSync(_0x43dab7, _0x242e8a);
      return _0x43dab7;
    };
    _0x4b69c7.awaitForMessage = async (_0x724a8e = {}) => {
      return new Promise((_0x23c464, _0x256164) => {
        if (typeof _0x724a8e !== "object") {
          _0x256164(new Error("Options must be an object"));
        }
        if (typeof _0x724a8e.sender !== "string") {
          _0x256164(new Error("Sender must be a string"));
        }
        if (typeof _0x724a8e.chatJid !== "string") {
          _0x256164(new Error("ChatJid must be a string"));
        }
        if (_0x724a8e.timeout && typeof _0x724a8e.timeout !== "number") {
          _0x256164(new Error("Timeout must be a number"));
        }
        if (_0x724a8e.filter && typeof _0x724a8e.filter !== "function") {
          _0x256164(new Error("Filter must be a function"));
        }
        const _0x1227cb = _0x724a8e?.["timeout"] || undefined;
        const _0x2cfec8 = _0x724a8e?.["filter"] || (() => true);
        let _0x446ce3 = undefined;
        let _0x1c4477 = _0x47bbf4 => {
          let {
            type: _0x23a450,
            messages: _0x6f3cf7
          } = _0x47bbf4;
          if (_0x23a450 == "notify") {
            for (let _0x57839e of _0x6f3cf7) {
              const _0x29546c = _0x57839e.key.fromMe;
              const _0x28a5e5 = _0x57839e.key.remoteJid;
              const _0x1c899b = _0x28a5e5.endsWith("@g.us");
              const _0x45937e = _0x28a5e5 == "status@broadcast";
              const _0x84284c = _0x29546c ? _0x4b69c7.user.id.replace(/:.*@/g, '@') : _0x1c899b || _0x45937e ? _0x57839e.key.participant.replace(/:.*@/g, '@') : _0x28a5e5;
              if (_0x84284c == _0x724a8e.sender && _0x28a5e5 == _0x724a8e.chatJid && _0x2cfec8(_0x57839e)) {
                _0x4b69c7.ev.off("messages.upsert", _0x1c4477);
                clearTimeout(_0x446ce3);
                _0x23c464(_0x57839e);
              }
            }
          }
        };
        _0x4b69c7.ev.on('messages.upsert', _0x1c4477);
        if (_0x1227cb) {
          _0x446ce3 = setTimeout(() => {
            _0x4b69c7.ev.off("messages.upsert", _0x1c4477);
            _0x256164(new Error("Timeout"));
          }, _0x1227cb);
        }
      });
    };
    return _0x4b69c7;
  }
  let _0x1eae23 = require.resolve(__filename);
  fs.watchFile(_0x1eae23, () => {
    fs.unwatchFile(_0x1eae23);
    console.log("mise à jour " + __filename);
    delete require.cache[_0x1eae23];
    require(_0x1eae23);
  });
  _0x14b61b();
}, 0x1388);

//⚔️⚔️
