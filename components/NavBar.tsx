import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';

const NavBar = () => {
  const { user } = useAuth();

  return (
    <nav className="flex items-center justify-center space-x-4">
      <Link href="/">
        <a className="text-gray-300 hover:text-white">Home</a>
      </Link>
      <Link href="/photographers">
        <a className="text-gray-300 hover:text-white">All photographers</a>
      </Link>
      {user && user.logged_in && (
        <Link href="/photographers/new">
          <a className="text-gray-300 hover:text-white">Add your listing</a>
        </Link>
      )}
      <Link href="/reviews">
        <a className="text-gray-300 hover:text-white">All reviews</a>
      </Link>
      {!user || !user.logged_in && (
        <>
          <Link href="/login">
            <a className="text-gray-300 hover:text-white">Login</a>
          </Link>
          <Link href="/signup">
            <a className="text-gray-300 hover:text-white">Sign up</a>
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
