import React from "react";
import { Redirect } from "react-router-dom";

// Pages Component
import Chat from "../pages/Chat/Chat";

// Pages Calendar
import Calendar from "../pages/Calendar/index";

// User profile
import UserProfile from "../pages/Authentication/UserProfile";

//Tasks
import TasksList from "../pages/ofertas/tasks-list";
import TasksKanban from "../pages/ofertas/tasks-kanban";


//Ofertas
import CadastrarOfertas from "../pages/ofertas/ofertas-insert";
import ListarOfertas from "../pages/ofertas/ofertas-list";
import OfertaDetalhe from "../pages/ofertas/oferta-detalhe";
//Promoções
import CadastrarPromocoes from "../pages/promocoes/promocoes-insert";
import ListarPromocoes from "../pages/promocoes/promocoes-list";
import PromocaoDetalhe from "../pages/promocoes/promocao-detalhe";
// Pedidos
import PedidosAndamento from "../pages/pedidos/pedidos-andamento";
import PedidosPendentes from "../pages/pedidos/pedidos-pendente";
import PedidosEntregues from "../pages/pedidos/pedidos-entregues";
import PedidosRelatorios from "../pages/pedidos/pedidos-relatorios";

// funcionamento
import Funcionamento from "../pages/funcionamento/funcionamento";


// relatorios 
import Relatorios from "../pages/financeiro/relatorios";

//Projects
import ProjectsGrid from "../pages/Projects/projects-grid";
import ProjectsList from "../pages/Projects/projects-list";
import ProjectsOverview from "../pages/Projects/projects-overview";
import ProjectsCreate from "../pages/Projects/projects-create";

//Ecommerce Pages
import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts";
import EcommerceProductDetail from "../pages/Ecommerce/EcommerceProductDetail";
import EcommerceOrders from "../pages/Ecommerce/EcommerceOrders";
import EcommerceCustomers from "../pages/Ecommerce/EcommerceCustomers";
import EcommerceCart from "../pages/Ecommerce/EcommerceCart";
import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout";
import EcommerceShops from "../pages/Ecommerce/EcommerceShops";
import EcommerceAddProduct from "../pages/Ecommerce/EcommerceAddProduct";

//Email
import EmailInbox from "../pages/Email/email-inbox";
import EmailRead from "../pages/Email/email-read";

//Invoices
import InvoicesList from "../pages/Invoices/invoices-list";
import InvoiceDetail from "../pages/Invoices/invoices-detail";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login";
import Register1 from "../pages/AuthenticationInner/Register";
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen";

// Dashboard
import Dashboard from "../pages/Dashboard/index";
import DashboardSaas from "../pages/Dashboard-saas/index";
import DashboardCrypto from "../pages/Dashboard-crypto/index";

//Crypto
import CryptoWallet from "../pages/Crypto/crypto-wallet";
import CryptoBuySell from "../pages/Crypto/crypto-buy-sell";
import CryptoExchange from "../pages/Crypto/crypto-exchange";
import CryptoLending from "../pages/Crypto/crypto-lending";
import CryptoOrders from "../pages/Crypto/crypto-orders";
import CryptoKYCApplication from "../pages/Crypto/crypto-kyc-application";
import CryptoIcoLanding from "../pages/Crypto/CryptoIcoLanding/index";

// Charts
import ChartApex from "../pages/Charts/Apexcharts";
import ChartistChart from "../pages/Charts/ChartistChart";
import ChartjsChart from "../pages/Charts/ChartjsChart";
import EChart from "../pages/Charts/EChart";
import SparklineChart from "../pages/Charts/SparklineChart";
import ToastUIChart from "../pages/Charts/ToastUIChart";
import ChartsKnob from "../pages/Charts/charts-knob";

// Maps
import MapsGoogle from "../pages/Maps/MapsGoogle";
import MapsVector from "../pages/Maps/MapsVector";
import MapsLeaflet from "../pages/Maps/MapsLeaflet";

//Icons
import IconBoxicons from "../pages/Icons/IconBoxicons";
import IconDripicons from "../pages/Icons/IconDripicons";
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign";
import IconFontawesome from "../pages/Icons/IconFontawesome";

//Tables
import BasicTables from "../pages/Tables/BasicTables";
import DatatableTables from "../pages/Tables/DatatableTables";
import ResponsiveTables from "../pages/Tables/ResponsiveTables";
import EditableTables from "../pages/Tables/EditableTables";

// Forms
import FormElements from "../pages/Forms/FormElements";
import FormAdvanced from "../pages/Forms/FormAdvanced";
import FormEditors from "../pages/Forms/FormEditors";
import FormValidations from "../pages/Forms/FormValidations";
import FormMask from "../pages/Forms/FormMask";
import FormRepeater from "../pages/Forms/FormRepeater";
import FormUpload from "../pages/Forms/FormUpload";
import FormWizard from "../pages/Forms/FormWizard";
import FormXeditable from "../pages/Forms/FormXeditable";

