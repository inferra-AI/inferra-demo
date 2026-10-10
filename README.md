# Inferra demo

A real, running Inferra org. Everything here is deployed by `git push`, nothing else.

- `.inferra/org.yaml`: the one file that defines the spaces and apps
- `api/`: a web server (built with buildpacks, no Dockerfile)
- `worker/`: a background process

Every commit on `main` shows a status per app: building, then live with its URL.
Open a branch and it gets its own preview copy; delete the branch and the preview goes away.

Env vars and secrets are set in this repo's GitHub Environments (`prod`, `preview`)
and sent to Inferra by `.github/workflows/inferra-env.yml`.

Live demo: https://inferralab.com/demo · read-only dashboard: https://api.dev.inferralab.com/demo
