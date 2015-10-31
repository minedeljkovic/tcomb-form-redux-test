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

import ReactTabs from "react-tabs";
var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

import BasicOrderForm from "./basic-order-form.js";

class App extends React.Component {
    render() {
        return (
            <Tabs>
                <TabList>
                    <Tab>Basic</Tab>
                </TabList>
                <TabPanel>
                    <BasicOrderForm />
                </TabPanel>
            </Tabs>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
