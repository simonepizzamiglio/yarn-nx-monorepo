import type {MetaFunction} from "@remix-run/node"
import {Button} from "shared-ui"
import {difference} from "utils"

export const meta: MetaFunction = () => {
  return [{title: "New Remix App"}, {name: "description", content: "Welcome to Remix!"}]
}

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 2, 10]

export default function Index() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex flex-col items-center gap-16'>
        <header className='flex flex-col items-center gap-9'>
          <h1 className='leading text-2xl font-bold text-gray-800'>My Remix app</h1>
        </header>
        <span>
          apps/utils/difference {">"} {difference(arr1, arr2).join(",")}
        </span>
        <Button>Button from shared-ui</Button>
      </div>
    </div>
  )
}
