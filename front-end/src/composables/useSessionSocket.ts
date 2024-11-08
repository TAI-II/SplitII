import { ref, onUnmounted } from 'vue'
import { io, Socket } from 'socket.io-client'

const socket: Socket = io(import.meta.env.VITE_SOCKET_URL) // Conecta ao servidor WebSocket

export function useSessionSocket(sessionId: string) {
  const sessions = ref<any[]>([])
  const usersJoined = ref<any[]>([])
  const readyUsers = ref<any[]>([])

  // Emite `joinSession`
  const joinSession = (userId: string) => {
    socket.emit('joinSession', { sessionId, userId }, (response: any) => {
      console.log('Join session response:', response)
      if (response.success) {
        console.log('Successfully joined session:', response.data)
      } else {
        console.log('Failed to join session:', response.error)
      }
    })
  }

  // Emite `ready`
  const ready = (
    userId: string,
    selectedItems: Array<{ id: string; name: string; quantity: number }>
  ) => {
    socket.emit('ready', { sessionId, userId, selectedItems })
  }

  // Ouve o evento `session:{sessionId}:userJoined`
  socket.on(`session:${sessionId}:userJoined`, (data: any) => {
    console.log('User joined:', data)
    usersJoined.value.push(data.user)
  })

  // Ouve o evento `session:${sessionId}:userReady`
  socket.on(`session:${sessionId}:userReady`, (data: any) => {
    console.log('User ready:', data)
    readyUsers.value.push(data.user)
  })

  onUnmounted(() => {
    socket.disconnect() // Desconecta ao destruir o componente
  })

  return {
    sessions,
    usersJoined,
    readyUsers,
    joinSession,
    ready,
  }
}
