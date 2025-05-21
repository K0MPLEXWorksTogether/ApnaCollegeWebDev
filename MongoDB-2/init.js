const connectDB = require('./config/db')
const generatePlaceholder = require('./config/faker')
const Chat = require('./models/Chat')

async function addPlaceholderData() {
  try {
    const connection = await connectDB()
    for (let i = 0; i < 50; i++) {
      const placeholder = generatePlaceholder()
      await Chat.insertOne(placeholder)
    }
    console.log(await Chat.find())
  } catch (err) {
    console.error('Error while adding placeholder data:', err.stack)
  }
}

async function main() {
  await addPlaceholderData()
}

main()
