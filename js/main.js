let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');
const array = []
modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})


//___практическая работа №11___


//изменение цвета при нажатии кнопок B/W
document.addEventListener('keyup', function (event) {
    if (event.key.toLowerCase() == 'b') {
        document.body.style.background = 'grey'
    }

    if (event.key.toLowerCase() == 'w') {
        document.body.style.background = 'white'
    }
})

//валидация полей

let inputName = document.getElementById('name')
let text = document.getElementById('text')
let submitAdd = document.getElementById('submitAdd')
let error1 = document.querySelector('.error1')
let error2 = document.querySelector('.error2')
let isError1 = false;
let isError2 = false;

inputName.addEventListener('change', function () {
    if (inputName.value==''){
        inputName.style.border = '2px solid red'
        error1.innerHTML = 'Введите название<br><br>'
        isError1 = true;
    }else if(inputName.value.length < 8) {
        inputName.style.border = '2px solid red'
        error1.innerHTML = 'Должно быть не менее 8 символов<br><br>'
        isError1 = true;
    } else {
        inputName.style.border = '2px solid green'
        error1.innerHTML = ''
        isError1 = false;
    }


})

text.addEventListener('change', function () {
    if (text.value==''){
        text.style.border = '2px solid red'
        error2.innerHTML = 'Введите текст для публикации<br><br>'
        isError1 = true;
    }
    else if (text.value.length > 300) {
        text.style.border = '2px solid red'
        error2.innerHTML = 'Текст не может содержать более 300 символов<br><br>'
        isError2 = true;
    } else {
        text.style.border = '2px solid green'
        error2.innerHTML = ''
        isError2 = false;

    }

})

submitAdd.addEventListener('click', function (event) {
    if (inputName.value == '' && text.value == '') {
        text.style.border = '2px solid red'
        inputName.style.border = '2px solid red'
        error2.innerHTML = 'Заполните все поля<br><br>'

    }else if (inputName.value == '') {
        error1.innerHTML = 'Заполните поле заголовка<br><br>'
        inputName.style.border = '2px solid red'

    } else if (text.value == '') {
        error2.innerHTML = 'Введите текст новости<br><br>'
        text.style.border = '2px solid red'
    }else if (isError1 == false && isError2 == false) {
        const newArray = {
            title: inputName.value,
            text: text.value
        }
        array.push(newArray)
        news()
        event.preventDefault()
        inputName.value = ''
        text.value = ''
    }
}
)



//  создание массива с новостями
let wrapper = document.querySelector('.news-wrapper')

function news() {
    wrapper.innerHTML = ''
    if (array.length === 0) {
        wrapper.innerHTML = '<p class="option">Новостей нет</p>'
    }
    for (let x = 0; x < array.length; x++) {
        wrapper.insertAdjacentHTML('beforeend', getNote(array[x]))
    }

}
news()
function getNote(note) {
    return `
    <div class="news-item">
        <h3 class="h3">${note.title}</h3>
        <p class="news-item__p">
        ${note.text}
        </p>
    </div>
    `
}
