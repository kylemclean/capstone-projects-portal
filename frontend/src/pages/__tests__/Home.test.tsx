import React from "react"
import { render } from "@testing-library/react"
import { Route, MemoryRouter } from "react-router-dom"
import Home from "../Home"
import { setupServer } from "msw/node"
import { http } from "msw"
import { axiosConfig } from "../../api/config"

const server = setupServer(
    http.get(`${axiosConfig.baseURL}/projects`, () => Response.json([]))
)

beforeAll(() => server.listen({ onUnhandledRequest: "error" }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("renders without crashing", async () => {
    render(
        <MemoryRouter initialEntries={["/home"]}>
            <Route path="/home">
                <Home />
            </Route>
        </MemoryRouter>
    )
})
