import { Divide, Percent } from 'phosphor-react'
import { Button } from './components/Button'

function App() {

  return (
    <div className="container bg-violet-400 h-screen w-screen">
      <div className="flex-col content-center p-8 w-96 h-auto bg-gray-900 rounded-3xl ">
        <div>
          1+1
        </div>
        <div>
          <div>
            =
          </div>
          <div>
            2
          </div>
        </div>
        <div className='flex flex-col space-y-3'>
          <div className='flex space-x-3'>
            <Button>
              <span className='text-violet-500'>
                CE
              </span>
            </Button>
            <Button>
              <span className='text-white'>
                C
              </span>
            </Button>
            <Button>
              <span className='text-white'>
                %
              </span>
            </Button>
            <Button variant='purple'>
              <span className='text-white text-3xl'>
                ÷
              </span>
            </Button>
          </div>
          <div className='flex space-x-3'>
            <Button>
              <span className='text-violet-500'>
                7
              </span>
            </Button>
            <Button>
              <span className='text-white'>
                8
              </span>
            </Button>
            <Button>
              <span className='text-white'>
                9
              </span>
            </Button>
            <Button variant='purple'>
              <span className='text-white text-3xl'>
                x
              </span>
            </Button>
          </div>
          <div className='flex space-x-3'>
            <Button>
              <span className='text-violet-500'>
                4
              </span>
            </Button>
            <Button>
              <span className='text-white'>
                5
              </span>
            </Button>
            <Button>
              <span className='text-white'>
                6
              </span>
            </Button>
            <Button variant='purple'>
              <span className='text-white text-3xl'>
                -
              </span>
            </Button>
          </div>
          <div className='flex space-x-3'>
            <Button>
              <span className='text-violet-500'>
                1
              </span>
            </Button>
            <Button>
              <span className='text-white'>
                2
              </span>
            </Button>
            <Button>
              <span className='text-white'>
                3
              </span>
            </Button>
            <Button variant='purple'>
              <span className='text-white text-3xl'>
                +
              </span>
            </Button>
          </div>
          <div className='flex space-x-3'>
            <Button>
              <span className='text-violet-500'>
                +/-
              </span>
            </Button>
            <Button>
              <span className='text-white'>
                0
              </span>
            </Button>
            <Button>
              <span className='text-white'>
                ;
              </span>
            </Button>
            <Button variant='purple'>
              <span className='text-white text-3xl'>
                =
              </span>
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
