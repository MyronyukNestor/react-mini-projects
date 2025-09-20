import { useState } from "react";

const data = [
  {
    image:
      "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
    step: "Step 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere nihil maiores, alias corrupti quidem qui corporis quam suscipit numquam at odio ipsam omnis ab soluta ullam nobis, accusamus consequatur?",
  },
  {
    image:
      "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    step: "Step 2",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, quasi quo labore in, tempora recusandae reiciendis ut, commodi quia aperiam fugit rem ad tenetur ullam. Itaque ipsum quo sunt ab minima. Itaque facere dolor suscipit nobis unde provident, officiis optio.,",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    step: "Step 3",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, sint debitis. Quo cumque saepe laborum temporibus nesciunt, quam in corrupti officia fugiat reprehenderit quasi a reiciendis facilis delectus atque rem nobis officiis voluptatem sapiente deserunt!,",
  },
];

const TabsSection = () => {
  const [tab, setTab] = useState(0);

  const changeTab = (currentTab) => {
    setTab(currentTab);
  };

  return (
    <div className="flex items-center justify-center gap-10 p-8">
      <img
        src={data[tab].image}
        className="w-[500px] h-[300px] object-cover rounded-xl shadow-lg"
        alt=""
      />
      <div className="w-1/3 flex flex-col items-center">
        <div className="flex gap-4 mb-6">
          {data.map((item, idx) => (
            <button
              onClick={() => changeTab(idx)}
              className={`px-4 py-2 rounded-lg font-semibold transition 
              ${
                idx === tab
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {item.step}
            </button>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">
          Step {tab + 1}
        </h3>
        <p className="text-gray-600 bg-gray-200 p-3 min-h-[150px] text-center flex items-center rounded-2xl">
          {data[tab].text}
        </p>
      </div>
    </div>
  );
};

export default TabsSection;
