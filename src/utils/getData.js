import { commerce } from "faker";

export const getData = async (data) => {
  for (let i = 0; i < data.results.length; i++) {
    let element = data.results[i];
    try {
      let response = await fetch(element.url);
      //   if (response.status !== 200) {
      //     throw new Error("error: ", Error);
      //   }
      let data = await response.json();
      element["img"] = data.sprites.front_default;
      element["price"] = commerce.price();
    } catch (error) {
      return error;
    }
  }
  return data;
};
