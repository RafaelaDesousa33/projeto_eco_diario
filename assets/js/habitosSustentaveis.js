// elementos DOM

const habitosPraticados__item = document.querySelectorAll('.habitosPraticados__item label input');
const salvarHabitos = document.getElementById('salvarHabitos');
const habitosPraticados_feedback = document.querySelector('.habitosPraticados-feedback p')



const registrarHabitos = (selecionados) => {

    if (selecionados.getAttribute('data-select')) {
        salvarHabitos.addEventListener('click', () => {

            habitosPraticados_feedback.textContent = 'Hábitos salvos!'

        })

    }

}

habitosPraticados__item.forEach((select) => {


    select.addEventListener('click', () => {
        habitosPraticados_feedback.textContent = ""


        select.setAttribute('data-select', 'checked')
        registrarHabitos(select)
    })

})

