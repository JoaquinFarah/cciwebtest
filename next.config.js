/** @type {import('next').NextConfig} */
const nextConfig = {
  // trailingSlash: true, // Asegura que las rutas terminen con /
  // output: "export", // Activa la generación de un sitio estático
  images: {
    unoptimized: true,
    domains: ['https://www.ccimendoza.com/'],
  },
};

module.exports = nextConfig;
