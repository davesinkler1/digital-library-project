import DisplayLink from 'components/displaylinks'
import clientPromise from 'lib/getmongodb'
import {getBook} from 'lib/getmongodb'
import { isClassExpression } from 'typescript'
import Link from 'next/link'
import clsx from 'clsx'


const RSCPage = async ({
  searchParams
}:{
  searchParams: { [key: string]: string | string[] | undefined}
}) => {
  const page = 
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const limit =
    typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 5
  
  const { books } = await getBook({ page, limit })

  return (
    <div>
      <div>
        <button>
          <Link
          href={`/list?page=${page > 1 ? page - 1 : 1}`}
           className={clsx(
                          'rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
                          page <= 1 && 'pointer-events-none opacity-50'
                        )}
          >
              Previous
          </Link>
          </button>
          <button>
          <Link className='m-8 rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800' href={`/list?page=${page + 1}`}>
              Next
          </Link>
          </button>
      </div>
       {books?.map(books => (
        <ul key={books._id.toString()}><DisplayLink title={books.name} 
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
