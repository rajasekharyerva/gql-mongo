import {
  GraphQLBoolean
} from 'graphql';

import StudentModel from '../../../models/student';

export default {
  type: GraphQLBoolean,
  resolve (root, params, options) {
    return StudentModel
      .remove({})
      .exec();
  }
};
