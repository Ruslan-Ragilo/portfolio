//data
const data = {
  navigation: {
    nav: [
      ['Home', 'About me', 'Skills', 'Portfolio', 'Contacts'],
      ['Главная', 'Обо мне', 'Навыки', 'Проекты', 'Контакты']
    ],
  },
  infoMe: {
    fullName: [
      ['Ruslan Ragilo'],
      ['Руслан Рагило']
    ],
    proffecion: [
      ['Frontend Developer'],
      ['Фронтенд разработчик']
    ],
    oldFrom: [
      ['28 years old, Minsk'],
      ['28 лет, Минск']
    ],
    whatDo : {
      aboutTitle:  [
          ['About me', 'Skils', 'Portfolio', 'гбо.рф', 'Test Movie APP', 'My GitHub:', 'Contacts'],['Обо мне','Навыки', 'Портфолио', 'гбо.рф', 'Тестовое приложение фильмов', 'Мой GitHub:', 'Контакты'],
        ],
      descriptionTitle: [
        ["<span class='me-text'>Hello, I'm Ruslan - Frontend developer from Minsk. My journey into programming started with love. This means that I received all the knowledge, skills and experience on my own. By education, I am an Aviation Equipment Operations Engineer.</span>",
        '<span class="me-text2">Technologies that I own</span>', 'Unified platform for the NGV fuel market', 'Test application using mock API <a class="link-test" href="http://f0646183.xsph.ru/">http://f0646183.xsph.ru/</a>', ' <a class="link-test" href="https://github.com/Ruslan-Ragilo">https://github.com/Ruslan-Ragilo</a>', 'Want to know more or just chat? You are welcome!'],
        ['<span class="me-text">Привет, я Руслан - Фронтенд  разработчик из Минска. Мой путь в программирование, начался с любовью. Это говорит то, что все знания, навыки и опыт я получал самостоятельно. По образованию я Инеженер по эксплуатации авиационного оборудования.</span>',
        '<span class="me-text2">Технологии которыми я владею</span>', 'Единая платформа рынка газомоторного топлива', 'Тестовое приложение с использованием ложного API <a class="link-test" href="http://f0646183.xsph.ru/">http://f0646183.xsph.ru/</a>', ' <a class="link-test" href="https://github.com/Ruslan-Ragilo">https://github.com/Ruslan-Ragilo</a>', 'Хотите узнать больше или просто поболтать? Добро пожаловать!']
      ]
    }
  }
}

//variables

const listNav = document.querySelector('.list-nav'),
      itemsLang = document.querySelectorAll('.item-lang'),
      toggleLang = document.querySelector('.toggle-lang'),
      fullName = document.querySelector('.full-name'),
      aboutMe = document.querySelector('.about-me'),
      titles = document.querySelectorAll('.title'),
      descriptionMe = document.querySelectorAll('.description-me'),
      imgJs = document.querySelector('.img-js > img'),
      blockCardsSkils = document.querySelector('.wrapper-block-skils'),
      arrowTop = document.querySelector('.arrow-top');

data.navigation.nav[0].map((el, i) => {
  listNav.innerHTML += `<li class='list-item'><a class='link-nav' href="#${i}">${el}</a></li>`;
  fullName.innerHTML = `<p class="text-full-name">${data.infoMe.fullName[0]}</p>`
  aboutMe.innerHTML = `<p class="aboutMe">${data.infoMe.proffecion[0]}</p><p class="aboutMe">${data.infoMe.oldFrom[0]}</p>`;
  titles.forEach((el,i) => {
      el.innerHTML = '';
      el.innerHTML += `<p class="heading-primary">${data.infoMe.whatDo.aboutTitle[0][i]}</p>`;
  })
  descriptionMe.forEach((el,i) => {
      el.innerHTML = '';
      el.innerHTML += `<p class="aboutMe">${data.infoMe.whatDo.descriptionTitle[0][i]}</p>`;
  })
})


