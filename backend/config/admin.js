module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1dab44328646afabd6d60fe13d9a100d'),
  },
});
