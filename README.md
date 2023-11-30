```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

```
Right now, a basic database is included in the first commit but I think moving forward
we will be better to have our own local db and not include this file in commits.

When you pull the code there might be a bd file already.

If not follow the steps to set up the db locally.

To set up the database:
after pulling the code and running npm install,
run npm run generate
this might generate a migration if there have been changes to the schema
then run run migrate
this should establish the database for you locally!
```
