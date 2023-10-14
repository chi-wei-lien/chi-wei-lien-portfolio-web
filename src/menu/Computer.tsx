import ComputerFile from './ComputerFile'

const Computer = () => {
  return (
    <div className='overflow-hidden snap-start'>
      <div className='relative flex items-center justify-center w-screen h-screen bg-computer-bg'>
        <div className='absolute z-20 w-screen h-screen bg-computer-img'></div>
        <div className='relative'>
          <div className='absolute z-30 flex items-center justify-center w-full top-10'>
            <div className='flex justify-center gap-4 item-center'>
              <ComputerFile name='portfolio.png' img='/images/file.png' url='#portfolio' />
              <ComputerFile
                name='YouTube'
                img='/images/youtube.png'
                url='https://www.youtube.com/@loopholewilson'
              />
            </div>
          </div>
          <img src='/images/old_computer.png' alt='file icon' className='w-[600px] h-[600px]'></img>
        </div>
      </div>
    </div>
  )
}

export default Computer
