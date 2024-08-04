import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



const anotherElement = (
  <a href="www.google.com">visit to google</a>
)
const reactElement = React.createElement(
  'a',
  {
    href : "https://www.facebook.com", 
    target : "_blank"
  },
  "Visit to Facebook.com"

)




ReactDOM.createRoot(document.getElementById('root')).render(
<App/>
)
