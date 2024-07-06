module.exports = {
  projects: {
    default: {
      schema:
        "https://explore-btk-opencommerce-apis.ceultnteo3kpk.ap-southeast-1.cs.amazonlightsail.com/graphql",
      documents: "src/**/*.{graphql,js,ts,jsx,tsx}",
      extensions: {
        endpoints: {
          default: {
            url: "https://explore-btk-opencommerce-apis.ceultnteo3kpk.ap-southeast-1.cs.amazonlightsail.com/graphql",
          },
        },
      },
    },
  },
};