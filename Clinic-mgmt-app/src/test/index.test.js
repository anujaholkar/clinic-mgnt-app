//import supertest from "supertest";
//import app from "./app.js";
//import { Test } from "supertest";

test('two plus two is four',() =>{
    expect(2+2),toBe(4);
});

describe("test the root path",() =>{
    test("It should be response the GET method", () =>{
        supertest(app).get("/").then(response => {
            expect(response.statusCode).toBe(200);
            document();
        });
    });
});

describe("test the root path",() =>{
    test("It should be response the GET method", () =>{
        supertest(app)
        .get("/appointment/search/appointmentDate/21/02/2022")
        .then(response => {
            expect(response.statusCode).toBe(200);
            document();
        });
    });
});