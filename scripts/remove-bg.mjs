import sharp from 'sharp'
import { readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const input = path.join(__dirname, '..', '..', 'Logos', 'cards hero.png')
const output = path.join(__dirname, '..', 'public', 'images', 'cards_hero_nobg.png')

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

// Threshold progressivo: pixels escuros/cinzas viram transparentes
// Aplica suavização nas bordas para evitar borda dura
for (let i = 0; i < data.length; i += 4) {
  const r = data[i]
  const g = data[i + 1]
  const b = data[i + 2]

  // Luminosidade do pixel
  const lum = 0.299 * r + 0.587 * g + 0.114 * b
  // Saturação: pixels laranja têm r alto, g médio, b baixo
  const isOrangeish = r > 120 && r > g * 1.3 && b < 100

  if (lum < 30) {
    // Fundo muito escuro → totalmente transparente
    data[i + 3] = 0
  } else if (lum < 60 && !isOrangeish) {
    // Cinza escuro que não é laranja → semi-transparente para suavizar borda
    data[i + 3] = Math.round((lum / 60) * 255)
  }
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png({ compressionLevel: 9 })
  .toFile(output)

console.log(`✅ Fundo removido → ${output}`)
