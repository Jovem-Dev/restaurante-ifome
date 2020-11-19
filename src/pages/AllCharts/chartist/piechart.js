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
    const responsePendentes = await api.get(`/api/pedidos/count/vendas/pendentes/grafico/${storageLogado}`)
    this.setState({ pedidosPendentes: responsePendentes.data })

    const responseAndamento = await api.get(`/api/pedidos/count/vendas/andamento/grafico/${storageLogado}`)
    this.setState({ pedidosAndamento: responseAndamento.data })

    const responseEntregues = await api.get(`/api/pedidos/count/vendas/entegues/grafico/${storageLogado}`)
    this.setState({ pedidosEntregues: responseEntregues.data })

  }

  render() {
    const { pedidosPendentes } = this.state;
    const { pedidosAndamento } = this.state;
    const { pedidosEntregues } = this.state;
    var pieChartData = {
      
      series: [`${pedidosPendentes.map(count => (count.NumeroDePedidosPendentes))}`, `${pedidosAndamento.map(count => (count.NumeroDePedidosAndamento))}`, `${pedidosEntregues.map(count => (count.NumeroDePedidosEntregues))}`],
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
