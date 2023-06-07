import { v4 as uuidv4 } from 'uuid';
import { useAtom } from 'jotai';
import { noteAtom } from 'lib/stores';

export const useNotes = () => {
  const [notes, setNotes] = useAtom(noteAtom);

  const saveNote = async (title: string, content: string) => {
    setNotes([{ uid: uuidv4(), title, content }, ...notes]);
  };

  const deleteNote = async (uid: string) => {
    setNotes(notes.filter((n) => n.uid !== uid));
  };

  return { notes, saveNote, deleteNote };
};
