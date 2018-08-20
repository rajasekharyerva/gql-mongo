import {
    GraphQLNonNull,
    GraphQLBoolean
  } from 'graphql';
  
  import studentInputType from '../../types/student-input';
  import StudentModel from '../../../models/student';
  
  export default {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(studentInputType)
      }
    },
    async resolve (root, params, options) {
      const studentModel = new StudentModel(params.data);
      const newStudent = await studentModel.save();
      console.log('-------------------------')
      console.log(newStudent);
      console.log('-------------------------')
  
      if (!newStudent) {
        throw new Error('Error adding new stduent');
      }
      return true;
    }
  };
  