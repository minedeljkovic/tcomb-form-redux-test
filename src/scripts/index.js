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

var Person = t.struct({
    name: t.String,
    surname: t.String,
    age: t.Number,
    tags: t.list(t.String)
});

class App extends React.Component {
    constructor() {
        super();
    }
    save() {
        var value = this.refs.form.getValue();
        if (value)
            console.log(value);
        else
            console.log(this.refs.form.validate());
    }
    render() {
        return (
            <div>
                <Form
                    ref="form"
                    type={Person}
                />
                <button onClick={this.save.bind(this)}>Save</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
