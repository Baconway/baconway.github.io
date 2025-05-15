//handles site icon, site status bar (direct with <script> in every html file)

const status_colors = {
    'online' : 'green',
    'dnd' : 'red'
};

function setExtras(status, activity, displayTitle) {
    const statusBar = document.getElementById('status')
    statusBar.style.backgroundColor = status_colors[status]
    statusBar.innerText = activity

    const title = document.getElementsByTagName('title')[0]
    title.innerText = displayTitle
}

fetch('https://api.lanyard.rest/v1/users/714482641134551071').then(response => response.json()).then(data => {
    const av_link = "https://cdn.discordapp.com/avatars/" + data.data.discord_user.id + '/' + data.data.discord_user.avatar + ".png?size=32"

    document.getElementById('icon').href = av_link
    setExtras(data.data.discord_status, data.data.activities[1].name, data.data.discord_user.display_name)
})
