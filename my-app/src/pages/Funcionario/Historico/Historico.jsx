import NavbarFuncionario from '../../../components/Navbar/NavbarFuncionario'
import "./Historico.css"

export default function Historico() {
  return (
    <div>
      <NavbarFuncionario />
      <div className="container-Home">
      <div class="historico">
    <h2>Histórico de Horários</h2>

    <div class="filtros">
      <select id="mes">
        <option value="">Selecione o mês</option>
        <option value="1">Janeiro</option>
        <option value="2">Fevereiro</option>
        <option value="3">Março</option>
        <option value="4">Abril</option>
        <option value="5">Maio</option>
        <option value="6">Junho</option>
        <option value="7">Julho</option>
        <option value="8">Agosto</option>
        <option value="9">Setembro</option>
        <option value="10">Outubro</option>
        <option value="11">Novembro</option>
        <option value="12">Dezembro</option>
      </select>

      <select id="ano">
        <option value="">Selecione o ano</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
    </div>

    <table>
      <thead>
        <tr>
          <th>Dia</th>
          <th>Entrada</th>
          <th>Saída</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01/04/2025</td>
          <td>08:00</td>
          <td>17:00</td>
        </tr>
        <tr>
          <td>02/04/2025</td>
          <td>08:10</td>
          <td>17:05</td>
        </tr>
        <tr>
          <td>03/04/2025</td>
          <td>08:05</td>
          <td>17:02</td>
        </tr>
      </tbody>
    </table>
  </div>
      </div>
    </div>
  )
}
