import DisplayLink from 'components/displaylinks'
import clientPromise from 'lib/getmongodb'
import {getBook} from 'lib/getmongodb'
import { isClassExpression } from 'typescript'
import Link from 'next/link'
import clsx from 'clsx'
import Search from 'components/Search'


const RSCPage = async ({
  searchParams
}:{
  searchParams: { [key: string]: string | string[] | undefined}
}) => {
  const page = 
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const limit =
    typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 5
  
  const search =
    typeof searchParams.search === 'string' ? searchParams.search : undefined

  const { books } = await getBook({ page, limit, query: search })

  return (
    <div>
      <br></br>
      <div>
        <Search />
      </div>
      <br></br>
      <div className='items-center flex gap-4'>
        <button className='ml-6'>
          <Link
          href={{
            pathname: '/list',
            query: {
              ...(search ? { search } : {}),
              page: page > 1 ? page - 1 : 1
            }
          }}
           className={clsx(
                          'rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
                          page <= 1 && 'pointer-events-none opacity-50'
                        )}
          >
              Previous
          </Link>
          </button>
          <div className='border-l-2 border-solid h-5 self-stretch'></div>
          <button className='ml-6'>
          <Link className='m-8 rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800' href={
            {
            pathname: '/list',
            query: {
              ...(search ? { search } : {}),
              page: page + 1
            }
          }}>
              Next
          </Link>
          </button>
      </div>
      <br></br>
       {books?.map(books => (
        <ul key={books._id.toString()}><DisplayLink image={books.image} title={books.name} 
        author={books.author}
        year={books.year}
        url="/books" 
        pdf ={books.pdf}></DisplayLink></ul>
      ))}
      <br/>
    </div>
  )
}

export default RSCPage;
