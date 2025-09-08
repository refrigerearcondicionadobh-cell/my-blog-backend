module.exports = ({
  env
}) => ({
  // ... outras configurações de plugins, se houver

  cors: {
    enabled: true,
    origin: [
      // Desenvolvimento local
      'http://localhost:3000',
      'http://localhost:5173',
      'http://localhost:8080',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:5173',
      'http://127.0.0.1:8080',

      // Produção - seus domínios
      'https://climatbh.com.br',
      'https://www.climatbh.com.br',
      'http://climatbh.com.br',
      'http://www.climatbh.com.br',

      // Padrão para domínios do Manus (regex )
      /^https:\/\/\d+-[a-zA-Z0-9]+-[a-zA-Z0-9]+\.manus\.computer$/,

      // Variável de ambiente para outras origens, se necessário
      env('CORS_ORIGIN_EXTRA', '' ).split(',').filter(Boolean),
    ],
    headers: [
      'Content-Type',
      'Authorization',
      'Accept',
      'Origin',
      'X-Requested-With',
      'Access-Control-Request-Method',
      'Access-Control-Request-Headers',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH', 'HEAD'],
    credentials: true,
    maxAge: 86400,
  },
});
