const childLists = {
    'Platform' : [
        'Roblox: Bac0nway',
        'Youtube: Baconway',
        'NovelUpdates: Baconway',

    ],
    'Game' : [
        'Arknights: Baconway#5628 (inactive)',
        'maimai: 101820453238481',
        'Honkai: Star Rail: 802221265 (Asia)',
        'Azur Lane: Baconway (Avrora server)',
        'Blue Archive: AYYFRDKZ',
        'Conflict Of Nations: Baconway',
    ]
}

function buttonPress(parent) {
    const bulletParent = document.getElementById(parent)

    if (bulletParent.getElementsByTagName('li').length <= 0) {
        childLists[parent].forEach(element => {
            const bullet = document.createElement('li')
            bullet.innerHTML = `<span>${element}</span>`

            bulletParent.appendChild(bullet)
        });
    } else {
        bulletParent.innerHTML = ''
    }    
}