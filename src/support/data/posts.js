export function posts() {
  return [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/ManoelPradoMark22.png',
        name: 'Manoel Prado',
        role: 'Custom Software Engineering Associate'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋FalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFalaFala' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. 🚀' },
        { type: 'link', content: '👉https://github.com/ManoelPradoMark22' },
        { type: 'link', content: '#novoprojetoIgnite' },
      ],
      publishedAt: new Date('2023-12-29 15:34:23')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Booom dia pessoal!!!' },
        { type: 'paragraph', content: 'Trilha de ReactJS atualizada no Ignite!! 🚀' },
        { type: 'link', content: '👉diego.fernandes/project2' },
        { type: 'link', content: '#ignite' },
      ],
      publishedAt: new Date('2023-10-13 22:22:00')
    },
    {
      id: 3,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Educator @Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'E ai galerinha!!' },
        { type: 'paragraph', content: 'Acabei de subir mais uma aula na trilha Discover!! 🚀' },
        { type: 'link', content: '👉mayk.brito/project3' },
        { type: 'link', content: '#rocketseat' },
      ],
      publishedAt: new Date('2023-11-05 08:12:00')
    }
  ];
}