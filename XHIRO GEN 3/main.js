//===============================//
// SC BUG BOT XHIRO GENERASI KE TIGA 
// BASE : RAFATHARCODE
// RECODE FULL : NOXXHIRO / XHIRO
// USAHAKAN GUNAKAN BOT SEBAIK MUNGKIN
// BUY NO ENC? SUNG KELEGRAM OWNER
// @NOXXHIRO
//GUNAKAN BOT SEWAJARNYA BIAR GAK KENA BANNED
//XHIRO BOT GENERASI 3
//INFO BOT XHIRO GEN 3
//BASE : RAFATHAR CODE
//RECODE : XHIRO
//CREDITS : NOXXHIRO
//YOUTUBE : https://www.youtube.com/@akhiroc-nine
//===============================//
require("./all/global");
const func = require("./all/place");
const readline = require("readline");
const yargs = require("yargs/yargs");
const _ = require("lodash");
const usePairingCode = true;
const question = _0x164cda => {
  const _0xdf153f = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(_0x11657e => {
    _0xdf153f.question(_0x164cda, _0x11657e);
  });
};
async function startSesi() {
  const _0x4aa2c1 = makeInMemoryStore({
    logger: pino().child({
      level: "silent",
      stream: "store"
    })
  });
  const {
    state: _0x37d3e9,
    saveCreds: _0x5ba336
  } = await useMultiFileAuthState("./session");
  const {
    version: _0x1115db,
    isLatest: _0x40cea1
  } = await fetchLatestBaileysVersion();
  const _0x547e7e = {
    version: [2, 2413, 1],
    keepAliveIntervalMs: 30000,
    printQRInTerminal: !usePairingCode,
    logger: pino({
      level: "fatal"
    }),
    auth: _0x37d3e9,
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    version: [2, 3000, 1015901307],
    getMessage: async _0x5e94a6 => {
      if (_0x4aa2c1) {
        const _0x268588 = await _0x4aa2c1.loadMessage(_0x5e94a6.remoteJid, _0x5e94a6.id, undefined);
        return _0x268588?.message || undefined;
      }
      return {
        conversation: "XHIRO BOT GENERASI KE 3"
      };
    }
  };
  const _0xea335a = func.makeWASocket(_0x547e7e);
  if (usePairingCode && !_0xea335a.authState.creds.registered) {
    const _0x20c5ef = await question(color("MASUKAN NOMOR DENGAN AWALAN KODE NEGARA DAN TANPA SPASI :\n", "red"));
    const _0x424724 = await _0xea335a.requestPairingCode(_0x20c5ef.trim());
    console.log(chalk.redBright("Your Pairing Code") + " : " + _0x424724);
  }
  _0x4aa2c1?.bind(_0xea335a.ev);
  _0xea335a.ev.on("connection.update", async _0x50cbf3 => {
    const {
      connection: _0x1b1c29,
      lastDisconnect: _0x560886
    } = _0x50cbf3;
    if (_0x1b1c29 === "close") {
      const _0x429a21 = new Boom(_0x560886?.error)?.output.statusCode;
      console.log(color(_0x560886.error, "deeppink"));
      if (_0x560886.error == "Error: Stream Errored (unknown)") {
        process.exit();
      } else if (_0x429a21 === DisconnectReason.badSession) {
        console.log(color("Bad Session File, Please Delete Session and Scan Again"));
        process.exit();
      } else if (_0x429a21 === DisconnectReason.connectionClosed) {
        console.log(color("[SYSTEM]", "white"), color("Connection closed, reconnecting...", "deeppink"));
        process.exit();
      } else if (_0x429a21 === DisconnectReason.connectionLost) {
        console.log(color("[SYSTEM]", "white"), color("Connection lost, trying to reconnect", "deeppink"));
        process.exit();
      } else if (_0x429a21 === DisconnectReason.connectionReplaced) {
        console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First"));
        _0xea335a.logout();
      } else if (_0x429a21 === DisconnectReason.loggedOut) {
        console.log(color("Device Logged Out, Please Scan Again And Run."));
        _0xea335a.logout();
      } else if (_0x429a21 === DisconnectReason.restartRequired) {
        console.log(color("Restart Required, Restarting..."));
        await startSesi();
      } else if (_0x429a21 === DisconnectReason.timedOut) {
        console.log(color("Connection TimedOut, Reconnecting..."));
        startSesi();
      }
    } else if (_0x1b1c29 === "connecting") {
      console.log(color("Menghubungkan . . . "));
    } else if (_0x1b1c29 === "open") {
      let _0x5e586f = "*BOT XHIRO GEN 3* BERHASIL TERSAMBUNG KE NOMOR WHATSAPP ⎋ DILARANG RENAME MAUPUN MENJUAL BOT XHIRO GENERASI KE 3 ⎋ BASE RAFA RECODE FULL XHIRO ⎋ GUNAKAN BOT SEBAIK MUNGKIN JANGAN SPAM BUG KE ORANG YANG TIDAK BERSALAH ⎋" + _0xea335a.user.id.split(":")[0];
      _0xea335a.sendMessage("999999999999@s.whatsapp.net", {
        text: _0x5e586f
      });
      console.log(color("BT XHIRO TERHUBUNG KEMBALI"));
    }
  });
  _0xea335a.ev.on("call", async _0x2e0398 => {
    if (!global.anticall) {
      return;
    }
    for (let _0xd4dcc of _0x2e0398) {
      if (_0xd4dcc.isGroup == false) {
        if (_0xd4dcc.status == "offer") {
          let _0x479d52 = await _0xea335a.sendMessage(_0xd4dcc.from, {
            text: "@" + _0xd4dcc.from.split("@")[0] + " Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini",
            contextInfo: {
              mentionedJid: [_0xd4dcc.from],
              externalAdReply: {
                showAdAttribution: true,
                thumbnail: fs.readFileSync("./media/warning.jpg"),
                title: "｢ CALL DETECTED ｣",
                previewType: "PHOTO"
              }
            }
          }, {
            quoted: null
          });
          _0xea335a.sendContact(_0xd4dcc.from, [owner], "Developer WhatsApp Bot", _0x479d52);
          await sleep(10000);
          await _0xea335a.updateBlockStatus(_0xd4dcc.from, "block");
        }
      }
    }
  });
  _0xea335a.ev.on("messages.upsert", async _0x434972 => {
    try {
      m = _0x434972.messages[0];
      if (!m.message) {
        return;
      }
      m.message = Object.keys(m.message)[0] === "ephemeralMessage" ? m.message.ephemeralMessage.message : m.message;
      if (m.key && m.key.remoteJid === "status@broadcast") {
        return _0xea335a.readMessages([m.key]);
      }
      if (!_0xea335a.public && m.key.remoteJid !== global.owner + "@s.whatsapp.net" && !m.key.fromMe && _0x434972.type === "notify") {
        return;
      }
      if (m.key.id.startsWith("BAE5") && m.key.id.length === 16) {
        return;
      }
      if (global.autoread) {
        _0xea335a.readMessages([m.key]);
      }
      m = func.smsg(_0xea335a, m, _0x4aa2c1);
      require("./rafatharcode.js")(_0xea335a, m, _0x4aa2c1);
    } catch (_0x1c4f50) {
      console.log(_0x1c4f50);
    }
  });
  _0xea335a.ev.on("group-participants.update", async _0x70abcf => {
    if (!global.welcome) {
      return;
    }
    let _0x112568 = await _0xea335a.decodeJid(_0xea335a.user.id);
    if (_0x70abcf.participants.includes(_0x112568)) {
      return;
    }
    try {
      let _0x1a4879 = await _0xea335a.groupMetadata(_0x70abcf.id);
      let _0x4bf6bc = _0x1a4879.subject;
      let _0x4df0d1 = _0x70abcf.participants;
      for (let _0x5f28f2 of _0x4df0d1) {
        let _0x11670d = _0x70abcf.author !== _0x5f28f2 && _0x70abcf.author.length > 1;
        let _0x6be9f6 = _0x11670d ? [_0x70abcf.author, _0x5f28f2] : [_0x5f28f2];
        try {
          ppuser = await _0xea335a.profilePictureUrl(_0x5f28f2, "image");
        } catch {
          ppuser = "https://telegra.ph/file/e430d2fd83a7c608ced5f.jpg";
        }
        if (_0x70abcf.action == "add") {
          _0xea335a.sendMessage(_0x70abcf.id, {
            text: _0x11670d ? "@" + _0x70abcf.author.split("@")[0] + " Telah Menambahkan @" + _0x5f28f2.split("@")[0] + " Ke Dalam Grup Ini" : "Hallo Kak @" + _0x5f28f2.split("@")[0] + " Selamat Datang Di *" + _0x4bf6bc + "*",
            contextInfo: {
              mentionedJid: [..._0x6be9f6],
              externalAdReply: {
                thumbnailUrl: ppuser,
                title: "© Welcome Message",
                body: "",
                renderLargerThumbnail: true,
                sourceUrl: linkgc,
                mediaType: 1
              }
            }
          });
        }
        if (_0x70abcf.action == "remove") {
          _0xea335a.sendMessage(_0x70abcf.id, {
            text: _0x11670d ? "@" + _0x70abcf.author.split("@")[0] + " Telah Mengeluarkan @" + _0x5f28f2.split("@")[0] + " Dari Grup Ini" : "@" + _0x5f28f2.split("@")[0] + " Telah Keluar Dari Grup Ini",
            contextInfo: {
              mentionedJid: [..._0x6be9f6],
              externalAdReply: {
                thumbnailUrl: ppuser,
                title: "© Leaving Message",
                body: "",
                renderLargerThumbnail: true,
                sourceUrl: linkgc,
                mediaType: 1
              }
            }
          });
        }
        if (_0x70abcf.action == "promote") {
          _0xea335a.sendMessage(_0x70abcf.id, {
            text: "@" + _0x70abcf.author.split("@")[0] + " Telah Menjadikan @" + _0x5f28f2.split("@")[0] + " Sebagai Admin Grup Ini",
            contextInfo: {
              mentionedJid: [..._0x6be9f6],
              externalAdReply: {
                thumbnailUrl: ppuser,
                title: "© Promote Message",
                body: "",
                renderLargerThumbnail: true,
                sourceUrl: linkgc,
                mediaType: 1
              }
            }
          });
        }
        if (_0x70abcf.action == "demote") {
          _0xea335a.sendMessage(_0x70abcf.id, {
            text: "@" + _0x70abcf.author.split("@")[0] + " Telah Memberhentikan @" + _0x5f28f2.split("@")[0] + " Sebagai Admin Grup Ini",
            contextInfo: {
              mentionedJid: [..._0x6be9f6],
              externalAdReply: {
                thumbnailUrl: ppuser,
                title: "© Demote Message",
                body: "",
                renderLargerThumbnail: true,
                sourceUrl: linkgc,
                mediaType: 1
              }
            }
          });
        }
      }
    } catch (_0x447718) {
      console.log(_0x447718);
    }
  });
  _0xea335a.public = true;
  _0xea335a.ev.on("creds.update", _0x5ba336);
  return _0xea335a;
}
startSesi();
process.on("uncaughtException", function (_0x488880) {
  console.log("Caught exception: ", _0x488880);
});