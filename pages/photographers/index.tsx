import { useState } from 'react';
import PhotographerCard from '../../components/PhotographerCard';
import { usePhotographers } from '../../hooks/usePhotographers';
import { Photographer } from '../../types';

const PhotographersPage = () => {
  const { data: photographers, isLoading, isError } = usePhotographers();
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const filteredPhotographers = photographers?.filter((photographer: Photographer) =>
    photographer.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8 text-center">
        <input
          type="text"
          placeholder="Search by state..."
          className="w-full max-w-lg p-2 text-gray-700 border rounded"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredPhotographers?.map((photographer: Photographer) => (
          <PhotographerCard key={photographer.id} photographer={photographer} />
        ))}
      </div>
    </div>
  );
};

export default PhotographersPage;
