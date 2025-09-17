import Link from 'next/link';
import Image from 'next/image';
import { Photographer } from '../types';
import LikeButton from './LikeButton';

interface PhotographerCardProps {
  photographer: Photographer;
}

const PhotographerCard = ({ photographer }: PhotographerCardProps) => {
  return (
    <div className="group perspective-1000">
      <div className="relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <Image
            src={photographer.image_url}
            alt={photographer.name}
            width={150}
            height={150}
            className="rounded-full"
          />
          <h2 className="text-2xl font-bold mt-4">{photographer.name}</h2>
        </div>
        {/* Back of the card */}
        <div className="absolute w-full h-full backface-hidden bg-gray-700 rounded-lg shadow-lg flex flex-col items-center justify-center rotate-y-180">
          <h2 className="text-2xl font-bold">{photographer.name}</h2>
          <a
            href={photographer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            {photographer.website}
          </a>
          <p>YOE: {photographer.years_of_experience}</p>
          <p>
            {photographer.city}, {photographer.state}
          </p>
          <Link href={`/photographers/${photographer.id}`}>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              View Profile
            </a>
          </Link>
          <div className="mt-4">
            <LikeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerCard;
