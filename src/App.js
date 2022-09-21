import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
//import {Informacao} from "./components/informacao";
//import {Plantas} from "./components/corpo";

function App() {

  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )

}

export default App;
