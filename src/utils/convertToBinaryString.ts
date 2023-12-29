export const convertToBinaryString = (file: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onloadend = () => {
      const result = reader.result as string
      const binaryString = result.split(',')[1]
      resolve(binaryString)
    }

    reader.onerror = (error) => {
      reject(error)
    }

    reader.readAsDataURL(file)
  })
}
