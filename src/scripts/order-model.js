/**
 * Created by mnedeljkovic on 10/31/2015.
 */
import t from "tcomb-form";

var PositiveNumber = t.refinement(t.Number, function (n) {
    return n >= 0;
});
PositiveNumber.getValidationErrorMessage = function(value, path, context) {
    console.log("Invalid positive number: ");
    console.log({value, path, context});
    return value + " is not a valid positive number";
}

var OrderStatus = t.enums({
    "REG": "Registered",
    "FIN": "Finished"
})

var PaymentMethods = t.enums({
    "CRD": "Credit card",
    "DBT": "Debit card",
    "PPL": "Paypal",
    "CSH": "Cash"
})

var Address = t.struct({
    street: t.String,
    number: t.String,
    city: t.String,
    zip: t.maybe(t.String),
    country: t.String
});

var OrderItem = t.struct({
    description: t.String,
    price: t.Number,
    quantity: PositiveNumber
})

var Order = t.struct({
    description: t.String,
    activatedDate: t.Date,
    isReduction: t.Boolean,
    status: OrderStatus,
    billingAddress: Address,
    items: t.list(OrderItem),
    payments: t.list(PaymentMethods)
});

export default Order;
