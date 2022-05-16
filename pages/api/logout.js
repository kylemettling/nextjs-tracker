import auth0 from "../../lib/auth0";

export default async function login(req, res) {
  try {
    await auth0.handleLogout(req, res);
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).end(err.message);
  }
}
