import Link from 'next/link';
import Image from 'next/image';
import NavBar from './NavBar';
import cameraLogo from '../public/camera-logo.jpg';
import { useAuth } from '../hooks/useAuth';

const Header = () => {
  const { user, isLoading, logout } = useAuth();

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <a>
            <Image src={cameraLogo} alt="Photogigs Logo" width={50} height={50} />
          </a>
        </Link>
        <h1 className="text-2xl font-bold ml-4">Photogigs</h1>
      </div>
      <NavBar />
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : user && user.logged_in ? (
          <div className="flex items-center space-x-4">
            <p>Welcome, {user.user.username}!</p>
            <button
              onClick={() => logout()}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link href="/login">
              <a className="hover:text-gray-300">Login</a>
            </Link>
            <Link href="/signup">
              <a className="hover:text-gray-300">Sign Up</a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
