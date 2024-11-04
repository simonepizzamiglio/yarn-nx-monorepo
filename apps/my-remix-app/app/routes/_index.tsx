import type {MetaFunction} from "@remix-run/node"
import {Button} from "shared-ui"

export const meta: MetaFunction = () => {
  return [{title: "New Remix App"}, {name: "description", content: "Welcome to Remix!"}]
}

export default function Index() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex flex-col items-center gap-16'>
        <header className='flex flex-col items-center gap-9'>
          <h1 className='leading text-2xl font-bold text-gray-800'>My Remix app</h1>
          <div className='h-[144px] w-[434px]'>
            <img src='/logo-light.png' alt='Remix' className='block w-full dark:hidden' />
          </div>
        </header>
        <Button>Button from shared-ui</Button>
      </div>
    </div>
  )
}
