import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import studentType from '../../types/student';
import getProjection from '../../get-projection';
import StudentModel from '../../../models/student';

export default {
  type: studentType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    const removedStudent = await StudentModel
      .findByIdAndRemove(params._id, {
        select: projection
      })
      .exec();

    if (!removedStudent) {
      throw new Error('Error removing student');
    }

    return removedStudent;
  }
};
