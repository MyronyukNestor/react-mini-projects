import { useState } from "react";

const AgeCalculator = () => {
  const [userData, setUserData] = useState("");
  const [userAge, setUserAge] = useState("");

  const currentDate = new Date();
  const birthdayDate = new Date(userData);

  const calculate = (e) => {
    e.preventDefault();

    if (!userData) {
      alert("Please enter your birthday");
      return;
    }

    setUserAge(currentDate.getFullYear() - birthdayDate.getFullYear());
    let month = currentDate.getMonth() - birthdayDate.getMonth();

    if (
      month < 0 ||
      (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
      setUserAge((prevAge) => prevAge - 1);
    }
  };

  return (
    <div className="w-1/3 rounded-md bg-gray-100 shadow-xl p-10">
      <form onSubmit={calculate} className="flex flex-col gap-3">
        <h1 className=" text-center text-3xl font-semibold">Age Calculator</h1>
        <p className="font-semibold text-center">Enter you date of birth</p>
        <div className="flex justify-center">
          <input
            value={userData}
            onChange={(e) => setUserData(e.target.value)}
            type="date"
            className="border border-gray-300 h-10 p-3 w-100"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-blue-500 p-2 w-1/4 rounded-lg cursor-pointer hover:bg-blue-600 duration-100"
          >
            Calculate Age
          </button>
        </div>
        {userAge && (
          <h1 className="font-bold text-center text-2xl">
            Your age is {userAge} years old
          </h1>
        )}
      </form>
    </div>
  );
};

export default AgeCalculator;
