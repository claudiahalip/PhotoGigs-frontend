import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAddPhotographer } from '../../hooks/usePhotographers';
import { Photographer } from '../../types';

const NewPhotographerPage = () => {
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const router = useRouter();
  const addPhotographerMutation = useAddPhotographer();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPhotographer: Omit<Photographer, 'id' | 'reviews'> = {
      name,
      website,
      years_of_experience: parseInt(yearsOfExperience),
      city,
      state,
      image_url: imageUrl,
    };
    addPhotographerMutation.mutate(newPhotographer, {
      onSuccess: () => {
        router.push('/photographers');
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-2xl mb-6 text-center text-white">Add Your Listing</h1>
          {addPhotographerMutation.isError && (
            <p className="text-red-500 text-xs italic mb-4">
              An error occurred
            </p>
          )}
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Years of Experience"
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={addPhotographerMutation.isLoading}
            >
              {addPhotographerMutation.isLoading ? 'Adding...' : 'Add Photographer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPhotographerPage;
