import React from 'react'

function ChangePassword(UserChangePassword) {
  if (UserChangePassword === 12345) {
    throw new Error('Not a Valid Password')
  }
  return (
    <div>
      {UserChangePassword}
    </div>
  )
}

export default ChangePassword