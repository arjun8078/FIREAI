import { useDispatch, useSelector} from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { useEffect } from 'react';

const Themetoggle = () => {
    const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]); // Re-run effect when 'isDarkMode' changes
  return (
    <button
      className="py-2 px-4 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md"
      onClick={() => dispatch(toggleTheme())}
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  )
}

export default Themetoggle