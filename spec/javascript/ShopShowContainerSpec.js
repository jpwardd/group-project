import ShopShowContainer from "../../app/javascript/react/containers/ShopShowContainer";
import ShopShowTile from "../../app/javascript/react/components/ShopShowTile";
// import jasmineEnzyme from 'jasmine-enzyme'
import fetchMock from 'fetch-mock'

describe("ShopShowContainer", () => {
  let wrapper;
  let shop;

  beforeEach(() => {

    jasmineEnzyme();

    shop = {
      id: 2,
      name: "Dunkin' Donuts",
      address: "1 Summer Street",
      city: "Boston",
      state: "MA",
      zip: "02110",
      phone_number: "6174262817",
      reviews: [
        {
          id: 40,
          donut_review: "Good",
          coffee_review: "Delicious",
          shop_review: "They're everywhere",
          user: {
            id: 4,
            first_name: "Admin",
            last_name: "Kim",
            city: "Boston",
            state: "MA",
            email: "meanniekim@gmail.com",
            role: "admin"
          }
        }
      ]
    };

    fetchMock.get(`/api/v1/shops/${shop.id}`, {
      status: 200,
      body: shop
    });

    wrapper = mount(
      <ShopShowContainer
        params={ { id: 2 } }
      />
    );
  });

  afterEach(fetchMock.restore);

  describe("show page", () => {
    it("should render a ShopShowTile component", done => {
      setTimeout(() => {
        expect(wrapper.find(ShopShowTile)).toBePresent();
        done();
      }, 0);
    });
  });
  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ shop: {}, reviews: [] });
  })
  it('should render the ShopShowTile Component with specific props', () => {
      wrapper.setState({ shop: shop, reviews: shop.reviews });
      expect(wrapper.find(ShopShowTile).props()).toEqual({
        id: 2,
        name: "Dunkin' Donuts",
        address: "1 Summer Street",
        city: "Boston",
        state: "MA",
        zip: "02110",
        phoneNumber: "6174262817"
      })
    })
});
