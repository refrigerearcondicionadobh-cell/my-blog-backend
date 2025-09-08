console.log("🚀 CARREGANDO middlewares.js...");

module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: function (origin, callback ) {
        // Permitir requisições sem origin (ex: aplicações mobile, Postman, testes)
        if (!origin) return callback(null, true);
        
        // Lista de origens permitidas para desenvolvimento e produção
        const allowedOrigins = [
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
        ];
        
        // Padrão para domínios do Manus (regex )
        const manusPattern = /^https:\/\/\d+-[a-zA-Z0-9]+-[a-zA-Z0-9]+\.manus\.computer$/;
        
        // Verificar se a origem é permitida
        if (allowedOrigins.includes(origin ) || manusPattern.test(origin)) {
          console.log('✅ CORS: Origem permitida:', origin);
          return callback(null, true);
        }
        
        // Log para debug de origens não permitidas
        console.log('🚫 CORS: Origem não permitida:', origin);
        return callback(new Error('Não permitido pelo CORS'), false);
      },
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH', 'HEAD'],
      headers: [
        'Content-Type',
        'Authorization',
        'Accept',
        'Origin',
        'X-Requested-With',
        'Access-Control-Request-Method',
        'Access-Control-Request-Headers',
      ],
      credentials: true,
      maxAge: 86400, // 24 horas
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
