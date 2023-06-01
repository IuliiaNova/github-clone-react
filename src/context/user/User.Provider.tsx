import { useReducer, useMemo, useEffect } from 'react'
import UserContext from './UserContext'
import initialUserState from './initialUserState'
import { userReducer } from '../../reducer/user/user.reducer'
import { getUserAction } from '../../reducer/user/user.action'


export interface ChildrenProps {
  children: React.ReactNode
}

export default function UserProvider(props: ChildrenProps) {

  const [userState, dispatch] = useReducer(userReducer, initialUserState)
  

  useEffect(() => {
    const getUserInfo = async () => {
      await getUserAction(dispatch)
    }
    getUserInfo()
  }, [])



  const memoProvider = useMemo(
    () => ({
      ...userState
    }), [userState]
  );

  return (
    <UserContext.Provider value={memoProvider}>
      {props.children}
    </UserContext.Provider>
  )
}
