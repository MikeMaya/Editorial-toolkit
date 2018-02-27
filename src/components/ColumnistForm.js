import React from 'react';

export default class ColumnistForm extends React.Component {
    constructor (props){
        super (props);
        this.state = {
            name: props.columnist? props.columnist.name : "",
            nick: props.columnist? props.columnist.nick : "",
            noColumns: props.columnist? props.columnist.noColumns.toString() : "0",
            amount: props.columnist? (props.columnist.amount / 100).toString() : "0.00",
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

    onNoColumnsChange = (e) => {
        const noColumns = e.target.value;
        if(noColumns.match(/^\d{1,}$/)){
            this.setState(() => ({noColumns}));
        }
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d{1,}$/)){
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
                noColumns: parseInt(this.state.noColumns, 10),
                amount: parseFloat(this.state.amount, 10) *100
            });
        }
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                { !!this.state.error && <p className="form__error"> {this.state.error}</p>}
                <input 
                    autoFocus
                    type="text"
                    placeholder="Nombre"
                    value={this.state.name}
                    onChange={this.onNameChange}
                />
                <input
                    type="text"
                    placeholder="Nick"
                    value={this.state.value}
                    onChange={this.onNickChange}
                />
                <input 
                    type="text"
                    placeholder="Numero de columnas"
                    value={this.state.value}
                    onChange={this.onNoColumnsChange}
                />
                <input
                    type="text"
                    placeholder="Pago acumulado"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <button>Salvar Cambios</button>
            </form>
        );
    }
}