## Routes

Vamos começar instalando o react-router-dorm com o seguinte comando:

```bash
npm install react-router-dom@6
```

Criar um arquivo para o componente Routes, ´Routes.jsx´

```javascript
import { Routes, Route } from "react-router-dom";
```

Implementar o componente neste molde:

```javascript
export default props => (
  <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/users' element={<UserCrud/>} />
    <Route path='*' element={<Home/>} />
  </Routes>
);
```

O componente que será exibido é passado como **props**.

Agora no arquivo `App.jsx` fazer a importação:

```javascript
import { BrowserRouter } from 'react-router-dom'
```

Substituindo o componente `<Home/>` pelo `<Routes />`, podemos exibir o conteúdo do endereço acessado no template, pois o Routes fará a substituição dos componentes e exibirá o Home apenas na página inicial. O arquivo ficou assim:

```javascript
const App = props =>
  <BrowserRouter>
    <div className="App">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
export default App
```