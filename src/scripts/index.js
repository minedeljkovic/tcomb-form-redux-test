// polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

// normalize.css
require('normalize.css');
import "./../styles/bootstrap.css";

// require your app here
require('debug-dude')('service').warn('require your app entry point plz');

import React from "react";
import ReactDOM from "react-dom";
import t from "tcomb-form";
var Form = t.form.Form;

var Address = t.struct({
    street: t.String,
    number: t.String,
    city: t.String,
    zip: t.String,
    country: t.String
});

var OrderItem = t.struct({
    description: t.String,
    price: t.Number,
    quantity: t.Number
})

var Order = t.struct({
    description: t.String,
    activatedDate: t.Date,
    billingAddress: Address,
    items: t.list(OrderItem)
});

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            orderFormValue: {
                activatedDate: new Date()
            }
        }
    }
    save() {
        var value = this.refs.form.getValue();
        if (value)
            console.log(value);
        else {
            var validationResult = this.refs.form.validate();
            console.log(validationResult);
        }
    }
    onChange(value, path, kind){
        console.log({
            value,
            path,
            kind
        });
        this.setState({orderFormValue:value});
    }
    render() {
        return (
            <div>
                <Form
                    ref="form"
                    type={Order}
                    value={this.state.orderFormValue}
                    onChange={this.onChange.bind(this)}
                />
                <button onClick={this.save.bind(this)}>Save</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
