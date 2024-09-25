//import { http, HttpResponse } from "msw";
//import ProductList from "../../src/components/ProductList";
//import { products } from "./data";
import { db } from "./db";

//define endpoints and responses they give
/*export const handlers = [
  http.get("/categories", () => {
    return HttpResponse.json([
      { id: 1, name: "Electronics" },
      { id: 2, name: "Beauty" },
      { id: 3, name: "Gardening" },
    ]);
  }),
 http.get("/products", () => {
    return HttpResponse.json([products]);
  }),
  http.get("/products/:id", ({ params }) => {
    console.log("IN here");
    const product = products.find((product) => product.id == params.id);
    console.log(product);
    if (!product)
      return new HttpResponse("Not found", {
        status: 404,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    else return HttpResponse.json(product);
  }), 

]; */

export const handlers = [
  ...db.product.toHandlers("rest"),
  ...db.category.toHandlers("rest"),
];

//returns all api endpoints for each get/post/put/patch/delete
