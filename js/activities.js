const getActivityButton = document.getElementById('get-activity')

getActivityButton.addEventListener('click', async () => {
    getNewActivity()
})

async function getNewActivity(params) {
    const url = 'http://www.boredapi.com/api/activity/'
    const response = await fetch(url)
    const jsonData = await response.json()

    const activityElement = document.getElementById('activity')
    const participantsElement = document.getElementById('participants')
    const typeElement = document.getElementById('type')
    activityElement.innerText = jsonData['activity']
    participantsElement.innerText = jsonData['participants']
    typeElement.innerText = jsonData['type']
}

getNewActivity()
