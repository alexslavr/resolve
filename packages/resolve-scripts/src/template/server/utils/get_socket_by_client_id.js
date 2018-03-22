import message from '../constants/message'

const getSocketByClientId = (socket, socketId) => {
  const socketIoNamespace = socket.sockets
  const socketClient = socketIoNamespace.connected[socketId]
  if (!socketClient) {
    throw new Error(message.badSocketIoClientId)
  }

  return socketClient
}

export default getSocketByClientId
