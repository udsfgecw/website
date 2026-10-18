# Automatic deployment

Target address: **https://udsfgecw.github.io/**

GitHub requires a user-site repository to be named `udsfgecw.github.io`. The current `udsfgecw/website` repository must first be renamed by its owner:

1. Open https://github.com/udsfgecw/website/settings.
2. Rename the repository to `udsfgecw.github.io`.
3. Under Settings → Pages, keep **GitHub Actions** as the publishing source.
4. Update the local remote: `git remote set-url origin https://github.com/udsfgecw/udsfgecw.github.io.git`.
5. Commit and push the website and workflow changes to `main`.

The connected account has write access but not admin access, so it cannot perform the repository rename.

`.github/workflows/deploy.yml` installs dependencies and builds on pull requests and pushes to `main`. Pushes to `main` in `udsfgecw/udsfgecw.github.io` publish the result to GitHub Pages. Manual runs on `main` can also deploy. Publishing is skipped while the repository is still named `website`.

No Vercel credentials or additional repository secrets are needed. Deployment uses GitHub’s built-in token. The site builds with `/` as its base path, with no `/website/` prefix. Image paths use Vite’s `BASE_URL`; HTML uses `%BASE_URL%`.

To validate locally:

```sh
npm ci
npm run build
npm run preview
```

GitHub’s repository naming requirement: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
