interface Podcast {
    coverImage: string;
    title: string;
    owner: string;
    genre: string;
}

export const podcasts: Podcast[] = [
    {
      coverImage: '/wtf.png',
      title: 'WTF',
      owner: 'Marc Maron',
      genre: 'Entertainment',
    },
    {
      coverImage: '/joerogan.png',
      title: 'The Joe Rogan Experience',
      owner: 'Joe Rogan',
      genre: 'Entertainment',
    },
    {
      coverImage: '/how.png',
      title: 'How did things get made',
      owner: 'Mike & May',
      genre: 'Entertainment',
    },
  ];