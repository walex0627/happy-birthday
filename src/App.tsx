import './App.css'
import { GalleryBirthday } from './components/GalleryBirthday.tsx'
import { BirthdayMessage } from './components/HappyBirthdayMessage.tsx'
import { ValentineDay } from './components/ValentineDay.tsx'


function App() {


  return (
    <>
      <BirthdayMessage />
      <GalleryBirthday/>
      <ValentineDay/>
    </>
  )
}

export default App
