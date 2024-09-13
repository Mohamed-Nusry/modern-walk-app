import ProductCard from "../src/components/ProductCard.vue";
import { mount } from "@vue/test-utils";

test("ProductCard Component includes the correct title", () => {
  const wrapper = mount(ProductCard, {
    propsData: {
      title: 'Mens Casual Slim Fit',
      price: 20,
      description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions',
    }
  });
  expect(wrapper.text()).toMatch("Mens Casual Slim Fit");
});