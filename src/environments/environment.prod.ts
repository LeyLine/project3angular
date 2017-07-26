export const environment = {
  production: true,
  apiBase:''
};

// in agular

// add fileupload module into imports

// ng build -prod --aot
// we will move all the dif into express public

// add fileupload module into imports 
// take everything from dis into express app public folder
// git add/commit since heroku takes it from commits
// in express, index js delete stuff inbetween the functions
// in express after routes add app.use((req, res, next) =>{
// res.sendFile(__dirname + '/public/index.html');
// });
