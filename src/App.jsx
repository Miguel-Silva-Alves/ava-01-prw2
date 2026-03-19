import { useState } from 'react'
import './App.css'
import Area from './components/area/area'
import Banner from './components/banner/banner'
import Forms from './components/forms/forms'
import HorizontalSections from './components/section/horizontalSections'


function App() {

  const [professors, setProfessors] = useState([])

  const areas = [
    {
      name : 'Progr. Básica',
      corPrimaria : '#57c278',
      corSecundaria : '#d9f7e9'
    },
    {
      name : 'Progr. Web',
      corPrimaria : '#82cffa',
      corSecundaria : '#e8f8ff'
    },
    {
      name : 'Banco de Dados',
      corPrimaria : '#a6d157',
      corSecundaria : '#f0f8e2'
    },
    {
      name : 'Diversos',
      corPrimaria : '#e06b69',
      corSecundaria : '#fde7e8'
    }
  ];

  const listaAreas = areas.map( area => area.name );

  const addProf = (prof) => {
    console.log('Novo professor => ', prof)
    setProfessors([...professors, prof])
  }

  const sections = [
    { name: 'Computadores', image: 'https://i.pravatar.cc/100?img=1' },
    { name: 'Acessórios', image: 'https://i.pravatar.cc/100?img=2' },
    { name: 'Impressoras', image: 'https://i.pravatar.cc/100?img=3' },
    { name: 'Games', image: 'https://i.pravatar.cc/100?img=4' },
    { name: 'Gadgets', image: 'https://i.pravatar.cc/100?img=5' },
  ]
  return (
    <>
      <div className="container">
        <Banner />
        <HorizontalSections 
          sections={sections}
          onAdd={() => console.log('Adicionar clicado')}
        />
        <Forms onAddProf={addProf} itens = {listaAreas} />
        {
          areas.map((area) => (
            <Area
              key={area.name}
              name={area.name}
              corPrimaria={area.corPrimaria}
              corSecundaria={area.corSecundaria}
              professores={professors.filter(prof => prof.area === area.name)}
            />))
        }
      </div>
    </>
  )
}

export default App
