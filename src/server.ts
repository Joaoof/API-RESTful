import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*') // Qr buscar todos os dados das tabela

  return tables
})

app
  .listen({
    port: 3335,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
