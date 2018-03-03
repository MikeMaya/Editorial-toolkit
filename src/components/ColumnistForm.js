import React from 'react';

export default class ColumnistForm extends React.Component {
    constructor (props){
        super (props);
        this.state = {
            name: props.columnist? props.columnist.name : "",
            nick: props.columnist? props.columnist.nick : "",
            email: props.columnist? props.columnist.email : "",
            telephone: props.columnist? props.columnist.telephone : "",
            noColumns: props.columnist? props.columnist.noColumns.toString() : "",
            amount: props.columnist? (props.columnist.amount / 100).toString() : "",
            error: ""
        };
    };

    onNameChange= (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onNickChange = (e) => {
        const nick = e.target.value;
        this.setState(() => ({ nick }));
    };

    onEmailChange = (e)  => {
        const email = e.target.value;
        this.setState(()=> ({email}));
    }
    onTelephoneChange = (e) => {
        const telephone = e.target.value;
        this.setState(() => ({telephone}));
    }
    onNoColumnsChange = (e) => {
        const noColumns = e.target.value;
        if(noColumns.match(/^\d{1,}$/)){
            this.setState(() => ({noColumns}));
        }
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}));
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.name || !this.state.nick){
            this.setState(() => ({error: "Ingresa un Nombre y Nick"}));      
        }else {
            this.setState(() => ({error: ""}));
            this.props.onSubmit({
                name: this.state.name,
                nick: this.state.nick,
                email: !this.state.email? "":this.state.email,
                telephone: !this.state.telephone? "": this.state.telephone, 
                noColumns: !this.state.noColumns? 0:parseInt(this.state.noColumns, 10),
                amount: !this.state.amount? 0:parseFloat(this.state.amount, 10) *100
            });
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                { !!this.state.error && <p className="form__error"> {this.state.error}</p>}
                <input 
                    className="text-input"
                    autoFocus
                    type="text"
                    placeholder="Nombre"
                    value={this.state.name}
                    onChange={this.onNameChange}
                />
                <input
                    className="text-input"
                    type="text"
                    placeholder="Nick"
                    disabled={!!this.props.columnist}
                    value={this.state.nick}
                    onChange={this.onNickChange}
                />
                <input 
                    className="text-input"
                    type="email"
                    placeholder="email@example.com"
                    value={this.state.email}
                    onChange={this.onEmailChange}
                />
                <input 
                    className="text-input"
                    type="text"
                    placeholder="Telefono"
                    value={this.state.telephone}
                    onChange={this.onTelephoneChange}
                />
                <input 
                    className="text-input"
                    type="text"
                    placeholder="Numero de columnas"
                    value={this.state.noColumns}
                    onChange={this.onNoColumnsChange}
                />
                <input
                    className="text-input"
                    type="text"
                    placeholder="Pago acumulado"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <div>
                    <button className="button">Salvar Cambios</button>
                </div>
            </form>
        );
    }
}