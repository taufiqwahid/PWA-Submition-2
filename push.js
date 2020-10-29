var webPush = require("web-push");

const vapidKeys = {
  publicKey:
    "BLnJRUe02mf6ztXqXtBftPWEY6nMByEW5T9qjEAUlXOuCO5Nv2AgIVNcRCyTYcM2Q0rOyQtbvTNo7xg9W1fx318",
  privateKey: "3bDpGksPDeKWl2cl6rD2E1wty1C8fBR-Jvideq06ao4",
};

webPush.setVapidDetails(
  "mailto:taufiq.wahid58@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);
var pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dhfkkGm1W90:APA91bGr950MW3y8GpUHscLvjjCBzwVySuxozBfZUp8CDwohCKvxB3iGss4egYtFzZpQQIzLx-uqOHSLa5Kgzk5G0Q4ZgVGQF1Nyw8NGB73_h3klaptDt6Kdf9TmG9VuTlACWJ5cz1Ta",
  keys: {
    p256dh:
      "BPrg1N8MUB6Qwcn0EgQVHy8mymNfenKFrUZDbP8+b44axWvy04zI9dTpGHiNRrE6iHheCBRJ0CmPv0Gr6s+WZT4=",
    auth: "qWR7laRBwWdFycllkmzOcQ==",
  },
};

var payload = "Selamat! Aplikasi Anda sudah dapat menerima push notifikasi";

var options = {
  gcmAPIKey: "606998233508",
  TTL: 60,
};

webPush.sendNotification(pushSubscription, payload, options);
