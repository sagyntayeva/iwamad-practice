// Creates docs/404.html as a copy of the built index.html.
// GitHub Pages serves 404.html for unknown paths (e.g. /<repo>/skills on refresh),
// so the SPA loads and React Router renders the right page.
// Uses only Node's fs/path, so it works on Windows, macOS and Linux.
import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const outDir = 'docs'
const indexHtml = join(outDir, 'index.html')

if (!existsSync(indexHtml)) {
  console.error(`postbuild: ${indexHtml} not found - did the build succeed?`)
  process.exit(1)
}

copyFileSync(indexHtml, join(outDir, '404.html'))
console.log(`postbuild: created ${join(outDir, '404.html')}`)
