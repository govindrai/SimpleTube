import prodkeys from "./prodkeys";
import devkeys from "./devkeys";

let keys;

if (process.env.NODE_ENV === "production") {
  keys = prodkeys;
} else {
  keys = devkeys;
}

export default keys;
