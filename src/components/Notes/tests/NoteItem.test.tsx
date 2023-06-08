import { render, screen } from '@testing-library/react';

import NoteItem, { NOTE_ITEM_TEST_ID } from '../NoteItem';

const NOTE = {
  uid: '123456789',
  title: 'Note title',
  content: 'Note content',
};

const renderNoteItem = () => render(<NoteItem note={NOTE} />);

describe('<NoteItem/>', () => {
  it('should render <NoteItem/>', () => {
    renderNoteItem();
    expect(screen.getByTestId(NOTE_ITEM_TEST_ID)).toBeInTheDocument();
  });

  it('should render basic elements', () => {
    renderNoteItem();
    expect(
      screen.getByRole('heading', { name: 'Note title' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Note content')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /X/i })).toBeInTheDocument();
  });
});
