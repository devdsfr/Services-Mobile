import React from 'react';

function getUser() {
  fetch(`/api/users`)
    .then((response) => response.json())
    .then(users => console.log(users));
}

export function PaginaInicial() {

  const click = () => {
    alert('clicou')
  }
  
  return (
    <div>
      Esta e minha pagina Pagina Inicial;
      <button type="button" onClick={click}>Clicar</button>
      {getUser()}
    </div>
  )
}

