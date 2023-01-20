const form = document.querySelector('form')

const nlwSetup = new NLWSetup(form)

const data = {
  run: ['01-01', '01-03'],
  water: [
    '01-01',
    '01-02',
    '01-03',
    '01-04',
    '01-05',
    '01-06',
    '01-07',
    '01-08',
    '01-09',
    '01-10',
    '01-11',
    '01-12',
    '01-13',
    '01-14',
    '01-15',
    '01-16'
  ],
  food: ['01-01', '01-02', '01-03', '01-04', '01-05'],
  workout: ['01-01'],
  sleep: ['01-01', '01-02', '01-03', '01-04', '01-05'],
  sigma: ['01-10']
}

nlwSetup.setData(data)
nlwSetup.load()
