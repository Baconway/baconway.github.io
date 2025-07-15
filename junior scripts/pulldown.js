const childLists = {
  Platform: {
    Roblox: ": ",
    Youtube: ": ",
    NovelUpdates: ": ",
    Leetify: " (CS2 Stats) : ",
    Etterna: ": ",
    "osu!": ": ",
  },

  Game: {
    "Arknights: ": "Baconway#5628 (inactive)",
    "maimai: ": "101820453238481",
    "Honkai: Star Rail: ": "802221265 (Asia)",
    "Azur Lane : ": "Baconway (Avrora server)",
    "Blue Archive:": " AYYFRDKZ",
    "Conflict Of Nations: ": "Baconway",
  },
};

const Links = {
  "osu!": "https://osu.ppy.sh/users/20144046",
  Etterna: "https://etternaonline.com/users/Baconway",
  Youtube: "https://www.youtube.com/channel/UCTgtTyEKojAzULPDsRcBm0A",
  Leetify: "https://leetify.com/app/profile/76561199216739443",
  NovelUpdates: "https://www.novelupdates.com/user/710476/Baconway/",
  Roblox: "https://www.roblox.com/users/243533657/profile",
};

function buttonPress(parent) {
  const bulletParent = document.getElementById(parent);

  if (bulletParent.getElementsByTagName("li").length <= 0) {
    for (let [key, value] of Object.entries(childLists[parent])) {
      const bullet = document.createElement("li");
      bullet.innerHTML = `<span>${key} ${value}</span>`;

      if (Links[key]) {
        bullet.innerHTML += `<a href="${Links[key]}" target="_blank">Link</a>`;
      }

      bulletParent.appendChild(bullet);
    }
  } else {
    bulletParent.innerHTML = "";
  }
}
