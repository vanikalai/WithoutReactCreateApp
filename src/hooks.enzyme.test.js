import React  from 'react';
import { act } from "react-dom/test-utils";
import { mount, shallow } from "enzyme";

import Hooks from './Hooks';

describe("Hooks", () => {

  const wrapper = shallow(<Hooks/>);
  
  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it("should fetch data on mount", () => {
    let component;
       act(() => {
        component = mount(<Hooks/>);
        
         });
         console.log("Printing the value "+ component.name())
       expect(component.text()).toBe(" 10");
     });
});




  




