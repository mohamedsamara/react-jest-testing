import { render, renderHook, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useNotes } from 'lib/hooks';
import AddNote, { ADD_NOTE_TEST_ID } from '../AddNote';
import { INLINE_ERROR_TEST_ID } from 'components/common/InlineError';

const user = userEvent.setup();
jest.mock('uuid', () => ({
  v4: () => '123456789',
}));

const renderAddNote = () => render(<AddNote />);

describe('<AddNote/>', () => {
  it('should render <AddNote/>', () => {
    renderAddNote();
    expect(screen.getByTestId(ADD_NOTE_TEST_ID)).toBeInTheDocument();
  });

  it('should render form basic fields', () => {
    renderAddNote();
    expect(
      screen.getByRole('heading', { name: 'Add Note' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /title/i })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /content/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Create/i })).toBeInTheDocument();
  });

  it('should validate form fields', async () => {
    renderAddNote();
    await user.type(screen.getByRole('textbox', { name: /title/i }), 'Title');
    await user.click(screen.getByRole('button', { name: /Create/i }));
    await waitFor(() => {
      expect(screen.getByTestId(INLINE_ERROR_TEST_ID)).toBeInTheDocument();
      expect(screen.getByTestId(INLINE_ERROR_TEST_ID)).toHaveTextContent(
        'Content is required',
      );
    });
  });

  it('should submit correct form data', async () => {
    renderAddNote();
    await user.type(screen.getByRole('textbox', { name: /title/i }), 'Title');
    await user.type(
      screen.getByRole('textbox', { name: /content/i }),
      'Content',
    );
    await user.click(screen.getByRole('button', { name: /Create/i }));
    await waitFor(() => {
      expect(screen.getByRole('status')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Create/i })).toBeDisabled();
    });
    const { result } = renderHook(() => useNotes());
    expect(result.current.notes).toEqual([
      { uid: '123456789', title: 'Title', content: 'Content' },
    ]);
  });
});
