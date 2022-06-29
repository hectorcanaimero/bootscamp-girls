console.log('Criaturita de Dios...');

let arrList = [
  { name: 'Parar la Alarma', status: false },
  { name: 'Pensar 5 minutos mas...', status: false },
  { name: 'Pasado los 15 minutos, levantar', status: false },
];

let statusAba = true;
let status = false;

let ul = document.getElementsByTagName('ul')[0];
//TODO: Ejecutamos la Funcion que trae nuestra data inicial
getData();

// TODO: Funcion para listar nuestras tareas
function getData() {
  for(let i = 0; i < arrList.length; i++) {
    const addElement = document.createElement('li');
    addElement.innerHTML = `
      <div id="list_${i}" onclick="check(${i})">
        <p>${ arrList[i]?.name }</p>
        <span></span>
      </div>
    `;
    ul.appendChild(addElement);
  }
}

// TODO: Funcion para agregar una nueva tarea
function addTarea(ev) {
  if(ev.keyCode === 13) {
    const input = document.getElementById('input-text');
    const value = input.value;
    const addElement = document.createElement('li');
    const count = arrList.length - 1;
    arrList.push({ name: value, status: false });
    addElement.innerHTML = `
      <div id="list_${count}" click="check(${count})">
        <p>${ value }</p>
        <span></span>
      </div>
    `;
    ul.appendChild(addElement);
    input.value = '';
  }
}

// TODO: Funcion para cambiar el estatus de nuestra tarea
function check(id) {
  status = !status;
  arrList[id].status = status;
  const div = document.getElementById(`list_${id}`);
  if (status)  div.classList.add('checked');
  else div.classList.remove('checked');
}

// TODO: Funcion que Abre y cierra pestaña
function opened () {
  statusAba = !statusAba;
  const sidebar = document.getElementById('sidebar');
  const custom = document.getElementsByClassName('custom')[0];
  sidebar.style.width = statusAba ? '' : '0px';
  custom.style.display = statusAba ? '' : 'none';
  sidebar.classList.add('click');
}

function changeBackground() {
  const back = document.getElementById('back').value;
  console.log(back);
  document.body.style.backgroundColor = back;
}

function changeColorFont() {
  const text = document.getElementById('font').value;
  document.getElementsByTagName('h1')[0].style.color = text;
  document.getElementsByTagName('h2')[0].style.color = text;
  document.querySelectorAll('p').forEach(e => e.style.color = text);
}