import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import api from "../../../services/api";

var storageLogado = localStorage.getItem('usuarioLogado')
class piechart extends Component {
  state = {
    pedidosPendentes: [],
    pedidosAndamento: [],
    pedidosEntregues: []
  }
  async componentDidMount() {
    const responsePen = await api.get(`/pedidos/countPendentes/${storageLogado}`)
    this.setState({ pedidosPendentes: responsePen.data })

    const responseAnd = await api.get(`/pedidos/countAndamento/${storageLogado}`)
    this.setState({ pedidosAndamento: responseAnd.data })
    
    const responseEnt = await api.get(`/pedidos/countEntregues/${storageLogado}`)
    this.setState({ pedidosEntregues: responseEnt.data })

  }

  render() {
    const { pedidosPendentes } = this.state;
    const { pedidosAndamento } = this.state;
    const { pedidosEntregues } = this.state;
    var pieChartData = {
      
      series: [`${pedidosPendentes}`, `${pedidosAndamento}`, `${pedidosEntregues}`],
      labels: ["Pen", "And", 'Ent']
    };
    var pieChartOptions = {
      showLabel: true,
      
    };
    return (
      <React.Fragment>
        <ChartistGraph
          data={pieChartData}
          options={pieChartOptions}
          style={{ height: "300px" }}
          type={"Pie"}
        />
      </React.Fragment>
    );
  }
}

export default piechart;
