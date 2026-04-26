/**
 * Compress project preview images → public/previews/*.webp
 *
 * Drop sources in src/assets/ (see filenames in `jobs` below), then:
 *   npm run optimize:previews
 */
import sharp from 'sharp'
import { mkdir, stat } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { existsSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const jobs = [
  {
    input: join(root, 'src/assets/githubfinder.jpg'),
    output: join(root, 'public/previews/github-finder.webp'),
    maxWidth: 960,
    quality: 78,
  },
  {
    input: join(root, 'src/assets/woodrun.jpg'),
    output: join(root, 'public/previews/wood-run.webp'),
    maxWidth: 960,
    quality: 78,
  },
  {
    input: join(root, 'src/assets/ProductivityDashboard.png'),
    output: join(root, 'public/previews/productivity-dashboard.webp'),
    maxWidth: 1200,
    quality: 78,
  },
]

async function optimize({ input, output, maxWidth, quality }) {
  if (!existsSync(input)) {
    console.warn('Skip (missing):', input.replace(root + '/', ''))
    return
  }
  let img = sharp(input).rotate()
  const { width } = await img.metadata()
  if (width && width > maxWidth) {
    img = img.resize(maxWidth, null, {
      fit: 'inside',
      withoutEnlargement: true,
    })
  }
  await mkdir(dirname(output), { recursive: true })
  await img.webp({ quality, effort: 6 }).toFile(output)
  const st = await stat(output)
  const out = await sharp(output).metadata()
  console.log(
    output.replace(root + '/', ''),
    '→',
    st.size,
    'bytes',
    out.width,
    '×',
    out.height,
  )
}

for (const job of jobs) {
  await optimize(job)
}

console.log('Done.')
