import { Schema, model as createModel, Document } from 'mongoose';
import RecordStore from '../Interfaces/RecordStoreSchema';
import MongoModel from './MongoModel';


interface RecordStoreDocument extends RecordStore, Document {}

const recordSchema = new Schema<RecordStoreDocument>({
  title: String,
  artist: String,
  format: String,
  yearPublished: Number,
  new: Boolean,
})

class RecordStoreModel extends MongoModel<RecordStore> {
  constructor(model = createModel('RecordStore', recordSchema)) {
    super(model)
  }
}

export default RecordStoreModel;