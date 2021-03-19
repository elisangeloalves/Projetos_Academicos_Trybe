const frisby = require('frisby');
const fs = require('fs');
const path = require('path');

const url = 'http://localhost:3000';

describe('5 - Crie o endpoint PUT /crush/:id', () => {
  beforeEach(() => {
    const crushMock = fs.readFileSync(
      path.join(__dirname, 'seed.json'),
      'utf8',
    );

    fs.writeFileSync(
      path.join(__dirname, '..', 'crush.json'),
      crushMock,
      'utf8',
    );
  });

  it('Será validado que é possível editar um crush com sucesso', async () => {
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
          .put(`${url}/crush/${resultCrush.id}`, {
            name: 'Zendaya',
            age: 25,
            date: {
              datedAt: '24/10/2020',
              rate: 4,
            },
          })
          .expect('status', 200)
          .then((responseUpdate) => {
            const { json } = responseUpdate;
            expect(json.id).toBe(resultCrush.id);
            expect(json.name).toBe('Zendaya');
            expect(json.age).toBe(25);
            expect(json.date.datedAt).toBe('24/10/2020');
            expect(json.date.rate).toBe(4);
          });
      });
  });

  it('Será validado que não é possível editar um crush sem nome', async () => {
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
          .put(`${url}/crush/${resultCrush.id}`, {
            age: 25,
            date: {
              datedAt: '24/10/2020',
              rate: 4,
            },
          })
          .expect('status', 400)
          .then((responseUpdate) => {
            const { json } = responseUpdate;
            expect(json.message).toBe('O campo "name" é obrigatório');
          });
      });
  });

  it('Será validado que não é possível editar um crush com nome menor que 3 caracteres', async () => {
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
          .put(`${url}/crush/${resultCrush.id}`, {
            name: 'Ze',
            age: 25,
            date: {
              datedAt: '24/10/2020',
              rate: 4,
            },
          })
          .expect('status', 400)
          .then((responseUpdate) => {
            const { json } = responseUpdate;
            expect(json.message).toBe(
              'O "name" deve ter pelo menos 3 caracteres',
            );
          });
      });
  });

  it('Será validado que não é possível editar um crush sem idade', async () => {
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
          .put(`${url}/crush/${resultCrush.id}`, {
            name: 'Zendaya',
            date: {
              datedAt: '24/10/2020',
              rate: 4,
            },
          })
          .expect('status', 400)
          .then((responseUpdate) => {
            const { json } = responseUpdate;
            expect(json.message).toBe('O campo "age" é obrigatório');
          });
      });
  });

  it('Será validado que não é possível editar um crush com idade menor de 18 anos', async () => {
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
          .put(`${url}/crush/${resultCrush.id}`, {
            name: 'Zendaya',
            age: 17,
            date: {
              datedAt: '24/10/2020',
              rate: 4,
            },
          })
          .expect('status', 400)
          .then((responseUpdate) => {
            const { json } = responseUpdate;
            expect(json.message).toBe('O crush deve ser maior de idade');
          });
      });
  });

  it('Será validado que não é possível editar um crush sem o campo date', async () => {
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
          .put(`${url}/crush/${resultCrush.id}`, {
            name: 'Zendaya',
            age: 25,
          })
          .expect('status', 400)
          .then((responseUpdate) => {
            const { json } = responseUpdate;
            expect(json.message).toBe(
              'O campo "date" é obrigatório e "datedAt" e "rate" não podem ser vazios',
            );
          });
      });
  });

  it('Será validado que não é possível editar um crush sem a chave rate', async () => {
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
          .put(`${url}/crush/${resultCrush.id}`, {
            name: 'Zendaya',
            age: 25,
            date: {
              datedAt: '24/10/2020',
            },
          })
          .expect('status', 400)
          .then((responseUpdate) => {
            const { json } = responseUpdate;
            expect(json.message).toBe(
              'O campo "date" é obrigatório e "datedAt" e "rate" não podem ser vazios',
            );
          });
      });
  });

  it('Será validado que não é possível editar um crush com rate menor que 1', async () => {
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
          .put(`${url}/crush/${resultCrush.id}`, {
            name: 'Zendaya',
            age: 25,
            date: {
              datedAt: '24/10/2020',
              rate: 0,
            },
          })
          .expect('status', 400)
          .then((responseUpdate) => {
            const { json } = responseUpdate;
            expect(json.message).toBe(
              'O campo "rate" deve ser um inteiro de 1 à 5',
            );
          });
      });
  });

  it('Será validado que não é possível editar um crush com rate maior que 5', async () => {
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
          .put(`${url}/crush/${resultCrush.id}`, {
            name: 'Zendaya',
            age: 25,
            date: {
              datedAt: '24/10/2020',
              rate: 7,
            },
          })
          .expect('status', 400)
          .then((responseUpdate) => {
            const { json } = responseUpdate;
            expect(json.message).toBe(
              'O campo "rate" deve ser um inteiro de 1 à 5',
            );
          });
      });
  });

  it('Será validado que não é possível editar um crush sem a chave datedAt', async () => {
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
          .put(`${url}/crush/${resultCrush.id}`, {
            name: 'Zendaya',
            age: 25,
            date: {
              rate: 4,
            },
          })
          .expect('status', 400)
          .then((responseUpdate) => {
            const { json } = responseUpdate;
            expect(json.message).toBe(
              'O campo "date" é obrigatório e "datedAt" e "rate" não podem ser vazios',
            );
          });
      });
  });

  it('Será validado que não é possível editar um crush com datedAt sem o formato "dd/mm/aaaa"', async () => {
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
          .put(`${url}/crush/${resultCrush.id}`, {
            name: 'Zendaya',
            age: 25,
            date: {
              datedAt: '42-20-3333',
              rate: 4,
            },
          })
          .expect('status', 400)
          .then((responseUpdate) => {
            const { json } = responseUpdate;
            expect(json.message).toBe(
              'O campo "datedAt" deve ter o formato "dd/mm/aaaa"',
            );
          });
      });
  });

  it('Será validado que não é possível editar um crush sem estar autorizado', async () => {
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
          .put(`${url}/crush/${resultCrush.id}`, {
            name: 'Zendaya',
            age: 25,
            date: {
              datedAt: '24/10/2020',
              rate: 4,
            },
          })
          .expect('status', 401)
          .then((responseUpdate) => {
            const { json } = responseUpdate;
            expect(json.message).toBe('Token não encontrado');
          }));
  });

  it('Será validado que não é possível editar um crush com token inválido', async () => {
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
          .setup({
            request: {
              headers: {
                Authorization: '9999999',
                'Content-Type': 'application/json',
              },
            },
          })
          .put(`${url}/crush/${resultCrush.id}`, {
            name: 'Zendaya',
            age: 25,
            date: {
              datedAt: '24/10/2020',
              rate: 4,
            },
          })
          .expect('status', 401)
          .then((responseUpdate) => {
            const { json } = responseUpdate;
            expect(json.message).toBe('Token inválido');
          }));
  });
});
