import { useState, useCallback } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-+=";
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    } 

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copypassword = () => {
    navigator.clipboard.writeText(password);
  };
  const handleLengthChange = (e) => {
    setLength(Number(e.target.value));
  };
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white-400 bg-gray-600 h-30">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex ">
          <input
            type="text"
            value={password}
            readOnly
            className="outline-none w-full py-1 px-3 text-black bg-amber-50 h-10 rounded-l-xl"
            placeholder="password"
          />
          <button
            className="outline-none w- py-1 px-3 text-white bg-blue-700 rounded-r-xl"
            onClick={copypassword}
          >
            Copy
          </button>
        </div>

       

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-2.5 mt-6 font-bold  ">
            <input
              type="range"
              min={4}
              max={50}
              value={length}
              onChange={handleLengthChange}
              onClick={passwordGenerator}
              className="w-"
            />
            <label>Length: {length}</label>
            <input type="checkbox"
            checked={numberAllowed}
              onChange={() => setnumberAllowed((prev) => !prev)}

            />Numbers



    <input type="checkbox" checked={charAllowed}  onChange={()=>setCharacterAllowed((prev)=>!prev)}/>Characters

          </div>
         
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
