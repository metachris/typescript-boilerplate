export const greet = (name: string): string => `Hello ${name}`

export const foo = async (): Promise<boolean> => {
  console.log(greet('World'))
  return true
}
