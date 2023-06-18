import {React,useState} from 'react'
import {useNavigate} from 'react-router'
import axios from 'axios'

function AddEmployeeForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);

  //   const toggleModal = () => {
  //     setIsOpen(isOpen);
  //   };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8000/api/v1/employee/register', {
        firstName,
        lastName,
        email,
        nationalId,
        salary,
      });
  
      console.log(response); // Handle successful signup
  
      // Reset form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setNationalId('');
      setSalary('');
      setError('');
  
      navigate('/dashboard'); // Redirect to the login page
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log(error.response.data); // Server error response data
        console.log(error.response.status); // Server error status code
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request); // Request object
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message); // Error message
      }
      setError(error.message);
    }
  };
  
  return (
    
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="px-6 py-6 md:px-8">
      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
          Register Your Employees
      </h3>
    {error && <div className="error">{error}</div>}    
    <div className="mb-6">
      <label htmlFor='firstname' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      First Name
      </label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="e.g: Marvin"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor='text' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Last Name
      </label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="e.g: Karera"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Email Address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="e.g: name@gmail.com"
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor='nationalId' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      National Id
       </label>
      <input
        type="text"
        name="nationalId"
        id="nationalId"
        value={nationalId}
        onChange={(e) => setNationalId(e.target.value)}
        placeholder="*************"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor='salary' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Salary
       </label>
      <input
        type="text"
        name="salary"
        id="salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="eg: 5 million"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    
    <button
      // onClick={toggleModal}
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </div>
  </form>
  )
}

export default AddEmployeeForm