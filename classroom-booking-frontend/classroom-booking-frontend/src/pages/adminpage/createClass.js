import {
    Card,
    Input,
    Select, Option, Button,
    Typography,
    Textarea
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const CreateClass = () => {
    const [className, setClassName] = useState('');
    const [classCapacity, setClassCapacity] = useState('');
    const [classLocation, setClassLocation] = useState('');
    const [classStatus, setClassStatus] = useState('Not Active')
    const [classDescription, setClassDescription] = useState('')
    const [classNameError, setClassNameError] = useState('');
    const [classCapacityError, setClassCapacityError] = useState('');
    const [classLocationError, setClassLocationError] = useState('');
    const [classDescriptionError, setClassDescriptionError] = useState('')


    useEffect(() => {

    }, [])

    function validateForm() {
        let valid = true; // Assume the form is valid initially

        // Validation for Class Name
        if (!className.trim()) {
            // If class name is empty or only contains whitespace
            setClassNameError("Class name is required"); // Set error message
            valid = false; // Mark form as invalid
        } else {
            setClassNameError(""); // Clear the error message if class name is provided
        }

        // Validation for Class Capacity
        if (!classCapacity.trim()) {
            // If class capacity is empty or only contains whitespace
            setClassCapacityError("Class capacity is required"); // Set error message
            valid = false; // Mark form as invalid
        } else if (isNaN(classCapacity)) {
            // If class capacity is not a number
            setClassCapacityError("Class capacity must be a number"); // Set error message
            valid = false; // Mark form as invalid
        } else {
            setClassCapacityError(""); // Clear the error message if class capacity is provided and is a number
        }

        // Validation for Class Location
        if (classLocation.length == 0) {
            // If class location is empty or only contains whitespace
            setClassLocationError("Class location is required"); // Set error message
            valid = false; // Mark form as invalid
        } else {
            setClassLocationError(""); // Clear the error message if class location is provided
        }

        if (classDescription.length == 0) {
            setClassDescriptionError("Class description is required")
            valid = false;
        } else {
            setClassDescriptionError("")
        }

        // You can add more validation logic for other fields here following the same pattern

        return valid; // Return the overall validation result
    }

    const submitClassInfo = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const data = {
                "classname": className,
                "capacity": classCapacity,
                "location": classLocation,
                "status": classStatus,
                "description": classDescription
            }

            console.log(data)
            try {
                const response = await fetch('http://localhost:4000/api/class/', {
                    method: "POST",
                    body:JSON.stringify(data),
                    headers: {
                    "Content-Type": "application/json"
                    },
                });
                
                if(response.ok){

                    const resultJson = await response.json();
                } else {
                    console.log('Error during POST request. Status:', response.status);
                    console.log('Response Text:', await response.text());
                }
            } catch (error) {
                console.log(error.message); 
            }
        } else {
            console.log("you can not post now fixed error")

        }
    }


    return (
        <div>
            <div className="w-[420px] mx-auto">
                <Card color="transparent" shadow={false} className="bg-blue-300 p-5 text-center mb-20 rounded shadow-md bg-white">
                    <Typography variant="h2" color="blue-gray">
                        Create Class
                    </Typography>

                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={submitClassInfo}>
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Class name
                            </Typography>
                            <Input
                                value={className}
                                onChange={(e) => {
                                    setClassName(e.target.value);
                                }}
                                size="lg"
                                placeholder="Enter class name"
                                className=" p-2     !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            {classNameError && <p className="text-sm text-red-500">{classNameError}</p>}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Capacity
                            </Typography>
                            <Input
                                value={classCapacity}
                                onChange={(e) => {
                                    setClassCapacity(e.target.value);
                                }}
                                size="lg"
                                placeholder="Enter capacity"
                                className="p-2 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            {classCapacityError && <p className="text-sm text-red-500">{classCapacityError}</p>}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Location
                            </Typography>
                            <Input
                                value={classLocation}
                                onChange={(e) => {
                                    setClassLocation(e.target.value)
                                }}
                                size="lg"
                                placeholder="Enter location"
                                className="p-2 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            {classLocationError && <p className="text-sm text-red-500">{classLocationError}</p>}
                            <div>
                                <label className="font-semibold">Status</label>
                                <select className="w-96 mt-2 p-2 rounded border" value={classStatus} onChange={(e) => {
                                    setClassStatus(e.target.value)
                                }} >
                                    <option>Active</option>
                                    <option>Not Active</option>
                                </select>
                            </div>
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Description
                            </Typography>
                            <Textarea value={classDescription} onChange={(e) => {
                                setClassDescription(e.target.value)
                            }} rows={8} className="p-2" />
                            {classDescriptionError && <p className="text-sm text-red-500">{classDescriptionError}</p>}

                        </div>

                        <Button type="submit" className="mt-6 bg-black" fullWidth>
                            Submit
                        </Button>
                    </form>
                </Card>
            </div>
        </div>

    );
}

export default CreateClass;