import { z } from 'zod';

const recordStoreSchema = z.object({
  artist: z.string(),
  title: z.string(),
  format: z.string(),
  yearPublished: z.number(),
  new: z.boolean(),
})

type RecordStore = z.infer< typeof recordStoreSchema >;

export default RecordStore;
export { recordStoreSchema }