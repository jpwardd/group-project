import ShopShowTile from '../../app/javascript/react/components/ShopShowTile';

describe("ShopShowTile", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ShopShowTile 
        name = "Dunkin' Donuts"
        address = "1 Summer St"
        city = "Boston"
        state = "MA"
        zip = "02110"
        phone_number = "6174262817"
      />
    )
  });

  it("should render an h1 tag", () => {
    expect(wrapper.find("h1")).toBePresent();
  });

  it("should render a h1 tag with the the text property value", () => {
    expect(wrapper.find('h1').text()).toBe('Dunkin\' Donuts')
  })

  it("should render an p tag", () => {
    expect(wrapper.find("p")).toBePresent();
  });

  it("should render a p tag with the the text property value", () => {
    expect(wrapper.find('p').text()).toBe("1 Summer St Boston, MA 02110")
  })

  it("should render a p tag with the the text property value", () => {
    expect(wrapper.find('p').text()).toBe("6174262817")
  })

});
