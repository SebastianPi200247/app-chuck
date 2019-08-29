
import React from 'react';
import foto from './seba.png';
import foto1 from './nadia.png';
import foto2 from './nadia.png';

import './App.css';

import Card from './components/Card'

let estudiantes=[

  { Nombre:'Sebastian',
    Curso:'Estudiante',
    Img:'https://i.imgur.com/CR7Jgld.png'
  }
  
 {Nombre:'Pablo',
  img:'https://i.imgur.com/RvaCpIb.png'
 }
]


function App() {
  return (
    <div className="app">
      <div className='container'>
        <div className='row'>
          <Card nombre = 'Sebastian Pi'
                curso='Estudiante'
                
          
           
          >
            
          </Card>
          <Card nombre ='Nadia Iraola'
                curso='Estudiante'
              
              
           ></Card>
          <Card nombre = 'Pablo Villanueva'
                curso='Estudiante'
                
                 
                >
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
