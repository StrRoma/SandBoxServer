require('module-alias/register');
const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');
const { userValidator, loginValidator } = require('./services/validators');
const UserController = require('./controllers/users-controller');
const { verifyToken } = require('@sevices/auth/auth-service')

app.use(express.json());

app.use('/api/*', verifyToken);

/*app.get('/hello', (req, res, next) => {
    console.log('step 1');
    next();
}, (req, res, next) => {
    console.log('step 2');
    res.send('Hello');
});*/

app.post('/api/signup', userValidator, UserController.create);
app.post('/api/login', loginValidator, UserController.login);

app.listen(4000, () => {
    console.log('server started on 4000 port');
})