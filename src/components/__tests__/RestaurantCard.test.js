import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom"
import { withPromotedLabel } from './../RestaurantCard';

it("Should render restaurant data with props",() => {
    render(<RestaurantCard resData = {MOCK_DATA}/>);

    const name = screen.getByText("Relax Pure Veg")

    expect(name).toBeInTheDocument();
});

// it("Should render restaurant card component with promoted label",() => {
//     render(
//         <withPromotedLabel RestaurantCard = {MOCK_DATA}/>
//         );

//         // const promoted = screen.getByLabelText("Promoted");

//         // expect(promoted).toBeInTheDocument();
    
// });