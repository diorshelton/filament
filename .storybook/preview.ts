import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'
import '../src/filament.css'

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'theme-light',
        dark: 'theme-dark',
      },
      defaultTheme: 'light',
    }),
  ],
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
}

export default preview
