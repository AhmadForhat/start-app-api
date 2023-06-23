import mongoose from 'mongoose'

export const connectMongo = (): void => {
  mongoose.connect(`${process.env.MONGODB_URI}`, {})

  mongoose.connection
    .once('open', () =>
      console.log(`Connected to MongoDB ${process.env.NODE_ENV}: ${process.env.DB_NAME}`)
    )
    .on('error', console.error)

  mongoose.set('debug', process.env.NODE_ENV === 'development')
}


export const launchDBS = (): void => {
  connectMongo()
}

export const closeConnectionDBS = async (): Promise<void> => {
  await mongoose.connection.close()
  console.log(`Connection to ${process.env.DB_NAME} closed`)
}
