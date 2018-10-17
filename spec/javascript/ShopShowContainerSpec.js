import ShopShowContainer from "../../app/javascript/react/containers/ShopShowContainer";
import ShopShowTile from "../../app/javascript/react/components/ShopShowTile";
import { mount } from 'enzyme'
import jasmineEnzyme from 'jasmine-enzyme'



describe("ShopShowContainer", () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme()
    wrapper = mount( 
     <ShopShowContainer 
  	/>
    );
  });


  it("should render a ShopShowTile component", () => {
    expect(wrapper.find(ShopShowTile)).toBePresent();
  });

});


