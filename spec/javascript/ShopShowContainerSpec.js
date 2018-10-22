import ShopShowContainer from "../../app/javascript/react/containers/ShopShowContainer";
import ShopShowTile from "../../app/javascript/react/components/ShopShowTile";
import { mount } from 'enzyme'
import jasmineEnzyme from 'jasmine-enzyme'
import fetchMock from 'fetch-mock'

describe("ShopShowContainer", () => {
  let wrapper;
  let shops;
  beforeEach(() => {

    jasmineEnzyme();
    shops = {
      id: 2,
      name: "Dunkin' Donuts",
      address: "1 Summer Street",
      city: "Boston",
      state: "MA",
      zip: "02110",
      phone_number: "6174262817"
    };
    fetchMock.get(`/api/v1/shops/${shops.id}`, {
      status: 200,
      body: shops
    });
    wrapper = mount(<ShopShowContainer params={{ id: 2 }}/>);
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
    expect(wrapper.state()).toEqual({ shop: {} });
  })
  it('should render the ShopShowTile Component with specific props', () => {
      wrapper.setState({ shop: shops });
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
