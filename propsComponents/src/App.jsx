import { useState } from 'react'

import './App.css'
import { TeamsOne } from './components/card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='text-4xl font-bold  bg-orange-400 rounded-xl text-black p-4'>Anime Hub</h1>
      <TeamsOne task="design"  btn ="View Our Team" img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3J7czRvx2L-uSIVL8KvVQRnR1HloJ_RiOQ&s" img2="https://qph.cf2.quoracdn.net/main-qimg-494b8bb536352a412ae9f639de385317-lq" img3="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/naruto-uzumaki-only-kills-one-villain-in-the-entire-series-featured.jpg"/>
      <TeamsOne  task = "made" img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9RiCn_q7Sb-CrhRj-aimuCB-Qvd5Yc3Ecg&s" img2="https://qph.cf2.quoracdn.net/main-qimg-cb4cbec723c67e9340bcc985cadbfb50-pjlq" img3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6lP8LkB-b6h0CHtOXlyHsQ7YgtyogP0Flg&s"/>
    </>
  )
}

export default App
