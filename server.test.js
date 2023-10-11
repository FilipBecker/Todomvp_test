//Vi behöver inte testa servern när den är igång, 
//eftersom vi använder supertest för att
//simulera att servern är igång.

//Om vi vill kan vi börja med att bara
//prova att servern åtminstone existerar
//och svarar med 200 och en pong på vårt ping

const server = require('./server');
const request = require('supertest');

test('Server is alive', async () => {
    const response = await request(server).get('/ping');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('pong');
});

//Vi fortsätter med att testa hämta alla todos

describe('Todo Routes', () => {
    it('should get all todos', async () => {
        const response = await request(server).get('/todos');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    })
});