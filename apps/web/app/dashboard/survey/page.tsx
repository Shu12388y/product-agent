"use client";
import React, { useState } from "react";

function Page() {
  const [formFields, setFormFields] = useState([
    {
      name: "Name",
      type: "text",
    },
    {
        name:"Age",
        type:"number"
    },
    {
        name:"Options", 
        type:"toggle"
    }
  ]);

  return (
    <div>
      {formFields.map((ele) => {
        return (
          <>
            <div>
              <label>{ele.name}</label>
              <input type={ele.name} />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Page;
