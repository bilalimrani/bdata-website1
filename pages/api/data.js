import Amplify, { withSSRContext } from "aws-amplify";
import config from "../aws-exports.js";

export default async function (req, res) {
  res.send({ name: "Bilal Imrani" });
}
