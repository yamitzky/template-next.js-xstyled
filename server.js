const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const PORT = parseInt(process.env.PORT || 3000)

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(PORT, '0.0.0.0', (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })

  const shutdown = () => {
    console.log('gracefully shutting down...')
    server.close(() => {
      console.log('server closed')
      process.exit(0)
    })
  }

  process.on('SIGTERM', shutdown)
  process.on('SIGINT', shutdown)
})
