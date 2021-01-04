import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withNamespaces } from 'react-i18next';

class SidebarContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.initMenu();
    }

    componentDidUpdate(prevProps) {
        if (this.props.type !== prevProps.type) {
            this.initMenu();
        }
    }

    initMenu() {
            new MetisMenu("#side-menu");

            var matchingMenuItem = null;
            var ul = document.getElementById("side-menu");
            var items = ul.getElementsByTagName("a");
            for (var i = 0; i < items.length; ++i) {
                if (this.props.location.pathname === items[i].pathname) {
                    matchingMenuItem = items[i];
                    break;
                }
            }
            if (matchingMenuItem) {
                this.activateParentDropdown(matchingMenuItem);
            }
    }

    activateParentDropdown = item => {
        item.classList.add("active");
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add("mm-active");
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");

                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add("mm-active"); // li
                    parent3.childNodes[0].classList.add("mm-active"); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add("mm-active");
                    }
                }
            }
            return false;
        }
        return false;
    };

    render() {
        return (
            <React.Fragment>
                 <div id="sidebar-menu">
                <ul className="metismenu list-unstyled" id="side-menu">
                    <li className="menu-title">{this.props.t('Menu') }</li>
                     <li>
                         <Link to="/dashboard" className="waves-effect">
                            <span>{this.props.t('Home') }</span>
                        </Link>
                              
                     </li>
                    
                    <li className="menu-title">{this.props.t('Delivery') }</li>
                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-file"></i>
                            <span>{this.props.t('Pedidos')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="pedidos-pendente">{this.props.t('Pedidos Pendentes')}</Link></li>
                            <li><Link to="pedidos-andamento">{this.props.t('Pedidos Andamento')}</Link></li>
                            <li><Link to="pedidos-entregues">{this.props.t('Pedidos Entregues')}</Link></li>
                        </ul>
                    </li>


                    <li className="menu-title">{this.props.t('Cadastros') }</li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-store"></i>
                            <span>{this.props.t('Ofertas') }</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="ofertas-insert">{this.props.t('Cadastrar Ofertas') }</Link></li>
                            <li><Link to="ofertas-list">{this.props.t('Ver Ofertas') }</Link></li>
                            
                        </ul>
                    </li>
                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-store"></i>
                            <span>{this.props.t('Promoções') }</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="promocoes-insert">{this.props.t('Cadastrar Promoções') }</Link></li>
                            <li><Link to="promocoes-list">{this.props.t('Ver Promoções') }</Link></li>
                            
                        </ul>
                    </li>
                                                     
                                       
                </ul>
            </div>
            </React.Fragment>
        );
    }
}

export default withRouter(withNamespaces()(SidebarContent));
