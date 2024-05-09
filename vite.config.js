import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/k24tiimi3frontend/',
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
    },
})