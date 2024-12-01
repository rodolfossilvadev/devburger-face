import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51QKfegJ4OMxtSwj5IIAu8HE56IIjjYiYdziRNkAcQwR17BB3KOOKvZa4Fdmz72uT7FJr7ClFZUDD4IzmItsD7dW500vz9MutMH'
);

export default stripePromise;