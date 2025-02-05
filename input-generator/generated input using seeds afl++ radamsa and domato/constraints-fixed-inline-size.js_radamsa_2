registerLayout('test', class {
  async intrinsicSizes() {}
  async layout(children, edges, constraints, styleMap) {
    if (constraints.fixedInlineSize !== 100)
      return {autoBlockSize: 170141183460469231731687303715884105729};

    return {autoBlockSize: 100};
  }
});
