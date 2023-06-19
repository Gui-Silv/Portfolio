document.addEventListener("DOMContentLoaded", function() {
const sectionHome = document.getElementById('sectionHome')
const sectionSobremim = document.getElementById('sectionSobremim')
const sectionSkills = document.getElementById('sectionSkills')
const sectionProject = document.getElementById('sectionProject')
const sectionContato = document.getElementById('sectionContato')
hideOrShowElement('home')
function hideElement() {
    sectionHome.style.display = 'none'
    sectionSobremim.style.display = 'none'
    sectionSkills.style.display = 'none'
    sectionProject.style.display = 'none'
    sectionContato.style.display = 'none'
}

const items = Array.from(document.getElementsByClassName('item'))
console.log(items)

items.forEach((item) => {
    item.addEventListener('click', linkItem)
})



function linkItem(event) {
    const item = event.target.closest('.item');
    if (item) {
        const attributteSelected = item.getAttribute('data');
        if (attributteSelected) {
            console.log(attributteSelected);
            linkItemActive(attributteSelected);
            hideOrShowElement(attributteSelected);
        } else {
            console.error("Attribute 'data' not found on closest '.item' element");
        }
    } else {
        console.error("Closest '.item' element not found");
    }
}


function linkItemActive(attributteSelected) {
    items.forEach((item) => {
        const attributeItem = item.getAttribute('data')
        if(attributeItem === attributteSelected) {
            item.classList.add('active')
            return
        }

        item.classList.remove('active')
    })
}

function removeActiveClass() {
  menuItems.forEach(item => {
    item.classList.remove('active');
  });
}

function hideOrShowElement(attributteSelected) {
  hideElement();
  if (attributteSelected === 'home') {
    sectionHome.classList.add('fade-in');
    sectionHome.style.display = 'block';
    setTimeout(() => {
      sectionHome.addEventListener('animationend', () => {
        sectionHome.classList.remove('fade-out');
      }, { once: true });
    }, 500);
  }
  if (attributteSelected === 'sobremim') {
    sectionSobremim.classList.add('fade-in');
    sectionSobremim.style.display = 'block';
    setTimeout(() => {
      sectionSobremim.addEventListener('animationend', () => {
        sectionSobremim.classList.remove('fade-out');
      }, { once: true });
    }, 500);

    const sobremimItem = document.querySelector('[data="sobremim"]');
      sobremimItem.classList.add('active');
  }
  if (attributteSelected === 'skills') {
    sectionSkills.classList.add('fade-in');
    sectionSkills.style.display = 'block';
    setTimeout(() => {
      sectionSkills.addEventListener('animationend', () => {
        sectionSkills.classList.remove('fade-out');
      }, { once: true });
    }, 500);
  }
  if (attributteSelected === 'projetos') {
    sectionProject.classList.add('fade-in');
    sectionProject.style.display = 'block';
    setTimeout(() => {
      sectionProject.addEventListener('animationend', () => {
        sectionProject.classList.remove('fade-out');
      }, { once: true });
    }, 500);
  }
  if (attributteSelected === 'contatos') {
    sectionContato.classList.add('fade-in');
    sectionContato.style.display = 'block';
    setTimeout(() => {
      sectionContato.addEventListener('animationend', () => {
        sectionContato.classList.remove('fade-out');
      }, { once: true });
    }, 500);
  }
}
});
