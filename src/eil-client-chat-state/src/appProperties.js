//@flow
import buildAppProperties from 'eil-common/lib/buildAppProperties';

declare type PropList = CommonPropList;
const schema = {
  // group: {
  //   subgroup: {
  //     key: {
  //       doc: 'Document the property',
  //       format: '*',
  //       default: 'defaultValue',
  //       env: 'SOME_ENV_VAR',
  //     },
  //   },
  // },
};

const appProperties: AppProperties<PropList> = buildAppProperties(schema);
export default appProperties;
