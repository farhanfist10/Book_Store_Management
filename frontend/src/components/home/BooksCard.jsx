import {Link} from 'react-router-dom';
import {PiBookOpenTextLight} from 'react-icons/pi';
import {BiUserCircle ,BiShow} from 'react-icons/bi';
import {AiOutlineEdit} from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import {MdOutlineDelete} from 'react-icons/md'
import { useState } from 'react';
import BookModal from './BookModal';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({books}) => {
    const [showModal,setShowModal]=useState(false);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
      <BookSingleCard key={item._id} item={item} />
      ))}
    </div>
  );
}

export default BooksCard