'use client';
import React from 'react';
import EmbedPlayer from '@/components/watch/embed-player';
import { useSearchParams } from 'next/navigation';

export const revalidate = 3600;

export default function Page({ params }: { params: { slug: string } }) {
  const id = params.slug.split('-').pop();
  const query = useSearchParams();
  const option = query.get('option') ?? '1';
  return (
    <EmbedPlayer
      // url={`https://vidsrc.cc/v2/embed/tv/${id}`}
      // url={
      //   option === '1'
      //     ? `https://vidsrc.me/embed/tv/${id}`
      //     : `https://vidsrc.cc/v2/embed/tv/${id}`
      // }
      url={`https://player.videasy.net/tv/${id}`}
    />
  );
}
