import "../App.css";

export const Header = () => {
  return (
    <div className="fixed flex justify-between items-center h-12 bg-white shadow-lg w-full px-6">
      <div className="flex items-center">
        <img className="w-7" src="https://res.cloudinary.com/dosdjk5jz/image/upload/v1744997682/icon_tbsmtf.png" />
        <h1 className="ml-3 text-2xl font-bold text-[#5544D7]">DigiVoter</h1>
      </div>
      <div className="flex items-center">
        <img className="h-6 mr-3" src="https://res.cloudinary.com/dosdjk5jz/image/upload/v1744997609/makaut_enzjhc.png" alt="Makaut Icon" />
        <div>
          <select className="form-select text-md">
            <option value="hn">B.TECH CSE</option>
            <option value="en">MAKAUT - W.B.</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
