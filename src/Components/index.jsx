import data from "./data";
import { useState } from "react";

export default function Accordion() {
    const [selection, setSelection] = useState(null);

    function handleSingleSelection(itemId) {
        setSelection(itemId);
    }

    return (
        <div className="bg-black h-[100vh] text-white ">
            <div className="">
                <h2 className=""style={{paddingTop:"250px"}}>Accordian</h2>
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div key={dataItem.id}>
                            <div 
                                onClick={() => handleSingleSelection(dataItem.id)}
                                className="flex flex-row p-4 border rounded shadow-lg p-50 m-50"
                            >
                                <ul>
                                <li>{dataItem.question}</li>
                                </ul>
                                <span className="border-2">+</span>
                            </div>
                            {selection === dataItem.id ? (
                                <div className="content">
                                    <p className=" bg-red-400">{dataItem.answer}</p>
                                </div>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <div>data not found</div>
                )}
            </div>
        </div>
    );
}
