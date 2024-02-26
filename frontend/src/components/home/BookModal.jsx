import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";

const BookModal = ({item,onClose}) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {item.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{item._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{item.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{item.author}</h2>
        </div>
        <p className="mt-4">Anything You Want to Show</p>
        <p className="mt-2">
          Above all, a review makes an argument. The most important element of a
          review is that it is a commentary, not merely a summary. It allows you
          to enter into dialogue and discussion with the work’s creator and with
          other audiences. You can offer agreement or disagreement and identify
          where you find the work exemplary or deficient in its knowledge,
          judgments, or organization. You should clearly state your opinion of
          the work in question, and that statement will probably resemble other
          types of academic writing, with a thesis statement, supporting body
          paragraphs, and a conclusion
        </p>
      </div>
    </div>
  );
};

export default BookModal;
