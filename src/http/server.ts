import fastify from 'fastify';
import { createPoll } from './routes/create-poll';
import { getPoll } from './routes/get-poll';
import fastifyCookie from '@fastify/cookie';
import fastifyWebsocket from '@fastify/websocket';
import { pollResults } from '../ws/poll-results';

const app = fastify();

app.register(fastifyCookie, {
  secret: 'polls-app-nlw',
  hook: 'onRequest',
  parseOptions: {},
});

app.register(fastifyWebsocket);

app.register(createPoll);
app.register(getPoll);

app.register(pollResults);

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!');
});
