import DisplayLink from 'components/displaylinks'
import clientPromise from 'lib/getmongodb'
import {getBook} from 'lib/getmongodb'
import { isClassExpression } from 'typescript'
import Link from 'next/link'
import clsx from 'clsx'


export const dynamicParams = true

const Page = async ({
  searchParams
}:{
  searchParams: { [key: string]: string | string[] | undefined}
}) => {
  const page = 
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const limit =
    typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 6
  
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
          <Link href={`/list?page=${page == 2 ? 2: page + 1}`} className={"no-underline m-8 rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800"}>
              Next
          </Link>
          </button>
      </div>
      <DisplayLink title="Project Hail Mary" author="Andy Weir" year="2021" url="/books" pdf="/Project Mary Hail_copy.pdf"/>
    </div>
  )
}

export default Page;
