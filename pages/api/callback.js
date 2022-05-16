import auth0 from "../../lib/auth0";

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res);
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).end(err.message);
  }
}
