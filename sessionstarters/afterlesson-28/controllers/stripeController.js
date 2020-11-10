const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const User = require("../schemas/user");

const serverWork = async (req, res, customer, cart) => {
  const { _id } = req.user;
  const user = await User.findById(_id);
  if (!user.stripeId) user.stripeId = customer.id;
  let courseIds = [];
  for (let i = 0; i < cart.length; i++) {
    courseIds.push(cart[i]._id);
  }
  user.coursesOwned = [...user.coursesOwned, ...courseIds];
  user.markModified("coursesOwned");
  user.orders = [...user.orders, cart];
  user.markModified("orders");
  await user.save();
};

exports.singleCharge = async (req, res) => {
  console.log(req.body);
  const { token, total, description } = req.body;
  const amount = Math.round(total * 100);
  try {
    const status = await stripe.charges.create({
      amount: amount,
      currency: "usd",
      description: description,
      source: token.id,
    });
    res.status(200).json({ status });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode).json(err.message);
  }
};

exports.saveCardAndCharge = async (req, res) => {
  const { token, total, description, cart } = req.body;
  const amount = Math.round(total * 100);
  let { stripeId } = req.body;
  try {
    if (!stripeId) {
      let customer = await stripe.customer.create();
      stripeId = customer.id;
    }

    const source = await stripe.customer.createSource(stripeId, {
      source: token.id,
    });

    const status = await stripe.charges.create({
      amount: amount,
      currency: "usd",
      customer: stripeId,
      description: description,
      source: source.id,
    });

    serverWork(req, res, customer, cart);
    res.status(200).json({ status });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode).json(err.message);
  }
};
