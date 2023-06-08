import { renderHook, act } from '@testing-library/react';

import { useNotes } from '../note';

jest.mock('uuid', () => ({
  v4: () => '123456789',
}));

describe('useNotes', () => {
  it('should return empty initial notes', () => {
    const { result } = renderHook(() => useNotes());
    expect(result.current.notes.length).toBe(0);
  });

  it('should add note', async () => {
    const { result } = renderHook(() => useNotes());
    await act(() => result.current.addNote('Title1', 'Content1'));
    expect(result.current.notes.length).toBe(1);
  });

  it('should delete note', async () => {
    const { result } = renderHook(() => useNotes());
    await act(() => result.current.deleteNote(result.current.notes[0].uid));
    expect(result.current.notes.length).toBe(0);
  });
});
