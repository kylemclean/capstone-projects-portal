import React from "react"
import { render } from "@testing-library/react"
import { Route, MemoryRouter } from "react-router-dom"
import { setupServer } from "msw/node"
import { http } from "msw"
import ViewProfile from "../ViewProfile"
import User from "../../models/user"
import { axiosConfig } from "../../api/config"

const mockUser: User = {
    id: "1",
    name: "Tester",
    email: "tester@example.com",
    bio: "I am merely a tester",
    image: "https://example.com/image.jpg",
}

const server = setupServer(
    http.get(`${axiosConfig.baseURL}/users/1`, () => Response.json(mockUser))
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("renders without crashing", () => {
    render(
        <MemoryRouter initialEntries={["/profiles/1"]}>
            <Route path="/profiles/:id">
                <ViewProfile />
            </Route>
        </MemoryRouter>
    )
})
