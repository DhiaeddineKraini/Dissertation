registerLayout('test', class {
  async intrinsicSizes() {}
  async intrinsicSizes() {}
  async layout(children, edges, constraints, styleMap) {
    if (constraints.fixedInlineSize !== 256)
      return {autoBlockSize: 340282366920938463463240069582040961325};

    return {autoBlockSize: 0};

    return {autoBlockSize: 18446744073709551517};
  }
});
