var webPush = require("web-push");

const vapidKeys = {
  publicKey:
    "BClgFMb1_DkSkvcWbTCgnunI1n5VEM6wS-5ReW__2I5D-4z-bK3S6ETHUQjIvSju56CJUmCLPGvc00_Xir6dpxY",
  privateKey: "EnbQJMOxEgx7XQA8AVJMd2tpS5t9pE2zDWTz8dKOiQs",
};

webPush.setVapidDetails(
  "mailto:taufiq.wahid58@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);
var pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fNHO3rMqXes:APA91bFr79CJdK2ssQXMjtNv_QWQLpznYnDCs0WVTNwy3qVm3ALwDJZavLq0YpUhIdCV9nPZ0oMd8BBj62dm84bkmh0LbFZWbfxHf8nKg3st0z5obH4REMIwfreH6GLXKZB7dfyReMRO",
  keys: {
    p256dh:
      "BAGWpB/NED+dC9T9oPdwt9CdRbFPbVxp9x5By0lCFYtl7tQ1e5q7kvlCSXrc8/Tpi20SICr99Mnqw2nuzsACT6E=",
    auth: "gchINOtuhsrymc6Z4oOIyQ==",
  },
};

var payload = "Selamat! Aplikasi Anda sudah dapat menerima push notifikasi";

var options = {
  gcmAPIKey: "606998233508",
  TTL: 60,
};

webPush.sendNotification(pushSubscription, payload, options);
