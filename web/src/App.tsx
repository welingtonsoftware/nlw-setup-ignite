import './styles/global.css';

import { Habit } from './components/Habit';

import logoImage from './assets/logo.svg'

export function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col gap-16'></div>
      <div className='w-ful max-w-5xl mx-auto flex items-center justify-between'>
        <img src={logoImage} alt="Habits" />

        <button
          type='button'
          className='border border-violet-500'
        >
          Novo hábito
        </button>
      </div>

    </div>
  )
}