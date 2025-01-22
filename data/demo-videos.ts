import { BsFiletypeMp4, BsVimeo, BsYoutube } from 'react-icons/bs';
import { CiStreamOn } from 'react-icons/ci';

import { Video } from '@/types/video';

export const demoVideos: Video[] = [
  {
    id: 1,
    title: 'MP4',
    icon: BsFiletypeMp4,
    source:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // MP4
  },
  {
    id: 2,
    title: 'YOUTUBE',
    icon: BsYoutube,
    iconColor: 'hsl(var(--destructive))',
    source: 'https://www.youtube.com/watch?v=LXb3EKWsInQ', // YouTube
  },
  {
    id: 3,
    title: 'VIMEO',
    icon: BsVimeo,
    iconColor: 'hsl(var(--primary))',
    source: 'https://vimeo.com/76979871', // Vimeo
  },
  {
    id: 4,
    title: 'Streaming Video',
    icon: CiStreamOn,
    iconColor: 'hsl(var(--destructive))',
    source: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8', // Streaming URL
  },
];
