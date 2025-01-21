import { Video } from '@/types/video';

export const demoVideos: Video[] = [
  {
    id: 1,
    title: 'MP4',
    source:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // MP4
  },
  {
    id: 2,
    title: 'YOUTUBE',
    source: 'https://www.youtube.com/watch?v=LXb3EKWsInQ', // YouTube
  },
  {
    id: 3,
    title: 'VIMEO',
    source: 'https://vimeo.com/76979871', // Vimeo
  },
  {
    id: 4,
    title: 'Streaming Video',
    source:
      'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8', // Streaming URL
  },
];
