import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello Node'
})

app
  .listen({
    port: 3335,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
