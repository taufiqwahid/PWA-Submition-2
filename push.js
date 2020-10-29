var webPush = require("web-push");

const vapidKeys = {
  publicKey: "",
  privateKey: "",
};

webPush.setVapidDetails(
  "mailto:taufiq.wahid58@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);
var pushSubscription = {
  endpoint: "",
  keys: {
    p256dh: "",
    auth: "",
  },
};

var payload = "Selamat! Aplikasi Anda sudah dapat menerima push notifikasi";

var options = {
  gcmAPIKey: "606998233508",
  TTL: 60,
};

webPush.sendNotification(pushSubscription, payload, options);
