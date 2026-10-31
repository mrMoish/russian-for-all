import { defineConfig } from '@lhci/cli';

export default defineConfig({
  ci: {
    collect: {
      staticDistDir: './dist',
      url: [
        'http://localhost:8080/en/',
        'http://localhost:8080/zh/',
        'http://localhost:8080/ar/',
        'http://localhost:8080/es/'
      ]
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }]
      }
    }
  }
});
