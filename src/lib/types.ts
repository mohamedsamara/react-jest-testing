import { z } from 'zod';

export const noteSchema = z.object({
  uid: z.string(),
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
});
export type Note = z.infer<typeof noteSchema>;

export const noteFormSchema = noteSchema.partial({
  uid: true,
});
export type AddNoteForm = z.infer<typeof noteFormSchema>;
