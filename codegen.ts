import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://explore-btk-opencommerce-apis.ceultnteo3kpk.ap-southeast-1.cs.amazonlightsail.com/graphql',
  documents: ['src/**/*.{graphql,js,ts,jsx,tsx}'],
  generates: {
    './__generated__/graphql/': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ]
    }
  },
  ignoreNoDocuments: true,
};

export default config;
