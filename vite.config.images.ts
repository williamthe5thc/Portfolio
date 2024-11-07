import imagemin from 'vite-plugin-imagemin';

export const imageminPlugin = imagemin({
  gifsicle: {
    optimizationLevel: 7,
    interlaced: false
  },
  optipng: {
    optimizationLevel: 7
  },
  mozjpeg: {
    quality: 70
  },
  pngquant: {
    quality: [0.7, 0.8],
    speed: 4
  },
  svgo: {
    plugins: [
      {
        name: 'removeViewBox'
      },
      {
        name: 'removeEmptyAttrs',
        active: false
      }
    ]
  }
});