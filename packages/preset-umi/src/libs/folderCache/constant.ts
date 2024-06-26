export const DEFAULT_SRC_IGNORES = [
  '**/*.d.ts',
  '**/*.{test,spec}.{js,ts,jsx,tsx}',
  '**/cypress/**',
  '**/.umi-production/**',
  '**/.umi-test/**',
  '**/node_modules/**',
  '**/.git/**',
  '**/dist/**',
  '**/coverage/**',
  '**/jest.config.{ts,js}',
  '**/jest-setup.{ts,js}',
];

export const possibleExtUsingEmptyLoader = {
  '.aac': 'empty',
  '.css': 'empty',
  '.less': 'empty',
  '.sass': 'empty',
  '.scss': 'empty',
  '.eot': 'empty',
  '.flac': 'empty',
  '.gif': 'empty',
  '.htm': 'empty',
  '.html': 'empty',
  '.ico': 'empty',
  '.icon': 'empty',
  '.jpeg': 'empty',
  '.jpg': 'empty',
  '.empty': 'empty',
  '.mdx': 'empty',
  '.mp3': 'empty',
  '.mp4': 'empty',
  '.ogg': 'empty',
  '.otf': 'empty',
  '.png': 'empty',
  '.svg': 'empty',
  '.ttf': 'empty',
  '.wav': 'empty',
  '.webm': 'empty',
  '.webp': 'empty',
  '.woff': 'empty',
  '.woff2': 'empty',
} as const;
