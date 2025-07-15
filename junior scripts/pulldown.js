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
    "Arknights (inactive): ": "Baconway#5628",
    "maimai (friend code): ": "101820453238481",
    "Honkai: Star Rail (Asia): ": "802221265",
    "Azur Lane (Avrora server) : ": "Baconway",
    "Blue Archive: ": "AYYFRDKZ",
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

function copySectionClicked(copyText) {
  navigator.clipboard.writeText(copyText);
  alert("Item copied!");
}

function buttonPress(parent) {
  const bulletParent = document.getElementById(parent);

  if (bulletParent.getElementsByTagName("li").length <= 0) {
    for (let [key, value] of Object.entries(childLists[parent])) {
      const bullet = document.createElement("li");
      bullet.innerHTML = `<span>${key} <span onclick='copySectionClicked("${value}")' title='Click on this to copy!'>${value}</span></span>`;

      if (Links[key]) {
        bullet.innerHTML += `<a href="${Links[key]}" target="_blank">Link</a>`;
      }

      bulletParent.appendChild(bullet);
    }
  } else {
    bulletParent.innerHTML = "";
  }
}
