const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.singleCharge = async (req, res) => {
  console.log(req.body);
  const { token, total, description, name } = req.body;
  const amount = Math.round(total * 100);
  try {
    const status = await stripe.charges.create({
      name: name,
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
