import { Note } from 'lib/types';
import { useNotes } from 'lib/hooks';
import Heading from 'components/common/Heading';
import Button from 'components/common/Button';

interface NoteItemProps {
  note: Note;
}

export const NOTE_ITEM_TEST_ID = 'add-note';

const NoteItem = (props: NoteItemProps) => {
  const { note } = props;
  const { deleteNote } = useNotes();

  const handleDeleteNote = () => {
    deleteNote(note.uid);
  };

  return (
    <div
      data-testid={NOTE_ITEM_TEST_ID}
      className="relative w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Heading as="h6">{note.title}</Heading>
      <p className="text-gray-400">{note.content}</p>
      <Button
        variant="danger"
        size="sm"
        className="absolute top-0 right-0"
        onClick={handleDeleteNote}
      >
        X
      </Button>
    </div>
  );
};

export default NoteItem;
