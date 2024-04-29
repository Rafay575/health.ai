// import React, { useState, useEffect } from "react";
// import { Button, Checkbox, Form, Input, Select } from "antd";
// import signupImg from "../assets/images/signup.gif";

// const { Option } = Select;

// const Insights = () => {
//     const [formData, setFormData] = useState({
//         username: "",
//         password: "",
//         gender: "",
//         email: "",
//         job_title: "",
//         company_name: "",
//         company_website: "",
//         remember: false,
//     });

//     const [submissionStatus, setSubmissionStatus] = useState("");

//     useEffect(() => {
//         console.log("Form Data:", formData);
//     }, [formData]);

//     useEffect(() => {
//         console.log("Submission Status:", submissionStatus);
//     }, [submissionStatus]);

//     const onFinish = async (values) => {
//         try {
//             const response = await fetch(
//                 "http://localhost:5000/api/submitSubscribeForm",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(formData),
//                 }
//             );

//             if (response.ok) {
//                 setSubmissionStatus("Submission successful");
//             } else {
//                 setSubmissionStatus("Failed to submit form data");
//             }
//         } catch (error) {
//             console.error("Error submitting form data:", error);
//             setSubmissionStatus("Internal server error");
//         }
//     };

//     const onFinishFailed = (errorInfo) => {
//         console.log("Failed:", errorInfo);
//     };

//     const handleChange = (changedValues) => {
//         setFormData({ ...formData, ...changedValues });
//     };

//     return (

//         <section className="px-5 xl:px-0 py-[55px]">
//             <div className="max-w-[1170px] mx-auto">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                     {/* <div className="lg:block bg-primaryColor rounded-l-lg">
//                         <figure className="rounded-l-lg">
//                             <img
//                                 src={signupImg}
//                                 className="w-full rounded-l-lg"
//                                 alt=""
//                             />
//                         </figure>
//                     </div> */}

//                     <div className="flex flex-col justify-between rounded-l-lg lg:pl-16 ">
//                         <div>
//                             <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-4 text-center lg:text-left">
//                                 Link with{" "}
//                                 <span className="text-primaryColor">
//                                     HealthLink360
//                                 </span>
//                             </h3>
//                             <h4 className="text-md leading-6 font-semibold text-gray-800 my-4">
//                                 HealthLink360: Cultivating Wellness Partnerships
//                                 for the Community
//                             </h4>
//                             <p className="text-sm text-gray-600 mb-4">
//                                 HealthLink360 is committed to fostering health
//                                 and wellness within diverse communities through
//                                 dynamic partnerships. We offer various
//                                 collaboration opportunities, from granting
//                                 complimentary access to our digital wellness
//                                 platform for teams to aligning with the
//                                 HealthLink360 brand or becoming a part of our
//                                 extensive network.
//                             </p>
//                             <ul className="list-disc pl-5 mb-4">
//                                 <li>Collaborative Partner</li>
//                                 <li>Culture Centric Organization</li>
//                                 <li>Mission-Driven Team</li>
//                             </ul>
//                             <p className="text-sm text-gray-600 mb-4">
//                                 Join us in our mission to bring comprehensive
//                                 care and wellness to the heart of every
//                                 community.
//                             </p>
//                         </div>
//                         {/* Form Section */}
// <Form
//     name="subscribe_form"
//     labelCol={{ span: 10 }}
//     wrapperCol={{ span: 16 }}
//     style={{ maxWidth: "100%" }}
//     initialValues={{ remember: true }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="on"
//     onValuesChange={handleChange}
//     className="w-full"
// >
//     {/* Username */}
//     <Form.Item
//         label="Username"
//         name="username"
//         rules={[
//             {
//                 required: true,
//                 message: "Please input your username!",
//             },
//         ]}
//     >
//         <Input />
//     </Form.Item>

//     {/* Password */}
//     <Form.Item
//         label="Password"
//         name="password"
//         rules={[
//             {
//                 required: true,
//                 message: "Please input your password!",
//             },
//         ]}
//     >
//         <Input.Password />
//     </Form.Item>

//     {/* Gender Selection */}
//     <Form.Item
//         name="gender"
//         label="Gender"
//         rules={[
//             {
//                 required: true,
//                 message: "Please select your gender!",
//             },
//         ]}
//     >
//         <Select
//             placeholder="Select an option"
//             allowClear
//         >
//             <Option value="male">Male</Option>
//             <Option value="female">Female</Option>
//             <Option value="other">Other</Option>
//         </Select>
//     </Form.Item>

