import fetch from 'node-fetch';
import crypto from 'crypto';

//Estas son mis claves publica y privada que me dio la web de marvel
const publicKey = 'f3ca6ddb38ef8db6951e93f72832555c';
const privateKey = '6a13084bded3c27394f171e008ed8672e282ddbc';

//Estoy generando el timestamp
const ts = new Date().getTime();

//Estoy creando el hash con las constantes anteriormente creadas
const hash = crypto.createHash('md5').update(ts + privateKey + publicKey).digest('hex');

const baseUrl = 'http://gateway.marvel.com/v1/public';

//Estoy consumiendo los personajes
const endpoint = '/characters';

//Estoy creando la url con autenticación
const url = `${baseUrl}${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

//Estoy haciendo la solicitud y en caso de que no tenga nada, me tira error
fetch(url)
  .then(response => {
    console.log('Respuesta recibida:', response.status);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Datos recibidos:', data);
    if (data.code === 'InvalidCredentials') {
      console.error('Las credenciales de API proporcionadas no son válidas.');
    } else {
      console.log(data);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
