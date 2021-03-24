export const greet = (name: string): string => `Hello ${name}`

const main = async () => {
  console.log(greet('World'))
}

if (require.main === module) {
  main()
}