//     {/* E-mail */}
//     <Form.Item
//         name="email"
//         label="E-mail"
//         rules={[
//             {
//                 type: "email",
//                 message:
//                     "The input is not valid E-mail!",
//             },
//             {
//                 required: true,
//                 message: "Please input your E-mail!",
//             },
//         ]}
//     >
//         <Input />
//     </Form.Item>

//     {/* Job Title */}
//     <Form.Item
//         name="job_title"
//         label="Job Title"
//         rules={[
//             {
//                 required: true,
//                 message: "Please write your job title!",
//             },
//         ]}
//     >
//         <Input />
//     </Form.Item>

//     {/* Company Name */}
//     <Form.Item
//         name="company_name"
//         label="Company Name"
//         rules={[
//             {
//                 required: true,
//                 message:
//                     "Please write your company name!",
//             },
//         ]}
//     >
//         <Input />
//     </Form.Item>

//     {/* Company Website */}
//     <Form.Item
//         name="company_website"
//         label="Company Website"
//         rules={[
//             {
//                 required: true,
//                 message:
//                     "Please write your company website!",
//             },
//         ]}
//     >
//         <Input />
//     </Form.Item>

//     {/* Remember Me Checkbox */}
//     <Form.Item
//         name="remember"
//         valuePropName="checked"
//         wrapperCol={{ offset: 8, span: 16 }}
//     >
//         <Checkbox>Remember me</Checkbox>
//     </Form.Item>

//     {/* Submit Button */}
//     <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//         <Button type="primary" htmlType="submit">
//             Submit
//         </Button>
//     </Form.Item>
// </Form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Insights;
import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
// import "antd/dist/antd.css"; // Make sure to import Ant Design CSS

import image1 from "../assets/images/Picture27.jpg";
import image2 from "../assets/images/Picture28.jpg";
const { Option } = Select;

const Insights = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        gender: "",
        email: "",
        job_title: "",
        company_name: "",
        company_website: "",
        remember: false,
    });

    const [submissionStatus, setSubmissionStatus] = useState("");

    useEffect(() => {
        console.log("Form Data:", formData);
    }, [formData]);

    useEffect(() => {
        console.log("Submission Status:", submissionStatus);
    }, [submissionStatus]);

    const onFinish = async (values) => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/submitSubscribeForm",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                setSubmissionStatus("Submission successful");
            } else {
                setSubmissionStatus("Failed to submit form data");
            }
        } catch (error) {
            console.error("Error submitting form data:", error);
            setSubmissionStatus("Internal server error");
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const handleChange = (changedValues) => {
        setFormData({ ...formData, ...changedValues });
    };

    return (
        <section className="px-5 xl:px-0 py-[55px] bg-gray-100 text-[#c10891]" >
            <div className="max-w-[1170px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-3xl font-bold mb-4 text-center lg:text-left">
                            Link with HealthLink360
                        </h3>
                        <p className="text-md mb-4">
                            HealthLink360 is committed to fostering health and
                            wellness within diverse communities through dynamic
                            partnerships. We offer various collaboration
                            opportunities, from granting complimentary access to
                            our digital wellness platform for teams to aligning
                            with the HealthLink360 brand or becoming a part of
                            our extensive network.
                        </p>
                        {/* Rest of the content */}
                        <Form
                            name="subscribe_form"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            style={{ maxWidth: "100%" }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="on"
                            onValuesChange={handleChange}
                            className="w-full"
                        >
                            {/* Username */}
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username!",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            {/* Password */}
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            {/* Gender Selection */}
                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select your gender!",
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select an option"
                                    allowClear
                                >
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="other">Other</Option>
                                </Select>
                            </Form.Item>

                            {/* E-mail */}
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: "email",
                                        message:
                                            "The input is not valid E-mail!",
                                    },
                                    {
                                        required: true,
                                        message: "Please input your E-mail!",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            {/* Job Title */}
                            <Form.Item
                                name="job_title"
                                label="Job Title"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please write your job title!",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            {/* Company Name */}
                            <Form.Item
                                name="company_name"
                                label="Company Name"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please write your company name!",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            {/* Company Website */}
                            <Form.Item
                                name="company_website"
                                label="Company Website"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please write your company website!",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            {/* Remember Me Checkbox */}
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{ offset: 8, span: 16 }}
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            {/* Submit Button */}
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                    {/* Image gallery */}
                    <div className="order-1 lg:order-2 mb-6 lg:mb-0 grid grid-cols-1 gap-4">
                        <img
                            src={image1}
                            alt="Gallery Image 1"
                            className="rounded-lg shadow-lg"
                        />
                        <img
                            src={image2}
                            alt="Gallery Image 2"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Rest of the form */}
                </div>
            </div>
        </section>
    );
};

export default Insights;
