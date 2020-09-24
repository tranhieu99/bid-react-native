import { useSelector } from 'react-redux'

const error = useSelector(state => state.authReducer.error)
const loading = useSelector(state => state)
export {
    error,
    loading
}