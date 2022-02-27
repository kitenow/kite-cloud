buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api',
    '@nuxtjs/pwa',
    '@nuxtjs/device',
    '@nuxtjs/apollo',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@aceforth/nuxt-optimized-images',
    'nuxt-client-init-module',
    [
        '@nuxtjs/dayjs',
        {
            locales: ['en', 'ko'],
            defaultLocale: 'ko',
        },
    ],
],

    modules
:
[],
    build
:
{
    standalone: true,
    // 생략
}