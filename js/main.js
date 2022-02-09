//adicionando navcolor
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 100) {
    $('.center').addClass('nav-color')
    $('.imgLogo').addClass('logoFilterNone')
    $('.color-nav').addClass('color-nav2')
  } else {
    $('.center').removeClass('nav-color')
    $('.imgLogo').removeClass('logoFilterNone')
    $('.color-nav').removeClass('color-nav2')
  }
})

// SLIDER HEADER

let time = 9000
currentImageIndex = 0
images = document.querySelectorAll('#slider img')
max = images.length

function nextImage() {
  images[currentImageIndex].classList.remove('selected')

  currentImageIndex++

  if (currentImageIndex >= max) {
    currentImageIndex = 0
  }

  images[currentImageIndex].style.backgroundSize = 'cover'
  images[currentImageIndex].style.backgroundPosition = 'top'
  images[currentImageIndex].classList.add('selected')
  setTimeout(() => {
    if (currentImageIndex === 0) {
      p2[index].innerHTML =
        'Nós estamos procurando por significado conjunto completo e funcional.'
    }
    if (currentImageIndex === 1) {
      p2[index].innerHTML = 'EXCELÊNCIA NO ATENDIMENTO.'
    }
    if (currentImageIndex === 2) {
      p2[index].innerHTML =
        'Nós estamos procurando por significado conjunto completo e funcional.'
    }
    if (currentImageIndex === 3) {
      p2[index].innerHTML = 'EXCELÊNCIA NO ATENDIMENTO.'
    }
    if (currentImageIndex === 4) {
      p2[index].innerHTML =
        'Nós estamos procurando por significado conjunto completo e funcional.'
    }
  }, 1290)

  setTimeout(() => {
    p2[index].style.animation = 'slideInLeft 2.5s'
  }, 1350)
}

function start() {
  setInterval(() => {
    //Troca de image
    p2[index].style.animation = 'bounceOutLeft 2s'
  }, 9000)

  setInterval(() => {
    //Troca de image
    nextImage()
  }, time)
}

window.addEventListener('Load', start())

// animation no header

p1 = document.querySelectorAll('.sub-tittle #p1')
p2 = document.querySelectorAll('.sub-tittle #p2')
index = 0
setInterval(() => {
  // p1[index].innerHTML = 'Legal';
  p1[index].classList.add('p1')
}, 1000)

setTimeout(() => {
  p2[index].classList.add('p2')
}, 2000)

ancora = document.querySelector('.spinner')

ancora.addEventListener('click', function () {
  ancora.style.transition = '2s'
  window.location.href = 'index.html#main'
})

// ABRIR BOX NO (QUEM SOMOS)

missao = document.getElementById('nossaMissao')
missao.style.background = '#015f9e'
missao.style.color = '#fff'
statusMissao = false
missao.addEventListener('click', function () {
  if (statusMissao === false) {
    document.getElementById('boxMissao').style.display = 'none'
    missao.style.background = '#fff'
    missao.style.color = '#000'
    statusMissao = true
  } else {
    document.getElementById('boxMissao').style.display = 'block'

    missao.style.background = '#015f9e'
    missao.style.color = '#fff'
    statusMissao = false

    // fechando outras Boxes
    document.getElementById('boxVisao').style.display = 'none'
    visao.style.background = '#fff'
    visao.style.color = '#000'
    statusVisao = true
    document.getElementById('boxValores').style.display = 'none'
    valores.style.background = '#fff'
    valores.style.color = '#000'
    statusValores = true
    document.getElementById('boxTransparencia').style.display = 'none'
    transparencia.style.background = '#fff'
    transparencia.style.color = '#000'
    statusTransparencia = true
  }
})

statusVisao = true
visao = document.getElementById('nossaVisao')
visao.addEventListener('click', function () {
  if (statusVisao === false) {
    document.getElementById('boxVisao').style.display = 'none'

    visao.style.background = '#fff'
    visao.style.color = '#000'
    statusVisao = true
  } else {
    document.getElementById('boxVisao').style.display = 'block'

    visao.style.background = '#015f9e'
    visao.style.color = '#fff'

    statusVisao = false
    // fechando outras boxes
    document.getElementById('boxMissao').style.display = 'none'
    missao.style.background = '#fff'
    missao.style.color = '#000'
    statusMissao = true
    document.getElementById('boxValores').style.display = 'none'
    valores.style.background = '#fff'
    valores.style.color = '#000'
    statusValores = true
    document.getElementById('boxTransparencia').style.display = 'none'
    transparencia.style.background = '#fff'
    transparencia.style.color = '#000'
    statusTransparencia = true
  }
})

statusValores = true
valores = document.getElementById('nossosValores')
valores.addEventListener('click', function () {
  if (statusValores === false) {
    document.getElementById('boxValores').style.display = 'none'

    valores.style.background = '#fff'
    valores.style.color = '#000'
    statusValores = true
  } else {
    document.getElementById('boxValores').style.display = 'block'

    valores.style.background = '#015f9e'
    valores.style.color = '#fff'

    statusValores = false
    // fechando outras boxes
    document.getElementById('boxMissao').style.display = 'none'
    missao.style.background = '#fff'
    missao.style.color = '#000'
    statusMissao = true
    document.getElementById('boxVisao').style.display = 'none'
    visao.style.background = '#fff'
    visao.style.color = '#000'
    statusVisao = true
    document.getElementById('boxTransparencia').style.display = 'none'
    transparencia.style.background = '#fff'
    transparencia.style.color = '#000'
    statusTransparencia = true
  }
})

statusTransparencia = true
transparencia = document.getElementById('transparencia')
transparencia.addEventListener('click', function () {
  if (statusTransparencia === false) {
    console.log('none')
    document.getElementById('boxTransparencia').style.display = 'none'

    transparencia.style.background = '#fff'
    transparencia.style.color = '#000'
    statusTransparencia = true
  } else {
    document.getElementById('boxTransparencia').style.display = 'block'
    console.log('aw')

    transparencia.style.background = '#015f9e'
    transparencia.style.color = '#fff'
    statusTransparencia = false

    // fechando outras boxes
    document.getElementById('boxMissao').style.display = 'none'
    missao.style.background = '#fff'
    missao.style.color = '#000'
    statusMissao = true
    document.getElementById('boxVisao').style.display = 'none'
    visao.style.background = '#fff'
    visao.style.color = '#000'
    statusVisao = true
    document.getElementById('boxValores').style.display = 'none'
    valores.style.background = '#fff'
    valores.style.color = '#000'
    statusValores = true
  }
})
