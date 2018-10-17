
import ShopShowContainer from "../../app/javascript/react/containers/ShopShowContainer";
import ShopShowTile from "../../app/javascript/react/components/ShopShowTile";

import React from "react";

describe("ShopShowContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ShopShowContainer
        
      />
    );
  });

   it("should have the specified initial state", () => {
     expect(wrapper.state()).toEqual({ babyElephant:  });
   });

  it("should render a ShopShowTile", () => {
    expect(wrapper.find(ShopShowTile)).toBePresent();
  });

  
});


