import { NextRouter } from 'next/router'

export default function shallowRoute(router: NextRouter, path: string) {
  router.push(path, undefined, { shallow: true })
}