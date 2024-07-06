import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema:
    "https://explore-btk-opencommerce-apis.ceultnteo3kpk.ap-southeast-1.cs.amazonlightsail.com/graphql",
  documents: ["src/app/**/*.{ts,tsx}"],
  generates: {
    "./__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;