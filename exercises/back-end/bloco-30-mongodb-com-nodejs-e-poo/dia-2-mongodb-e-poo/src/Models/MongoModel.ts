import { Model as M } from 'mongoose';
import Model from '.';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T>) {}
  create = async(obj: T): Promise<T> => this.model.create({ ...obj })
  read = async(): Promise<T[]> => this.model.find()
  readOne = async(id: string): Promise<T | null> => this.model.findOne({ _id: id })
  delete = async(id: string): Promise<T | null> => this.model.findOneAndDelete({ _id: id })
  update = async(): Promise<T[]> => {
    await this.model.updateMany(
      { $and: [
        { yearPublished: { $lte: 1997 } },
        { format: 'CD' },
      ] },
      { $set: { new: false } },
    );

    return this.model.find({
      $and: [
        { yearPublished: { $lte: 1997 } }, 
        { format: 'CD' }
      ]
    })
  }
}

export default MongoModel;