//toggle lang
toggleLang.addEventListener('click', (e) => {
  itemsLang.forEach((el, i) => {
    e.preventDefault();
    if (e.target == el) {
      if(e.target.classList.contains('active')) {
        e.preventDefault();
      } else if (!e.target.classList.contains('active')) {
        i === 0 ? itemsLang[1].classList.remove('active') : itemsLang[0].classList.remove('active');
        e.target.classList.add('active');
        listNav.innerHTML = '';
        data.navigation.nav[i].map((el, index) => listNav.innerHTML += `<li class='list-item'><a href=#${index}>${el}</a></li>`);
        fullName.innerHTML = '';
        fullName.innerHTML = `<p class="text-full-name">${data.infoMe.fullName[i]}</p>`;
        aboutMe.innerHTML = '';
        aboutMe.innerHTML = `<p class="aboutMe">${data.infoMe.proffecion[i]}</p><p class="aboutMe">${data.infoMe.oldFrom[i]}</p>`;
        titles.forEach((el,ind) => {
          el.innerHTML = '';
          if (i == 0) {
            el.innerHTML += `<p class="heading-primary">${data.infoMe.whatDo.aboutTitle[0][ind]}</p>`;
          } else {
            el.innerHTML += `<p class="heading-primary">${data.infoMe.whatDo.aboutTitle[1][ind]}</p>`;
          }
        })
        descriptionMe.forEach((el,ind) => {
          el.innerHTML = '';
          if (i == 0) {
            el.innerHTML += `<p class="aboutMe">${data.infoMe.whatDo.descriptionTitle[0][ind]}</p>`;
          } else {
            el.innerHTML += `<p class="aboutMe">${data.infoMe.whatDo.descriptionTitle[1][ind]}</p>`;
          }
        })
      }
    }
  })
})

//animation
window.addEventListener("scroll", (e) =>  {
  //animation icon js
  if(e.target.body.childNodes[7].offsetTop - 100 < window.scrollY) {
    imgJs.classList.add('active');
  } else {
    imgJs.classList.remove('active')
  }
  //animation icon skils
  if(e.target.body.childNodes[13].offsetTop - 100 < window.scrollY) {
  blockCardsSkils.classList.add('active');
  } else {
    blockCardsSkils.classList.remove('active')
  }
  //add arrow top
  window.scrollY > 100 ? arrowTop.classList.add('active') : arrowTop.classList.remove('active')
});

// slider
const wrapperImg =  document.querySelectorAll('.wrapper_img'),
      buttonNav =  document.querySelectorAll('.wrapper_nav > svg');

const arrImgURL1 =
[
  '/img/1.png',
  '/img/2.png',
  '/img/3.png',
  '/img/4.png'
];

const arrImgURL2 =
[
  '/img/test1.png',
  '/img/test2.png',
  '/img/test3.png',
  '/img/test4.png'
];


function ShowSlider (arrImgURL,index) {
  arrImgURL.forEach((el, i) => {
    wrapperImg[index].innerHTML += `<img src=${el} alt=${i} />`;
  });
}

// const nav = (index) => {
buttonNav.forEach((el, i) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    if (i%2 == 0) {
      if (i == 2) {
        wrapperImg[1].scrollLeft -= wrapperImg[1].clientWidth
      } else {
        wrapperImg[(i / 2)].scrollLeft -= wrapperImg[(i / 2)].clientWidth
      }
    } else {
      if (i == 1) {
        wrapperImg[0].scrollLeft += wrapperImg[0].clientWidth;
      } else {
        wrapperImg[(i / 2) - 0.5].scrollLeft += wrapperImg[(i / 2) - 0.5].clientWidth;
      }
    }
  })
})
// }



ShowSlider(arrImgURL1, 0);
ShowSlider(arrImgURL2, 1);


//scroll top arrow
arrowTop.addEventListener('click', () => {
  window.scrollTo(pageYOffset, 0);
})

//toggle nav button
const button = document.querySelector('.burger-btn'),
      header = document.querySelector('header'),
      linksNav = document.querySelectorAll('.link-nav'),
      html = document.querySelector('html');

button.addEventListener('click', () => {
	button.classList.toggle('active');
  header.classList.toggle('active');
  header.classList.contains('active') ? html.style.overflowY = 'hidden' : html.style.overflowY = 'scroll'
})

if(window.screen.width <= 600) {
  window.addEventListener('click', (e) => {
    linksNav.forEach(el => {
      if(e.target == el) {
        button.classList.toggle('active');
        header.classList.toggle('active');
        header.classList.contains('active') ? html.style.overflowY = 'hidden' : html.style.overflowY = 'scroll'
      }
      if (!e.target.closest('header') && !e.target.closest('.burger-btn')) {
        button.classList.remove('active');
        header.classList.remove('active');
        html.style.overflowY = 'scroll'
      }
    })
  })
}


