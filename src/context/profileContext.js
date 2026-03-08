/**
 * ProfileContext object — shared between ProfileProvider and useProfile
 *
 * Separated into a plain .js file so that ProfileContext.jsx can
 * export only the ProfileProvider component (satisfies
 * react-refresh/only-export-components).
 */

import { createContext } from 'react'

const ProfileContext = createContext(null)

export default ProfileContext
