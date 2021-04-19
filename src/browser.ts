/**
 * This file is the entrypoint of browser builds.
 * The code executes when loaded in a browser.
 */
import { foo } from './main'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).foo = foo

console.log('Method "foo" was added to the window object. You can try it yourself by just entering "await foo()"')
