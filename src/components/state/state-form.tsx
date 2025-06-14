import { useState } from "react";

export interface StateFormProps {}

export default function StateForm(_props: StateFormProps) {
  const [student, setStudent] = useState({
    fullname: "evondev",
    email: "evondev@gmail.com",
    school: "CKC",
  });

  console.info(" state-form.tsx:12 - StateForm - student:", student);

  // const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setStudent({
  //     ...student,
  //     fullname: event.target.value,
  //   });
  // };
  // const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setStudent({
  //     ...student,
  //     email: event.target.value,
  //   });
  // };
  // const handleChangeSchool = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setStudent({
  //     ...student,
  //     school: event.target.value,
  //   });
  // };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value,
    });
    // const myInformation = {
    //   name: "tuan",
    //   myAge: 30,
    //   "my-school": "CKC"
    // }
    // console.log(myInformation["my-school"])
  };

  return (
    <div className="p-5 flex flex-col gap-5 w-[500px] mx-auto">
      <input
        type="text"
        name="fullname"
        value={student.fullname}
        className="p-3 border border-white/10 rounded-lg"
        placeholder="Enter name"
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        value={student.email}
        className="p-3 border border-white/10 rounded-lg"
        placeholder="Enter email"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="school"
        value={student.school}
        className="p-3 border border-white/10 rounded-lg"
        placeholder="Enter school"
        onChange={handleInputChange}
      />
    </div>
  );
}
