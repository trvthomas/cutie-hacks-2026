// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Fraunces",
        cssVariable: "--font-fraunces",
        styles: ["normal"],
        weights: ["400 700"],
        fallbacks: ["sans-serif"]
    },
    {
        provider: fontProviders.fontsource(),
        name: "Griffy",
        cssVariable: "--font-griffy",
        styles: ["normal"],
        weights: ["400"],
        fallbacks: ["serif"]
    }]
});