import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Route, MemoryRouter } from "react-router-dom"
import About from "../About"
import { setupServer } from "msw/node"
import { http } from "msw"
import { axiosConfig } from "../../api/config"

const server = setupServer(
    http.get(`${axiosConfig.baseURL}/orgs`, () => Response.json([]))
)

beforeAll(() => server.listen({ onUnhandledRequest: "error" }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("renders without crashing", async () => {
    render(
        <MemoryRouter initialEntries={["/about"]}>
            <Route path="/about">
                <About />
            </Route>
        </MemoryRouter>
    )
})
