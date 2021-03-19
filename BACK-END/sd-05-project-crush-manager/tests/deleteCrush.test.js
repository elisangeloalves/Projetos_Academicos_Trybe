const frisby = require('frisby');
const fs = require('fs');
const path = require('path');

const url = 'http://localhost:3000';

describe('6 - Crie o endpoint DELETE /crush/:id', () => {
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

  it('Será validado que é possível deletar um crush com sucesso', async () => {
    let resultCrush;

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
            name: 'Zendaya Maree',
            age: 24,
            date: {
              datedAt: '25/09/2020',
              rate: 5,
            },
          })
          .expect('status', 201)
          .then((responseCreate) => {
            const { body } = responseCreate;
            resultCrush = JSON.parse(body);
          });
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
          .delete(`${url}/crush/${resultCrush.id}`)
          .expect('status', 200)
          .then((responseDelete) => {
            const { json } = responseDelete;
            expect(json.message).toBe('Crush deletado com sucesso');
          });
      });
  });

  it('Será validado que não é possível deletar um crush sem estar autorizado', async () => {
    let resultCrush;

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
            name: 'Zendaya Maree',
            age: 24,
            date: {
              datedAt: '25/09/2020',
              rate: 5,
            },
          })
          .expect('status', 201)
          .then((responseCreate) => {
            const { body } = responseCreate;
            resultCrush = JSON.parse(body);
          });
      });

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
          .delete(`${url}/crush/${resultCrush.id}`, {
            name: 'Zendaya',
            age: 25,
            date: {
              datedAt: '24/10/2020',
              rate: 4,
            },
          })
          .expect('status', 401)
          .then((responseDelete) => {
            const { json } = responseDelete;
            expect(json.message).toBe('Token não encontrado');
          }));
  });

  it('Será validado que não é possível deletar um crush com token inválido', async () => {
    let resultCrush;

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
            name: 'Rihanna',
            age: 32,
            date: { datedAt: '23/10/2020', rate: 5 },
          })
          .expect('status', 201)
          .then((responseCreate) => {
            const { body } = responseCreate;
            resultCrush = JSON.parse(body);
          });
      });

    await frisby
      .setup({
        request: {
          headers: {
            Authorization: '99999999',
            'Content-Type': 'application/json',
          },
        },
      })
      .delete(`${url}/crush/${resultCrush.id}`)
      .expect('status', 401)
      .then((responseDelete) => {
        const { json } = responseDelete;
        expect(json.message).toBe('Token inválido');
      });
  });
});
