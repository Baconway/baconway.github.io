//handles site icon, site status bar (direct with <script> in every html file)
let activities;

const status_colors = {
  online: { color: "green", text: "Online" },
  dnd: { color: "red", text: "Do Not Disturb" },
};

function interpretImageLinks(name, application_id, img) {
  if (!img || img == undefined) {
    return "https://i.sstatic.net/mwFzF.png";
  }
  if (img.substring(0, 3) != "mp:") {
    return `https://cdn.discordapp.com/app-assets/${application_id}/${img.substring(
      0
    )}`;
  } else {
    return `https://media.discordapp.net/${img.substring(3)}`;
  }
}

function receiveTemplate({ application_id, name, details, state, assets }) {
  let large_img, small_img;

  large_img = interpretImageLinks(name, application_id, assets.large_image);
  small_img = interpretImageLinks(name, application_id, assets.small_image);

  return `<div class="displayer">
    <p id='ActivityHeader'>Activity</p>
        <div class="activityInfo">
          <div class='images'>
            <img title='${assets.large_text}'
            src=${large_img} /> 
            <img class='small' title='${assets.small_text}'
            src=${small_img} />
          </div>
          <div class="activityText">
            <p id="name" title='${name}'>${name}</p>
            <p id="details" title='${details}'>${details}</p>
            <p id="state" title='${state}'>${state}</p>
          </div>
        </div>
      </div>`;
}

function setExtras(status, displayTitle) {
  const statusBar = document.getElementById("status");
  statusBar.style.backgroundColor = status_colors[status].color;
  statusBar.innerText = status_colors[status].text;

  const title = document.getElementsByTagName("title")[0];
  title.innerText = displayTitle;
}

function getActivities() {
  const dimmer = document.getElementsByClassName("activitiesDisplay")[0];

  if (dimmer.style.visibility != "visible") {
    dimmer.style.visibility = "visible";
    if (dimmer.childNodes.length > 0) {
      return;
    }

    for (let index = 0; index < activities.length; index++) {
      const ac = activities[index];

      if (ac.id == "custom") {
        continue;
      }

      dimmer.innerHTML += receiveTemplate(ac);
    }
  } else {
    dimmer.style.visibility = "hidden";
  }
}

function createSnowfall() {
  let wait = 1;

  for (let index = 0; index < 25; index++) {
    console.log(window.innerWidth);
    setTimeout(function () {
      const snowDiv = document.createElement("div");
      snowDiv.className = "snow";

      snowDiv.style.transform = `translateX(${
        Math.random() * (window.innerWidth - 50)
      }px)`;
      console.log(snowDiv.style.transform);
      snowDiv.innerHTML += `<img src="./gooner pics/snowflake-clip-art-snowflakes-png-file-b1470a45381b645358d2fbf959f2549d.png"/>`;

      document.getElementsByClassName("snowHolder")[0].appendChild(snowDiv);
    }, wait * 1000);
    wait++;
  }

  for (
    let index = 0;
    index < document.getElementsByClassName("snow").length;
    index++
  ) {
    const element = document.getElementsByClassName("snow")[index];

    element.addEventListener("animationiteration", function () {
      console.log(window.innerWidth);
      element.style.transform = `translateX(${
        Math.random() * (window.innerWidth - 50)
      }px`;
    });
  }
}

fetch("https://api.lanyard.rest/v1/users/714482641134551071")
  .then((response) => response.json())
  .then((data) => {
    const av_link = `https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}.png?size=32`;
    document.getElementById("icon").href = av_link;

    setExtras(data.data.discord_status, data.data.discord_user.display_name);
    activities = data.data.activities;
  });
