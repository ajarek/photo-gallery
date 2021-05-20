const imgs = document.querySelectorAll('.grid img')
const bigPicture = document.querySelector('#hiden')
const divHiden = document.querySelector('.hiden')

imgs.forEach(img => {
    img.addEventListener('click', (e) => {
        let srcHiden = e.target.getAttribute('src');
        divHiden.style.display = 'block'
        bigPicture.setAttribute('src', srcHiden)

    })
})

const close = () => {
    divHiden.style.display = 'none'
}
divHiden.addEventListener('click', close)