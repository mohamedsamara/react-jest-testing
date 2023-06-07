import { atomWithStorage } from 'jotai/utils';
import { Note } from 'lib/types';
import { NOTES_STORAGE } from 'lib/constants';

export const noteAtom = atomWithStorage<Note[]>(NOTES_STORAGE, []);
