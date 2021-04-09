export default function ({ $config }, inject) {
  inject('appConfig', {
    title: 'My Website',
    menuItems: [
      {
        label: 'Beranda',
        to: '/',
        exact: true
      },
      // {
      //   label: 'Tentang',
      //   to: '/about'
      // },
      {
        label: 'Blog',
        to: '/blog'
      }
      // {
      //   label: 'Kontak',
      //   to: '/contact'
      // }
    ]
  })

  inject('strapiURL', function (url) {
    return `${$config.strapiURL}${url}`
  })
}
