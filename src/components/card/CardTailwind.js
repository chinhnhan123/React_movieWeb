import React from "react";

const CardTailwind = () => {
  return (
    <div className="relative ">
      <div className="w-full rounded-lg h-[400] ">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16378193/media/e9ad5ebe9dd6822be9ee622c7465d9e5.png?compress=1&resize=400x300&vertical=top"
          alt=""
          className="block object-cover w-full rounded-lg "
        />
      </div>
      <div className="absolute left-2/4 -translate-x-2/4 ">
        <div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZNG2V1kv_IH_8aTfCrLyEYKVDuCeuKoHaQ&usqp=CAU"
              alt=""
            />
            <span className="flex items-center gap-x-3">Nhan map</span>
          </div>
          <div>256</div>
        </div>
        <div>
          <h3>cosmic perspective</h3>
          <span className="items-center text-lg bg-clip-text -translate-x-2/4 translate-y-2/4">
            {" "}
            12,000 PSL
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
