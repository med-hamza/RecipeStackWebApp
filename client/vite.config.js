import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";
const path = require('path')



export default defineConfig({
    envPrefix: 'REACT_APP_',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    build: {
        outDir: "build",
        brotliSize: true,
        rollupOptions: {

        },
    },
    plugins: [
        react(),
        envCompatible(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
                dimensions: false, // Remove width and height from SVGs
            },
        }),
    ],
    server: {
        port: 3000,
        proxy: {
            '/users': {
                target: 'http://localhost:4000',
                changeOrigin: true
            }
        }
    },
    optimizeDeps: {
        include: ['sweetalert2', 'react-paginate'],
        exclude: ['some-package-that-does-not-bundle-well'],
        entries: ['./path/to/main/entrypoint.js']
    },

});
