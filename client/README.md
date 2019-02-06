# AppTaco

AppTaco makes it easy to deploy AppDynamics configs, in seconds.

You can browse a list of existing configs (we call them tacos, since it packages together goodness), and deploy them to your AppD controller.

Use AppTaco here: https://sys13.github.io/apptaco

# Libraries

- [react](https://reactjs.org/)
- [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
- [Bootstrap 4](http://getbootstrap.com/)

# Development

- run the client by `cd client`, then `npm run dev`
- run the server by `cd server`, then `npm start`

# Deploy

AppTaco is already deployed to https://sys13.github.io/apptaco

[GitHub Deploy Instructions](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages)

**Client Deploy**

- in `/client` create a file named `.env.production` and set `REACT_APP_SERVER_URL=` to the URL of your server
- `npm run deploy`.

**Server Deploy**

- `./deployServer.sh` or `./deployServerForce.sh`

# Maintainer

You can contact the AppTaco team at apptaco@appdynamics.com
