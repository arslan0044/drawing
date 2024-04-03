import { proxy } from "valtio";

const state = proxy({
  color: "#EFBD48",
  size:5
});

export default state;
