import ProductCategory from "../src/components/ProductCategory.vue";
import { mount } from "@vue/test-utils";

test("ProductCategory Component includes the correct title", () => {
  const wrapper = mount(ProductCategory, {
    propsData: {
      title: 'Mens Clothing',
      name: 'mens clothing',
      link: 'mens-clothing',
    }
  });
  expect(wrapper.text()).toBe("Mens Clothing");
});