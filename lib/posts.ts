const posts: GetPostsType = [
  {
    slug: '/blog/lo-que-debes-saber-de-core-web-vitals',
    date: 'Abril 26, 2021',
    dateForISO: '4/26/2021',
    title: 'Lo que debes saber de Core Web Vitals',
    description:
      'Lo que debes saber de Core Web Vitals para preparar tu sitio web al cambio de Google de mayo 2021.',
    image: 'lo-que-debes-saber-de-core-web-vitals/cover.png',
    url: 'lo-que-debes-saber-de-core-web-vitals'
  },
  {
    slug: '/blog/guia-basica-de-supervivencia-en-react-con-typescript',
    date: 'Abril 15, 2021',
    dateForISO: '4/15/2021',
    title: 'Guía Básica de Supervivencia en React con Typescript',
    description: 'Una pequeña guía básica para sobrevivir en React usando Typescript',
    image: 'guia-basica-de-supervivencia-en-react-con-typescript/cover.png',
    url: 'guia-basica-de-supervivencia-en-react-con-typescript'
  },
  {
    slug: '/blog/nextjs-10',
    date: 'Octubre 27, 2020',
    dateForISO: '10/27/2020',
    title: 'Lanzamiento de Next.js 10',
    description:
      'Esta nueva versión de Next.js (Next.js 10) nos trae unas grandes sorpresas. Internacionalización, optimización de imágenes y mucho más.',
    image: 'nextjs-10/cover.png',
    url: 'nextjs-10'
  },
  {
    slug: '/blog/react-17-ya-esta-aqui',
    date: 'Octubre 20, 2020',
    dateForISO: '10/20/2020',
    title: 'React v17.0 ya está aquí',
    description:
      'Hoy 20 de octubre ha sido lanzado React v17.0 de manera oficial. ¿Ya sabes qué trae esta nueva versión?',
    image: 'react-17-ya-esta-aqui/cover.png',
    url: 'react-17-ya-esta-aqui'
  },
  {
    slug: '/blog/la-nueva-transformacion-jsx-de-react',
    date: 'Septiembre 23, 2020',
    dateForISO: '9/23/2020',
    title: 'La nueva transformación JSX',
    description:
      'Si bien React 17 no trae nuevas funciones, brindará soporte para una nueva versión de la transformación JSX.',
    image: 'la-nueva-transformacion-jsx-de-react/cover.png',
    url: 'la-nueva-transformacion-jsx-de-react'
  },
  {
    slug: '/blog/se-viene-react-v17',
    date: 'Agosto 10, 2020',
    dateForISO: '08/10/2020',
    title: 'Se viene React v17.0: Sin nuevas funciones',
    description:
      'En el blog oficial de React se ha publicado el primer candidato a lanzamiento para React 17, luego de dos años y medio de un importante lanzamiento anterior.',
    image: 'se-viene-react-v17/cover.png',
    url: 'se-viene-react-v17'
  },
  {
    slug: '/blog/formatos-nativos-de-javascript-para-fechas',
    date: 'Marzo 18, 2020',
    dateForISO: '03/18/2020',
    title: 'Formatos Nativos de JavaScript para fechas',
    description:
      'Por mucho tiempo he usado Momentjs, y si bien ahora uso Luxon, he querido compartir este post para revisar 3 métodos nativos para formatear una fecha y hora.',
    image: 'formatos-nativos-de-javascript-para-fechas/cover.png',
    url: 'formatos-nativos-de-javascript-para-fechas'
  },
  {
    slug: '/blog/como-usar-standard-en-next',
    date: 'Marzo 9, 2020',
    dateForISO: '03/09/2020',
    title: '¿Cómo usar Standard en Next?',
    description:
      'Si alguna vez escuchaste, leíste o usaste Standardjs, te comparto una manera de cómo implementarlo en un proyecto con Nextjs.',
    image: 'como-usar-standard-en-next/cover.png',
    url: 'como-usar-standard-en-next'
  },
  {
    slug: '/blog/que-es-la-agilidad',
    date: 'Febrero 3, 2020',
    dateForISO: '02/03/2020',
    title: '¿Qué es la Agilidad?',
    description:
      'La agilidad es un tema muy recurrente en la actualidad, aunque viene de mucho más tiempo atrás. He querido hacer pequeña aproximación a lo que es la agilidad y cómo nos relacionamos con ella.',
    image: 'que-es-la-agilidad/cover.png',
    url: 'que-es-la-agilidad'
  }
]

export type GetPostsType = {
  slug: string
  date: string
  dateForISO: string
  title: string
  description: string
  image: string
  url: string
}[]

export function getPosts(): Promise<GetPostsType> {
  return Promise.resolve(posts)
}

export function getPostByUrl(url: string) {
  const post = posts.find(po => po.url === url)
  return post
}
