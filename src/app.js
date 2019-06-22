import React from "react"
import { Switch, Route } from "react-router-dom"
import { Helmet } from "react-helmet"

const App = props => (
  <Switch>
    <Route exact path="/">
      <div>
        <h1>Home</h1>
        <p>Este es un home muy completo y muy dramático</p>
        <button onClick={() => console.log("ESTOY LOGGEANDO")}>
          Loggeando
        </button>
      </div>
    </Route>
    <Route path="/about">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SOY UN ABOUT</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Soy el About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus
        quae perferendis architecto sequi modi consequatur quis alias blanditiis
        aut et eum eligendi dignissimos error hic, quos sunt sint cupiditate?
      </p>
    </Route>
    <Route>
      <h1>MENTIROSO!!!</h1>
      <p>Eso ni etsiste, nos vemos a la salida!!!</p>
    </Route>
  </Switch>
)

export default App
