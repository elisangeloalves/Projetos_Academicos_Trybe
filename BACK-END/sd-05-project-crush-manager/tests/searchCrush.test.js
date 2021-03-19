const frisby = require('frisby');
const fs = require('fs');
const path = require('path');
const crushsSeed = require('./seed.json');

const url = 'http://localhost:3000';

describe('7 - Crie o endpoint GET /crush/search?q=searchTerm', () => {
  beforeEach(() => {
    const crushSeed = fs.readFileSync(
      path.join(__dirname, 'seed.json'),
      'utf8',
    );

    fs.writeFileSync(
      path.join(__dirname, '..', 'crush.json'),
      crushSeed,
      'utf8',
    );
  });

  it('Será validado que é possível fazer uma busca por termo com sucesso', async () => {
    await frisby
      .post(`${url}/login`, {
        email: 'deferiascomigo@gmail.com',
        password: '12345678',
      })
      .expect('status', 200)
      .then((responseLogin) => {
        const { body } = responseLogin;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                'Content-Type': 'application/json',
              },
            },
          })
          .post(`${url}/crush`, {
            name: 'Miley Cyrus',
            age: 27,
            date: {
              datedAt: '25/09/2020',
              rate: 4,
            },
          })
          .expect('status', 201);
      });

    await frisby
      .post(`${url}/login`, {
        email: 'deferiascomigo@gmail.com',
        password: '12345678',
      })
      .expect('status', 200)
      .then((responseLogin) => {
        const { body } = responseLogin;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                'Content-Type': 'application/json',
              },
            },
          })
          .get(`${url}/crush/search?q=M`)
          .expect('status', 200)
          .then((responseGet) => {
            const { json } = responseGet;
            expect(json).toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  name: 'Madonna',
                  age: 62,
                  id: 1,
                  date: { datedAt: '23/10/2020', rate: 5 },
                }),
                expect.objectContaining({
                  name: 'Miley Cyrus',
                  age: 27,
                  date: {
                    datedAt: '25/09/2020',
                    rate: 4,
                  },
                }),
              ]),
            );
          });
      });
  });

  it('Será validade que o endpoit retonar um array com todos os crushs caso o param seja vazio', async () => {
    await frisby
      .post(`${url}/login`, {
        body: {
          email: 'deferiascomigo@gmail.com',
          password: '12345678',
        },
      })
      .then((responseLogin) => {
        const { body } = responseLogin;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                'Content-Type': 'application/json',
              },
            },
          })
          .get(`${url}/crush`)
          .expect('status', 200)
          .then((responseGet) => {
            const { json } = responseGet;
            expect(json).toEqual(crushsSeed);
          });
      });
  });

  it('Será validado que o endpoint retorna um array vazio caso o param não seja passado', async () => {
    fs.writeFileSync(path.join(__dirname, '..', 'crush.json'), '[]', 'utf8');

    await frisby
      .post(`${url}/login`, {
        body: {
          email: 'deferiascomigo@gmail.com',
          password: '12345678',
        },
      })
      .then((responseLogin) => {
        const { body } = responseLogin;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                'Content-Type': 'application/json',
              },
            },
          })
          .get(`${url}/crush`)
          .expect('status', 200)
          .then((responseGet) => {
            const { json } = responseGet;
            expect(json).toEqual([]);
          });
      });
  });

  it('Será validado que não é possível fazer uma busca por termo sem estar autorizado', async () => {
    await frisby
      .post(`${url}/login`, {
        body: {
          email: 'deferiascomigo@gmail.com',
          password: '12345678',
        },
      })
      .then(() =>
        frisby
          .setup()
          .get(`${url}/crush/search?q=Z`)
          .expect('status', 401)
          .then((responseGet) => {
            const { json } = responseGet;
            expect(json.message).toBe('Token não encontrado');
          }));
  });

  it('Será validado que não é possível fazer uma busca por termo com token inválido', async () => {
    await frisby
      .post(`${url}/login`, {
        body: {
          email: 'deferiascomigo@gmail.com',
          password: '12345678',
        },
      })
      .then(() =>
        frisby
          .setup({
            request: {
              headers: {
                Authorization: '99999999',
                'Content-Type': 'application/json',
              },
            },
          })
          .get(`${url}/crush/search?=Ma`)
          .expect('status', 401)
          .then((responseGet) => {
            const { json } = responseGet;
            expect(json.message).toBe('Token inválido');
          }));
  });
});
