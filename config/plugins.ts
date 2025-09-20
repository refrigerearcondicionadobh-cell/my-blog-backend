export default ({ env }: { env: { [key: string]: any } }) => ({
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