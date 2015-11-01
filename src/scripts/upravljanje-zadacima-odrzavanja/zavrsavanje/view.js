import React from "react";

import t from "tcomb-form";
var Form = t.form.Form;

import tv from "tcomb-validation";
var validate = tv.validate;

import ZadatakOdrzavanjaDef from "./model-def.js";
import zadatakOdrzavanja from "./model.js";

class ZavrsavanjeZadatkaOdrzavanja extends React.Component {
    constructor() {
        super();
        //console.log(ZadatakOdrzavanjaDef.is(zadatakOdrzavanja));
        //console.log(zadatakOdrzavanja);
        //console.log(validate(zadatakOdrzavanja, ZadatakOdrzavanjaDef));
        this.state = {
            zadatakOdrzavanjaValue: zadatakOdrzavanja
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
        return (
            <div>
                <Form
                    ref="form"
                    type={ZadatakOdrzavanjaDef}
                    value={this.state.zadatakOdrzavanjaValue}
                    onChange={this.onChange.bind(this)}
                    />
                <button onClick={this.save.bind(this)}>Save</button>
            </div>
        );
    }
}

export default ZavrsavanjeZadatkaOdrzavanja;