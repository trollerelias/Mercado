

const supertest = require("supertest")


const server = require("./src/servers.ts")
const Routers = require("./src/routers/routers.ts")
const ProductController = require("./src/controllers/product.controller");
const ProductModel = require("./src/model/product.model")
const IProduct = require("./src/interfaces/Product.interfaz")
const ProductSchema = require("./src/schemas/Product.shema")

const api = supertest(server)



test('regresa json', async () => {
       await api
            .get("/")
            .expect(200)
            .expect("Content-Type", /application\/json/)
});
   








//test("nombre del primer producto", async () => {
//      
//      const response = await api.get("/");
//      expect(response.body[0]).toBe(1)
//    
//
//})



//test('regresa json', async () => {
//       await apis
//              .get("/")
//             .expect(200)
//              .expect("Content-Type", /application\/json/)
//});
   











