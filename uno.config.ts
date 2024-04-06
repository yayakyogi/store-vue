// uno.config.ts
import { defineConfig, presetIcons, presetMini } from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
      bgNatural: '#FDFDFD',
      primary: '#D45FB8',
      pink: '#FDE9F9'
    }
  },
  presets: [
    presetMini(),
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then((i) => i.default)
      }
    })
    // presetAttributify(),
    // presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     // ...
    //   },
    // }), /
  ],
  transformers: [
    // transformerDirectives(),
    // transformerVariantGroup()
  ]
})
