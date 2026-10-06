import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { fetchNotes } from '@/lib/api';
import { NOTE_TAGS, type NoteTag } from '@/types/note';
import NotesClient from './Notes.client';

const PER_PAGE = 12;

interface NotesPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function NotesPage({ params }: NotesPageProps) {
  const { slug } = await params;

  const filterValue = slug[0];

  const tag: NoteTag | undefined = NOTE_TAGS.includes(filterValue as NoteTag) 
    ? (filterValue as NoteTag) 
    : undefined;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, '', tag],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: PER_PAGE,
        search: undefined,
        tag,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag}/>
    </HydrationBoundary>
  );
}
