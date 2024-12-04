import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupSchema = Yup.object().shape({
  gymName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Gym name is required'),
  ownerName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Owner name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  address: Yup.string()
    .min(10, 'Address too short')
    .required('Address is required'),
  username: Yup.string()
    .min(4, 'Username too short')
    .max(20, 'Username too long')
    .required('Username is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  businessLicense: Yup.string()
    .required('Business license number is required'),
  openingHours: Yup.string()
    .required('Opening hours are required'),
  emergencyContact: Yup.string()
    .required('Emergency contact is required')
});

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Here you would typically make an API call to register the gym owner
      console.log('Form values:', values);
      toast.success('Registration successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Register Your Gym
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please fill in all the required information to set up your gym dashboard
          </p>
        </div>

        <Formik
          initialValues={{
            gymName: '',
            ownerName: '',
            email: '',
            phone: '',
            address: '',
            username: '',
            password: '',
            confirmPassword: '',
            businessLicense: '',
            openingHours: '',
            emergencyContact: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Gym Information */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Gym Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="gymName" className="block text-sm font-medium text-gray-700">
                        Gym Name
                      </label>
                      <Field
                        name="gymName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        type="text"
                      />
                      {errors.gymName && touched.gymName && (
                        <div className="text-red-500 text-sm mt-1">{errors.gymName}</div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Gym Address
                      </label>
                      <Field
                        name="address"
                        as="textarea"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        rows="3"
                      />
                      {errors.address && touched.address && (
                        <div className="text-red-500 text-sm mt-1">{errors.address}</div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="businessLicense" className="block text-sm font-medium text-gray-700">
                        Business License Number
                      </label>
                      <Field
                        name="businessLicense"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        type="text"
                      />
                      {errors.businessLicense && touched.businessLicense && (
                        <div className="text-red-500 text-sm mt-1">{errors.businessLicense}</div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="openingHours" className="block text-sm font-medium text-gray-700">
                        Opening Hours
                      </label>
                      <Field
                        name="openingHours"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        type="text"
                        placeholder="e.g., Mon-Fri: 6AM-10PM"
                      />
                      {errors.openingHours && touched.openingHours && (
                        <div className="text-red-500 text-sm mt-1">{errors.openingHours}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Owner Information */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Owner Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
                        Owner Name
                      </label>
                      <Field
                        name="ownerName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        type="text"
                      />
                      {errors.ownerName && touched.ownerName && (
                        <div className="text-red-500 text-sm mt-1">{errors.ownerName}</div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <Field
                        name="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        type="email"
                      />
                      {errors.email && touched.email && (
                        <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Field
                        name="phone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        type="tel"
                      />
                      {errors.phone && touched.phone && (
                        <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">
                        Emergency Contact
                      </label>
                      <Field
                        name="emergencyContact"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        type="tel"
                      />
                      {errors.emergencyContact && touched.emergencyContact && (
                        <div className="text-red-500 text-sm mt-1">{errors.emergencyContact}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Information */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Account Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <Field
                      name="username"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      type="text"
                    />
                    {errors.username && touched.username && (
                      <div className="text-red-500 text-sm mt-1">{errors.username}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <Field
                      name="password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      type="password"
                    />
                    {errors.password && touched.password && (
                      <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <Field
                      name="confirmPassword"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      type="password"
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <Link
                  to="/"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Already have an account? Sign in
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {isSubmitting ? 'Registering...' : 'Register'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default SignupForm;