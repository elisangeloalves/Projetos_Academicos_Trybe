const frisby = require('frisby');
const fs = require('fs');
const path = require('path');

const postCrushMock = {
  name: 'Zendaya Maree',
  age: 24,
  id: 5,
  date: { rate: 5, datedAt: '25/09/2020' },
};

const url = 'http://localhost:3000';

describe('2 - Crie o endpoint POST /crush', () => {
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

  it('Será validado que é possível cadastrar um crush com sucesso', async () => {
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
          .post(`${url}/crush`, {
            name: 'Zendaya Maree',
            age: 24,
            date: { rate: 5, datedAt: '25/09/2020' },
          })
          .expect('status', 201)
          .then((responseCreate) => {
            const { json } = responseCreate;
            expect(json).toEqual(postCrushMock);
          });
      });
  });

  it('Será validado que não é possível cadastrar um crush sem nome', async () => {
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
          .post(`${url}/crush`, {
            age: 24,
            date: { rate: 5, datedAt: '25/09/2020' },
          })
          .expect('status', 400)
          .then((responseCreate) => {
            const { json } = responseCreate;
            expect(json.message).toBe('O campo "name" é obrigatório');
          });
      });
  });

  it('Será validado que não é possível cadastrar um crush com nome menor que 3 caracteres', async () => {
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
          .post(`${url}/crush`, {
            name: 'Oi',
            age: 24,
            date: { rate: 5, datedAt: '25/09/2020' },
          })
          .expect('status', 400)
          .then((responseCreate) => {
            const { json } = responseCreate;
            expect(json.message).toBe(
              'O "name" deve ter pelo menos 3 caracteres',
            );
          });
      });
  });

  it('Será validado que não é possível cadastrar um crush sem idade', async () => {
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
          .post(`${url}/crush`, {
            name: 'Zendaya Maree',
            date: { rate: 5, datedAt: '25/09/2020' },
          })
          .expect('status', 400)
          .then((responseCreate) => {
            const { json } = responseCreate;
            expect(json.message).toBe('O campo "age" é obrigatório');
          });
      });
  });

  it('Será validado que não é possível cadastrar um crush com idade menor de 18 anos', async () => {
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
          .post(`${url}/crush`, {
            name: 'Zendaya Maree',
            age: 17,
            date: { rate: 5, datedAt: '25/09/2020' },
          })
          .expect('status', 400)
          .then((responseCreate) => {
            const { json } = responseCreate;
            expect(json.message).toBe('O crush deve ser maior de idade');
          });
      });
  });

  it('Será validado que não é possível cadastrar um crush sem o campo date', async () => {
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
          .post(`${url}/crush`, {
            name: 'Zendaya Maree',
            age: 24,
          })
          .expect('status', 400)
          .then((responseCreate) => {
            const { json } = responseCreate;
            expect(json.message).toBe(
              'O campo "date" é obrigatório e "datedAt" e "rate" não podem ser vazios',
            );
          });
      });
  });

  it('Será validado que não é possível cadastrar um crush sem a chave rate', async () => {
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
          .post(`${url}/crush`, {
            name: 'Zendaya Maree',
            age: 24,
            date: { datedAt: '25/09/2020' },
          })
          .expect('status', 400)
          .then((responseCreate) => {
            const { json } = responseCreate;
            expect(json.message).toBe(
              'O campo "date" é obrigatório e "datedAt" e "rate" não podem ser vazios',
            );
          });
      });
  });

  it('Será validado que não é possível cadastrar um crush com rate menor que 1', async () => {
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
          .post(`${url}/crush`, {
            name: 'Zendaya Maree',
            age: 24,
            date: { rate: -1, datedAt: '25/09/2020' },
          })
          .expect('status', 400)
          .then((responseCreate) => {
            const { json } = responseCreate;
            expect(json.message).toBe(
              'O campo "rate" deve ser um inteiro de 1 à 5',
            );
          });
      });
  });

  it('Será validado que não é possível cadastrar um crush com rate maior que 5', async () => {
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
          .post(`${url}/crush`, {
            name: 'Zendaya Maree',
            age: 24,
            date: { rate: 7, datedAt: '25/09/2020' },
          })
          .expect('status', 400)
          .then((responseCreate) => {
            const { json } = responseCreate;
            expect(json.message).toBe(
              'O campo "rate" deve ser um inteiro de 1 à 5',
            );
          });
      });
  });

  it('Será validado que não é possível cadastrar um crush sem a chave datedAt', async () => {
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
          .post(`${url}/crush`, {
            name: 'Zendaya Maree',
            age: 24,
            date: { rate: 5 },
          })
          .expect('status', 400)
          .then((responseCreate) => {
            const { json } = responseCreate;
            expect(json.message).toBe(
              'O campo "date" é obrigatório e "datedAt" e "rate" não podem ser vazios',
            );
          });
      });
  });

  it('Será validado que não é possível cadastrar um crush com datedAt sem o formato "dd/mm/aaaa"', async () => {
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
          .post(`${url}/crush`, {
            name: 'Zendaya Maree',
            age: 24,
            date: { rate: 5, datedAt: '42-20-3333' },
          })
          .expect('status', 400)
          .then((responseCreate) => {
            const { json } = responseCreate;
            expect(json.message).toBe(
              'O campo "datedAt" deve ter o formato "dd/mm/aaaa"',
            );
          });
      });
  });

  it('Será validado que não é possível cadastrar um crush sem estar autorizado', async () => {
    await frisby
      .post(`${url}/login`, {
        body: {
          email: 'deferiascomigo@gmail.com',
          password: '12345678',
        },
      })
      .then(() =>
        frisby
          .post(`${url}/crush`, {
            name: 'Zendaya Maree',
            age: 17,
            date: { rate: 5, datedAt: '25/09/2020' },
          })
          .expect('status', 401)
          .then((responseCreate) => {
            const { json } = responseCreate;
            expect(json.message).toBe('Token não encontrado');
          }));
  });

  it('Será validado que não é possível cadastrar um crush com token inválido', async () => {
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
                Authorization: 99999999,
                'Content-Type': 'application/json',
              },
            },
          })
          .post(`${url}/crush`, {
            name: 'Zendaya Maree',
            age: 24,
            date: { rate: 5, datedAt: '20/10/2020' },
          })
          .expect('status', 401)
          .then((responseCreate) => {
            const { json } = responseCreate;
            expect(json.message).toBe('Token inválido');
          }));
  });
});
