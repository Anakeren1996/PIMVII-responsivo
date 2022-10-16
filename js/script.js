// COMEÇA MENU
function menuToggle() {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}
// TERMINA MENU

let nIsPressed = false;
let espIsPressed = false;

function pesquisarNome() {
  let pesq = String(document.querySelector("#nomeMed").value);
  let resultado = document.querySelector("#pesquisa2");

  resultado.innerHTML = `<h2>Resultados para "${pesq}" </h2>
                            <hr>
                            <br>
                            <div class="medIdWrapper" >
                                <div class="medId">
                                    <img src="/img/med-id.png" alt="foto-medico">
                                    <div class="med-info" >
                                    <p>Nome: </p><p>CRM: -</p><p>Consultório: -</p><p>Convênios: -</p>
                                    </div>
                                    <button onclick="agendar()">Selecionar</button>
                                </div>
                            </div>
                            <div class="medIdWrapper" >
                                <div class="medId">
                                    <img src="/img/med-id.png" alt="foto-medico">
                                    <div class="med-info" >
                                    <p>Nome: </p><p>CRM: -</p><p>Consultório: -</p><p>Convênios: -</p>
                                    </div>
                                    <button onclick="agendar()">Selecionar</button>
                                </div>
                            </div>
                            <div class="medIdWrapper" >
                                <div class="medId">
                                    <img src="/img/med-id.png" alt="foto-medico">
                                    <div class="med-info" >
                                    <p>Nome: </p><p>CRM: -</p><p>Consultório: -</p><p>Convênios: -</p>
                                    </div>
                                    <button onclick="agendar()">Selecionar</button>
                                </div>
                            </div> <div class="medIdWrapper" >
                                <div class="medId">
                                    <img src="/img/med-id.png" alt="foto-medico">
                                    <div class="med-info" >
                                    <p>Nome: </p><p>CRM: -</p><p>Consultório: -</p><p>Convênios: -</p>
                                    </div>
                                    <button onclick="agendar()">Selecionar</button>
                                </div>
                            </div>`;
}

function agendar() {
  let nLay = document.querySelector(".agendamento");
  nLay.innerHTML = "";
  nLay.innerHTML =
    '<h3 id="subTitl">Fazer Agendamento</h3><div class="wrapper"><p>Selecione o dia e o horário: </p><div id="dia-hora"><div id="data"><input type="date" id="calendario"></div><div id="hora"><input type="time" id="horario"></div><div id="agendado"></div><button onclick="agendado()">Selecionar</button><div id="campo-retorno"></div></div></div>';
}

function agendado() {
  let timeElapsed = Date.now();
  let dateTime = new Date(timeElapsed);
  let today = dateTime.toLocaleDateString();

  let dataNum = document.querySelector("#calendario");

  let data = String(document.querySelector("#calendario").value);
  let hora = document.querySelector("#horario").value;
  let campo = document.querySelector("#campo-retorno");

  if (data != "" && hora != "") {
    campo.innerHTML = `<h2> Consulta marcada para:</h2><p>Data: ${data.slice(
      8,
      10
    )}/${data.slice(5, 7)}/${data.slice(
      0,
      4
    )}</p><p>Horário: ${hora}</p><hr><br><h4>O link para sua consulta é:</h4><br><p>https://meet.google.com/shx-ausd-jgc</p>
        <a href="/index.html">Voltar à tela principal</a>`;
  } else {
    campo.innerHTML =
      '<p> Insira os valores de data e hora </p><a href="/index.html">Voltar à tela principal</a>';
  }
}

function pesquisaNome() {
  nIsPressed = true;
  espIsPressed = false;

  let n = document.querySelector("#nomeBtn");
  let nome = String(n.value);

  let pesquisa = document.querySelector("#pesquisa");

  pesquisa.innerHTML =
    '<p>Nome: <input type="text" name="nomeMed" id="nomeMed"></p><button id="searchBtn" type="submit" onclick="pesquisarNome()" >Pesquisar</button>';
}

function pesquisarEsp() {
  let e = document.querySelector("select#espMed");
  let esp = Number(e.value);

  let pesq = document.querySelector("select").children[esp].innerText;

  let resultado = document.querySelector("#pesquisa2");

  resultado.innerHTML = `<h2> ${pesq} </h2>
                            <hr>
                            <br>
                            <h4>Médicos disponíveis:</h3>
                            <div class="medIdWrapper" >
                                <div class="medId">
                                    <img src="/img/med-id.png" alt="foto-medico">
                                    <div class="med-info" >
                                    <p>Nome: </p><p>CRM: -</p><p>Consultório: -</p><p>Convênios: -</p>
                                    </div>
                                    <button onclick="agendar()">Selecionar</button>
                                </div>
                            </div>
                            <div class="medIdWrapper" >
                                <div class="medId">
                                    <img src="/img/med-id.png" alt="foto-medico">
                                    <div class="med-info" >
                                    <p>Nome: </p><p>CRM: -</p><p>Consultório: -</p><p>Convênios: -</p>
                                    </div>
                                    <button onclick="agendar()">Selecionar</button>
                                </div>
                            </div>
                            <div class="medIdWrapper" >
                                <div class="medId">
                                    <img src="/img/med-id.png" alt="foto-medico">
                                    <div class="med-info" >
                                    <p>Nome: </p><p>CRM: -</p><p>Consultório: -</p><p>Convênios: -</p>
                                    </div>
                                    <button onclick="agendar()">Selecionar</button>
                                </div>
                            </div> <div class="medIdWrapper" >
                                <div class="medId">
                                    <img src="/img/med-id.png" alt="foto-medico">
                                    <div class="med-info" >
                                    <p>Nome: </p><p>CRM: -</p><p>Consultório: -</p><p>Convênios: -</p>
                                    </div>
                                    <button onclick="agendar()">Selecionar</button>
                                </div>
                            </div>`;
}

function pesquisaEsp() {
  let nIsPressed = false;
  let espIsPressed = true;

  let e = document.querySelector("#espBtn");
  let esp = String(e.value);

  let pesquisa = document.querySelector("#pesquisa");

  pesquisa.innerHTML =
    '<p>Especialidade: <select type="text" name="espMed" id="espMed"><option value="0" selected>Selecionar</option><option value="1" >Anestesiologia</option><option value="2" >Oncologia</option><option value="3" >Cardiologia</option><option value="4" >Cirurgia geral</option><option value="5" >Clínica médica (medicina interna)</option><option value="6" >Cirurgia Plástica</option><option value="7" >Coloproctologia</option><option value="8" >Dermatologia</option><option value="9">Endocrinologia</option><option value="10">Gastroenterologia</option><option value="11" >Genética médica</option><option value="12">Geriatria</option><option value="13">Ginecologia e obstetrícia</option><option value="14">Hematologia</option><option value="15">Neurologia</option><option value="16" >Oftalmologia</option><option value="17">Ortopedia</option><option value="18">Pediatria</option><option value="19">Psiquiatria</option><option value="20">Urologia</option></select></p><button id="searchBtn" type="submit" onclick="pesquisarEsp()">Pesquisar</button>';
}