//Ui
import UiAlert from "../pages/Ui/UiAlert";
import UiButtons from "../pages/Ui/UiButtons";
import UiCards from "../pages/Ui/UiCards";
import UiCarousel from "../pages/Ui/UiCarousel";
import UiColors from "../pages/Ui/UiColors";
import UiDropdown from "../pages/Ui/UiDropdown";
import UiGeneral from "../pages/Ui/UiGeneral";
import UiGrid from "../pages/Ui/UiGrid";
import UiImages from "../pages/Ui/UiImages";
import UiLightbox from "../pages/Ui/UiLightbox";
import UiModal from "../pages/Ui/UiModal";
import UiProgressbar from "../pages/Ui/UiProgressbar";
import UiSweetAlert from "../pages/Ui/UiSweetAlert";
import UiTabsAccordions from "../pages/Ui/UiTabsAccordions";
import UiTypography from "../pages/Ui/UiTypography";
import UiVideo from "../pages/Ui/UiVideo";
import UiSessionTimeout from "../pages/Ui/UiSessionTimeout";
import UiRating from "../pages/Ui/UiRating";
import UiRangeSlider from "../pages/Ui/UiRangeSlider";
import UiNotifications from "../pages/Ui/ui-notifications";
import UiImageCropper from "../pages/Ui/ui-image-cropper";

//Pages
import PagesStarter from "../pages/Utility/pages-starter";
import PagesMaintenance from "../pages/Utility/pages-maintenance";
import PagesComingsoon from "../pages/Utility/pages-comingsoon";
import PagesTimeline from "../pages/Utility/pages-timeline";
import PagesFaqs from "../pages/Utility/pages-faqs";
import PagesPricing from "../pages/Utility/pages-pricing";
import Pages404 from "../pages/Utility/pages-404";
import Pages500 from "../pages/Utility/pages-500";

//Contacts
import ContactsGrid from "../pages/Contacts/contacts-grid";
import ContactsList from "../pages/Contacts/contacts-list";
import ContactsProfile from "../pages/Contacts/contacts-profile";
//context
import { LoginContext } from '../context/loginContext';
import App from "../App";

// filhos que recebem os valores do contexto

let authProtectedRoutes;

if(localStorage.getItem('usuarioLogado') == "" || localStorage.getItem('usuarioLogado') == null){
            console.log('redirect')
            
            authProtectedRoutes = [
            // this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/login" /> }
];
            
        }else{
           console.log('logado')
        

authProtectedRoutes = [
	
	{ path: "/dashboard", component: Dashboard },
	{ path: "/dashboard-saas", component: DashboardSaas },
	{ path: "/dashboard-crypto", component: DashboardCrypto },

	//profile
	{ path: "/profile", component: UserProfile },


	//Email
	{ path: "/email-inbox", component: EmailInbox },
	{ path: "/email-read", component: EmailRead },

	//Invoices
	{ path: "/invoices-list", component: InvoicesList },
	{ path: "/invoices-detail", component: InvoiceDetail },

	// Tasks
	{ path: "/tasks-list", component: TasksList },
	{ path: "/tasks-kanban", component: TasksKanban },

	// ofertas
	{ path: "/ofertas-insert", component: CadastrarOfertas },
	{ path: "/ofertas-list", component: ListarOfertas },
	{ path: "/oferta-detalhe", component: OfertaDetalhe },
	// promocoes
	{ path: "/promocoes-insert", component: CadastrarPromocoes },
	{ path: "/promocoes-list", component: ListarPromocoes },
	{ path: "/promocao-detalhe", component: PromocaoDetalhe },

	// pedidos 
	{ path: "/pedidos-andamento", component: PedidosAndamento },
	{ path: "/pedidos-entregues", component: PedidosEntregues },
	{ path: "/pedidos-pendente", component: PedidosPendentes },
	{ path: "/pedidos-relatorios", component: PedidosRelatorios },
	{ path: "/funcionamento", component: Funcionamento },

	//relatorios
	{ path: "/relatorios", component: Relatorios },

	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/login" /> }
];

}


const publicRoutes = [

	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/forgot-password", component: ForgetPwd },
	{ path: "/register", component: Register },
	{ path: "/app", component: App },

	{ path: "/pages-maintenance", component: PagesMaintenance },
	{ path: "/pages-comingsoon", component: PagesComingsoon },
	{ path: "/pages-404", component: Pages404 },
	{ path: "/pages-500", component: Pages500 },
	{ path: "/crypto-ico-landing", component: CryptoIcoLanding },

	// Authentication Inner
	{ path: "/pages-login", component: Login1 },
	{ path: "/pages-register", component: Register1 },
	{ path: "/pages-forgot-pwd", component: ForgetPwd1 },
	{ path: "/auth-lock-screen", component: LockScreen },


];

export { authProtectedRoutes, publicRoutes };
