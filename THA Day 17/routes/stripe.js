const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51JlFi3SEZB6lUijIbOGcJwkeREJmULWbUH5BjwxKKRC4TJA6b6yHTULRl1Bk2I0goQVN1ruTzzzfUunarMHjvsyD000nsUyDvg"
);
const path = require("path");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/payment.html"));
});

router.post("/payment", async (req, res) => {
  console.log(req.body);
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          amount: req.body.price * 100,
          name: "Shopping",
          currency: "usd",
          quantity: 1,
        },
      ],
      payment_method_types: ["card"],
      success_url: `${req.headers.origin}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}?canceled=true`,
    });
    res.redirect(303, session.url);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
});

module.exports = router;
