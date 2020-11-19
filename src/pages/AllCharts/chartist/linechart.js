import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import api from "../../../services/api";


var storageLogado = localStorage.getItem('usuarioLogado')

class linechart extends Component {
  state = {
    vendasMes1: [],
    vendasMes2: [],
    vendasMes3: [],
    vendasMes4: [],
    vendasMes5: [],
    vendasMes6: [],
    vendasMes7: [],
    vendasMes8: [],
    vendasMes9: [],
    vendasMes10: [],
    vendasMes11: [],
    vendasMes12: [],
  
  }
  async componentDidMount() {
    const responseMes1 = await api.get(`/api/get/mesAmes1/${storageLogado}`)
    this.setState({ vendasMes1: responseMes1.data })
    const responseMes2 = await api.get(`/api/get/mesAmes2/${storageLogado}`)
    this.setState({ vendasMes2: responseMes2.data })
    const responseMes3 = await api.get(`/api/get/mesAmes3/${storageLogado}`)
    this.setState({ vendasMes3: responseMes3.data })
    const responseMes4 = await api.get(`/api/get/mesAmes4/${storageLogado}`)
    this.setState({ vendasMes4: responseMes4.data })
    const responseMes5 = await api.get(`/api/get/mesAmes5/${storageLogado}`)
    this.setState({ vendasMes5: responseMes5.data })
    const responseMes6 = await api.get(`/api/get/mesAmes6/${storageLogado}`)
    this.setState({ vendasMes6: responseMes6.data })
    const responseMes7 = await api.get(`/api/get/mesAmes7/${storageLogado}`)
    this.setState({ vendasMes7: responseMes7.data })
    const responseMes8 = await api.get(`/api/get/mesAmes8/${storageLogado}`)
    this.setState({ vendasMes8: responseMes8.data })
    const responseMes9 = await api.get(`/api/get/mesAmes9/${storageLogado}`)
    this.setState({ vendasMes9: responseMes9.data })
    const responseMes10 = await api.get(`/api/get/mesAmes10/${storageLogado}`)
    this.setState({ vendasMes10: responseMes10.data })
    const responseMes11 = await api.get(`/api/get/mesAmes11/${storageLogado}`)
    this.setState({ vendasMes11: responseMes11.data })
    const responseMes12 = await api.get(`/api/get/mesAmes12/${storageLogado}`)
    this.setState({ vendasMes12: responseMes12.data })
  }
  render() {
    const { vendasMes1 } = this.state;
    const valorPedidosMes1 = vendasMes1.map(count => (count.valor))

    const totalMes1 = valorPedidosMes1.reduce(function (total, numero) {
        return total + numero;
    }, 0);

    const faturamentoMes1 = totalMes1

    const { vendasMes2 } = this.state;
    const valorPedidosMes2 = vendasMes2.map(count => (count.valor))

    const totalMes2 = valorPedidosMes2.reduce(function (total, numero) {
        return total + numero;
    }, 0);

    const faturamentoMes2 = totalMes2
    const { vendasMes3 } = this.state;
    const valorPedidosMes3 = vendasMes3.map(count => (count.valor))

    const totalMes3 = valorPedidosMes3.reduce(function (total, numero) {
        return total + numero;
    }, 0);

    const faturamentoMes3 = totalMes3
    const { vendasMes4 } = this.state;
    const valorPedidosMes4 = vendasMes4.map(count => (count.valor))

    const totalMes4 = valorPedidosMes4.reduce(function (total, numero) {
        return total + numero;
    }, 0);

    const faturamentoMes4 = totalMes4
    const { vendasMes5 } = this.state;
    const valorPedidosMes5 = vendasMes5.map(count => (count.valor))

    const totalMes5 = valorPedidosMes5.reduce(function (total, numero) {
        return total + numero;
    }, 0);

    const faturamentoMes5 = totalMes5
    const { vendasMes6 } = this.state;
    const valorPedidosMes6 = vendasMes6.map(count => (count.valor))

    const totalMes6 = valorPedidosMes6.reduce(function (total, numero) {
        return total + numero;
    }, 0);

    const faturamentoMes6 = totalMes6
    const { vendasMes7 } = this.state;
    const valorPedidosMes7 = vendasMes7.map(count => (count.valor))

    const totalMes7 = valorPedidosMes7.reduce(function (total, numero) {
        return total + numero;
    }, 0);

    const faturamentoMes7 = totalMes7
    const { vendasMes8 } = this.state;
    const valorPedidosMes8 = vendasMes8.map(count => (count.valor))

    const totalMes8 = valorPedidosMes8.reduce(function (total, numero) {
        return total + numero;
    }, 0);

    const faturamentoMes8 = totalMes8
    const { vendasMes9 } = this.state;
    const valorPedidosMes9 = vendasMes9.map(count => (count.valor))

    const totalMes9 = valorPedidosMes9.reduce(function (total, numero) {
        return total + numero;
    }, 0);

    const faturamentoMes9 = totalMes9
    const { vendasMes10 } = this.state;
    const valorPedidosMes10 = vendasMes10.map(count => (count.valor))

    const totalMes10 = valorPedidosMes10.reduce(function (total, numero) {
        return total + numero;
    }, 0);

    const faturamentoMes10 = totalMes10
    const { vendasMes11 } = this.state;
    const valorPedidosMes11 = vendasMes11.map(count => (count.valor))

    const totalMes11 = valorPedidosMes11.reduce(function (total, numero) {
        return total + numero;
    }, 0);

    const faturamentoMes11 = totalMes11
    const { vendasMes12 } = this.state;
    const valorPedidosMes12 = vendasMes12.map(count => (count.valor))

    const totalMes12 = valorPedidosMes12.reduce(function (total, numero) {
        return total + numero;
    }, 0);

    const faturamentoMes12 = totalMes12
    var lineChartData = {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      series: [
        [faturamentoMes1, faturamentoMes2, faturamentoMes3, faturamentoMes4, faturamentoMes5,faturamentoMes6,faturamentoMes7, faturamentoMes8, faturamentoMes9, faturamentoMes10,faturamentoMes11,faturamentoMes12]
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
