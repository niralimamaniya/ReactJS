import { fireEvent, render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact us Page test case", () => {
    it("Should load Contact us component", () => {
        render(<Contact/>)
    
        // Querying
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    })
    it("Should find button inside Contact component", () => {
        render(<Contact/>)
    
        const button = screen.getByRole("button");
    
        // Assertion
        expect(button).toBeInTheDocument();
    })
    it("Should display a message on click of send button", () => {
        render(<Contact/>)
    
        const sendBtn = screen.getByRole("button",{name: "Send"});
        fireEvent.click(sendBtn);

        const displayMsg = screen.getByText("Thanks for contacting Delo ! We'll reply ASAP.");
        
        // Assertion
        expect(displayMsg).toBeInTheDocument();
    })
})
