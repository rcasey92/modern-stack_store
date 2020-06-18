import { createContext } from 'react';
import { DEFAULT_USER } from '../user/constants';

const UserContext = createContext(DEFAULT_USER);

export default UserContext;