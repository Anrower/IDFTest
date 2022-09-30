// import { useMemo, useState } from "react";
// import "./styles.css";

// const MyCheckBoxList = [
//   {
//     order: 0,
//     name: "Angular"
//   },
//   {
//     order: 1,
//     name: "React"
//   },
//   {
//     order: 2,
//     name: "Java"
//   },
//   {
//     order: 4,
//     name: "Python"
//   },
//   {
//     order: 3,
//     name: "JavaScript"
//   }
// ];

// const Checkbox = ({ obj, onChange }) => {
//   return (
//     <>
//       <input
//         type="checkbox"
//         id={`custom-checkbox-${obj.index}`}
//         name={obj.name}
//         value={obj.checked}
//         onChange={() => onChange({ ...obj, checked: !obj.checked })}
//       />
//       {obj.name}
//     </>
//   );
// };

// export default function App() {
//   const [data, setData] = useState(
//     MyCheckBoxList.sort((a, b) => a.order - b.order)
//   );

//   const isVerified = useMemo(() => {
//     return data.every((d) => d.checked);
//   }, [data]);

//   return (
//     <div className="App">
//       {data.map((obj, index) => (
//         <li key={index}>
//           <Checkbox
//             obj={obj}
//             onChange={(item) => {
//               setData(data.map((d) => (d.order === item.order ? item : d)));
//             }}
//           />
//         </li>
//       ))}
//       <button disabled={!isVerified}>Final button</button>
//     </div>
//   );
// }
import React from 'react'

const Test = () => {
  return (
    <div>Test</div>
  )
}

export default Test

