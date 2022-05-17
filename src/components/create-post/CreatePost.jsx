import { useSelector } from "react-redux";
import { PrimaryButton, DefaultProfilePic } from "../";

const CreatePost = () => {
  const { profileUrl, firstName, lastName } = useSelector(
    (state) => state.auth.userDetails
  );
  const handlePost = (event) => {
    event.preventDefault();
  };
  return (
    <div className="px-5 py-3 border-lighter flex">
      <div className="flex-none mt-3 w-12 h-12 text-lg">
        {profileUrl ? (
          <img src={profileUrl} className="flex-none w-12 h-12 rounded-full" />
        ) : (
          <DefaultProfilePic>{firstName[0] + lastName[0]}</DefaultProfilePic>
        )}
      </div>
      <form className="w-full px-4 relative">
        <textarea
          placeholder="Write something interesting"
          className="resize-none mt-3 pb-3 w-full h-28 bg-slate-200 focus:outline-none rounded-xl p-2 dark:bg-slate-700"
        />
        <div className="flex justify-end">
          <PrimaryButton clickHandler={handlePost}>Post</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export { CreatePost };
