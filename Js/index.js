const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

load()
button.addEventListener('click', add)
document.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-BR').slice(0, -5)
  const dayAuthentication = nlwSetup.dayExists(today)

  if (dayAuthentication) {
    alert('❌Data já registrada, volte amanhã')
    return
  }

  alert('✅Data registrada com sucesso, parabéns')
  nlwSetup.addDay(today)
}

function save() {
  console.log(nlwSetup.data)
  localStorage.setItem('NLWSetupExplorer@habits', JSON.stringify(nlwSetup.data))
}

function load() {
  const data = JSON.parse(localStorage.getItem('NLWSetupExplorer@habits')) || {}

  nlwSetup.setData(data)
  nlwSetup.load()
}
