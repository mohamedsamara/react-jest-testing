import { render, screen } from '@testing-library/react';

import NoteList, { NOTE_LIST_TEST_ID } from '../NoteList';
import { Note } from 'lib/types';
import { NOTE_ITEM_TEST_ID } from '../NoteItem';

const NOTES = [
  {
    uid: '123456789',
    title: 'Note title',
    content: 'Note content',
  },
  {
    uid: '1234567890',
    title: 'Note title 2',
    content: 'Note content 2',
  },
];

const renderNoteList = (notes: Note[]) => render(<NoteList notes={notes} />);

describe('<NoteList/>', () => {
  it('should render <NoteList/>', () => {
    renderNoteList([NOTES[0]]);
    expect(screen.getByTestId(NOTE_LIST_TEST_ID)).toBeInTheDocument();
  });

  it('should render empty list', () => {
    renderNoteList([]);
    expect(screen.getByText('No notes found')).toBeInTheDocument();
  });

  it('should render list', () => {
    renderNoteList(NOTES);
    const noteList = screen.getByTestId(NOTE_LIST_TEST_ID);
    expect(screen.getAllByTestId(NOTE_ITEM_TEST_ID)).toHaveLength(NOTES.length);
  });
});
