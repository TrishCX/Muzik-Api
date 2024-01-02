import { fetchSections } from "./dist/sections/index";

async function get() {
  const res = await fetchSections("0JQ5IMCbQBLtHlC1uTDc8h");
  console.log(res);
}

get();
