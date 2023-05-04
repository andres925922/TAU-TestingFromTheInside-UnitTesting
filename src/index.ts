import express from 'express'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
    // _ ignora el parametro en typescript
    console.log('page pinged here' + new Date().toLocaleDateString());
    res.send('pong');
});

app.listen(PORT, () => {
    console.log('Server working in '+PORT)
})
