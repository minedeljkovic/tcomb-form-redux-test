import React from "react";

import t from "tcomb-form";
var Form = t.form.Form;

import Order from "./order-model.js";

class OptionsOrderForm extends React.Component {
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
            kind,
            component: this.refs.form.getComponent(path)
        });
        this.setState({orderFormValue:value});
    }
    render() {
        var options = {
            auto: "placeholders",
            order: ["status", "description", "activatedDate", "isReduction", "items", "billingAddress", "payments"],
            fields: {
                status: {
                    nullOption: {value: "", text: "Choose status..."},
                    factory: t.form.Radio
                },
                description: {
                    disabled: true
                },
                activatedDate: {
                    order: ["D", "M", "YY"]
                },
                items: {
                    auto: "none",
                    disableOrder: true,
                    item: {
                        fields: {
                            description: {
                                auto: "auto",
                                label: "Item description"
                            }
                        }
                    }
                },
                payments: {
                    legend: "Payment methods",
                    factory: t.form.Select
                }
            }
        };

        return (
            <div>
                <Form
                    ref="form"
                    type={Order}
                    options={options}
                    value={this.state.orderFormValue}
                    onChange={this.onChange.bind(this)}
                    />
                <button onClick={this.save.bind(this)}>Save</button>
            </div>
        );
    }
}

export default OptionsOrderForm;