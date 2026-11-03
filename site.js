console.log("JavaScript is successfully linked!");


const hours = new Date().getHours() // get the current hour

    const isMorning = hours >= 4 && hours < 12 // is it morning?
    const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
    const isEvening = hours >= 17 || hours < 4 // is it evening?

    if (isMorning)
    {
        const welcome = document.querySelector("#welcome")
        welcome.textContent = "Good Morning"
    }
    
    else if (isAfternoon)
    {
        const welcome = document.querySelector("#welcome")
        welcome.textContent = "Good Afternoon"
    }

    else if (isEvening)
    {
        const welcome = document.querySelector("#welcome")
        welcome.textContent = "Good Evening"
    }

    localStorage.setItem("It's a secret to everybody.", '"Its not a bands world, its a FANS world" -Joey Jordison')

    const urls = [
    'https://www.drummerworld.com/articles/wp-content/uploads/2024/07/IMG_2325.jpeg',
    'https://beneaththesurfacemusicdotcom.wordpress.com/wp-content/uploads/2020/12/the-rev-2.jpg?w=700',
    'https://drummerszone.media/artists/2000/8772-12242005162500.jpg',
    'https://proglodytes.com/wp-content/uploads/2016/05/mptot2.jpg',
    'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Korn_03362006_Milwaukee.jpg/330px-Korn_03362006_Milwaukee.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZIJdjzOvnax1pjjcqc9jmRo5T8EpETmPUFbf5m6cQx7Giy3o3sKrYF8_&s=10',
    'https://images.equipboard.com/uploads/user/image/8435/big_brooks-wackerman.jpg?v=1792200846',
    'https://upload.wikimedia.org/wikipedia/commons/5/52/GreenDayIOW230624_%28339_of_367%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    'https://www.rollingstone.com/wp-content/uploads/2023/11/JayWeinberg-1.jpeg'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

document.querySelector('#next').addEventListener('click', () => {
    currentImage++
    showImages()
})

document.querySelector('#prev').addEventListener('click', () => {
    currentImage--
    showImages()
})

setInterval(() => {
    currentImage++
    showImages()
}, 5000)
