import { Strapi } from '@strapi/strapi';

export default ({ env }: { env: Strapi['config']['environment'] }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 1000000, // 1MB em bytes
      },
      localServer: {
        maxage: 300000 // Cache control in milliseconds (5 minutes)
      },
    },
  },
});