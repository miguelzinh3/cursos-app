import Link from "next/link";
import Image from "next/image";
import CIRCLE from "@/../public/circle.svg";

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  isPurchased: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ id, title, description, isPurchased }) => {
  const href = isPurchased ? `/player/${id}` : `/curso/${id}`;
  const buttonText = isPurchased ? "Continue watching" : "See more details";
  const buttonClass = isPurchased ? "bg-violet-600" : "bg-gray-600";

  return (
    <li
      key={id}
      className="flex flex-col items-start p-5 border rounded-lg shadow bg-gray-200 text-gray-900"
    >
      <div className="flex items-center mb-4">
        <Image className="w-10 mr-4" src={CIRCLE} alt="Course Icon" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="pb-6">{description}</p>
      <Link href={href} className={`${buttonClass} py-2 px-5 rounded-xl text-white`}>
          {buttonText}
      </Link>
    </li>
  );
};

export default CourseCard;
