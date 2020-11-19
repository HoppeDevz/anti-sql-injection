import express, { Request, Response } from 'express';
import cors from 'cors';
import migrations from './src/migrations/migration';
import routes from './src/Routes/routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

migrations.CreateUsersTable().then(() => {
    migrations.InsertAdminUserInUsersTable();
});

app.listen(3333, () => {
    console.log("Server is running in port 3333");
})