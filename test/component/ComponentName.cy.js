import HelloWorld from "../../src/components/HelloWorld.vue";
import Test from "./test.vue";
import { h } from "vue";

describe("ComponentName.cy.ts", () => {
  let block = {
    template: `444<Test :x="22"></Test>`,
    components: { Test },
  };
  it("playground", () => {
    let x = { msg: "message" };
    cy.mount(HelloWorld, {
      props: x,
      slots: { default: () => h(block) },
    });
    // get("#test").should('exist')
    // x.msg = "new";
  });
});
