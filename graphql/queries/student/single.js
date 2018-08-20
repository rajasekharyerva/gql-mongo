import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
  } from 'graphql';
  import {Types} from 'mongoose';
  
  import studentType from '../../types/blog-post';
  import getProjection from '../../get-projection';
  import studentModel from '../../../models/blog-post';
  
  export default {
    type: studentType,
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve (root, params, options) {
      const projection = getProjection(options.fieldASTs[0]);
  
      return studentModel
        .findById(params.id)
        .select(projection)
        .exec();
    }
  };
  