
import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';

//i18n
import { withNamespaces } from 'react-i18next';

// users
import user1 from '../../../assets/images/users/avatar-1.jpg';
import api from '../../../services/api';

var storageLogado = localStorage.getItem('usuarioLogado')
class ProfileMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        };
        this.toggle = this.toggle.bind(this);
    }
    state = {
        usuarioLogado: []
    }


    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }

    componentDidMount(){
        const response = api.get(`/api/restaurante/logado/${storageLogado}`)
        this.setState({usuarioLogado: response.data })
    
    }
    
    
    
    render() {
        const {usuarioLogado} = this.state;
        console.log(usuarioLogado)
        return (

            <React.Fragment>
                <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="d-inline-block" >
                    <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
                        <img className="rounded-circle header-profile-user" src={user1} alt="Header Avatar" />
                        <span className="d-none d-xl-inline-block ml-2 mr-1"></span>
                        <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem tag="a" href="/profile">
                            <i className="bx bx-user font-size-16 align-middle mr-1"></i>
                            {this.props.t('Meu Perfil')}
                        </DropdownItem>
                                          
                        <div className="dropdown-divider"></div>
                        <Link to="/logout" className="dropdown-item">
                            <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>
                            <span>{this.props.t('Sair')}</span>
                        </Link>
                    </DropdownMenu>
                </Dropdown>
            </React.Fragment>
        );
    }
}

export default withRouter(withNamespaces()(ProfileMenu));
