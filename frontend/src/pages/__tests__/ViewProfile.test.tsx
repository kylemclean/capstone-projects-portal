import React from "react"
import { render } from "@testing-library/react"
import { Route, MemoryRouter } from "react-router-dom"
import ViewProfile from "../ViewProfile"

test("renders without crashing", () => {
    render(
        <MemoryRouter initialEntries={["/profiles/1"]}>
            <Route path="/profiles/:id">
                <ViewProfile />
            </Route>
        </MemoryRouter>
    )
})
