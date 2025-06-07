
import { Link } from 'react-router-dom';
import IconsNotFound from '../../Icons/NotFoundsIcon';
const NotFound = () => {
  return (
    <div className='flex justify-center bg-white items-center flex-col space-y-5'>
      <IconsNotFound className='size-4/12 my-10' />
      <h2 className='md:text-4xl text-xl'>404. Страница не найдена</h2>
      <span className=' text-[12px] md:text-xl' >То, что вы ищете, не существует или пока не открыто.</span>
      <Link to ={'/'} className = 'mb-10' >
      <button className="mt-4 bg-[#6984f0] hover:bg-indigo-400 text-white md:text-lg text-[14px] font-medium px-8 py-2 rounded-lg transition">
        На главную
      </button>
    </Link>
    </div>
  )
}

export default NotFound
