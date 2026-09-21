
const request = require("supertest");
const app = require("../src/server");

describe("SmartCart API", () => {

    test("GET /api/products should return status 200", async () => {

        const response = await request(app)
            .get("/api/products");

        expect(response.statusCode).toBe(200);
    });


    test("GET /api/products should return an array of products", async () => {

        const response = await request(app)
            .get("/api/products");

        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });


    test("Each product should have id, name and price", async () => {

        const response = await request(app)
            .get("/api/products");

        response.body.forEach(product => {

            expect(product).toHaveProperty("id");
            expect(product).toHaveProperty("name");
            expect(product).toHaveProperty("price");

        });
    });

});