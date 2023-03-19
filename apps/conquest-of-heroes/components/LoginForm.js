import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useFormik } from 'formik';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack spacing={4} align="flex-start">
        <FormControl>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </FormControl>
        {/* <Checkbox
                id="rememberMe"
                name="rememberMe"
                onChange={formik.handleChange}
                isChecked={formik.values.rememberMe}
                colorScheme="purple"
              >
                Remember me?
              </Checkbox> */}
        <Button type="submit" colorScheme="purple" width="full">
          Login
        </Button>
      </VStack>
    </form>
  );
};

export default LoginForm;