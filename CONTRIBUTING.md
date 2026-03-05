# Contributing

Thanks for your interest in improving MyBank.

## Workflow

1. Open an issue before large changes.
2. Create a feature branch from `main`.
3. Keep pull requests focused and small.
4. Add or update tests and docs when behavior changes.

## Local checks

```bash
npm ci
npm run lint
npm run build
```

Backend checks:

```bash
cd backend
npm ci
npm test
```

## Commit style

Use clear, imperative commit messages (for example: `fix api validation for transfers`).

Maintainer: @valbot
