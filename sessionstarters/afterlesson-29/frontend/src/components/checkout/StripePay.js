import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import API from "../../util/API";
import { setAlert } from "../../redux/actions/alertActions";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import {
  saveCardAndCharge,
  singleCharge,
} from "../../redux/actions/stripeActions";

const StripePay = () => {
  const [saveCard, setSaveCard] = useState(false);
  const [useSavedCard, setUseSavedCard] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();

  const { total, cart } = useSelector((state) => state.cartReducer);

  const description = "Purchase From <BLANK> Store";

  // CLASSES

  const saveCardClass = saveCard ? "radio radio--fill" : "radio";
  const useSavedCardClass = useSavedCard ? "radio radio--fill" : "radio";

  const saveCardClick = () => {
    if (!saveCard) setUseSavedCard(false);
    setSaveCard(!saveCard);
  };

  const displayCardsClick = () => {
    if (!useSavedCard) setSaveCard(false);
    setUseSavedCard(!useSavedCard);
  };

  const submitToken = async () => {
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    try {
      const { token } = await stripe.createToken(cardElement);
      return token;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = await submitToken();
    console.log(token);
    if (!token) {
      dispatch(setAlert("Payment cannot be submitted"));
      return;
    }
    if (!saveCard) {
      dispatch(singleCharge(token, total, description, cart));
      return;
    }
    if (saveCard) {
      dispatch(saveCardAndCharge(token, total, description, cart));
      return;
    }
  };

  return (
    <form className="stripe-pay" onSubmit={handleSubmit}>
      <div className="stripe-pay__title">Checkout</div>
      <div className="stripe-pay__grid">
        {/* <div className="stripe-pay__row">
          <input
            name="nameOnCard"
            className="stripe-pay__row-input"
            type="text"
            value={nameOnCard}
            onChange={(e) => onNameOnCard(e)}
            placeholder="Name"
            required={true}
          />
        </div> */}
        <div className="stripe-pay__row">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  "::placeholder": {
                    color: "#aab7c4",
                    fontFamily: "sans-sarif",
                  },
                },
                invalid: {
                  color: "#e9327c",
                },
              },
            }}
          />
        </div>
      </div>
      <div className="stripe-pay__row stripe-pay__row-radio">
        <div className={useSavedCardClass} onClick={() => displayCardsClick()}>
          use saved card
        </div>
        <div className={saveCardClass} onClick={() => saveCardClick()}>
          save card
        </div>
      </div>
      <div className="stripe-pay__row">
        <button className="stripe-pay__button" disabled={!stripe}>
          Pay
        </button>
      </div>
    </form>
  );
};

export default StripePay;
