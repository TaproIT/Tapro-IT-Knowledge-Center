import {useState} from 'react'
import logo from '../assets/splash_screen/logo.png'
import course from '../assets/home/course.png'
import DropDown from "../components/DropDown.jsx";
import {FiSearch} from "react-icons/fi";
import {FiFilter} from "react-icons/fi";
import Course from "../components/Course.jsx";

function HomePage() {

    const technologies = ['Node js', 'Python', 'Python2', 'Python3'];
    const [technology, setTechnology] = useState('');

    const levels = ["Beginner", "Intermediate","Advanced"];
    const [level, setLevel] = useState('');

    const handleFilter = () => {
        console.log(technology);
        console.log(level);
    }

    const courses = [
        {
            img:'',
            name:'Python for beginners',
            year: '2024',
            technology:'Python',
            level: 'Beginner',
        },
        {
            img:'',
            name:'Java for beginners',
            year: '2023',
            technology:'Java',
            level: 'Beginner',
        },
        {
            img:'',
            name:'Springboot for beginners',
            year: '2024',
            technology:'Springboot',
            level: 'Beginner',
        },
        {
            img:'',
            name:'Advanced Python ',
            year: '2020',
            technology:'Python',
            level: 'Advanced',
        },
        {
            img:'',
            name:'Python for beginners',
            year: '2024',
            technology:'Python',
            level: 'Beginner',
        },
        {
            img:'',
            name:'Java for beginners',
            year: '2023',
            technology:'Java',
            level: 'Beginner',
        },
        {
            img:'',
            name:'Springboot for beginners',
            year: '2024',
            technology:'Springboot',
            level: 'Beginner',
        },
        {
            img:'',
            name:'Advanced Python ',
            year: '2020',
            technology:'Python',
            level: 'Advanced',
        },
    ]
    return (
        <div className='w-screen'>
            <div className='sticky top-0 w-full flex flex-col items-center bg-white'>
                <div className='w-11/12 flex items-center justify-between'>
                    <h2 className='text-2xl text-black font-semibold'>Knowledge Sharing Platform</h2>
                    <img src={logo} alt='logo' className='w-2/12 max-w-[150px]'/>
                </div>
                <div className='mt-10 w-10/12 grid grid-cols-12 gap-2'>
                    <div className="relative col-span-5">
                        {/* Search Icon */}
                        <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"/>

                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="w-full py-2 px-12 border border-gray-300 rounded-md focus:outline-none
                        focus:ring-1 focus:ring-blue-500 focus:border-primary"
                        />
                    </div>
                    <div className='col-span-3'>
                        <DropDown
                            type='Technology'
                            options={technologies}
                            setValue={setTechnology}
                        />
                    </div>
                    <div className='col-span-3'>
                        <DropDown
                            type='Level'
                            options={levels}
                            setValue={setLevel}
                        />
                    </div>
                    <div className='col-span-1 flex items-center justify-end'>
                        <div
                            onClick={handleFilter}
                            className='w-1/2 h-full flex items-center justify-center bg-primary rounded-lg cursor-pointer'>
                            <FiFilter size={20} color='white'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-14 w-full flex justify-center'>
                <div className='w-10/12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {courses.map((course,index) => (
                        <Course key={index} course={course} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage
