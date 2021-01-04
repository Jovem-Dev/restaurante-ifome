import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import api from "../../../services/api";


var storageLogado = localStorage.getItem('usuarioLogado')

class linechart extends Component {
  state = {
    pedidosEntregues: [],
    count: []
  }
  async componentDidMount() {
    const response = await api.get(`/pedidos/entregueRestaurante/${storageLogado}`)
    this.setState({ pedidosEntregues: response.data })

    const responseCount = await api.get(`/pedidos/countEntregues/${storageLogado}`)
    this.setState({ count: responseCount.data })
  }
  render() {

    const { pedidosEntregues } = this.state;
    const { count } = this.state;
    
    var pedidosValor = pedidosEntregues.map(count => (count.valor))
    var total = 0;
    for ( var i = 0; i < pedidosValor.length; i++ ){
       total += pedidosValor[i];
    }
    const faturamento = total
    const mediaMensal = faturamento / 12; 

    var lineChartData = {
      labels: ["Total de Vendas", "Média Mensal", "Ao Todo", ],
      series: [
        [count, mediaMensal, faturamento ]
      ]
    };
    var lineChartOptions = {
      fullWidth: true,
      chartPadding: {
        right: 40
      }
    };
    return (
      <React.Fragment>
        <ChartistGraph
          data={lineChartData}
          options={lineChartOptions}
          type={"Line"}
          style={{ height: "300px" }}
        />
      </React.Fragment>
    );
  }
}

export default linechart;
