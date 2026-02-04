import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-primary-600">
        SAIS Frontend Configurado! 🚀
      </h1>
    </div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster position="top-right" />
    </>
  )
}

export default App
