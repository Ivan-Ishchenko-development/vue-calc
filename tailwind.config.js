module.exports = {
  theme: {
    colors: {
      'white': 'var(--color-white)',
      'primary': 'var(--color-primary)',
      'primary-light': 'var(--color-primary-light)',
      'secondary': 'var(--color-secondary)',
      'body': 'var(--color-body)',
      'fill-dark': 'var(--color-fill-dark)',
      'fill-light': 'var(--color-fill-light)',
      'highlight-1': 'var(--color-highlight-1)',
      'highlight-2': 'var(--color-highlight-2)',
      'highlight-3': 'var(--color-highlight-3)',
      'highlight-4': 'var(--color-highlight-4)',
      'misc-1': 'var(--color-misc-1)',
      'misc-2': 'var(--color-misc-2)',
    },
    fontFamily: {
      body: ['Baloo Chettan 2'],
      label: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}
