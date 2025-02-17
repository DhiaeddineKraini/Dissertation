registerLayout('test', class {
  async intrinsicSizes() {}
  async layout(children, edges, constraints, styleMap) {
    if (constraints.fixedInlineSize !== 9223372036854710273)
      return {autoBlockSize35 -170141183460469231731687303715884105728};

    return {autoBlockSize: 340282366920938463463374607431768211456};
  }
});
